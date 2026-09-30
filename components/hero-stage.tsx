export function HeroStage() {
  return (
    <section id="home" className="hero section-shell">
      <div className="hero-aura" aria-hidden="true" />
      <h1 className="reveal">Full-Stack Developer<br /><span>E-Commerce, Apps & Automation.</span></h1>
      <p className="hero-copy reveal delay-1">I&apos;m Joshua Shalim—a Doha-based developer building storefronts, web and mobile applications, Node.js integrations, dashboards, workflow automation, and grounded AI systems.</p>
      <div className="hero-actions reveal delay-2">
        <a className="button button-primary" href="#work">View selected work <span>↘</span></a>
        <a className="button button-secondary" href="#ai-lab">Explore the AI lab <span>→</span></a>
      </div>
      <div className="proof-strip reveal delay-3">
        <div><i>◉</i><span><b>4+ years</b> across product layers</span></div>
        <div><i>⌘</i><span><b>Shopify + React</b> commerce experiences</span></div>
        <div><i>△</i><span><b>Node.js systems</b> APIs, webhooks & deployment</span></div>
        <div><i>✦</i><span><b>AI-assisted</b> context-led workflow</span></div>
      </div>
    </section>
  );
}
