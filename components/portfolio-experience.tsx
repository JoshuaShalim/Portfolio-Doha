"use client";

import { useEffect, useState } from "react";
import { HeroStage } from "./hero-stage";
import { ProjectGallery } from "./project-gallery";
import { EvidenceAssistant } from "./evidence-assistant";
import { experience, skills } from "@/lib/portfolio-data";

const navItems = [["about", "About"], ["ai-lab", "AI Lab"], ["work", "Work"], ["experience", "Experience"], ["contact", "Contact"]] as const;

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
            <h2>Developer breadth.<br /><span>Product ownership.</span></h2>
            <p>I work where interface quality, application logic, data, and operations meet. That means I can understand a user-facing issue, follow it through an API and database, and ship a verified fix—not just hand it to the next person.</p>
          </div>
          <div className="about-grid">
            <article className="about-card reveal"><span>01</span><h3>Build end to end</h3><p>React and Next.js interfaces, React Native apps, Node/Express APIs, SQL and NoSQL data, authentication, integrations, and deployments.</p></article>
            <article className="about-card reveal delay-1"><span>02</span><h3>Think operationally</h3><p>My software-support background shaped a practical approach to error states, real data, user impact, documentation, and production reliability.</p></article>
            <article className="about-card reveal delay-2"><span>03</span><h3>Use AI deliberately</h3><p>I direct AI tools with focused context, review their work, test the complete path, and keep human responsibility for technical decisions.</p></article>
          </div>
          <div className="number-grid reveal">
            <div><b>4+</b><span>Years in software<br />and product operations</span></div>
            <div><b>3</b><span>Primary product layers:<br />web, mobile, backend</span></div>
            <div><b>1</b><span>Published Android<br />team contribution</span></div>
            <div><b>80%</b><span>Approx. load-performance<br />improvement at Shispare</span></div>
          </div>
        </section>

        <section id="ai-lab" className="section-shell section-block ai-lab-section">
          <div className="section-label reveal">AI Engineering Project</div>
          <div className="section-heading reveal">
            <h2>Portfolio AI Assistant.<br /><span>A practical RAG demonstration.</span></h2>
            <p>Recruiters can ask questions about my work. The system first finds the most relevant verified project records, checks the evidence, and then produces a grounded answer with source links.</p>
          </div>
          <div className="lab-grid">
            <div className="lab-case reveal">
              <div className="case-top"><span>Live portfolio project</span><i>AI system 01</i></div>
              <h3>What does it do?</h3>
              <p>Instead of letting an AI invent an answer, this assistant searches a small knowledge base containing my verified projects and experience. Only the relevant records are supplied as context for the final answer.</p>
              <ul>
                <li><b>1. Understand</b><span>Identifies whether the question concerns AI, backend, mobile, or general experience.</span></li>
                <li><b>2. Retrieve</b><span>Converts the question into a vector and ranks the closest evidence.</span></li>
                <li><b>3. Verify</b><span>Keeps supported records and preserves their source links.</span></li>
                <li><b>4. Answer</b><span>Uses only the approved context rather than unsupported assumptions.</span></li>
              </ul>
              <div className="lab-tags"><span>Gemini API</span><span>Embeddings</span><span>Vector retrieval</span><span>RAG</span><span>Agent orchestration</span><span>Next.js</span></div>
              <a className="source-link" href="https://github.com/JoshuaShalim/Portfolio-Doha/tree/main/app/api/assistant" target="_blank" rel="noreferrer">Inspect the source code ↗</a>
            </div>
            <EvidenceAssistant />
          </div>
          <div className="honesty-note reveal"><span>Current live mode</span><p>The assistant uses Gemini embeddings and grounded generation when available, with a transparent local retrieval fallback. The execution trace always shows which mode actually ran.</p></div>
        </section>

        <section id="work" className="section-shell section-block work-section">
          <div className="section-label reveal">Selected Work</div>
          <div className="section-heading reveal"><h2>Systems with<br /><span>verifiable evidence.</span></h2><p>Every case separates what the product does from what I personally contributed. Links go to live products, published apps, or inspectable repositories.</p></div>
          <ProjectGallery />
        </section>

        <section className="section-shell section-block stack-section">
          <div className="section-label reveal">Technical Stack</div>
          <div className="section-heading compact reveal"><h2>Tools selected<br /><span>for the problem.</span></h2></div>
          <div className="stack-groups reveal">
            <div><h3>Frontend</h3>{skills.filter((skill) => ["JavaScript","TypeScript","React","Next.js"].includes(skill)).map((skill) => <span key={skill}>{skill}</span>)}</div>
            <div><h3>Mobile</h3>{["React Native","Android Studio","Firebase","Native APIs"].map((skill) => <span key={skill}>{skill}</span>)}</div>
            <div><h3>Backend & data</h3>{skills.filter((skill) => ["Node.js","Express","REST APIs","PostgreSQL","MySQL","MongoDB","Supabase"].includes(skill)).map((skill) => <span key={skill}>{skill}</span>)}</div>
            <div><h3>AI workflow</h3>{["Gemini API","RAG lab","Embeddings","Cursor","GitHub Copilot","Context engineering"].map((skill) => <span key={skill}>{skill}</span>)}</div>
            <div><h3>Infrastructure</h3>{["Git","Linux","VPS deployment","PM2","Vercel","Shopify CLI"].map((skill) => <span key={skill}>{skill}</span>)}</div>
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
            <div><span className="section-label">Contact</span><h2>Let&apos;s build something<br /><em>useful and reliable.</em></h2><p>Based in Doha with a valid QID. Available after a 30-day notice period.</p></div>
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
      <footer className="site-footer section-shell"><a className="brand" href="#home"><span>J</span><b>Joshua Shalim</b></a><p>Full-stack · Mobile · AI-assisted engineering</p><p>© 2026 Joshua Shalim</p></footer>
    </>
  );
}
