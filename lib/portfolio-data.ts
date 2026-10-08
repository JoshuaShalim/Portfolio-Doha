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
    title: "FalconFlex × Shopify",
    eyebrow: "Private production integration",
    summary: "A delivery automation service for Asena Boutique connecting Shopify orders with FalconFlex logistics.",
    contribution: "Built Node/Express workflows for shipping rates, task creation, tracking, cancellations, order and fulfillment synchronization, webhooks, thermal receipts, and Linux VPS operation with PM2.",
    stack: ["Node.js", "Express", "REST APIs", "Shopify GraphQL", "Webhooks", "Linux VPS"],
    category: "Systems",
    links: [{ label: "Store", href: "https://asena-boutique.com/" }],
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
    title: "HRSG Online",
    eyebrow: "Team contribution at Shispare",
    summary: "A PostgreSQL-backed HR platform developed by a team using AI-assisted development tools.",
    contribution: "Built frontend screens, integrated REST APIs, worked with backend data flows, and prepared context documentation that helped AI tools make more relevant changes.",
    stack: ["React", "REST APIs", "PostgreSQL", "Cursor", "Documentation"],
    category: "AI-assisted",
    links: [{ label: "Visit product", href: "https://hrsgonline.com/" }],
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

export const achievements = [
  {
    date: "Oct 2026",
    title: "CompTIA A+ Core 1 learning path",
    issuer: "LinkedIn Learning",
    detail: "Completed preparation coursework for the CompTIA A+ Core 1 (220-1201) exam, covering hardware, networking, mobile devices, virtualization, and troubleshooting.",
    status: "Course completed"
  },
  {
    date: "Oct 2026",
    title: "Remote access and file-transfer lab",
    issuer: "PC Hardware Technician coursework",
    detail: "Configured AnyDesk on two computers, established an approved remote session, controlled the remote desktop, transferred a Word document, and verified the file on the receiving computer.",
    status: "Practical project"
  },
  {
    date: "2026 — Present",
    title: "PC Hardware Technician",
    issuer: "BYU-Pathway Worldwide / Ensign College",
    detail: "Developing practical skills in computer hardware, operating systems, networking, security, remote support, and technical troubleshooting.",
    status: "In progress"
  }
];

export const experience = [
  { period: "Apr 2026 — Present", role: "IT & E-commerce Specialist", company: "Al Norah Trading & Services", detail: "Application support, integrations, platform configuration, product data, performance, and e-commerce operations." },
  { period: "Aug 2025 — Jan 2026", role: "Frontend Developer", company: "Shispare", detail: "React/Next.js frontend delivery, REST API integration, PostgreSQL-backed workflows, testing, performance work, and context-rich AI-assisted development." },
  { period: "Jan 2024 — Jul 2025", role: "Software Support & Operations Associate", company: "Al Norah Trading & Services", detail: "Debugged workflows, reproduced issues, tested fixes, supported users, and maintained MySQL/PostgreSQL data processes." },
  { period: "Apr 2023 — Apr 2024", role: "WordPress Developer & IT Specialist", company: "Medflow Solutions", detail: "Built and maintained responsive business websites, content workflows, SEO, performance, and ongoing technical support." },
  { period: "Jan 2022 — Feb 2023", role: "Mobile App Developer", company: "Codlers / FlashLead", detail: "Contributed to React Native features and Android delivery for a published mobile product." }
];

export const skills = [
  "Technical support", "Hardware troubleshooting", "Remote support", "Networking fundamentals",
  "JavaScript", "TypeScript", "React", "Next.js", "React Native", "Node.js", "Express",
  "REST APIs", "Webhooks", "Shopify GraphQL", "PostgreSQL", "MySQL", "MongoDB",
  "Supabase", "Shopify", "Git", "Linux", "VPS deployment", "Cursor", "GitHub Copilot"
];

export const evidence = [
  {
    id: "portfolio-assistant",
    title: "Portfolio evidence assistant prototype",
    body: "Joshua built a small Next.js portfolio Q&A prototype. It searches a fixed set of verified portfolio records, can use Gemini embeddings and Gemini-generated answers when an API key is available, displays the selected sources, and falls back to deterministic local text-vector retrieval when Gemini is unavailable. It is a learning project, not a production knowledge platform or autonomous multi-agent system.",
    url: "https://github.com/JoshuaShalim/Portfolio-Doha/tree/main/app/api/assistant",
    tags: ["ai", "rag", "gemini", "embeddings", "retrieval", "prototype", "portfolio"]
  },
  {
    id: "it-learning",
    title: "Recent IT support learning",
    body: "In October 2026, Joshua completed LinkedIn Learning preparation coursework for CompTIA A+ Core 1 (220-1201) and completed a practical AnyDesk lab involving installation, an approved remote-control session, file transfer, and verification across two computers. He is continuing PC Hardware Technician coursework through BYU-Pathway Worldwide and Ensign College.",
    url: "https://www.linkedin.com/in/joshua-shalim/",
    tags: ["it support", "comptia a+", "hardware", "networking", "anydesk", "remote support", "learning"]
  },
  {
    id: "hrsg",
    title: "HRSG Online contribution",
    body: "At Shispare, Joshua contributed frontend screens, REST API integrations, PostgreSQL-backed workflows, and structured context documentation for HRSG Online. He used Cursor during planning, implementation, debugging, and revision as part of the team’s AI-assisted product-development workflow.",
    url: "https://hrsgonline.com/",
    tags: ["hrsg", "react", "postgresql", "rest", "team", "documentation"]
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
