import { useState } from "react";
import { Link, useParams } from "react-router";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import { getProject, projects } from "../../data/projects";
import { Lightbox } from "../components/Lightbox";
import { Placeholder } from "../components/Placeholder";
import { Reveal } from "../components/Reveal";

export function ProjectDetail() {
  const { slug = "" } = useParams();
  const project = getProject(slug);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  if (!project) {
    return <section className="not-found page-shell"><p className="eyebrow">404 / Project not found</p><h1>This project is still<br />taking shape.</h1><Link to="/">Return to work</Link></section>;
  }

  const index = projects.indexOf(project);
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="project-detail">
      <header className="project-intro page-shell">
        <div className="project-intro__label"><span>{project.id}</span><span>{project.year}</span></div>
        <h1>{project.title}</h1>
        <p className="project-subtitle">{project.subtitle}</p>
        <p className="project-category">{project.category}</p>
      </header>

      <button className="project-cover" onClick={() => project.coverImage && setLightbox({ src: project.coverImage, alt: project.coverAlt })} disabled={!project.coverImage} aria-label={project.coverImage ? "放大查看项目封面" : undefined}>
        {project.coverImage ? <img src={project.coverImage} alt={project.coverAlt} /> : <Placeholder item={{ alt: project.coverAlt, label: "Replace with project cover", aspect: "wide" }} />}
      </button>

      <section className="project-facts page-shell">
        <Reveal><p className="eyebrow">01 / Overview</p><p className="project-lede">{project.description}</p></Reveal>
        <Reveal className="facts-grid">
          <div><h2>My role</h2><p>{project.role}</p></div>
          <div><h2>Tools</h2><ul>{project.tools.map((tool) => <li key={tool}>{tool}</li>)}</ul></div>
          <div><h2>Disciplines</h2><ul>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul></div>
        </Reveal>
      </section>

      <section className="gallery-section page-shell">
        <div className="gallery-heading"><p className="eyebrow">02 / Selected works</p><p>Click images to view full screen</p></div>
        <div className="gallery-grid">
          {project.gallery.map((item, itemIndex) => (
            <Reveal className={`gallery-item gallery-item--${item.aspect ?? "wide"}`} key={`${item.label}-${itemIndex}`}>
              {item.src ? (
                <button onClick={() => setLightbox({ src: item.src!, alt: item.alt })} aria-label={`放大查看：${item.label}`}>
                  <img src={item.src} alt={item.alt} />
                </button>
              ) : <Placeholder item={item} />}
              <div className="gallery-caption"><span>{String(itemIndex + 1).padStart(2, "0")}</span><span>{item.label}</span></div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="process-section page-shell">
        <Reveal><p className="eyebrow">03 / Design process</p><h2>From intention<br />to visual language.</h2></Reveal>
        <div className="process-list">
          {project.process.map((step, stepIndex) => <Reveal key={step}><span>0{stepIndex + 1}</span><p>{step}</p></Reveal>)}
        </div>
      </section>

      {project.videos.length > 0 && (
        <section className="video-section page-shell">
          <p className="eyebrow">04 / Video & interaction</p>
          {project.videos.map((video) => (
            <div className="video-placeholder" key={video.title}>
              <Play size={26} strokeWidth={1.3} />
              <span>{video.title}</span>
              <small>Video placeholder / user-controlled playback</small>
            </div>
          ))}
        </section>
      )}

      <nav className="project-pagination" aria-label="项目切换">
        <Link to={`/work/${previous.slug}`}><ArrowLeft /><small>Previous</small><span>{previous.title}</span></Link>
        <Link to={`/work/${next.slug}`}><small>Next</small><span>{next.title}</span><ArrowRight /></Link>
      </nav>
      {lightbox && <Lightbox {...lightbox} onClose={() => setLightbox(null)} />}
    </article>
  );
}
