import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import type { Project } from "../../data/projects";
import { Placeholder } from "./Placeholder";
import { Reveal } from "./Reveal";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Reveal className={`project-card project-card--${project.featuredSize}`}>
      <Link to={`/work/${project.slug}`} aria-label={`查看项目：${project.title}`}>
        <div className="project-card__media">
          {project.coverImage ? <img src={project.coverImage} alt={project.coverAlt} /> : <Placeholder item={{ alt: project.coverAlt, label: "Replace with project cover", aspect: "wide" }} />}
          <div className="project-card__overlay"><span>View project</span><ArrowUpRight size={18} /></div>
        </div>
        <div className="project-card__meta">
          <span className="project-number">{project.id}</span>
          <div>
            <h3>{project.title}</h3>
            <p>{project.category}</p>
          </div>
          <span>{project.year}</span>
        </div>
      </Link>
    </Reveal>
  );
}
