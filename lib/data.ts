export const personalInfo = {
  name: "Fenil N Jasani",
  title: "Full Stack Developer",
  subtitle: "Building scalable web experiences with modern technologies",
  email: "jasanifenil18@gmail.com",
  github: "https://github.com/Fenil1828",
  linkedin: "https://www.linkedin.com/in/fenil-jasani18/",
  leetcode: "https://leetcode.com/u/fenil_1804/",
  location: "Surat, Gujarat, India",
  resumeUrl: "/resume.pdf",
};

export const projects = [
  {
    title: "Fix2PDF",
    subtitle: "Privacy-first browser PDF toolkit",
    image: "/images/fix2pdf.png",
    imageDisplay: "screenshot",
    description:
      "A complete PDF toolkit that processes everything client-side via WebAssembly. Convert, compress, merge, split, and encrypt—your files physically never touch a server. Built after noticing most 'free' document tools are surveillance infrastructure with a friendly UI.",
    longDescription:
      "Zero-server architecture using WebAssembly for 85% faster processing. Encrypt with AES-256, batch process 50+ files, compress up to 90% without loss. Firebase Auth for seamless login, Vercel Edge for <100ms latency. Half a million documents transformed with perfect 5-star satisfaction rate.",
    tech: ["Next.js 14", "WebAssembly", "PDF.js", "Firebase Auth", "Vercel Edge", "Firestore"],
    liveUrl: "https://www.fix2pdf.com/",
    githubUrl: "https://www.fix2pdf.com/",
    year: "2024",
    color: "emerald",
    accent: "#10b981",
    highlights: ["500K+ documents", "Zero server architecture", "AES-256 encryption", "85% faster WASM", "Batch 50+ files", "90% compression"],
    badge: "Founder",
    badgeColor: "#10b981",
  },
  {
    title: "Kventures Restro AI",
    subtitle: "AI-powered WhatsApp agent for restaurants",
    image: "/images/kventure.jpeg",
    imageDisplay: "screenshot",
    description:
      "Intelligent AI agent on WhatsApp that engages customers, validates inventory in real-time, and runs restaurants 24/7 without human intervention. Built with n8n and Google Gemini, delivering sub-2s response latency with zero marginal cost per transaction.",
    longDescription:
      "Enterprise-grade automation orchestrating end-to-end order workflows autonomously. Features natural language conversations, real-time inventory validation, 100% order capture rate, and 60% operational efficiency improvement. Open-source and self-hostable—no vendor lock-in, no subscription fees. Perfect for cloud kitchens, QSR chains, and on-demand food services.",
    tech: ["n8n", "Gemini AI", "WhatsApp Business API", "PostgreSQL", "Oracle Cloud", "Google Sheets"],
    liveUrl: "https://lnkd.in/d7vMaQQQ",
    githubUrl: "https://lnkd.in/d7vMaQQQ",
    year: "2024",
    color: "amber",
    accent: "#f59e0b",
    highlights: ["Sub-2s latency", "100% order capture", "60% efficiency gain", "Zero marginal cost", "Open-source", "Self-hostable"],
    badge: "Open Source",
    badgeColor: "#f59e0b",
  },
  {
    title: "StudyNotion",
    subtitle: "EdTech Learning Platform",
    image: "/images/study.png",
    imageDisplay: "screenshot",
    description:
      "Scalable e-learning platform serving 1000+ users with course management, secure payments, and real-time progress tracking.",
    longDescription:
      "Built with MERN Stack, featuring Google OAuth 2.0 for authentication, Cloudinary for optimized media storage, and Razorpay for secure payment integration. Implemented JWT-based authentication with role-based access control (RBAC) for students, instructors, and admins.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Cloudinary", "OAuth 2.0", "Razorpay", "JWT"],
    liveUrl: "https://study-notion-f1-silk.vercel.app/",
    githubUrl: "#",
    year: "2025",
    color: "violet",
    accent: "#7c3aed",
    highlights: ["1000+ users", "Razorpay payments", "RBAC auth", "RESTful APIs"],
  },
  {
    title: "NoteForge",
    subtitle: "Productivity Platform",
    image: "/images/note.png",
    imageDisplay: "screenshot",
    description:
      "Serverless note-taking app with intelligent workspaces, Tiptap rich-text editor, and advanced search using Neon PostgreSQL.",
    longDescription:
      "Architected with Next.js and TypeScript featuring adaptive glassmorphism UI with pixel-perfect dark/light mode. Multi-provider OAuth (Google, GitHub) with NextAuth and Resend API for email workflows.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Shadcn/ui", "Tailwind CSS", "NextAuth", "Resend", "Neon"],
    liveUrl: "https://note-forge-18.vercel.app/",
    githubUrl: "#",
    year: "2025",
    color: "emerald",
    accent: "#059669",
    highlights: ["Glassmorphism UI", "Dark/light mode", "OAuth login", "Tiptap editor"],
  },
  {
    title: "Anonymous Messenger",
    subtitle: "Real-time Secure Chat",
    image: "/images/Anonnyms.png",
    imageDisplay: "screenshot",
    description:
      "Real-time anonymous messaging platform with end-to-end encryption, WebSocket architecture, and AI-powered content moderation.",
    longDescription:
      "Developed with Node.js and WebSocket featuring AI-powered sentiment analysis for intelligent content moderation. Implemented personality discovery features using AI algorithms to match users based on communication patterns.",
    tech: ["Node.js", "WebSocket", "MongoDB", "AI/ML", "Encryption"],
    liveUrl: "https://mystery-message-virid-seven.vercel.app/",
    githubUrl: "#",
    year: "2024",
    color: "rose",
    accent: "#e11d48",
    highlights: ["E2E encryption", "WebSocket", "AI moderation", "Anonymous"],
  },
  {
    title: "Rental Management",
    subtitle: "Admin Dashboard System",
    image: "/images/rental.png",
    imageDisplay: "screenshot",
    description:
      "Comprehensive admin dashboard for inventory management with real-time tracking, booking oversight, and revenue analytics.",
    longDescription:
      "Built with React.js and Node.js featuring Chart.js visualizations for revenue analytics. Designed RESTful APIs for CRUD operations, automated availability updates, and role-based access control with audit logging.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Chart.js"],
    liveUrl: "https://neny-s-purse-house.vercel.app/",
    githubUrl: "#",
    year: "2024",
    color: "amber",
    accent: "#d97706",
    highlights: ["Chart.js analytics", "Real-time tracking", "RBAC", "Audit logging"],
  },
];

export const skills = {
  Languages: [
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "C++", level: 80 },
    { name: "Python", level: 75 },
    { name: "Java", level: 72 },
    { name: "HTML/CSS", level: 95 },
  ],
  "Frameworks & Libraries": [
    { name: "React.js", level: 92 },
    { name: "Next.js", level: 88 },
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 83 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Shadcn/ui", level: 80 },
  ],
  "Databases & Cloud": [
    { name: "MongoDB", level: 85 },
    { name: "PostgreSQL", level: 78 },
    { name: "Firebase", level: 72 },
    { name: "Cloudinary", level: 80 },
    { name: "Neon", level: 75 },
  ],
  "Developer Tools": [
    { name: "Git & GitHub", level: 90 },
    { name: "WebSocket", level: 78 },
    { name: "OAuth 2.0", level: 82 },
    { name: "Razorpay", level: 75 },
    { name: "Postman", level: 85 },
  ],
};

export const education = [
  {
    degree: "Bachelor of Engineering in Computer Engineering",
    institution: "Gujarat Technical University",
    location: "Surat, Gujarat",
    period: "2023 – 2027",
    score: null,
    courses: [
      "Data Structures",
      "Database Management Systems",
      "Java Programming",
      "Web Development",
      "Software Engineering",
      "Algorithms Analysis",
    ],
  },
  {
    degree: "Higher Secondary Education",
    institution: "P.P. Savani Vidhyabhavan",
    location: "Surat, Gujarat",
    period: "2021 – 2023",
    score: "84.23 Percentile",
    courses: [],
  },
];

export const certifications = [
  {
    title: "Full Stack Web Development — MERN Stack Specialization",
    issuer: "CodeHelp",
    year: "2025",
    color: "from-violet-500 to-purple-600",
    platform: "codehelp",
    platformLogo: "/images/codehelp.png",
    certificateUrl: "#",
    description: "Comprehensive MERN Stack development specialization covering React, Node.js, MongoDB, and Express.js",
  },
  {
    title: "Advanced Web Technologies & Cloud Deployment",
    issuer: "Udemy",
    year: "2025",
    color: "from-sky-500 to-blue-600",
    platform: "udemy",
    platformLogo: "/images/udemy-logo.webp",
    certificateUrl: "#",
    description: "In-depth course on modern web technologies and cloud deployment strategies",
  },
  {
    title: "Java Programming — Complete Crash Course",
    issuer: "Simplilearn",
    year: "2024",
    color: "from-orange-500 to-red-500",
    platform: "simplilearn",
    platformLogo: "/images/simplilearn.png",
    certificateUrl: "#",
    description: "Complete Java programming course covering OOP, data structures, and real-world applications",
  },
  {
    title: "OOP Principles & Design Patterns",
    issuer: "Udemy",
    year: "2024",
    color: "from-emerald-500 to-green-600",
    platform: "udemy",
    platformLogo: "/images/udemy.png",
    certificateUrl: "#",
    description: "Master object-oriented programming concepts and industry-standard design patterns",
  },
  {
    title: "C Programming Mastery — Memory Management, Pointers & System Programming",
    issuer: "Udemy",
    year: "2024",
    color: "from-rose-500 to-pink-600",
    platform: "udemy",
    platformLogo: "/images/udemy.png",
    certificateUrl: "#",
    description: "Advanced C programming covering memory management, pointers, and system-level programming",
  },
];

export const techStack = [
  "React.js", "Next.js", "Node.js", "Express.js",
  "MongoDB", "PostgreSQL", "TypeScript", "Tailwind CSS",
  "WebSocket", "OAuth 2.0", "Razorpay", "Cloudinary",
  "JWT", "REST APIs", "Git", "Framer Motion",
];
