"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/lib/data";

const categories = Object.keys(skills) as Array<keyof typeof skills>;

const allTech = [
  { name: "React.js",      icon: "devicon-react-original colored" },
  { name: "Next.js",       icon: "devicon-nextjs-plain" },
  { name: "Node.js",       icon: "devicon-nodejs-plain colored" },
  { name: "Express.js",    icon: "devicon-express-original" },
  { name: "TypeScript",    icon: "devicon-typescript-plain colored" },
  { name: "JavaScript",    icon: "devicon-javascript-plain colored" },
  { name: "Python",        icon: "devicon-python-plain colored" },
  { name: "Java",          icon: "devicon-java-plain colored" },
  { name: "C++",           icon: "devicon-cplusplus-plain colored" },
  { name: "C",             icon: "devicon-c-plain colored" },
  { name: "HTML5",         icon: "devicon-html5-plain colored" },
  { name: "CSS3",          icon: "devicon-css3-plain colored" },
  { name: "Tailwind CSS",  icon: "devicon-tailwindcss-plain colored" },
  { name: "MongoDB",       icon: "devicon-mongodb-plain colored" },
  { name: "PostgreSQL",    icon: "devicon-postgresql-plain colored" },
  { name: "Firebase",      icon: "devicon-firebase-plain colored" },
  { name: "Git",           icon: "devicon-git-plain colored" },
  { name: "GitHub",        icon: "devicon-github-original" },
  { name: "VS Code",       icon: "devicon-vscode-plain colored" },
  { name: "Postman",       icon: "devicon-postman-plain colored" },
  { name: "MySQL",         icon: "devicon-mysql-plain colored" },
  { name: "Linux",         icon: "devicon-linux-plain" },
  { name: "Docker",        icon: "devicon-docker-plain colored" },
  { name: "Figma",         icon: "devicon-figma-plain colored" },
  { name: "Redux",         icon: "devicon-redux-original colored" },
  { name: "GraphQL",       icon: "devicon-graphql-plain colored" },
  { name: "Vercel",        icon: "devicon-vercel-original" },
  { name: "Cloudinary",    icon: "devicon-cloudinary-plain colored" },
  { name: "OAuth 2.0",     icon: "devicon-google-plain colored" },
  { name: "RESTful APIs",  icon: "devicon-fastapi-plain colored" },
  { name: "DBMS",          icon: "devicon-mysql-plain colored" },
];

const row1 = allTech.slice(0, 16);
const row2 = allTech.slice(16);

const categoryColors: Record<string, string> = {
  Languages: "from-violet-500 to-purple-600",
  "Frameworks & Libraries": "from-blue-500 to-cyan-500",
  "Databases & Cloud": "from-emerald-500 to-teal-600",
  "Developer Tools": "from-orange-500 to-amber-500",
};

const categoryAccents: Record<string, string> = {
  Languages: "#7c3aed",
  "Frameworks & Libraries": "#3b82f6",
  "Databases & Cloud": "#10b981",
  "Developer Tools": "#f59e0b",
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const currentSkills = skills[activeCategory];
  const accent = categoryAccents[activeCategory];
  const gradClass = categoryColors[activeCategory];

  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      <style>{`
        @keyframes marquee-fwd { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes marquee-rev { from { transform: translateX(-50%); } to { transform: translateX(0); } }
        @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        .row-fwd { animation: marquee-fwd 45s linear infinite; }
        .row-rev { animation: marquee-rev 50s linear infinite; }
        .row-fwd:hover, .row-rev:hover { animation-play-state: paused; }
      `}</style>

      <section id="skills" className="section-padding relative overflow-hidden" style={{ background: "var(--bg)" }}>
        {/* Ambient glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle, ${accent}0a 0%, transparent 65%)`, transition: "background 0.7s ease" }}
        />

        <div className="container-custom relative z-10" ref={ref}>

          {/* ── HEADER ── */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="mb-14">
            <span className="text-xs font-dm font-medium tracking-widest uppercase" style={{ color: accent }}>Expertise</span>
            <h2 className="font-syne text-4xl sm:text-5xl font-bold text-primary-c mt-2 mb-3">Technical Skills</h2>
            <p className="font-dm text-base text-secondary-c max-w-lg">Technologies and tools I use to build great products.</p>
          </motion.div>

          {/* ── TABS ── */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.15 }} className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => {
              const active = activeCategory === cat;
              return (
                <motion.button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`relative px-5 py-2.5 rounded-xl text-sm font-dm font-medium transition-all overflow-hidden ${active ? "text-white shadow-lg" : "border border-subtle bg-surface text-secondary-c hover:text-primary-c"}`}
                  style={active ? { boxShadow: `0 8px 24px ${categoryAccents[cat]}35` } : {}}
                >
                  {active && (
                    <motion.span layoutId="tab-bg" className={`absolute inset-0 bg-gradient-to-r ${categoryColors[cat]}`} style={{ borderRadius: "inherit" }} transition={{ type: "spring", stiffness: 400, damping: 30 }} />
                  )}
                  <span className="relative z-10">{cat}</span>
                </motion.button>
              );
            })}
          </motion.div>

          {/* ── SKILL BARS ── */}
          <motion.div key={activeCategory} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
            {currentSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.07 }}
                whileHover={{ y: -3, scale: 1.01 }}
                className="group relative bg-surface border border-subtle rounded-2xl p-5 overflow-hidden cursor-default"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: `radial-gradient(200px at 50% 0%, ${accent}14 0%, transparent 100%)` }} />
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${gradClass} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="flex justify-between items-start mb-4 relative">
                  <span className="font-syne text-sm font-bold text-primary-c">{skill.name}</span>
                  <span className="font-dm text-xs font-medium px-2 py-0.5 rounded-lg" style={{ background: `${accent}18`, color: accent }}>{skill.level}%</span>
                </div>
                <div className="h-1.5 rounded-full overflow-hidden relative" style={{ background: "var(--surface-2)" }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1.2, delay: 0.3 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className={`h-full rounded-full bg-gradient-to-r ${gradClass} relative`}
                  >
                    <span className="absolute inset-0 rounded-full" style={{ background: "linear-gradient(90deg,transparent 0%,rgba(255,255,255,0.28) 50%,transparent 100%)", backgroundSize: "200% 100%", animation: "shimmer 2.5s ease-in-out infinite" }} />
                  </motion.div>
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-[10px] font-dm text-muted-c">Beginner</span>
                  <span className="text-[10px] font-dm text-muted-c">Expert</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* ── ALL TECHNOLOGIES SLIDERS ── */}
          <motion.div initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.55 }}>

            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="font-syne text-2xl font-bold text-primary-c">All Technologies</p>
                <p className="font-dm text-sm text-muted-c mt-1">Mastered {allTech.length}+ tools used in production-grade applications</p>
              </div>
              <span className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-subtle bg-surface text-xs font-dm text-muted-c">
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: accent }} />
                Full-stack expertise
              </span>
            </div>

            {/* Slider card */}
            <div className="relative rounded-3xl overflow-hidden">

              {/* Edge fades */}
              <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, var(--bg) 0%, transparent 100%)" }} />
              <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, var(--bg) 0%, transparent 100%)" }} />

              <div className="py-8 flex flex-col gap-5 overflow-hidden">

                {/* ── ROW 1 → left to right ── */}
                <div className="overflow-hidden">
                  <div className="row-fwd flex gap-5 w-max">
                    {[...row1, ...row1].map((tech, i) => (
                      <div
                        key={`r1-${i}`}
                        className="flex-shrink-0 flex flex-col items-center justify-center gap-3 w-24 h-24 transition-all duration-300 hover:scale-110 hover:-translate-y-2 cursor-default group"
                      >
                        <i className={`${tech.icon} text-4xl transition-all duration-300`} style={{ filter: "brightness(0.75) saturate(0.6)", }} />
                        <span className="font-dm text-[10px] font-medium text-center leading-tight px-1" style={{ color: "var(--text-muted)" }}>
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="mx-8 h-px" style={{ background: "var(--border)" }} />

                {/* ── ROW 2 → right to left ── */}
                <div className="overflow-hidden">
                  <div className="row-rev flex gap-5 w-max">
                    {[...row2, ...row2].map((tech, i) => (
                      <div
                        key={`r2-${i}`}
                        className="flex-shrink-0 flex flex-col items-center justify-center gap-3 w-24 h-24 transition-all duration-300 hover:scale-110 hover:-translate-y-2 cursor-default group"
                      >
                        <i className={`${tech.icon} text-4xl transition-all duration-300`} style={{ filter: "brightness(0.75) saturate(0.6)" }} />
                        <span className="font-dm text-[10px] font-medium text-center leading-tight px-1" style={{ color: "var(--text-muted)" }}>
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </motion.div>

        </div>
      </section>
    </>
  );
}
