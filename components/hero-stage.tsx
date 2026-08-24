export function HeroStage() {
  return (
    <section id="overview" className="hero">
      <div className="hero-grid" aria-hidden="true" />
      <div className="orb orb-a" aria-hidden="true" /><div className="orb orb-b" aria-hidden="true" />
      <div className="hero-copy">
        <span className="kicker">Full-stack · Mobile · AI-assisted engineering</span>
        <h1>Building systems<br />that move from<br /><em>idea to impact.</em></h1>
        <div className="hero-foot">
          <p>I&apos;m Joshua Shalim, a Doha-based developer connecting thoughtful interfaces, dependable APIs, mobile products, automation, and supervised AI workflows.</p>
          <a href="#systems">Explore the work <span>↓</span></a>
        </div>
      </div>
      <div className="system-map" aria-label="A visual map of Joshua's product engineering practice">
        <span className="map-line line-a" /><span className="map-line line-b" /><span className="map-line line-c" />
        <div className="map-core"><b>JS</b><span>Orchestrate<br />& verify</span></div>
        <div className="map-node node-a"><i>01</i><b>Interface</b><span>React / Mobile</span></div>
        <div className="map-node node-b"><i>02</i><b>Logic</b><span>Node / APIs</span></div>
        <div className="map-node node-c"><i>03</i><b>Data</b><span>SQL / NoSQL</span></div>
        <div className="map-node node-d"><i>04</i><b>AI layer</b><span>Context / Tools</span></div>
      </div>
      <div className="hero-stamp"><span>04+</span> years across product layers</div>
    </section>
  );
}
