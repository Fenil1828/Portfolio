"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, MapPin, Calendar, BookOpen } from "lucide-react";
import { education } from "@/lib/data";

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="section-padding bg-main">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-xs font-dm font-medium text-accent tracking-widest uppercase">
            Background
          </span>
          <h2 className="font-syne text-4xl sm:text-5xl font-bold text-primary-c mt-2">
            Education
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-6 bottom-6 w-px bg-gradient-to-b from-violet-500 via-indigo-400 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="sm:pl-16 relative"
              >
                {/* Timeline dot */}
                <div className="hidden sm:flex absolute left-0 top-6 w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 items-center justify-center shadow-lg shadow-violet-500/25">
                  <GraduationCap size={18} className="text-white" />
                </div>

                <div className="bg-surface border border-subtle rounded-3xl p-7 group hover:border-strong-c transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-syne text-lg font-bold text-primary-c mb-1">
                        {edu.degree}
                      </h3>
                      <p className="font-dm text-base font-medium text-accent">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-subtle bg-surface-2 text-xs font-dm text-secondary-c">
                        <Calendar size={11} />
                        {edu.period}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-xs font-dm text-muted-c mb-4">
                    <MapPin size={12} />
                    {edu.location}
                  </div>

                  {edu.score && (
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gradient-to-r from-violet-500/10 to-indigo-500/10 border border-violet-500/20 mb-4">
                      <span className="text-xs font-dm font-medium text-accent">Score: {edu.score}</span>
                    </div>
                  )}

                  {edu.courses.length > 0 && (
                    <>
                      <div className="flex items-center gap-2 mb-3">
                        <BookOpen size={13} className="text-muted-c" />
                        <span className="text-xs font-dm text-muted-c uppercase tracking-widest">
                          Relevant Coursework
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course) => (
                          <span
                            key={course}
                            className="px-2.5 py-1 rounded-lg border border-subtle bg-surface-2 text-xs font-dm text-secondary-c"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
