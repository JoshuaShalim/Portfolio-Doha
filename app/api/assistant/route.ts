import { NextResponse } from "next/server";
import { evidence } from "@/lib/portfolio-data";

export const runtime = "nodejs";

const stopWords = new Set(["the", "and", "for", "has", "have", "what", "how", "does", "with", "his", "about", "from", "into"]);

function tokenize(value: string) {
  return value.toLowerCase().match(/[a-z0-9+#.-]+/g)?.filter((word) => word.length > 2 && !stopWords.has(word)) ?? [];
}

function retrieve(question: string) {
  const query = new Set(tokenize(question));
  return evidence
    .map((item) => {
      const haystack = [...tokenize(`${item.title} ${item.body}`), ...item.tags];
      const score = haystack.reduce((total, token) => total + (query.has(token) ? 2 : [...query].some((word) => token.includes(word) || word.includes(token)) ? 1 : 0), 0);
      return { item, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(({ item }) => item);
}

function extractText(value: unknown): string[] {
  if (!value || typeof value !== "object") return [];
  if (Array.isArray(value)) return value.flatMap(extractText);
  const record = value as Record<string, unknown>;
  const direct = [record.text, record.output_text].filter((item): item is string => typeof item === "string");
  return [...direct, ...Object.entries(record).filter(([key]) => key !== "text" && key !== "output_text").flatMap(([, item]) => extractText(item))];
}

export async function POST(request: Request) {
  let payload: unknown;
  try { payload = await request.json(); } catch { return NextResponse.json({ error: "Invalid request." }, { status: 400 }); }
  const question = typeof payload === "object" && payload && "question" in payload ? String((payload as { question: unknown }).question).trim() : "";
  if (!question || question.length > 500) return NextResponse.json({ error: "Ask a question between 1 and 500 characters." }, { status: 400 });

  const matches = retrieve(question);
  const sources = matches.map(({ title, url }) => ({ title, url }));
  const fallback = matches.map((item) => item.body).join(" ");
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return NextResponse.json({ answer: fallback, mode: "curated retrieval", sources });

  try {
    const context = matches.map((item, index) => `[${index + 1}] ${item.title}\n${item.body}\nSource: ${item.url}`).join("\n\n");
    const response = await fetch("https://generativelanguage.googleapis.com/v1beta/interactions", {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-goog-api-key": apiKey },
      body: JSON.stringify({
        model: "gemini-3.7-flash",
        system_instruction: "Answer only from the supplied portfolio evidence. Be concise, factual, and explicit about team contributions. Never invent skills, ownership, or production AI experience.",
        input: `Question: ${question}\n\nPortfolio evidence:\n${context}`
      }),
      signal: AbortSignal.timeout(12000)
    });
    if (!response.ok) throw new Error("Provider request failed");
    const data: unknown = await response.json();
    const answer = [...new Set(extractText(data))].join(" ").trim();
    return NextResponse.json({ answer: answer || fallback, mode: answer ? "Gemini + curated retrieval" : "curated retrieval", sources });
  } catch {
    return NextResponse.json({ answer: fallback, mode: "curated retrieval (AI fallback)", sources });
  }
}
