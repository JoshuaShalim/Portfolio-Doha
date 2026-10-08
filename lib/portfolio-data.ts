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

export type Achievement = {
  date: string;
  title: string;
  issuer: string;
  detail: string;
  status: string;
  url?: string;
};

export const achievements: Achievement[] = [
  {
    date: "Expected Oct 2026",
    title: "CompTIA A+ Core 1 & Core 2 Exam Preparation",
    issuer: "LinkedIn Learning",
    detail: "Completing structured preparation for the CompTIA A+ 220-1201 and 220-1202 exams, covering hardware, operating systems, networking, security, and troubleshooting.",
    status: "In progress"
  },
  {
    date: "Oct 5, 2026",
    title: "Network Support and Security",
    issuer: "Cisco Networking Academy",
    detail: "Verified digital credential covering network support practices, endpoint and network security, troubleshooting, and operational reliability.",
    status: "Credly verified",
    url: "https://www.credly.com/users/joshua-shalim/badges"
  },
  {
    date: "Sep 22, 2026",
    title: "Networking Devices and Initial Configuration",
    issuer: "Cisco Networking Academy",
    detail: "Verified digital credential covering network devices, addressing, cabling, basic configuration, and connectivity validation.",
    status: "Credly verified",
    url: "https://www.credly.com/users/joshua-shalim/badges"
  },
  {
    date: "Sep 14, 2026",
    title: "Network Addressing and Basic Troubleshooting",
    issuer: "Cisco Networking Academy",
    detail: "Verified digital credential demonstrating foundational IP addressing, connectivity testing, and systematic network troubleshooting.",
    status: "Credly verified",
    url: "https://www.credly.com/users/joshua-shalim/badges"
  },
  {
    date: "Sep 8, 2026",
    title: "Networking Basics",
    issuer: "Cisco Networking Academy",
    detail: "Verified digital credential covering networking concepts, protocols, topologies, addressing, and essential network operations.",
    status: "Credly verified",
    url: "https://www.credly.com/users/joshua-shalim/badges"
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
    id: "it-credentials",
    title: "Cisco credentials and CompTIA A+ preparation",
    body: "Joshua holds four Cisco Networking Academy digital credentials verified through Credly: Networking Basics; Network Addressing and Basic Troubleshooting; Networking Devices and Initial Configuration; and Network Support and Security. He is also completing LinkedIn Learning preparation for the CompTIA A+ Core 1 (220-1201) and Core 2 (220-1202) exams, with completion expected in October 2026.",
    url: "https://www.credly.com/users/joshua-shalim/badges",
    tags: ["it support", "cisco", "credly", "comptia a+", "hardware", "networking", "security", "troubleshooting"]
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
