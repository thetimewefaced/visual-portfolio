export type MediaItem = {
  src?: string;
  alt: string;
  label?: string;
  description?: string;
  aspect?: "wide" | "portrait" | "square" | "landscape" | "narrow";
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
  coverFit?: "contain";
  showDetailCover?: boolean;
  description?: string;
  role?: string;
  tools: string[];
  gallery: MediaItem[];
  galleryTitle?: string;
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
    year: "2026",
    category: "Game Art / Visual Novel / UI Design",
    tags: ["Game Art", "Visual Novel", "UI Design", "Art Direction"],
    coverImage: "/assets/herman-hero.jpg",
    coverAlt: "《赫尔曼的七日冒险》游戏主视觉，角色围绕持剑主角展开",
    description:
      "赫尔曼是个戏剧演员。他很在意自己的身高，也一直记得已经离世的未婚妻安。这是我为这部视觉小说做的角色、场景和游戏界面。",
    role: "视觉设定、游戏美术、角色与场景设计、界面视觉与交互设计。",
    tools: ["Procreate", "Figma", "Ren'Py", "Godot"],
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
    ],
    videos: [{ title: "四种世界 UI 演示", url: "/videos/herman-four-worlds.mp4" }],
    process: [
      "我给赫尔曼设计了一个踮脚的小动作。他介意自己的身高，踮一下脚，就像下意识地想让自己看起来高一点。衣服参考了戏剧演员的穿着，给他配了白衬衫和深色马甲。画脸时，我特意把颧骨画得突出一些，脸颊和眼窝画得更深，让他看起来瘦弱。",
      "画表情时，我先定下他平静时的样子，再改眉毛、眼睛和嘴。害怕的时候，他睁大眼睛，把嘴抿紧。反胃的时候，我让他抬手捂住嘴，这个动作比只改嘴形更容易看懂。",
      "画安的时候，我想的是赫尔曼会怎样记得她。金发、浅色裙子、荷叶边和腰间的缎带，让她看起来像他记忆里那个明媚的女孩。她笑得很轻，我想留住一点初恋的感觉。",
      "草原的三张图用了同一片草坡和银河。一张是晴夜，一张加了斜雨，还有一张能透过船身看到后面的星空。画剧场时，我用红帷幕把舞台框出来，中间留一大块深蓝，方便放立绘。",
    ],
    featuredSize: "hero",
  },
  {
    id: "02",
    slug: "quiet-hours",
    title: "Quiet Hours",
    subtitle: "沉浸式专注体验",
    year: "2026",
    category: "Interactive Web / Creative Coding",
    tags: ["Interactive Web", "Creative Coding", "Visual Experience"],
    coverImage: "/assets/quiet-hours.png",
    coverAlt: "Quiet Hours 雪山木屋沉浸式专注场景",
    description: "一个可以换场景的专注计时网页。可以在雪山木屋里待一会儿，也可以换到下雨的阁楼。平时画面里只有场景和计时，移动鼠标才会看到按钮。",
    role: "视觉设计、场景体验、网页交互与前端实现。",
    tools: ["Cursor", "ChatGPT"],
    gallery: [
      { src: "/assets/quiet-hours.png", alt: "Quiet Hours 雪山木屋场景", label: "雪山木屋", aspect: "wide" },
      { src: "/assets/quiet-hours/forest-glasshouse.jpg", alt: "雨中的玻璃屋，暖色灯光照亮沙发和书桌", label: "雨中玻璃屋 · 录屏画面", aspect: "landscape" },
      { src: "/assets/quiet-hours/neon-city.jpg", alt: "深色卧室外的霓虹城市，青色计时融入夜景", label: "霓虹夜城 · 录屏画面", aspect: "landscape" },
      { src: "/assets/quiet-hours/forest-window.jpg", alt: "卧室窗外的雨夜树林与浅绿色计时", label: "林间窗景 · 录屏画面", aspect: "landscape" },
      { src: "/assets/quiet-hours/rainy-attic.jpg", alt: "雨滴落在阁楼的斜窗上，床边亮着烛光", label: "雨夜阁楼 · 录屏画面", aspect: "landscape" },
    ],
    videos: [{ title: "环境动效与交互演示", url: "/videos/quiet-hours-demo.mp4" }],
    process: [
      "我想让计时看起来像房间里本来就有的东西，所以每个场景都单独调了数字的颜色和位置。比如霓虹夜城用偏青的数字，雨夜阁楼里的数字更接近旁边的烛光。",
      "需要操作时，动一下鼠标就能看到按钮。右上角是全屏，左下角是场景音量，底部中间可以设置专注人物，右下角可以看专注记录。",
      "我把切换场景的按钮放在画面左右两边。想换个地方时，往左或往右点一下就行。停下来继续专注时，按钮会退回去。",
    ],
    featuredSize: "wide",
  },
  {
    id: "03",
    slug: "visual-identity",
    title: "Visual Identity & Graphic Design",
    subtitle: "视觉识别与平面设计",
    year: "2026",
    category: "Brand Identity / Graphic Design",
    tags: ["Identity", "Editorial", "Graphic Design"],
    coverImage: "/assets/album-cover.png",
    coverAlt: "蓝花工坊《最后七日之旅》专辑封面设计",
    coverFit: "contain",
    description: "这里收录了《最后七日之旅》的专辑封面、三个标志和一张翻译大赛海报。",
    role: "视觉概念、版式、图形与成品设计。",
    tools: ["Canva 可画", "Adobe Photoshop"],
    galleryTitle: "标志与海报",
    gallery: [
      {
        src: "/assets/graphic-design/blue-flower-logo.png",
        alt: "蓝花工坊标志，蓝色花瓣线条围绕中央四角星",
        label: "蓝花工坊 · 标志",
        description: "我用几圈蓝色线条画出花瓣，把一颗小星星放在花心。",
        aspect: "square",
      },
      {
        src: "/assets/sirius-logo.jpg",
        alt: "天狼星工作室标志设计",
        label: "天狼星工作室 · 标志",
        description: "天狼星是夜空中最亮的恒星，也是一个双星系统。我把主星 A 画大一些，伴星 B 画小一些，给两颗星都加了蓝绿色的光晕。",
        aspect: "square",
      },
      { src: "/assets/graphic-design/history-museum-logo.png", alt: "辛亥革命博物馆线上浏览服务平台标志", label: "指尖上的历史 · 标志", aspect: "square" },
      { src: "/assets/graphic-design/translation-contest-poster.jpg", alt: "第六届外语文化节翻译大赛海报", label: "翻译大赛 · 海报", aspect: "portrait" },
    ],
    videos: [],
    process: [],
    featuredSize: "portrait",
  },
  {
    id: "04",
    slug: "motion-video",
    title: "Motion & Video",
    subtitle: "动态视觉与影像",
    year: "2026",
    category: "Motion Design / Video Editing",
    tags: [],
    coverImage: "/assets/motion/xiaohongshu-cover.jpg",
    coverAlt: "小红书短片封面，展示角色眼部特写和设计示意",
    showDetailCover: false,
    tools: ["剪映"],
    galleryTitle: "作品数据截图",
    gallery: [
      { src: "/assets/motion/xiaohongshu-stats.jpg", alt: "小红书短片的浏览与互动数据截图", label: "小红书 · 作品数据", aspect: "narrow" },
      { src: "/assets/motion/douyin-stats-1.jpg", alt: "抖音作品列表与播放数据截图一", label: "抖音 · 作品数据一", aspect: "narrow" },
      { src: "/assets/motion/douyin-stats-2.jpg", alt: "抖音作品列表与播放数据截图二", label: "抖音 · 作品数据二", aspect: "narrow" },
    ],
    videos: [{
      title: "小红书短片",
      url: "/videos/xiaohongshu-edit.mp4",
      poster: "/assets/motion/xiaohongshu-cover.jpg",
      note: "频闪提示：视频包含闪烁画面。",
    }],
    process: [],
    featuredSize: "standard",
  },
  {
    id: "05",
    slug: "ai-assisted-workflow",
    title: "AI-Assisted Art Workflow",
    subtitle: "生成式工作流探索",
    year: "2026",
    category: "Generative AI / ComfyUI",
    tags: [],
    coverImage: "/assets/ai-workflow/comfyui-workflow.png",
    coverAlt: "ComfyUI 生图节点流程",
    coverFit: "contain",
    showDetailCover: false,
    description: "我用这套流程快速生成美术素材，也可以拿同一个想法试几种画风。如果只想改一处，就用局部重绘调整选中的区域，保留画面的其他部分。",
    tools: ["ComfyUI"],
    galleryTitle: "ComfyUI 生图流程",
    gallery: [
      { src: "/assets/ai-workflow/comfyui-workflow.png", alt: "ComfyUI 中由多个节点连接而成的生图流程截图", label: "生图节点流程图", aspect: "wide" },
    ],
    videos: [],
    process: [],
    featuredSize: "wide",
  },
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
