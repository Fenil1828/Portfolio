"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Calendar, Code, Cloud, Coffee, Lightbulb, Zap } from "lucide-react";
import { certifications } from "@/lib/data";

const getPlatformLogo = (platform: string) => {
  const logos: { [key: string]: { svg: JSX.Element; color: string } } = {
    udemy: {
      color: "from-violet-600 to-violet-700",
      svg: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <text x="50%" y="50%" textAnchor="middle" dy="0.3em" className="fill-white font-bold text-sm">U</text>
        </svg>
      ),
    },
    codehelp: {
      color: "from-blue-600 to-blue-700",
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white">
          <path d="M7 7h10M7 12h10M7 17h6M3 5h18a2 2 0 012 2v12a2 2 0 01-2 2H3a2 2 0 01-2-2V7a2 2 0 012-2z" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      ),
    },
    simplilearn: {
      color: "from-orange-600 to-orange-700",
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" fill="white"/>
        </svg>
      ),
    },
    coursera: {
      color: "from-cyan-600 to-cyan-700",
      svg: (
        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
        </svg>
      ),
    },
  };

  return logos[platform] || { color: "from-gray-600 to-gray-700", svg: <span className="text-white font-bold">C</span> };
};

const getGradientStyle = (colorClass: string) => {
  const gradients: { [key: string]: string } = {
    "from-violet-500 to-purple-600": "linear-gradient(to right, #a78bfa, #9333ea)",
    "from-sky-500 to-blue-600": "linear-gradient(to right, #38bdf8, #2563eb)",
    "from-orange-500 to-red-500": "linear-gradient(to right, #f97316, #ef4444)",
    "from-emerald-500 to-green-600": "linear-gradient(to right, #10b981, #059669)",
    "from-rose-500 to-pink-600": "linear-gradient(to right, #f43f94, #ec4899)",
  };
  return gradients[colorClass] || "linear-gradient(to right, #6b7280, #6b7280)";
};

const getCertificationIcon = (title: string) => {
  const iconMap: { [key: string]: JSX.Element } = {
    "Full Stack Web Development": <Code className="w-6 h-6" />,
    "Advanced Web Technologies": <Cloud className="w-6 h-6" />,
    "Java Programming": <Coffee className="w-6 h-6" />,
    "OOP Principles": <Lightbulb className="w-6 h-6" />,
    "C Programming": <Zap className="w-6 h-6" />,
  };

  const matchedKey = Object.keys(iconMap).find(key => title.includes(key));
  return matchedKey ? iconMap[matchedKey] : <Award className="w-6 h-6" />;
};

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
              whileHover={{ y: -8 }}
              className="group bg-surface border border-subtle rounded-2xl p-6 relative text-left transition-all hover:border-strong-c hover:shadow-2xl duration-300"
            >
              {/* Gradient accent top */}
              <div 
                className="h-1 w-full absolute top-0 left-0 right-0 rounded-t-2xl"
                style={{ background: getGradientStyle(cert.color) }}
              />

              {/* Main Icon Container - Tech Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-4 shadow-lg text-white group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {getCertificationIcon(cert.title)}
              </div>

              <h3 className="font-syne text-sm font-bold text-primary-c leading-snug mb-4 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                {cert.title}
              </h3>

              <div className="flex items-center justify-between">
                <span className="font-dm text-xs text-muted-c group-hover:text-secondary-c transition-colors duration-300">{cert.issuer}</span>
                <span className="flex items-center gap-1 font-dm text-xs text-muted-c group-hover:text-accent transition-colors duration-300">
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
