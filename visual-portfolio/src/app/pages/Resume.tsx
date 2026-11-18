import { Download } from "lucide-react";

export function Resume() {
  return (
    <div className="resume page-shell">
      <header className="resume-header">
        <p className="eyebrow">Résumé / Curriculum Vitae</p>
        <h1>YOUR NAME</h1>
        <p>Visual Designer / Game Artist / Creative Technologist</p>
      </header>
      <div className="resume-actions">
        <p>这是一份可编辑的简历入口。上传真实 PDF 后，可将此按钮替换为下载链接。</p>
        <button onClick={() => window.print()}><Download size={17} /> Print / Save as PDF</button>
      </div>
      <div className="resume-grid">
        <section><p className="eyebrow">Profile</p><p>请补充一段简短、真实的职业概述。</p></section>
        <section><p className="eyebrow">Education</p><div className="resume-entry"><span>20XX—20XX</span><h2>学校 / 专业</h2><p>请补充真实教育经历。</p></div></section>
        <section><p className="eyebrow">Experience</p><div className="resume-entry"><span>20XX—Now</span><h2>经历或项目名称</h2><p>请补充真实职责与结果，不要使用未经验证的数字。</p></div></section>
        <section><p className="eyebrow">Skills</p><p>Game Art, UI Design, Visual Identity, Motion, Creative Coding — 请按真实情况编辑。</p></section>
      </div>
    </div>
  );
}
