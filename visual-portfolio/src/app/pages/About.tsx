import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { Reveal } from "../components/Reveal";

export function About() {
  return (
    <div className="about page-shell">
      <header className="about-hero">
        <p className="eyebrow">About / 关于</p>
        <h1>Designing images,<br />interfaces & <em>atmospheres.</em></h1>
      </header>
      <section className="about-intro">
        <p className="about-index">01 / Profile</p>
        <Reveal>
          <p className="about-lede">我是张晓茹，一名专注于游戏美术、视觉设计与交互体验的创意设计师。</p>
          <p>我关注画面和交互如何共同营造氛围。从视觉小说的角色与场景，到专注网页的灯光和控件，我会用具体的视觉细节和操作节奏来表达体验。</p>
        </Reveal>
      </section>
      <section className="capabilities">
        <p className="about-index">02 / Capabilities</p>
        <div>
          {["Game Art & Visual Development", "Game UI & Interaction", "Visual Identity & Editorial", "Motion & Video", "Creative Coding", "AI-Assisted Workflow"].map((item, index) => (
            <Reveal key={item} className="capability-row"><span>0{index + 1}</span><h2>{item}</h2></Reveal>
          ))}
        </div>
      </section>
      <section className="about-contact" id="contact">
        <p className="about-index">03 / Contact</p>
        <div>
          <h2>Open to internships<br />& collaborations.</h2>
          <a href="mailto:djdjdjdjdjdj2003@outlook.com"><span>djdjdjdjdjdj2003@outlook.com</span><ArrowUpRight size={18} aria-hidden="true" /></a>
          <a href="tel:15271173774"><span>152 7117 3774</span><ArrowUpRight size={18} aria-hidden="true" /></a>
          <Link to="/resume">View résumé</Link>
        </div>
      </section>
    </div>
  );
}
