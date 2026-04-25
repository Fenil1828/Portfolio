"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Github, Linkedin, ExternalLink, FileDown, Code2, Send, CheckCircle, AlertCircle } from "lucide-react";
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
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-main">
      <div className="container-custom" ref={ref}>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-6"
          >
            <span className="text-xs font-dm font-medium text-accent tracking-widest uppercase">
              Get in touch
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-syne text-4xl sm:text-5xl font-bold text-primary-c mt-2 mb-4 text-center"
          >
            Let's Build Something
            <br />
            <span className="text-gradient">Together</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-dm text-base text-secondary-c leading-relaxed mb-12 text-center"
          >
            I'm open to internships, full-time roles, and interesting freelance projects.
            Whether you have a question or just want to say hi — my inbox is always open.
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="bg-surface border border-subtle rounded-3xl p-8 space-y-5"
            >
              {/* Name Field */}
              <div>
                <label className="block font-dm text-sm font-medium text-primary-c mb-3">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 bg-surface-2 border border-subtle rounded-xl font-dm text-sm text-primary-c placeholder:text-muted-c focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block font-dm text-sm font-medium text-primary-c mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 py-3 bg-surface-2 border border-subtle rounded-xl font-dm text-sm text-primary-c placeholder:text-muted-c focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label className="block font-dm text-sm font-medium text-primary-c mb-3">
                  Phone Number <span className="text-muted-c text-xs">(Optional)</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-3 bg-surface-2 border border-subtle rounded-xl font-dm text-sm text-primary-c placeholder:text-muted-c focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block font-dm text-sm font-medium text-primary-c mb-3">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or inquiry..."
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-surface-2 border border-subtle rounded-xl font-dm text-sm text-primary-c placeholder:text-muted-c focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all resize-none"
                />
              </div>

              {/* Error Message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/30 rounded-xl"
                >
                  <AlertCircle size={16} className="text-red-500 flex-shrink-0" />
                  <p className="font-dm text-sm text-red-500">{error}</p>
                </motion.div>
              )}

              {/* Success Message */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/30 rounded-xl"
                >
                  <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                  <p className="font-dm text-sm text-green-500">Message sent successfully! I'll get back to you soon.</p>
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: loading ? 1 : 1.04, y: loading ? 0 : -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-dm font-semibold rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-violet-500/25"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </motion.button>
            </motion.form>

            {/* Contact Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <div className="grid gap-4">
                {contactLinks.map(({ icon: Icon, label, value, href, color }, i) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={label !== "Email" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.08 }}
                    whileHover={{ x: 8 }}
                    className="flex items-center gap-4 p-4 bg-surface border border-subtle rounded-2xl group hover:border-strong-c transition-all"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 opacity-90"
                      style={{ background: `${color}20`, border: `1px solid ${color}30` }}
                    >
                      <Icon size={20} style={{ color }} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-dm text-xs text-muted-c mb-0.5">{label}</p>
                      <p className="font-dm text-sm font-medium text-primary-c truncate">{value}</p>
                    </div>
                    <ExternalLink size={14} className="text-muted-c group-hover:text-primary-c transition-colors flex-shrink-0" />
                  </motion.a>
                ))}
              </div>

              {/* Resume CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
                className="bg-gradient-to-r from-violet-600/10 to-indigo-600/10 border border-violet-500/20 rounded-2xl p-6 mt-6"
              >
                <p className="font-syne text-lg font-bold text-primary-c mb-2">
                  View my resume
                </p>
                <p className="font-dm text-xs text-secondary-c mb-4">
                  Download for a complete overview of my skills and experience.
                </p>
                <motion.a
                  href={personalInfo.resumeUrl}
                  download
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-dm font-medium rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-violet-500/25 text-xs"
                >
                  <FileDown size={14} />
                  Download Resume
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
