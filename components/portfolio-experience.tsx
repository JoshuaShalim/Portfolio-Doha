"use client";

import { useEffect, useState } from "react";
import { HeroStage } from "./hero-stage";
import { WorkflowLab } from "./workflow-lab";
import { ProjectGallery } from "./project-gallery";
import { EvidenceAssistant } from "./evidence-assistant";
import { experience, skills } from "@/lib/portfolio-data";

const chapters = [
  ["overview", "00", "Overview"],
  ["workflow", "01", "AI Workflow"],
  ["systems", "02", "Selected Systems"],
  ["experience", "03", "Experience"],
  ["assistant", "04", "Evidence Assistant"],
  ["contact", "05", "Contact"]
] as const;

export function PortfolioExperience() {
  const [active, setActive] = useState("overview");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: "-35% 0px -55% 0px" }
    );
    chapters.forEach(([id]) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { observer.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, []);

  return (
    <>
      <div className="progress" style={{ width: `${progress}%` }} aria-hidden="true" />
      <header className="topbar">
        <a className="wordmark" href="#overview" aria-label="Joshua Shalim, home">JS<span>®</span></a>
        <div className="topbar-status"><i /> Doha, Qatar · Open to opportunity</div>
        <a className="topbar-cta" href="mailto:joshuashalim15@gmail.com">Start a conversation ↗</a>
      </header>

      <nav className="chapter-rail" aria-label="Portfolio chapters">
        <span className="rail-label">Field notes / 2026</span>
        <div>
          {chapters.map(([id, number, label]) => (
            <a key={id} href={`#${id}`} className={active === id ? "active" : ""} aria-current={active === id ? "location" : undefined}>
              <span>{number}</span>{label}
            </a>
          ))}
        </div>
      </nav>

      <main>
        <HeroStage />

        <section id="workflow" className="chapter chapter-dark">
          <div className="chapter-heading">
            <span className="kicker">01 / Supervised AI engineering</span>
            <h2>I direct the system.<br /><em>I verify the result.</em></h2>
            <p>Since 2024, I have used AI development tools as an engineering layer: giving them focused context, dividing work into stages, checking errors, testing behavior, and retaining human responsibility for the output.</p>
          </div>
          <WorkflowLab />
        </section>

        <section id="systems" className="chapter chapter-light">
          <div className="chapter-heading split-heading">
            <div><span className="kicker">02 / Selected systems</span><h2>Built for the<br /><em>real world.</em></h2></div>
            <p>Products, integrations, and team contributions—presented with a clear account of my role, the underlying technology, and verifiable links.</p>
          </div>
          <ProjectGallery />
        </section>

        <section id="experience" className="chapter chapter-signal">
          <div className="chapter-heading split-heading">
            <div><span className="kicker">03 / Experience timeline</span><h2>Support instincts.<br /><em>Builder energy.</em></h2></div>
            <p>My background crosses product development, operations, support, databases, mobile delivery, and e-commerce—the useful overlap where end-to-end problems get solved.</p>
          </div>
          <div className="timeline">
            {experience.map((item, index) => (
              <article key={`${item.role}-${item.period}`}>
                <span className="timeline-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="timeline-period">{item.period}</span>
                <div><h3>{item.role}</h3><strong>{item.company}</strong></div>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
          <div className="skill-marquee" aria-label="Technical skills"><div>{[...skills, ...skills].map((skill, index) => <span key={`${skill}-${index}`}>{skill} <b>✦</b></span>)}</div></div>
        </section>

        <section id="assistant" className="chapter chapter-ink">
          <div className="chapter-heading split-heading">
            <div><span className="kicker">04 / Interactive evidence</span><h2>Ask the<br /><em>portfolio.</em></h2></div>
            <p>This assistant retrieves answers from a deliberately limited evidence set, links supporting sources, and states its operating mode. It is an honest AI-ready feature—not an inflated RAG claim.</p>
          </div>
          <EvidenceAssistant />
        </section>

        <section id="contact" className="chapter contact-stage">
          <span className="kicker">05 / Available in Doha</span>
          <p className="contact-prelude">Have a product, integration, or difficult workflow?</p>
          <a className="contact-link" href="mailto:joshuashalim15@gmail.com">Let&apos;s build it <span>↗</span></a>
          <div className="contact-grid">
            <div><span>Email</span><a href="mailto:joshuashalim15@gmail.com">joshuashalim15@gmail.com</a></div>
            <div><span>Phone</span><a href="tel:+97466757040">+974 6675 7040</a></div>
            <div><span>Profiles</span><a href="https://github.com/JoshuaShalim" target="_blank" rel="noreferrer">GitHub ↗</a> <a href="https://www.linkedin.com/in/joshua-shalim/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
            <div><span>Availability</span><p>Valid QID · 30-day notice</p></div>
          </div>
          <footer>Joshua Shalim © 2026 <span>Engineered with care, context, and verification.</span></footer>
        </section>
      </main>
    </>
  );
}
