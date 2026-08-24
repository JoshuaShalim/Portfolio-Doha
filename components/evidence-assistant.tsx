"use client";

import { FormEvent, useState } from "react";

type Trace = { agent: string; detail: string; status: "complete" | "fallback" };
type AssistantResult = { answer: string; mode: string; ragActive: boolean; sources: { title: string; url: string; score?: number }[]; trace: Trace[] };
const suggestions = ["What proves Joshua's interest in Agentic AI?", "What Node.js systems has he built?", "Summarize his mobile experience."];

export function EvidenceAssistant() {
  const [question, setQuestion] = useState(suggestions[0]);
  const [result, setResult] = useState<AssistantResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function ask(event?: FormEvent) {
    event?.preventDefault();
    if (!question.trim() || loading) return;
    setLoading(true); setError(""); setResult(null);
    try {
      const response = await fetch("/api/assistant", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ question }) });
      if (!response.ok) throw new Error("The lab could not complete this run.");
      setResult(await response.json());
    } catch (caught) { setError(caught instanceof Error ? caught.message : "Something went wrong."); }
    finally { setLoading(false); }
  }

  return (
    <div className="lab-console reveal delay-1">
      <div className="lab-console-head"><div><span /><span /><span /></div><b>Portfolio AI Assistant / live</b><i>● online</i></div>
      <div className="lab-console-body">
        {!result && !loading && <div className="lab-intro"><span>✦</span><h3>Ask about my work</h3><p>The assistant searches verified portfolio evidence and shows every step it used.</p></div>}
        {loading && <div className="lab-running"><span /><span /><span /><p>Orchestrating agents…</p></div>}
        {error ? <p className="lab-error">{error}</p> : null}
        {result ? <div className="lab-result">
          <div className={`mode-pill ${result.ragActive ? "active" : "fallback"}`}><i /> {result.mode}</div>
          <div className="agent-trace">{result.trace.map((step, index) => <div key={`${step.agent}-${index}`}><span>{String(index + 1).padStart(2,"0")}</span><b>{step.agent}</b><p>{step.detail}</p><i>{step.status === "complete" ? "✓" : "~"}</i></div>)}</div>
          <div className="generated-answer"><span>Grounded answer</span><p>{result.answer}</p></div>
          <div className="result-sources"><span>Sources</span>{result.sources.map((source) => <a key={source.url} href={source.url} target="_blank" rel="noreferrer">{source.title}{typeof source.score === "number" ? ` · similarity ${Math.round(source.score * 100)}%` : ""} ↗</a>)}</div>
        </div> : null}
      </div>
      <div className="query-suggestions">{suggestions.map((item) => <button key={item} onClick={() => setQuestion(item)}>{item}</button>)}</div>
      <form className="lab-form" onSubmit={ask}><label htmlFor="lab-question">Ask about Joshua&apos;s verified work</label><input id="lab-question" value={question} onChange={(event) => setQuestion(event.target.value)} maxLength={500} /><button disabled={loading || !question.trim()} aria-label="Run portfolio AI assistant">↑</button></form>
    </div>
  );
}
