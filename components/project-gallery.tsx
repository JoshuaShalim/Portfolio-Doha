import { projects } from "@/lib/portfolio-data";

const visibleProjects = projects.slice(0, 7);

export function ProjectGallery() {
  return (
    <div className="project-showcase">
      {visibleProjects.map((project, index) => (
        <article className="project-panel reveal" key={project.title}>
          <div className="project-panel-top"><span>{String(index + 1).padStart(2, "0")}</span><small>{project.category}</small></div>
          <div className="project-panel-heading">
            <div><span>{project.eyebrow}</span><h3>{project.title}</h3></div>
            <div className="project-links">{project.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label} ↗</a>)}</div>
          </div>
          <div className="project-panel-body">
            <div><span>What it is</span><p>{project.summary}</p></div>
            <div><span>My contribution</span><p>{project.contribution}</p></div>
          </div>
          <div className="project-panel-tech">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
        </article>
      ))}
    </div>
  );
}
