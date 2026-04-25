"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Github, Linkedin, ExternalLink, FileDown, Code2 } from "lucide-react";
import { personalInfo } from "@/lib/data";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: "#7c3aed",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Fenil1828",
    href: personalInfo.github,
    color: "#334155",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "fenil-jasani18",
    href: personalInfo.linkedin,
    color: "#0e76a8",
  },
  {
    icon: Code2,
    label: "LeetCode",
    value: "leetcode.com/u/fenil",
    href: personalInfo.leetcode,
    color: "#f89f1b",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="section-padding bg-main">
      <div className="container-custom" ref={ref}>
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="text-xs font-dm font-medium text-accent tracking-widest uppercase">
              Get in touch
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-syne text-4xl sm:text-5xl font-bold text-primary-c mt-2 mb-4"
          >
            Let's Build Something
            <br />
            <span className="text-gradient">Together</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-dm text-base text-secondary-c leading-relaxed mb-12"
          >
            I'm open to internships, full-time roles, and interesting freelance projects.
            Whether you have a question or just want to say hi — my inbox is always open.
          </motion.p>

          {/* Contact cards */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {contactLinks.map(({ icon: Icon, label, value, href, color }, i) => (
              <motion.a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.08 }}
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-4 p-4 bg-surface border border-subtle rounded-2xl group hover:border-strong-c transition-all text-left"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 opacity-90"
                  style={{ background: `${color}20`, border: `1px solid ${color}30` }}
                >
                  <Icon size={17} style={{ color }} />
                </div>
                <div className="min-w-0">
                  <p className="font-dm text-xs text-muted-c mb-0.5">{label}</p>
                  <p className="font-dm text-sm font-medium text-primary-c truncate">{value}</p>
                </div>
                <ExternalLink size={13} className="text-muted-c ml-auto group-hover:text-primary-c transition-colors flex-shrink-0" />
              </motion.a>
            ))}
          </div>

          {/* Resume CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-r from-violet-600/10 to-indigo-600/10 border border-violet-500/20 rounded-3xl p-8"
          >
            <p className="font-syne text-lg font-bold text-primary-c mb-2">
              Want to see my full resume?
            </p>
            <p className="font-dm text-sm text-secondary-c mb-6">
              Download my resume for a complete overview of my skills, projects, and experience.
            </p>
            <motion.a
              href={personalInfo.resumeUrl}
              download
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-dm font-medium rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-violet-500/25 text-sm"
            >
              <FileDown size={16} />
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
