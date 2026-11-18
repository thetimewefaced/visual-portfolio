export type MediaItem = {
  src?: string;
  alt: string;
  label?: string;
  aspect?: "wide" | "portrait" | "square" | "landscape";
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
  videos: { title: string; url?: string; poster?: string; note?: string }[];
  process: string[];
  featuredSize: "hero" | "wide" | "portrait" | "standard";
};

const hermanArtwork = import.meta.glob<string>(
  "../assets/herman/*.{png,jpg,jpeg,webp}",
  { eager: true, query: "?url", import: "default" },
);

function hermanImage(name: string) {
  const entry = Object.keys(hermanArtwork).find((path) => path.replace(/\.[^.]+$/, "") === `../assets/herman/${name}`);
  return entry ? hermanArtwork[entry] : undefined;
}

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
      "以戏剧演员赫尔曼为主角的视觉小说。从他站上舞台的姿态，到记忆里安的形象，再到同一片星空草原的三种变化，角色和场景共同承担叙事。",
    role: "视觉设定、游戏美术、角色与场景设计、界面视觉与交互设计。",
    tools: ["请补充实际使用工具", "Game UI", "Digital Painting"],
    gallery: [
      { src: "/assets/herman-hero.jpg", alt: "赫尔曼的七日冒险主视觉", label: "Key Visual", aspect: "wide" },
      { src: hermanImage("herman"), alt: "赫尔曼的全身立绘，白衬衫搭配深棕马甲", label: "赫尔曼 · 角色立绘", aspect: "portrait" },
      { src: hermanImage("ann"), alt: "安的全身立绘，金色长发、浅色连衣裙和蓝灰色腰带", label: "安 · 角色立绘", aspect: "portrait" },
      { src: hermanImage("herman-expressions"), alt: "赫尔曼的五种表情，平静、悲伤或感动、愤怒、反胃和恐惧", label: "赫尔曼 · 表情拆分", aspect: "wide" },
      { src: hermanImage("meadow-clear"), alt: "银河斜过星空，蓝绿色草坡上开着浅紫色花", label: "星空草原 CG · 晴夜", aspect: "wide" },
      { src: hermanImage("meadow-rain"), alt: "斜雨落在银河下的草原", label: "星空草原 CG · 雨夜", aspect: "wide" },
      { src: hermanImage("meadow-boat"), alt: "半透明的木船浮现在星空草原上", label: "星空草原 CG · 船影", aspect: "wide" },
      { src: hermanImage("theater"), alt: "红色帷幕围住深蓝色的空舞台", label: "剧场背景", aspect: "wide" },
      { src: hermanImage("four-worlds-ui"), alt: "《赫尔曼的七日冒险》的四世界游戏界面设计", label: "四世界界面设计", aspect: "wide" },
      { src: hermanImage("blue-flower-logo"), alt: "蓝花工坊标志，蓝色花瓣线条围绕中央四角星", label: "蓝花工坊 · 标志", aspect: "square" },
      { src: "/assets/sirius-logo.jpg", alt: "天狼星工作室标志", label: "天狼星 · 标志", aspect: "square" },
    ],
    videos: [{ title: "四种世界 UI 演示", url: "/videos/herman-four-worlds.mp4" }],
    process: [
      "赫尔曼敏感而脆弱，对自己的身高缺乏自信。我用一个细小的踮脚动作表现他想让自己看起来更高的念头，让不安先从身体姿态里流露出来。服装参考戏剧演员的穿着，白衬衫和深色马甲勾勒出瘦弱的轮廓。高颧骨、凹陷的脸颊与深眼窝则把这份清瘦延续到面部。",
      "表情拆分以平静为基准，通过眉眼和嘴形区分悲伤或感动、愤怒、反胃与恐惧。反胃时加入掩口动作，让情绪既能从五官读出，也能从动作辨认。",
      "安是赫尔曼已故的未婚妻。我用金发、浅色连衣裙、荷叶边和束腰缎带保留她的少女感，再以温柔的神情表现记忆中明媚、亲切的初恋印象。",
      "三张星空草原 CG 保留同一片草坡和斜贯画面的银河，通过晴夜、斜雨和浮现的船影改变同一地点的气氛。剧场背景以红色帷幕围合深蓝色舞台，把中央的留白交给角色和演出。",
      "天狼星是夜空中最亮的恒星。标志用一大一小的星形对应天狼星 A 与伴星 B，让双星关系一眼可见。蓝绿色光晕把两颗星连在同一片光里。",
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
    description: "以五个室内场景构成的沉浸式专注网页。计时融入场景，静止时按钮隐去，移动鼠标即可唤出控件，让专注时的画面保持安静。",
    role: "视觉设计、场景体验、网页交互与前端实现。",
    tools: ["请补充实际使用工具", "Web Interaction"],
    gallery: [
      { src: "/assets/quiet-hours.png", alt: "Quiet Hours 雪山木屋场景", label: "雪山木屋", aspect: "wide" },
      { src: "/assets/quiet-hours/forest-glasshouse.jpg", alt: "雨中的玻璃屋，暖色灯光照亮沙发和书桌", label: "雨中玻璃屋 · 录屏画面", aspect: "landscape" },
      { src: "/assets/quiet-hours/neon-city.jpg", alt: "深色卧室外的霓虹城市，青色计时融入夜景", label: "霓虹夜城 · 录屏画面", aspect: "landscape" },
      { src: "/assets/quiet-hours/forest-window.jpg", alt: "卧室窗外的雨夜树林与浅绿色计时", label: "林间窗景 · 录屏画面", aspect: "landscape" },
      { src: "/assets/quiet-hours/rainy-attic.jpg", alt: "雨滴落在阁楼的斜窗上，床边亮着烛光", label: "雨夜阁楼 · 录屏画面", aspect: "landscape" },
    ],
    videos: [{ title: "环境动效与交互演示", url: "/videos/quiet-hours-demo.mp4" }],
    process: [
      "我把计时放进场景里，让数字的颜色和位置随环境变化。雪山木屋的暖光、玻璃屋外的风雨、霓虹夜城、林间的窗和烛光阁楼，给用户提供五种进入专注的氛围。",
      "静止时，界面不常驻按钮。鼠标移动后控件才出现，右上角可进入全屏，左下角调节场景音量，底部中央设置专注人物，右下角查看专注记录。",
      "场景切换放在画面左右两边，用户可以沿着阅读方向在不同空间之间移动。其余控件也靠边布置，把画面中心留给场景和计时。",
    ],
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
    coverImage: "/assets/motion/xiaohongshu-cover.jpg",
    coverAlt: "小红书短片封面，展示角色眼部特写和设计示意",
    description: "剪辑、动态视觉与视频内容创作的项目集合。",
    role: "待补充实际职责。",
    tools: ["待补充实际使用工具"],
    gallery: [
      { alt: "待替换：动态视觉关键帧", label: "Motion Frames", aspect: "wide" },
      { alt: "待替换：视频剪辑画面", label: "Editing Selection", aspect: "wide" },
    ],
    videos: [{
      title: "小红书短片",
      url: "/videos/xiaohongshu-edit.mp4",
      poster: "/assets/motion/xiaohongshu-cover.jpg",
      note: "频闪提示：视频包含闪烁画面。",
    }],
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
