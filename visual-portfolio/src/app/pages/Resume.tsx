import { Download } from "lucide-react";

export function Resume() {
  return (
    <div className="resume page-shell">
      <header className="resume-header">
        <p className="eyebrow">Résumé / Curriculum Vitae</p>
        <h1>张晓茹</h1>
        <p>Visual Designer / Game Artist / Creative Technologist</p>
      </header>
      <div className="resume-actions">
        <a href="/resume/zhang-xiaoru.pdf" target="_blank" rel="noopener noreferrer">查看简历 PDF</a>
        <a className="resume-download" href="/resume/zhang-xiaoru.pdf" download="张晓茹简历.pdf">
          <Download size={17} /> 下载简历 PDF
        </a>
      </div>
    </div>
  );
}
