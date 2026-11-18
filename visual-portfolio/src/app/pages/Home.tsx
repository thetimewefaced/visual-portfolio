import { ProjectCard } from "../components/ProjectCard";
import { Reveal } from "../components/Reveal";
import { projects } from "../../data/projects";

export function Home() {
  return (
    <>
      <section className="hero page-shell">
        <div className="hero__index">
          <span>Portfolio / 2025</span>
        </div>
        <h1>VISUAL WORLDS,<br /><em>MADE WITH</em> INTENTION.</h1>
        <div className="hero__details">
          <p>Game Art / Visual Design / Interactive Experiences</p>
          <p lang="zh-CN">游戏美术、视觉设计与交互体验。</p>
        </div>
        <span className="hero__folio">01 — 05</span>
      </section>

      <section className="works page-shell" aria-labelledby="selected-works">
        <Reveal className="section-heading">
          <p className="eyebrow">Selected works</p>
          <h2 id="selected-works">A selection of visual<br />stories & systems.</h2>
          <p>精选项目 / 2023—2025</p>
        </Reveal>
        <div className="project-grid">
          {projects.map((project) => <ProjectCard project={project} key={project.id} />)}
        </div>
      </section>
    </>
  );
}
