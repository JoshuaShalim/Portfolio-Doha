"use client";

import { useEffect, useState } from "react";

const stages = [
  { title: "Frame", text: "Clarify the user, constraints, success criteria, and evidence required." },
  { title: "Context", text: "Give the tool only the relevant files, architecture, examples, and boundaries." },
  { title: "Compose", text: "Break the objective into focused implementation tasks and direct the right tool." },
  { title: "Inspect", text: "Review code, behavior, errors, security concerns, and unintended changes." },
  { title: "Verify", text: "Test the complete path—from interface to API, data, deployment, and user outcome." }
];

export function WorkflowLab() {
  const [active, setActive] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const timer = window.setInterval(() => setActive((current) => {
      if (current >= stages.length - 1) {
        window.clearInterval(timer);
        setRunning(false);
        return current;
      }
      return current + 1;
    }), 850);
    return () => window.clearInterval(timer);
  }, [running]);

  const run = () => { setActive(0); setRunning(true); };

  return (
    <div className="workflow-lab">
      <div className="workflow-console">
        <div className="console-bar"><span /><span /><span /><b>supervised-workflow.js</b></div>
        <div className="console-body">
          <span className="console-comment">// Current stage</span>
          <strong><i>{String(active + 1).padStart(2, "0")}</i> {stages[active].title}</strong>
          <p>{stages[active].text}</p>
          <div className="console-status"><i className={running ? "pulse" : ""} />{running ? "Workflow in progress…" : active === stages.length - 1 ? "Verified outcome" : "Human review required"}</div>
        </div>
        <button onClick={run} disabled={running}>{running ? "Running…" : "Run the workflow"} <span>→</span></button>
      </div>
      <ol className="workflow-stages">
        {stages.map((stage, index) => (
          <li key={stage.title} className={active === index ? "active" : index < active ? "done" : ""}>
            <button onClick={() => { setRunning(false); setActive(index); }}>
              <span>{String(index + 1).padStart(2, "0")}</span><b>{stage.title}</b><i>{index < active ? "✓" : "↗"}</i>
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
