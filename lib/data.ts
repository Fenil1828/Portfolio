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
    title: "StudyNotion",
    subtitle: "EdTech Learning Platform",
    description:
      "Scalable e-learning platform serving 1000+ users with course management, secure payments, and real-time progress tracking.",
    longDescription:
      "Built with MERN Stack, featuring Google OAuth 2.0 for authentication, Cloudinary for optimized media storage, and Razorpay for secure payment integration. Implemented JWT-based authentication with role-based access control (RBAC) for students, instructors, and admins.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Cloudinary", "OAuth 2.0", "Razorpay", "JWT"],
    liveUrl: "#",
    githubUrl: "#",
    year: "2025",
    color: "from-violet-500 to-indigo-600",
    accent: "#7c3aed",
    highlights: ["1000+ users", "Razorpay payments", "RBAC auth", "RESTful APIs"],
  },
  {
    title: "NoteForge",
    subtitle: "Productivity Platform",
    description:
      "Serverless note-taking app with intelligent workspaces, Tiptap rich-text editor, and advanced search using Neon PostgreSQL.",
    longDescription:
      "Architected with Next.js and TypeScript featuring adaptive glassmorphism UI with pixel-perfect dark/light mode. Multi-provider OAuth (Google, GitHub) with NextAuth and Resend API for email workflows.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Shadcn/ui", "Tailwind CSS", "NextAuth", "Resend", "Neon"],
    liveUrl: "#",
    githubUrl: "#",
    year: "2025",
    color: "from-emerald-500 to-teal-600",
    accent: "#059669",
    highlights: ["Glassmorphism UI", "Dark/light mode", "OAuth login", "Tiptap editor"],
  },
  {
    title: "Anonymous Messenger",
    subtitle: "Real-time Secure Chat",
    description:
      "Real-time anonymous messaging platform with end-to-end encryption, WebSocket architecture, and AI-powered content moderation.",
    longDescription:
      "Developed with Node.js and WebSocket featuring AI-powered sentiment analysis for intelligent content moderation. Implemented personality discovery features using AI algorithms to match users based on communication patterns.",
    tech: ["Node.js", "WebSocket", "MongoDB", "AI/ML", "Encryption"],
    liveUrl: "#",
    githubUrl: "#",
    year: "2024",
    color: "from-rose-500 to-pink-600",
    accent: "#e11d48",
    highlights: ["E2E encryption", "WebSocket", "AI moderation", "Anonymous"],
  },
  {
    title: "Rental Management",
    subtitle: "Admin Dashboard System",
    description:
      "Comprehensive admin dashboard for inventory management with real-time tracking, booking oversight, and revenue analytics.",
    longDescription:
      "Built with React.js and Node.js featuring Chart.js visualizations for revenue analytics. Designed RESTful APIs for CRUD operations, automated availability updates, and role-based access control with audit logging.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#",
    year: "2024",
    color: "from-amber-500 to-orange-600",
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
  },
  {
    title: "Advanced Web Technologies & Cloud Deployment",
    issuer: "Udemy",
    year: "2025",
    color: "from-sky-500 to-blue-600",
  },
  {
    title: "Java Programming — Complete Crash Course",
    issuer: "Simplilearn",
    year: "2024",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "OOP Principles & Design Patterns",
    issuer: "Udemy",
    year: "2024",
    color: "from-emerald-500 to-green-600",
  },
  {
    title: "C Programming Mastery — Memory Management, Pointers & System Programming",
    issuer: "Udemy",
    year: "2024",
    color: "from-rose-500 to-pink-600",
  },
];

export const techStack = [
  "React.js", "Next.js", "Node.js", "Express.js",
  "MongoDB", "PostgreSQL", "TypeScript", "Tailwind CSS",
  "WebSocket", "OAuth 2.0", "Razorpay", "Cloudinary",
  "JWT", "REST APIs", "Git", "Framer Motion",
];
