"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, GraduationCap, Code2, Zap } from "lucide-react";
import { personalInfo } from "@/lib/data";

const stats = [
  { label: "Projects Built", value: "4+", icon: Code2 },
  { label: "Tech Stack", value: "20+", icon: Zap },
  { label: "Certifications", value: "5", icon: GraduationCap },
  { label: "Year of Study", value: "2nd", icon: MapPin },
];

const traits = [
  "Full Stack Developer",
  "MERN Specialist",
  "UI/UX Enthusiast",
  "Problem Solver",
  "Open Source Fan",
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-main-2">
      <div className="container-custom" ref={ref}>
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-xs font-dm font-medium text-accent tracking-widest uppercase">
            About me
          </span>
          <h2 className="font-syne text-4xl sm:text-5xl font-bold text-primary-c mt-2">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Avatar placeholder */}
            <div className="mb-8 flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white font-syne text-2xl font-bold shadow-lg shadow-violet-500/25">
                FJ
              </div>
              <div>
                <p className="font-syne font-bold text-lg text-primary-c">{personalInfo.name}</p>
                <p className="font-dm text-sm text-secondary-c flex items-center gap-1">
                  <MapPin size={12} /> {personalInfo.location}
                </p>
              </div>
            </div>

            <p className="font-dm text-base text-secondary-c leading-relaxed mb-5">
              I'm a third-year Computer Engineering student at Gujarat Technical University,
              passionate about crafting scalable web applications that solve real-world problems.
            </p>
            <p className="font-dm text-base text-secondary-c leading-relaxed mb-5">
              My expertise spans the full stack — from building intuitive React frontends with
              smooth animations to architecting robust Node.js backends with RESTful APIs,
              JWT authentication, and cloud integrations.
            </p>
            <p className="font-dm text-base text-secondary-c leading-relaxed mb-8">
              I love turning complex problems into elegant, performant solutions — whether that's
              integrating payment systems, implementing real-time WebSocket features, or
              designing clean database schemas.
            </p>

            {/* Trait pills */}
            <div className="flex flex-wrap gap-2">
              {traits.map((t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.05, duration: 0.4 }}
                  className="px-3 py-1.5 rounded-full border border-subtle bg-surface text-xs font-dm text-secondary-c"
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Right — stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map(({ label, value, icon: Icon }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="bg-surface border border-subtle rounded-2xl p-5 group cursor-default"
                >
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500/10 to-indigo-500/10 border border-subtle flex items-center justify-center mb-3 group-hover:from-violet-500/20 group-hover:to-indigo-500/20 transition-all">
                    <Icon size={16} className="text-accent" />
                  </div>
                  <p className="font-syne text-3xl font-bold text-primary-c mb-1">{value}</p>
                  <p className="font-dm text-xs text-muted-c">{label}</p>
                </motion.div>
              ))}
            </div>

            {/* Currently learning */}
            <div className="bg-surface border border-subtle rounded-2xl p-5">
              <p className="font-dm text-xs text-muted-c mb-3 uppercase tracking-widest">
                Currently exploring
              </p>
              <div className="space-y-2.5">
                {["System Design & Scalability", "AI/ML Integration in Web Apps", "Advanced TypeScript Patterns"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span className="font-dm text-sm text-secondary-c">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
