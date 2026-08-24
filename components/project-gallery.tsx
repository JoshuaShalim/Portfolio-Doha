"use client";

import { useState } from "react";
import { projects } from "@/lib/portfolio-data";

const filters = ["All", "AI-assisted", "Web", "Mobile", "Systems"] as const;

export function ProjectGallery() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible = filter === "All" ? projects : projects.filter((project) => project.category === filter);

  return (
    <>
      <div className="project-filters" aria-label="Filter projects">
        {filters.map((item) => <button key={item} className={filter === item ? "active" : ""} onClick={() => setFilter(item)}>{item}</button>)}
      </div>
      <div className="project-grid">
        {visible.map((project, index) => (
          <article className={`project-card ${project.featured ? "featured" : ""}`} key={project.title}>
            <div className="project-number">{String(index + 1).padStart(2, "0")}</div>
            <span className="project-eyebrow">{project.eyebrow}</span>
            <h3>{project.title}</h3>
            <p className="project-summary">{project.summary}</p>
            <div className="project-contribution"><span>My contribution</span><p>{project.contribution}</p></div>
            <div className="project-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
            <div className="project-links">{project.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label} ↗</a>)}</div>
          </article>
        ))}
      </div>
    </>
  );
}
