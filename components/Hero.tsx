"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown, ExternalLink } from "lucide-react";
import { personalInfo } from "@/lib/data";

const stagger = {
  container: {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
  },
  item: {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  },
};

const techLogos = [
  { name: "React", icon: "devicon-react-original colored" },
  { name: "Next.js", icon: "devicon-nextjs-plain" },
  { name: "Node.js", icon: "devicon-nodejs-plain colored" },
  { name: "Express", icon: "devicon-express-original" },
  { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
  { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
  { name: "TypeScript", icon: "devicon-typescript-plain colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "Tailwind", icon: "devicon-tailwindcss-plain colored" },
  { name: "Python", icon: "devicon-python-plain colored" },
  { name: "Java", icon: "devicon-java-plain colored" },
  { name: "C++", icon: "devicon-cplusplus-plain colored" },
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "GitHub", icon: "devicon-github-original" },
  { name: "Firebase", icon: "devicon-firebase-plain colored" },
  { name: "VS Code", icon: "devicon-vscode-plain colored" },
  { name: "Postman", icon: "devicon-postman-plain colored" },
  { name: "HTML5", icon: "devicon-html5-plain colored" },
  { name: "CSS3", icon: "devicon-css3-plain colored" },
];

export default function Hero() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
      />

      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grain">
        <div ref={glowRef} className="cursor-glow hidden lg:block" />
        <div className="orb orb-1 -top-32 -left-32" />
        <div className="orb orb-2 -bottom-32 -right-32" />

        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="container-custom relative z-10 pt-24 pb-28">
          <motion.div variants={stagger.container} initial="hidden" animate="show" className="max-w-4xl">
            <motion.div variants={stagger.item} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-subtle bg-surface text-xs font-dm text-secondary-c">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for opportunities
              </span>
            </motion.div>

            <motion.h1
              variants={stagger.item}
              className="font-syne text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight mb-6"
            >
              <span className="text-primary-c">Fenil</span>
              <br />
              <span className="text-gradient">Jasani</span>
            </motion.h1>

            <motion.p variants={stagger.item} className="font-syne text-xl sm:text-2xl font-medium text-secondary-c mb-4">
              Full Stack Developer
            </motion.p>

            <motion.p variants={stagger.item} className="font-dm text-base sm:text-lg text-muted-c max-w-xl leading-relaxed mb-10">
              Building scalable, production-ready web experiences with the MERN Stack,
              Next.js, and TypeScript. Passionate about clean architecture and great UX.
            </motion.p>

            <motion.div variants={stagger.item} className="flex flex-wrap gap-3 mb-12">
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-dm font-medium rounded-xl hover:opacity-90 transition-opacity text-sm shadow-lg shadow-violet-500/25"
              >
                View Projects
                <ExternalLink size={15} />
              </motion.button>

              <motion.a
                href={personalInfo.resumeUrl}
                download
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3 border border-strong-c bg-surface text-primary-c font-dm font-medium rounded-xl hover:bg-surface-2 transition-colors text-sm"
              >
                Download Resume
              </motion.a>
            </motion.div>

            <motion.div variants={stagger.item} className="flex items-center gap-4">
              {[
                { icon: Github, href: personalInfo.github, label: "GitHub" },
                { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
                { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl border border-subtle bg-surface flex items-center justify-center text-muted-c hover:text-primary-c hover:border-strong-c transition-all"
                  aria-label={label}
                >
                  <Icon size={17} />
                </motion.a>
              ))}
              <span className="text-xs font-dm text-muted-c ml-1">{personalInfo.email}</span>
            </motion.div>
          </motion.div>
        </div>

      </section>
    </>
  );
}