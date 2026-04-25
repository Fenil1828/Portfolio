"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, Code2 } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-subtle bg-main-2 mt-12 py-16">
      <div className="container-custom px-8 sm:px-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
              <Code2 size={14} className="text-white" />
            </div>
            <span className="font-syne font-bold text-sm text-primary-c">
              fenil<span className="text-accent">.</span>dev
            </span>
          </div>

          {/* Copyright */}
          <p className="font-dm text-xs text-muted-c flex items-center gap-1.5">
            Built with <Heart size={11} className="text-rose-500 fill-rose-500" /> by Fenil Jasani · {new Date().getFullYear()}
          </p>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: personalInfo.github },
              { icon: Linkedin, href: personalInfo.linkedin },
              { icon: Mail, href: `mailto:${personalInfo.email}` },
            ].map(({ icon: Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-8 h-8 rounded-lg border border-subtle flex items-center justify-center text-muted-c hover:text-primary-c hover:border-strong-c transition-all"
              >
                <Icon size={14} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
