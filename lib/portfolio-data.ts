export type Project = {
  title: string;
  eyebrow: string;
  summary: string;
  contribution: string;
  stack: string[];
  category: "AI-assisted" | "Web" | "Mobile" | "Systems";
  links: { label: string; href: string }[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "HRSG Online",
    eyebrow: "Team contribution at Shispare",
    summary: "A PostgreSQL-backed HR platform developed by a team with AI-assisted engineering as part of the product workflow.",
    contribution: "Built frontend screens, integrated REST APIs, worked with backend data flows, and prepared context documentation that helped AI tools make safer, more relevant changes.",
    stack: ["React", "REST APIs", "PostgreSQL", "Cursor", "Context engineering"],
    category: "AI-assisted",
    links: [{ label: "Visit product", href: "https://hrsgonline.com/" }],
    featured: true
  },
  {
    title: "Flow Finance",
    eyebrow: "End-to-end MERN application",
    summary: "A personal finance system with protected accounts, visual reporting, transaction management, and data export.",
    contribution: "Created the React frontend and Node/Express backend with JWT authentication, income and expense workflows, charts, category suggestions, profile uploads, and Excel export.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    category: "Web",
    links: [
      { label: "Live app", href: "https://myflowfinance.vercel.app/" },
      { label: "Frontend", href: "https://github.com/JoshuaShalim/expense-tracker" },
      { label: "Backend", href: "https://github.com/JoshuaShalim/expense-tracker-backend" }
    ],
    featured: true
  },
  {
    title: "FalconFlex × Shopify",
    eyebrow: "Private production integration",
    summary: "A delivery automation service for Asena Boutique connecting Shopify orders with FalconFlex logistics.",
    contribution: "Built Node/Express workflows for shipping rates, task creation, tracking, cancellations, order and fulfillment synchronization, webhooks, thermal receipts, and Linux VPS operation with PM2.",
    stack: ["Node.js", "Express", "REST APIs", "Shopify CLI", "Webhooks", "Linux VPS"],
    category: "Systems",
    links: [{ label: "Store", href: "https://asena-boutique.com/" }],
    featured: true
  },
  {
    title: "FlashLead",
    eyebrow: "Published Android team project",
    summary: "A React Native lead-capture mobile application available on Google Play.",
    contribution: "Contributed mobile screens and integrations involving Firebase, contacts, location, media, local storage, Google sign-in, and API-driven data.",
    stack: ["React Native", "Firebase", "Android Studio", "Native APIs"],
    category: "Mobile",
    links: [{ label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.directionnorth.flashlead&hl=en" }]
  },
  {
    title: "Omnix",
    eyebrow: "React Native authentication system",
    summary: "A mobile authentication foundation designed around Supabase sessions and protected navigation.",
    contribution: "Implemented email/password access, Google OAuth, password reset, deep linking, session restoration, protected screens, and logout behavior.",
    stack: ["React Native", "Supabase", "OAuth", "Deep links"],
    category: "Mobile",
    links: [{ label: "Repository", href: "https://github.com/JoshuaShalim/MyReactNativeProject" }]
  },
  {
    title: "Daily Devotion",
    eyebrow: "Mobile content experience",
    summary: "A React Native devotional application with remote content, archives, notes, and audio support.",
    contribution: "Developed mobile interface and content features with a focus on clear navigation and repeat use.",
    stack: ["React Native", "REST APIs", "Audio", "Local state"],
    category: "Mobile",
    links: [{ label: "Repository", href: "https://github.com/JoshuaShalim/DailyDevotion" }]
  },
  {
    title: "HeavenFlow Services",
    eyebrow: "Healthcare operations website",
    summary: "A responsive service website with an interactive multi-step revenue assessment and clear public-facing workflows.",
    contribution: "Designed and launched service pages, contact flows, privacy and accessibility guidance, input validation, and the assessment journey.",
    stack: ["Responsive UI", "JavaScript", "Forms", "UX"],
    category: "Web",
    links: [{ label: "Live site", href: "https://heavenflowservices.com/" }]
  },
  {
    title: "Real-time Drone & Tank Detection",
    eyebrow: "Computer vision experiment",
    summary: "A Python and YOLOv5 project for real-time object detection research and learning.",
    contribution: "Worked with model inference and computer-vision tooling to detect target object classes from visual input.",
    stack: ["Python", "YOLOv5", "Computer vision"],
    category: "AI-assisted",
    links: [{ label: "Repository", href: "https://github.com/JoshuaShalim/Real_Time_Drone-Tank_Detection_System_Using_Python_yolov5" }]
  }
];

export const experience = [
  { period: "Apr 2026 — Present", role: "IT & E-commerce Specialist", company: "Al Norah Trading & Services", detail: "Application support, integrations, platform configuration, product data, performance, and e-commerce operations." },
  { period: "Aug 2025 — Jan 2026", role: "AI-Driven Software Developer", company: "Shispare", detail: "Frontend delivery, API integration, testing, performance work, and context-rich AI-assisted development for web products." },
  { period: "Jan 2024 — Jul 2025", role: "Software Support & Operations Associate", company: "Al Norah Trading & Services", detail: "Debugged workflows, reproduced issues, tested fixes, supported users, and maintained MySQL/PostgreSQL data processes." },
  { period: "Apr 2023 — Dec 2023", role: "WordPress Developer", company: "Medflow", detail: "Built and maintained responsive business websites and content workflows." },
  { period: "Jan 2022 — Feb 2023", role: "Mobile App Developer", company: "Codlers / FlashLead", detail: "Contributed to React Native features and Android delivery for a published mobile product." }
];

export const skills = [
  "JavaScript", "TypeScript", "React", "Next.js", "React Native", "Node.js", "Express", "REST APIs", "PostgreSQL", "MySQL", "MongoDB", "Supabase", "Shopify", "Git", "Linux", "VPS deployment", "Cursor", "GitHub Copilot", "Prompt engineering", "Context engineering"
];

export const evidence = [
  {
    id: "ai-workflow",
    title: "AI-assisted engineering workflow",
    body: "Joshua has used Cursor, GitHub Copilot, Kilo Code, and ChatGPT since 2024 to plan work, prepare context, generate and revise code, inspect errors, test behavior, and verify deployment. He supervises and validates the output rather than presenting the tools as autonomous production agents.",
    url: "https://github.com/JoshuaShalim",
    tags: ["ai", "agentic", "cursor", "copilot", "orchestration", "prompt", "context"]
  },
  {
    id: "hrsg",
    title: "HRSG Online contribution",
    body: "At Shispare, Joshua contributed frontend screens, REST API integrations, PostgreSQL-backed workflows, and context documentation for HRSG Online. This was collaborative team work and is evidence of AI-assisted product development, not a claim that he independently built the platform or a production RAG pipeline.",
    url: "https://hrsgonline.com/",
    tags: ["hrsg", "react", "postgresql", "rest", "team", "context"]
  },
  {
    id: "flow-finance",
    title: "Flow Finance MERN stack",
    body: "Joshua built a MERN finance application with a React interface, Node and Express API, MongoDB persistence, JWT authentication, transaction workflows, charts, profile uploads, and Excel export.",
    url: "https://myflowfinance.vercel.app/",
    tags: ["mern", "react", "node", "express", "mongodb", "jwt", "finance"]
  },
  {
    id: "falconflex",
    title: "FalconFlex delivery automation",
    body: "Joshua developed a private Node and Express integration connecting Shopify with FalconFlex for rates, delivery tasks, tracking, cancellations, webhooks, fulfillment synchronization, and Linux VPS operation with PM2.",
    url: "https://asena-boutique.com/",
    tags: ["shopify", "node", "express", "api", "webhook", "vps", "linux", "automation"]
  },
  {
    id: "mobile",
    title: "Published mobile contribution",
    body: "Joshua contributed to FlashLead, a published Android React Native application, and worked with Firebase, contacts, location, media, storage, Google sign-in, Android Studio, and API-driven screens.",
    url: "https://play.google.com/store/apps/details?id=com.directionnorth.flashlead&hl=en",
    tags: ["mobile", "android", "react native", "firebase", "flashlead", "published"]
  }
];
