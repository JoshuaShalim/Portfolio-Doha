import { evidence } from "@/lib/portfolio-data";

const VECTOR_SIZE = 256;
let documentVectorCache: Promise<number[][]> | null = null;

function normalize(vector: number[]) {
  const magnitude = Math.sqrt(vector.reduce((sum, value) => sum + value * value, 0)) || 1;
  return vector.map((value) => value / magnitude);
}

function localEmbedding(text: string) {
  const vector = new Array<number>(VECTOR_SIZE).fill(0);
  const tokens = text.toLowerCase().match(/[a-z0-9+#.-]+/g) ?? [];
  tokens.forEach((token) => {
    let hash = 2166136261;
    for (let index = 0; index < token.length; index += 1) hash = Math.imul(hash ^ token.charCodeAt(index), 16777619);
    vector[Math.abs(hash) % VECTOR_SIZE] += 1;
  });
  return normalize(vector);
}

function findVector(value: unknown): number[] | null {
  if (Array.isArray(value) && value.length > 4 && value.every((item) => typeof item === "number")) return value as number[];
  if (!value || typeof value !== "object") return null;
  for (const child of Object.values(value as Record<string, unknown>)) {
    const result = findVector(child);
    if (result) return result;
  }
  return null;
}

async function geminiEmbedding(text: string, kind: "query" | "document", apiKey: string) {
  const prefix = kind === "query" ? "task: question answering | query:" : "title: portfolio evidence | text:";
  const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-embedding-2:embedContent", {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-goog-api-key": apiKey },
    body: JSON.stringify({ model: "models/gemini-embedding-2", content: { parts: [{ text: `${prefix} ${text}` }] } }),
    signal: AbortSignal.timeout(10000)
  });
  if (!response.ok) throw new Error("Embedding provider unavailable");
  const vector = findVector(await response.json());
  if (!vector) throw new Error("Embedding response was invalid");
  return normalize(vector);
}

function cosine(left: number[], right: number[]) {
  const length = Math.min(left.length, right.length);
  let dot = 0;
  for (let index = 0; index < length; index += 1) dot += left[index] * right[index];
  return dot;
}

function planAgent(question: string) {
  const lowered = question.toLowerCase();
  const intent = lowered.includes("mobile") || lowered.includes("android") ? "mobile delivery" : lowered.includes("backend") || lowered.includes("node") || lowered.includes("api") ? "backend systems" : lowered.includes("ai") || lowered.includes("rag") ? "AI-assisted engineering" : "general portfolio evidence";
  return { intent, retrievalQuery: `${intent}: ${question}` };
}

async function retrievalAgent(query: string, apiKey?: string) {
  let provider = "local hash vectors";
  let queryVector: number[];
  let documentVectors: number[][];
  if (apiKey) {
    try {
      documentVectorCache ??= Promise.all(evidence.map((item) => geminiEmbedding(`${item.title}. ${item.body}`, "document", apiKey)));
      [queryVector, documentVectors] = await Promise.all([geminiEmbedding(query, "query", apiKey), documentVectorCache]);
      provider = "Gemini Embedding 2";
    } catch {
      documentVectorCache = null;
      queryVector = localEmbedding(query);
      documentVectors = evidence.map((item) => localEmbedding(`${item.title}. ${item.body} ${item.tags.join(" ")}`));
    }
  } else {
    queryVector = localEmbedding(query);
    documentVectors = evidence.map((item) => localEmbedding(`${item.title}. ${item.body} ${item.tags.join(" ")}`));
  }
  const matches = evidence.map((item, index) => ({ item, score: cosine(queryVector, documentVectors[index]) })).sort((a, b) => b.score - a.score).slice(0, 3);
  return { matches, provider };
}

function verificationAgent(matches: Awaited<ReturnType<typeof retrievalAgent>>["matches"]) {
  const approved = matches.filter((match) => Number.isFinite(match.score));
  return approved.length ? approved : matches.slice(0, 1);
}

function extractGeneratedText(value: unknown) {
  if (!value || typeof value !== "object") return "";
  const record = value as Record<string, unknown>;
  if (typeof record.output_text === "string") return record.output_text;
  const steps = Array.isArray(record.steps) ? record.steps : [];
  const stepText = steps.flatMap((step) => {
    if (!step || typeof step !== "object" || (step as { type?: unknown }).type !== "model_output") return [];
    const content = Array.isArray((step as { content?: unknown }).content) ? (step as { content: unknown[] }).content : [];
    return content.flatMap((item) => item && typeof item === "object" && typeof (item as { text?: unknown }).text === "string" ? [(item as { text: string }).text] : []);
  });
  if (stepText.length) return stepText.join(" ");
  const outputs = Array.isArray(record.outputs) ? record.outputs : [];
  return outputs.flatMap((item) => item && typeof item === "object" && typeof (item as { text?: unknown }).text === "string" ? [(item as { text: string }).text] : []).join(" ");
}

async function answerAgent(question: string, matches: ReturnType<typeof verificationAgent>, apiKey?: string) {
  const fallback = matches.map(({ item }) => item.body).join(" ");
  if (!apiKey) return { answer: fallback, generated: false };
  const context = matches.map(({ item }, index) => `[${index + 1}] ${item.title}\n${item.body}\nSource: ${item.url}`).join("\n\n");
  try {
    const response = await fetch("https://generativelanguage.googleapis.com/v1/interactions", {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-goog-api-key": apiKey },
      body: JSON.stringify({
        model: "gemini-3.5-flash-lite",
        system_instruction: "You are the answer agent in a portfolio RAG pipeline. Answer only from approved evidence. Be concise, attribute team contributions precisely, and never invent ownership, metrics, or experience.",
        input: `Question: ${question}\n\nApproved evidence:\n${context}`,
        generation_config: { max_output_tokens: 260 }
      }),
      signal: AbortSignal.timeout(12000)
    });
    if (!response.ok) throw new Error("Generation provider unavailable");
    const generated = extractGeneratedText(await response.json()).trim();
    return { answer: generated || fallback, generated: Boolean(generated) };
  } catch { return { answer: fallback, generated: false }; }
}

export async function runPortfolioAgents(question: string, apiKey?: string) {
  const plan = planAgent(question);
  const retrieval = await retrievalAgent(plan.retrievalQuery, apiKey);
  const approved = verificationAgent(retrieval.matches);
  const output = await answerAgent(question, approved, apiKey);
  const semantic = retrieval.provider === "Gemini Embedding 2";
  return {
    answer: output.answer,
    ragActive: output.generated,
    mode: output.generated ? `${retrieval.provider} + Gemini RAG` : `${retrieval.provider} · retrieval fallback`,
    sources: approved.map(({ item, score }) => ({ title: item.title, url: item.url, score: Math.max(0, Math.min(1, score)) })),
    trace: [
      { agent: "Planner agent", detail: `Mapped intent: ${plan.intent}`, status: "complete" as const },
      { agent: "Retrieval agent", detail: `Ranked ${evidence.length} evidence records with ${retrieval.provider}`, status: semantic ? "complete" as const : "fallback" as const },
      { agent: "Verification agent", detail: `Approved ${approved.length} source-grounded records`, status: "complete" as const },
      { agent: "Answer agent", detail: output.generated ? "Generated from the approved context only" : "Returned extractive evidence because generation was unavailable", status: output.generated ? "complete" as const : "fallback" as const }
    ]
  };
}
