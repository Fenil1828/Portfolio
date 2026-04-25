"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Calendar } from "lucide-react";
import { certifications } from "@/lib/data";

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-main-2">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-xs font-dm font-medium text-accent tracking-widest uppercase">
            Credentials
          </span>
          <h2 className="font-syne text-4xl sm:text-5xl font-bold text-primary-c mt-2">
            Certifications
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5 }}
              className="group bg-surface border border-subtle rounded-2xl p-6 relative overflow-hidden cursor-default"
            >
              {/* Gradient accent top */}
              <div className={`h-0.5 w-full bg-gradient-to-r ${cert.color} absolute top-0 left-0 right-0`} />

              {/* Icon */}
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-4 shadow-lg opacity-90`}>
                <Award size={18} className="text-white" />
              </div>

              <h3 className="font-syne text-sm font-bold text-primary-c leading-snug mb-3">
                {cert.title}
              </h3>

              <div className="flex items-center justify-between mt-auto">
                <span className="font-dm text-xs text-muted-c">{cert.issuer}</span>
                <span className="flex items-center gap-1 font-dm text-xs text-muted-c">
                  <Calendar size={11} />
                  {cert.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
