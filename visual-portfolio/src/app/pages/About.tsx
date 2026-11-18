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
          <p className="about-lede">我是一名专注于游戏美术、视觉设计与交互体验的创意设计师。</p>
          <p>请在这里补充你的个人背景、设计理念、当前所在地与求职方向。保持真实、简洁，让招聘者快速理解你的方法与优势。</p>
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
          <a href="mailto:yourname@example.com">yourname@example.com <ArrowUpRight size={20} /></a>
          <p>请替换为你的真实邮箱与所在地。</p>
          <Link to="/resume">View résumé</Link>
        </div>
      </section>
    </div>
  );
}
