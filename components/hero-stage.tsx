export function HeroStage() {
  return (
    <section id="home" className="hero section-shell">
      <div className="hero-aura" aria-hidden="true" />
      <div className="availability reveal"><span /> Available for full-stack, mobile & AI-focused roles</div>
      <h1 className="reveal delay-1">Full-Stack Developer<br /><span>Building Useful Systems.</span></h1>
      <p className="hero-copy reveal delay-2">I&apos;m Joshua Shalim—a Doha-based software developer building responsive web products, mobile applications, backend integrations, and carefully supervised AI workflows.</p>
      <div className="hero-actions reveal delay-3">
        <a className="button button-primary" href="#work">View selected work <span>↘</span></a>
        <a className="button button-secondary" href="#ai-lab">Explore the AI lab <span>→</span></a>
      </div>
      <div className="proof-strip reveal delay-4">
        <div><i>◉</i><span><b>4+ years</b> across product layers</span></div>
        <div><i>⌘</i><span><b>Web + mobile</b> React ecosystem</span></div>
        <div><i>△</i><span><b>Production systems</b> APIs & deployment</span></div>
        <div><i>✦</i><span><b>AI-assisted</b> context-led workflow</span></div>
      </div>
    </section>
  );
}
