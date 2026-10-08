"use client";

import { useEffect, useState } from "react";
import { HeroStage } from "./hero-stage";
import { ProjectGallery } from "./project-gallery";
import { EvidenceAssistant } from "./evidence-assistant";
import { achievements, experience, skills } from "@/lib/portfolio-data";

const navItems = [["work", "Work"], ["achievements", "Achievements"], ["skills", "Skills"], ["ai-lab", "Evidence Demo"], ["experience", "Experience"], ["contact", "Contact"]] as const;

export function PortfolioExperience() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText("joshuashalim15@gmail.com");
      setEmailCopied(true);
      window.setTimeout(() => setEmailCopied(false), 1800);
    } catch {
      window.location.href = "mailto:joshuashalim15@gmail.com";
    }
  }

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add("visible"); });
    }, { threshold: .12, rootMargin: "0px 0px -40px" });
    nodes.forEach((node) => observer.observe(node));
    const onPointer = (event: PointerEvent) => {
      document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", onPointer, { passive: true });
    return () => { observer.disconnect(); window.removeEventListener("pointermove", onPointer); };
  }, []);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home"><span>J</span><b>Joshua Shalim</b></a>
        <nav className={menuOpen ? "open" : ""} aria-label="Main navigation">
          {navItems.map(([href, label]) => <a key={href} href={`#${href}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </nav>
        <a className="header-cta" href="#contact">Let&apos;s talk <span>↓</span></a>
        <button className="menu-button" onClick={() => setMenuOpen((value) => !value)} aria-expanded={menuOpen} aria-label="Toggle navigation"><span /><span /></button>
      </header>

      <main>
        <HeroStage />

        <section id="about" className="section-shell section-block about-section">
          <div className="section-label reveal">About</div>
          <div className="section-heading reveal">
            <h2>Support mindset.<br /><span>Builder capability.</span></h2>
            <p>I combine patient troubleshooting with practical development experience. I can help a user, investigate the underlying workflow, document the issue clearly, and build or integrate a lasting solution when needed.</p>
          </div>
          <div className="about-grid">
            <article className="about-card reveal"><span>01</span><h3>Troubleshoot clearly</h3><p>I reproduce issues, isolate likely causes, communicate with users, document findings, and verify that a fix works in the real workflow.</p></article>
            <article className="about-card reveal delay-1"><span>02</span><h3>Build end to end</h3><p>React and Next.js interfaces, React Native apps, Node/Express APIs, databases, authentication, integrations, and deployments.</p></article>
            <article className="about-card reveal delay-2"><span>03</span><h3>Keep learning</h3><p>I am extending my software background through structured study of PC hardware, networking, operating systems, security, and remote support.</p></article>
          </div>
          <div className="number-grid reveal">
            <div><b>4+</b><span>Years in software<br />and product operations</span></div>
            <div><b>3</b><span>Product layers:<br />web, mobile, backend</span></div>
            <div><b>1</b><span>Published Android<br />team contribution</span></div>
            <div><b>4</b><span>Cisco credentials<br />verified on Credly</span></div>
          </div>
        </section>

        <section id="ai-lab" className="section-shell section-block ai-lab-section">
          <div className="section-label reveal">Learning Prototype</div>
          <div className="section-heading reveal">
            <h2>Portfolio evidence assistant.<br /><span>Small, useful and transparent.</span></h2>
            <p>This is a learning demo—not a production AI platform. It searches a fixed set of portfolio records, shows the evidence it selected, and can use Gemini for embeddings and answer generation when configured.</p>
          </div>
          <div className="lab-grid">
            <div className="lab-case reveal">
              <div className="case-top"><span>Portfolio learning project</span><i>Prototype 01</i></div>
              <h3>How it works</h3>
              <p>The assistant searches a small, hand-maintained collection of project and experience records. It is intentionally narrow so every answer can point back to visible evidence.</p>
              <ul>
                <li><b>1. Classify</b><span>Maps the question to a broad portfolio topic.</span></li>
                <li><b>2. Retrieve</b><span>Ranks the fixed evidence records using Gemini embeddings or a local text-vector fallback.</span></li>
                <li><b>3. Filter</b><span>Keeps the strongest matches and preserves their links.</span></li>
                <li><b>4. Respond</b><span>Generates a short answer when Gemini is available, otherwise returns evidence directly.</span></li>
              </ul>
              <div className="lab-tags"><span>Next.js</span><span>Gemini API</span><span>Embeddings</span><span>Similarity ranking</span><span>Fallback mode</span></div>
              <a className="source-link" href="https://github.com/JoshuaShalim/Portfolio-Doha/tree/main/app/api/assistant" target="_blank" rel="noreferrer">Inspect the source code ↗</a>
            </div>
            <EvidenceAssistant />
          </div>
          <div className="honesty-note reveal"><span>Scope note</span><p>The “steps” shown here are ordinary application functions, not independent autonomous agents. The evidence set is small and stored in this repository. The interface reports whether Gemini or the local fallback actually ran.</p></div>
        </section>

        <section id="work" className="section-shell section-block work-section">
          <div className="section-label reveal">Selected Work</div>
          <div className="section-heading reveal"><h2>Systems with<br /><span>verifiable evidence.</span></h2><p>Every case separates what the product does from what I personally contributed. Links go to live products, published apps, or inspectable repositories.</p></div>
          <ProjectGallery />
        </section>

        <section id="achievements" className="section-shell section-block achievements-section">
          <div className="section-label reveal">Credentials & Training</div>
          <div className="section-heading reveal"><h2>Professional learning.<br /><span>Verified progress.</span></h2><p>Cisco Networking Academy credentials verified through Credly, alongside structured preparation for both CompTIA A+ exams.</p></div>
          <div className="achievement-grid">
            {achievements.map((item, index) => <article className="achievement-card reveal" key={item.title}><div><span>{String(index + 1).padStart(2,"0")}</span><time>{item.date}</time></div><small>{item.status}</small><h3>{item.title}</h3><b>{item.issuer}</b><p>{item.detail}</p>{item.url ? <a className="credential-link" href={item.url} target="_blank" rel="noreferrer">Verify on Credly ↗</a> : null}</article>)}
          </div>
        </section>

        <section id="skills" className="section-shell section-block stack-section">
          <div className="section-label reveal">Technical Stack</div>
          <div className="section-heading compact reveal"><h2>Tools selected<br /><span>for the problem.</span></h2></div>
          <div className="stack-groups reveal">
            <div><h3>Frontend</h3>{skills.filter((skill) => ["JavaScript","TypeScript","React","Next.js"].includes(skill)).map((skill) => <span key={skill}>{skill}</span>)}</div>
            <div><h3>Mobile</h3>{["React Native","Android Studio","Firebase","Native APIs"].map((skill) => <span key={skill}>{skill}</span>)}</div>
            <div><h3>Backend & data</h3>{skills.filter((skill) => ["Node.js","Express","REST APIs","PostgreSQL","MySQL","MongoDB","Supabase"].includes(skill)).map((skill) => <span key={skill}>{skill}</span>)}</div>
            <div><h3>Commerce & integrations</h3>{["Shopify","Shopify GraphQL","Webhooks","REST APIs","Shopify CLI"].map((skill) => <span key={skill}>{skill}</span>)}</div>
            <div><h3>IT support</h3>{["Hardware troubleshooting","Remote support","Networking fundamentals","Windows"].map((skill) => <span key={skill}>{skill}</span>)}</div>
            <div><h3>Infrastructure</h3>{["Git","Linux","VPS deployment","PM2","Vercel"].map((skill) => <span key={skill}>{skill}</span>)}</div>
          </div>
        </section>

        <section id="experience" className="section-shell section-block experience-section">
          <div className="section-label reveal">Experience</div>
          <div className="section-heading compact reveal"><h2>Built through<br /><span>real responsibility.</span></h2></div>
          <div className="experience-list">
            {experience.map((item, index) => <article className="reveal" key={`${item.role}-${item.period}`}><span>{String(index + 1).padStart(2,"0")}</span><div><h3>{item.role}</h3><b>{item.company}</b></div><time>{item.period}</time><p>{item.detail}</p></article>)}
          </div>
        </section>

        <section id="contact" className="section-shell section-block contact-section">
          <div className="contact-card reveal">
            <div><span className="section-label">Contact</span><h2>Let&apos;s build something<br /><em>useful and reliable.</em></h2></div>
            <div className="contact-actions">
              <span className="contact-email">joshuashalim15@gmail.com</span>
              <button className="button button-primary" onClick={copyEmail}>{emailCopied ? "Email copied ✓" : "Copy email"}</button>
              <a href="mailto:joshuashalim15@gmail.com">Open email app ↗</a>
              <a href="https://wa.me/97466757040" target="_blank" rel="noreferrer">WhatsApp ↗</a>
              <a href="https://www.linkedin.com/in/joshua-shalim/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/JoshuaShalim" target="_blank" rel="noreferrer">GitHub ↗</a>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer section-shell"><a className="brand" href="#home"><span>J</span><b>Joshua Shalim</b></a><p>IT support · Systems · Full-stack development</p><p>© 2026 Joshua Shalim</p></footer>
    </>
  );
}
