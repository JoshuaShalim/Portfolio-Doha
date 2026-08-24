"use client";

import { FormEvent, useState } from "react";

type AssistantResult = { answer: string; mode: string; sources: { title: string; url: string }[] };
const prompts = ["How has Joshua used AI in development?", "What backend systems has he built?", "Does he have published mobile experience?"];

export function EvidenceAssistant() {
  const [question, setQuestion] = useState(prompts[0]);
  const [result, setResult] = useState<AssistantResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function ask(event?: FormEvent) {
    event?.preventDefault();
    if (!question.trim() || loading) return;
    setLoading(true); setError("");
    try {
      const response = await fetch("/api/assistant", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ question }) });
      if (!response.ok) throw new Error("The assistant could not answer right now.");
      setResult(await response.json());
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Something went wrong.");
    } finally { setLoading(false); }
  }

  return (
    <div className="assistant-shell">
      <div className="assistant-sidebar">
        <span>Try an evidence question</span>
        {prompts.map((prompt) => <button key={prompt} onClick={() => { setQuestion(prompt); setResult(null); }}>{prompt}<i>↗</i></button>)}
        <div className="assistant-note"><i /> Grounded only in curated portfolio evidence. No private code or client data is sent.</div>
      </div>
      <div className="assistant-main">
        <div className="assistant-header"><span className="assistant-avatar">JS</span><div><b>Portfolio evidence assistant</b><span>Source-grounded · transparent mode</span></div><i /></div>
        <div className="assistant-answer" aria-live="polite">
          {!result && !loading && <div className="assistant-empty"><span>✦</span><p>Ask about Joshua&apos;s AI workflow, full-stack systems, integrations, or mobile experience.</p></div>}
          {loading && <div className="assistant-loading"><span /><span /><span /> Retrieving relevant evidence…</div>}
          {error && <p className="assistant-error">{error}</p>}
          {result && <>
            <span className="answer-mode">Mode: {result.mode}</span>
            <p>{result.answer}</p>
            <div className="answer-sources"><span>Supporting evidence</span>{result.sources.map((source) => <a key={source.url} href={source.url} target="_blank" rel="noreferrer">{source.title} ↗</a>)}</div>
          </>}
        </div>
        <form onSubmit={ask} className="assistant-form">
          <label htmlFor="portfolio-question">Ask a question</label>
          <input id="portfolio-question" value={question} onChange={(event) => setQuestion(event.target.value)} maxLength={500} placeholder="What has Joshua built with Node.js?" />
          <button type="submit" disabled={loading || !question.trim()} aria-label="Submit question">↑</button>
        </form>
      </div>
    </div>
  );
}
