export type MediaItem = {
  src?: string;
  alt: string;
  label?: string;
  aspect?: "wide" | "portrait" | "square";
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  category: string;
  tags: string[];
  coverImage?: string;
  coverAlt: string;
  description: string;
  role: string;
  tools: string[];
  gallery: MediaItem[];
  videos: { title: string; url?: string }[];
  process: string[];
  featuredSize: "hero" | "wide" | "portrait" | "standard";
};

export const projects: Project[] = [
  {
    id: "01",
    slug: "hermans-seven-days-adventure",
    title: "Herman's Seven Days Adventure",
    subtitle: "《赫尔曼的七日冒险》",
    year: "2024",
    category: "Game Art / Visual Novel / UI Design",
    tags: ["Game Art", "Visual Novel", "UI Design", "Art Direction"],
    coverImage: "/assets/herman-hero.jpg",
    coverAlt: "《赫尔曼的七日冒险》游戏主视觉，角色围绕持剑主角展开",
    description:
      "一项围绕叙事、角色与世界观展开的视觉小说项目。现阶段页面以已上传的主视觉建立项目视觉基调，并为 CG、BG、角色立绘与四种世界 UI 预留清晰的扩展结构。",
    role: "视觉设定、游戏美术、角色与场景设计、界面视觉与交互设计。",
    tools: ["请补充实际使用工具", "Game UI", "Digital Painting"],
    gallery: [
      { src: "/assets/herman-hero.jpg", alt: "赫尔曼的七日冒险主视觉", label: "Key Visual", aspect: "wide" },
      { alt: "待替换：角色设计与立绘", label: "Character Design", aspect: "portrait" },
      { alt: "待替换：游戏 CG 画面", label: "Selected CG", aspect: "portrait" },
      { alt: "待替换：场景与背景设计", label: "Background Art", aspect: "wide" },
      { alt: "待替换：四世界界面设计", label: "Four Worlds UI", aspect: "wide" },
      { alt: "待替换：游戏主菜单交互", label: "Main Menu Interaction", aspect: "wide" },
    ],
    videos: [{ title: "待添加：游戏主菜单或交互演示视频" }],
    process: [
      "待补充：从叙事主题到视觉关键词的提炼过程。",
      "待补充：角色、场景与界面如何建立统一的世界观。",
      "待补充：交互原型的迭代与最终实现。",
    ],
    featuredSize: "hero",
  },
  {
    id: "02",
    slug: "quiet-hours",
    title: "Quiet Hours",
    subtitle: "沉浸式专注体验",
    year: "2025",
    category: "Interactive Web / Creative Coding",
    tags: ["Interactive Web", "Creative Coding", "Visual Experience"],
    coverImage: "/assets/quiet-hours.png",
    coverAlt: "Quiet Hours 雪山木屋沉浸式专注场景",
    description: "围绕四种环境场景构建的沉浸式专注网页，探索氛围视觉、环境动态与功能界面的融合。",
    role: "视觉设计、场景体验、网页交互与前端实现。",
    tools: ["请补充实际使用工具", "Web Interaction"],
    gallery: [
      { src: "/assets/quiet-hours.png", alt: "Quiet Hours 雪山木屋场景", label: "Winter Night Scene", aspect: "wide" },
      { alt: "待替换：其他环境场景", label: "Scene Variations", aspect: "wide" },
      { alt: "待替换：界面与交互细节", label: "Interaction Details", aspect: "square" },
    ],
    videos: [{ title: "待添加：环境动效与交互录屏" }],
    process: ["待补充：场景概念与氛围测试。", "待补充：动态效果与专注功能的整合。"],
    featuredSize: "wide",
  },
  {
    id: "03",
    slug: "visual-identity",
    title: "Visual Identity & Graphic Design",
    subtitle: "视觉识别与平面设计",
    year: "2023—25",
    category: "Brand Identity / Graphic Design",
    tags: ["Identity", "Editorial", "Graphic Design"],
    coverImage: "/assets/album-cover.png",
    coverAlt: "蓝花工坊《最后七日之旅》专辑封面设计",
    description: "收录标志、海报、游戏专辑封面与字体图形实验的视觉设计项目。",
    role: "视觉概念、版式、图形与成品设计。",
    tools: ["请补充实际使用工具"],
    gallery: [
      { src: "/assets/album-cover.png", alt: "《最后七日之旅》专辑封面", label: "Album Cover", aspect: "portrait" },
      { src: "/assets/sirius-logo.jpg", alt: "天狼星工作室标志设计", label: "Sirius Studio Identity", aspect: "square" },
      { alt: "待替换：海报或字体设计", label: "Posters & Type", aspect: "portrait" },
    ],
    videos: [],
    process: ["待补充：概念关键词、草图与版式推演。"],
    featuredSize: "portrait",
  },
  {
    id: "04",
    slug: "motion-video",
    title: "Motion & Video",
    subtitle: "动态视觉与影像",
    year: "2024—25",
    category: "Motion Design / Video Editing",
    tags: ["Motion", "Editing", "Video"],
    coverAlt: "待替换：动态视觉或视频封面",
    description: "剪辑、动态视觉与视频内容创作的项目集合。",
    role: "待补充实际职责。",
    tools: ["待补充实际使用工具"],
    gallery: [
      { alt: "待替换：动态视觉关键帧", label: "Motion Frames", aspect: "wide" },
      { alt: "待替换：视频剪辑画面", label: "Editing Selection", aspect: "wide" },
    ],
    videos: [{ title: "待添加：视频作品（由用户自主播放）" }],
    process: ["待补充：脚本、分镜与动态测试。"],
    featuredSize: "standard",
  },
  {
    id: "05",
    slug: "ai-assisted-workflow",
    title: "AI-Assisted Art Workflow",
    subtitle: "生成式工作流探索",
    year: "2025",
    category: "Generative AI / ComfyUI",
    tags: ["ComfyUI", "Inpainting", "Workflow Research"],
    coverAlt: "待替换：ComfyUI 工作流截图",
    description: "对节点式生成工作流、遮罩、局部重绘与风格控制的技术探索记录，不替代原创作品本身。",
    role: "工作流测试、参数记录与视觉结果比较。",
    tools: ["ComfyUI", "请补充实际模型与工具"],
    gallery: [
      { alt: "待替换：ComfyUI 节点工作流", label: "Node Workflow", aspect: "wide" },
      { alt: "待替换：遮罩与局部重绘对比", label: "Inpainting Study", aspect: "wide" },
    ],
    videos: [],
    process: ["待补充：目标、节点结构、测试变量与观察结论。"],
    featuredSize: "wide",
  },
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
