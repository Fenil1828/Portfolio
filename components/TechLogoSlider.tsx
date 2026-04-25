"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Tech {
  name: string;
  icon: string;
}

const techLogos: Tech[] = [
  { name: "C++", icon: "🔧" },
  { name: "C", icon: "🎯" },
  { name: "Python", icon: "🐍" },
  { name: "Java", icon: "☕" },
  { name: "JavaScript", icon: "📜" },
  { name: "TypeScript", icon: "📘" },
  { name: "HTML", icon: "🏗️" },
  { name: "CSS", icon: "🎨" },
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "Node.js", icon: "🟢" },
  { name: "Express", icon: "🚀" },
  { name: "MongoDB", icon: "🍃" },
  { name: "PostgreSQL", icon: "🗄️" },
  { name: "Firebase", icon: "🔥" },
  { name: "Tailwind CSS", icon: "💨" },
  { name: "Shadcn/ui", icon: "🧩" },
  { name: "Git", icon: "🌳" },
  { name: "GitHub", icon: "🐙" },
  { name: "Postman", icon: "🧪" },
  { name: "Cloudinary", icon: "☁️" },
  { name: "WebSocket", icon: "📡" },
  { name: "OAuth 2.0", icon: "🔐" },
  { name: "Razorpay", icon: "💳" },
  { name: "JWT", icon: "🔑" },
  { name: "REST APIs", icon: "🔌" },
  { name: "Framer Motion", icon: "✨" },
  { name: "Neon", icon: "💫" },
];

export default function TechLogoSlider() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-surface">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="text-xs font-dm font-medium text-accent tracking-widest uppercase">
            Technologies
          </span>
          <h2 className="font-syne text-4xl sm:text-5xl font-bold text-primary-c mt-2">
            Tech Stack
          </h2>
        </motion.div>

        {/* Logo Slider - Continuous Scroll */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

          {/* Animated container */}
          <motion.div
            className="flex gap-6 py-8"
            animate={{ x: [0, -2000] }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* First set */}
            {techLogos.map((tech, i) => (
              <motion.div
                key={`${tech.name}-1-${i}`}
                whileHover={{ scale: 1.15, y: -8 }}
                className="flex-shrink-0 w-24 h-24 flex items-center justify-center"
              >
                <div className="relative w-full h-full rounded-2xl border border-subtle bg-surface-2 hover:bg-surface-3 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group cursor-pointer overflow-hidden">
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Icon */}
                  <div className="text-5xl group-hover:scale-110 transition-transform duration-300 relative z-10">
                    {tech.icon}
                  </div>

                  {/* Tooltip */}
                  <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
                    <div className="bg-primary-c text-white text-xs font-dm px-2 py-1 rounded-lg whitespace-nowrap">
                      {tech.name}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Second set for seamless loop */}
            {techLogos.map((tech, i) => (
              <motion.div
                key={`${tech.name}-2-${i}`}
                whileHover={{ scale: 1.15, y: -8 }}
                className="flex-shrink-0 w-24 h-24 flex items-center justify-center"
              >
                <div className="relative w-full h-full rounded-2xl border border-subtle bg-surface-2 hover:bg-surface-3 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group cursor-pointer overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="text-5xl group-hover:scale-110 transition-transform duration-300 relative z-10">
                    {tech.icon}
                  </div>

                  <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
                    <div className="bg-primary-c text-white text-xs font-dm px-2 py-1 rounded-lg whitespace-nowrap">
                      {tech.name}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Grid View - Complete Toolkit */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="mt-16 pt-8 border-t border-subtle"
        >
          <p className="text-xs font-dm font-medium text-accent tracking-widest uppercase mb-6">
            Complete toolkit
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-4">
            {techLogos.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.05 + i * 0.02 }}
                whileHover={{ scale: 1.1, y: -4 }}
                className="group relative"
              >
                <div className="w-full aspect-square rounded-xl border border-subtle bg-surface-2 hover:bg-surface-3 shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center overflow-hidden">
                  {/* Background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300 relative z-10">
                    {tech.icon}
                  </div>
                </div>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <div className="bg-primary-c text-white text-xs font-dm px-2 py-1 rounded-lg whitespace-nowrap">
                    {tech.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
