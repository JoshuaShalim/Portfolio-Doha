import { NextResponse } from "next/server";
import { runPortfolioAgents } from "@/lib/ai-orchestration";

export const runtime = "nodejs";

const requests = new Map<string, { count: number; reset: number }>();

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "anonymous";
  const now = Date.now();
  const current = requests.get(ip);
  if (current && current.reset > now && current.count >= 12) return NextResponse.json({ error: "Please wait before running the lab again." }, { status: 429 });
  requests.set(ip, !current || current.reset <= now ? { count: 1, reset: now + 60_000 } : { ...current, count: current.count + 1 });

  let payload: unknown;
  try { payload = await request.json(); } catch { return NextResponse.json({ error: "Invalid request." }, { status: 400 }); }
  const question = typeof payload === "object" && payload && "question" in payload ? String((payload as { question: unknown }).question).trim() : "";
  if (!question || question.length > 500) return NextResponse.json({ error: "Ask a question between 1 and 500 characters." }, { status: 400 });

  const result = await runPortfolioAgents(question, process.env.GEMINI_API_KEY);
  return NextResponse.json(result, { headers: { "Cache-Control": "no-store" } });
}
