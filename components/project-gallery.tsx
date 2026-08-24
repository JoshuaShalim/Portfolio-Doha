"use client";

import { useState } from "react";
import { projects } from "@/lib/portfolio-data";

const visibleProjects = projects.slice(0, 7);

export function ProjectGallery() {
  const [expanded, setExpanded] = useState<string | null>(visibleProjects[0]?.title ?? null);

  return (
    <div className="case-list">
      {visibleProjects.map((project, index) => {
        const isOpen = expanded === project.title;
        return (
          <article className={`case-card reveal ${isOpen ? "open" : ""}`} key={project.title}>
            <button className="case-summary" onClick={() => setExpanded(isOpen ? null : project.title)} aria-expanded={isOpen}>
              <span className="case-index">{String(index + 1).padStart(2, "0")}</span>
              <div><small>{project.eyebrow}</small><h3>{project.title}</h3></div>
              <span className="case-category">{project.category}</span>
              <i>{isOpen ? "−" : "+"}</i>
            </button>
            <div className="case-details" aria-hidden={!isOpen}>
              <div className="case-description"><span>Product</span><p>{project.summary}</p></div>
              <div className="case-description"><span>My contribution</span><p>{project.contribution}</p></div>
              <div className="case-tech">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
              <div className="case-links">{project.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label} <span>↗</span></a>)}</div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
