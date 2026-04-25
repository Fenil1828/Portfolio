"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github, ArrowRight, Calendar } from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="projects" className="section-padding bg-main">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-xs font-dm font-medium text-accent tracking-widest uppercase">
            My Work
          </span>
          <h2 className="font-syne text-4xl sm:text-5xl font-bold text-primary-c mt-2 mb-4">
            Featured Projects
          </h2>
          <p className="font-dm text-base text-secondary-c max-w-xl">
            A selection of projects I've built — from e-learning platforms to real-time systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              onHoverStart={() => setHovered(i)}
              onHoverEnd={() => setHovered(null)}
              whileHover={{ y: -6 }}
              className="group relative bg-surface border border-subtle rounded-3xl overflow-hidden cursor-default"
            >
              {/* Gradient top bar */}
              <div className={`h-1 w-full bg-gradient-to-r ${project.color}`} />

              {/* Animated glow on hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                style={{
                  background: `radial-gradient(400px at 50% -20%, ${project.accent}12 0%, transparent 70%)`,
                }}
              />

              <div className="p-7">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-dm text-xs text-muted-c flex items-center gap-1">
                        <Calendar size={11} />
                        {project.year}
                      </span>
                    </div>
                    <h3 className="font-syne text-xl font-bold text-primary-c">
                      {project.title}
                    </h3>
                    <p className="font-dm text-sm text-secondary-c">{project.subtitle}</p>
                  </div>

                  <div className="flex gap-2">
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-9 h-9 rounded-xl border border-subtle bg-surface-2 flex items-center justify-center text-muted-c hover:text-primary-c transition-colors"
                    >
                      <Github size={15} />
                    </motion.a>
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-9 h-9 rounded-xl border border-subtle bg-surface-2 flex items-center justify-center text-muted-c hover:text-primary-c transition-colors"
                    >
                      <ExternalLink size={15} />
                    </motion.a>
                  </div>
                </div>

                {/* Description */}
                <p className="font-dm text-sm text-secondary-c leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-2 gap-2 mb-5">
                  {project.highlights.map((h) => (
                    <div
                      key={h}
                      className="flex items-center gap-2 text-xs font-dm text-secondary-c"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: project.accent }}
                      />
                      {h}
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 5).map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg border border-subtle bg-surface-2 text-xs font-dm text-muted-c"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 5 && (
                    <span className="px-2.5 py-1 rounded-lg border border-subtle bg-surface-2 text-xs font-dm text-muted-c">
                      +{project.tech.length - 5}
                    </span>
                  )}
                </div>

                {/* View project link */}
                <motion.div
                  className="mt-6 flex items-center gap-1 text-xs font-dm font-medium"
                  style={{ color: project.accent }}
                  animate={{ x: hovered === i ? 4 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  View project
                  <ArrowRight size={13} />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
