"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { useTheme } from "next-themes";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { projects as projectsData } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────

type EnhancedProject = (typeof projectsData)[0] & {
  gradientBar: string;
  glowColor: string;
  accentRgb: string;
  imageDisplay?: string;
};

// ─────────────────────────────────────────────────────────────────────────────
// COLOR MAP
// ─────────────────────────────────────────────────────────────────────────────

const COLOR_META: Record<string, { gradient: string; glow: string; rgb: string }> = {
  emerald: { gradient: "linear-gradient(135deg,#10b981,#0d9488)", glow: "#10b981", rgb: "16,185,129" },
  amber:   { gradient: "linear-gradient(135deg,#f59e0b,#ea580c)", glow: "#f59e0b", rgb: "245,158,11" },
  violet:  { gradient: "linear-gradient(135deg,#a78bfa,#4f46e5)", glow: "#a78bfa", rgb: "167,139,250" },
  rose:    { gradient: "linear-gradient(135deg,#f43f5e,#ec4899)", glow: "#f43f5e", rgb: "244,63,94" },
  sky:     { gradient: "linear-gradient(135deg,#38bdf8,#0ea5e9)", glow: "#38bdf8", rgb: "56,189,248" },
  lime:    { gradient: "linear-gradient(135deg,#84cc16,#16a34a)", glow: "#84cc16", rgb: "132,204,22" },
};

function useEnhancedProjects(): EnhancedProject[] {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  void resolvedTheme; void mounted;
  return projectsData.map((p) => {
    const meta = COLOR_META[p.color] || COLOR_META.violet;
    return { ...p, gradientBar: meta.gradient, glowColor: meta.glow, accentRgb: meta.rgb };
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// COUNTER ANIMATION HOOK
// ─────────────────────────────────────────────────────────────────────────────

function useCountUp(target: number, active: boolean, duration = 600) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) { setVal(0); return; }
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setVal(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
      else setVal(target);
    };
    requestAnimationFrame(step);
  }, [target, active, duration]);
  return val;
}

// ─────────────────────────────────────────────────────────────────────────────
// SLIDE COMPONENT — one full-screen slide per project
// Layout: LEFT = editorial text panel (40%), RIGHT = full-bleed image (60%)
// ─────────────────────────────────────────────────────────────────────────────

function ProjectSlide({
  project,
  index,
  total,
  isActive,
}: {
  project: EnhancedProject;
  index: number;
  total: number;
  isActive: boolean;
}) {
  const numVal = useCountUp(index + 1, isActive, 500);
  const isScreenshot = project.imageDisplay === "screenshot";

  return (
    <div
      className="proj-slide absolute inset-0 flex"
      style={{ pointerEvents: isActive ? "auto" : "none" }}
    >

      {/* ── LEFT: Editorial text panel ─────────────────────────────────── */}
      <div
        className="proj-text-panel relative flex flex-col justify-between"
        style={{
          width: "clamp(300px, 42%, 520px)",
          padding: "clamp(32px,5vh,64px) clamp(24px,4vw,60px)",
          background: "var(--bg)",
          zIndex: 2,
          flexShrink: 0,
        }}
      >
        {/* Top: index + total */}
        <div className="flex items-center justify-between">
          <div
            className="font-dm"
            style={{ fontSize: 11, color: "var(--text-muted)", letterSpacing: "0.12em" }}
          >
            <span style={{ color: project.glowColor, fontVariantNumeric: "tabular-nums" }}>
              {String(numVal).padStart(2, "0")}
            </span>
            <span style={{ margin: "0 6px", opacity: 0.3 }}>/</span>
            {String(total).padStart(2, "0")}
          </div>

          {/* Accent line */}
          <div
            className="proj-line"
            style={{
              height: 1,
              width: 48,
              background: project.gradientBar,
              borderRadius: 99,
            }}
          />
        </div>

        {/* Middle: main editorial content */}
        <div className="proj-content flex flex-col gap-5">
          {/* Category badge */}
          <div
            className="font-dm inline-flex items-center gap-2 w-fit"
            style={{
              fontSize: 10,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: project.glowColor,
              padding: "4px 12px",
              border: `0.5px solid rgba(${project.accentRgb},0.35)`,
              borderRadius: 99,
              background: `rgba(${project.accentRgb},0.06)`,
            }}
          >
            <span
              style={{
                width: 5, height: 5, borderRadius: "50%",
                background: project.glowColor,
                display: "inline-block",
                boxShadow: `0 0 6px ${project.glowColor}`,
              }}
            />
            {project.subtitle}
          </div>

          {/* Title — large editorial */}
          <h3
            className="font-syne font-bold"
            style={{
              fontSize: "clamp(26px, 3.8vw, 52px)",
              lineHeight: 1.0,
              color: "var(--text-primary)",
              letterSpacing: "-0.02em",
            }}
          >
            {project.title}
          </h3>

          {/* Year inline */}
          <div
            className="font-dm"
            style={{ fontSize: 12, color: "var(--text-muted)", letterSpacing: "0.06em" }}
          >
            {project.year}
          </div>

          {/* Divider */}
          <div
            style={{
              height: "0.5px",
              background: "var(--border)",
              width: "100%",
            }}
          />

          {/* Description */}
          <p
            className="font-dm leading-relaxed"
            style={{
              fontSize: "clamp(12px, 1.4vw, 14px)",
              color: "var(--text-secondary)",
              lineHeight: 1.75,
            }}
          >
            {project.description}
          </p>

          {/* Highlights — vertical list */}
          <ul className="flex flex-col gap-2" style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {project.highlights.map((h: string) => (
              <li
                key={h}
                className="font-dm flex items-center gap-3"
                style={{ fontSize: "clamp(11px, 1.2vw, 12.5px)", color: "var(--text-secondary)" }}
              >
                <span
                  style={{
                    width: 16, height: 1,
                    background: project.gradientBar,
                    borderRadius: 99,
                    flexShrink: 0,
                  }}
                />
                {h}
              </li>
            ))}
          </ul>

          {/* Tech chips */}
          <div className="flex flex-wrap gap-1.5">
            {project.tech.slice(0, 5).map((t: string) => (
              <span
                key={t}
                className="font-dm"
                style={{
                  fontSize: 10,
                  padding: "3px 10px",
                  border: "0.5px solid var(--border)",
                  borderRadius: 4,
                  color: "var(--text-muted)",
                  background: "var(--surface-2)",
                  letterSpacing: "0.04em",
                }}
              >
                {t}
              </span>
            ))}
            {project.tech.length > 5 && (
              <span
                className="font-dm"
                style={{
                  fontSize: 10, padding: "3px 10px",
                  border: "0.5px solid var(--border)",
                  borderRadius: 4, color: "var(--text-muted)",
                  background: "var(--surface-2)",
                }}
              >
                +{project.tech.length - 5}
              </span>
            )}
          </div>
        </div>

        {/* Bottom: CTA links */}
        <div className="flex items-center gap-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-dm font-medium inline-flex items-center gap-1.5 no-underline group"
            style={{
              fontSize: 12,
              color: project.glowColor,
              padding: "10px 20px",
              border: `0.5px solid rgba(${project.accentRgb},0.4)`,
              borderRadius: 6,
              background: `rgba(${project.accentRgb},0.06)`,
              transition: "background 0.2s, border-color 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = `rgba(${project.accentRgb},0.14)`;
              (e.currentTarget as HTMLElement).style.borderColor = `rgba(${project.accentRgb},0.7)`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = `rgba(${project.accentRgb},0.06)`;
              (e.currentTarget as HTMLElement).style.borderColor = `rgba(${project.accentRgb},0.4)`;
            }}
          >
            Live site
            <ArrowUpRight size={12} />
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-dm inline-flex items-center gap-1.5 no-underline"
            style={{
              fontSize: 12,
              color: "var(--text-muted)",
              padding: "10px 20px",
              border: "0.5px solid var(--border)",
              borderRadius: 6,
              transition: "color 0.2s, border-color 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--text-muted)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
            }}
          >
            <Github size={12} />
            Source
          </a>
        </div>
      </div>

      {/* ── RIGHT: Full-bleed image panel ─────────────────────────────── */}
      <div
        className="proj-image-panel relative flex-1 overflow-hidden"
        style={{ background: isScreenshot ? "var(--bg-2)" : "var(--surface)" }}
      >
        {/* Project image */}
        <div
          className="absolute inset-0"
          style={{
            padding: isScreenshot ? "clamp(20px, 3vw, 40px)" : 0,
            zIndex: 1,
          }}
        >
          <div
            className="relative h-full w-full overflow-hidden"
            style={{
              borderRadius: isScreenshot ? 24 : 0,
              border: isScreenshot ? "1px solid rgba(15, 14, 13, 0.08)" : "none",
              boxShadow: isScreenshot ? "0 24px 80px rgba(15, 14, 13, 0.12)" : "none",
              background: isScreenshot ? "#ffffff" : "transparent",
            }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="60vw"
              className={isScreenshot ? "object-contain proj-img" : "object-cover proj-img"}
              style={{ objectPosition: isScreenshot ? "center 54%" : undefined }}
              priority={index === 0}
            />
          </div>
        </div>

        {/* Left edge gradient blending into text panel */}
        {!isScreenshot && (
          <div
            className="absolute inset-y-0 left-0 pointer-events-none"
            style={{
              width: 80,
              background: "linear-gradient(to right, var(--bg), transparent)",
              zIndex: 2,
            }}
          />
        )}

        {/* Subtle dark overlay for contrast */}
        {!isScreenshot && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(135deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.32) 100%)",
              zIndex: 1,
            }}
          />
        )}

        {/* Accent color overlay — very subtle tint matching project color */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: isScreenshot
              ? `radial-gradient(ellipse at 85% 10%, rgba(${project.accentRgb},0.1) 0%, transparent 55%)`
              : `radial-gradient(ellipse at 70% 30%, rgba(${project.accentRgb},0.12) 0%, transparent 65%)`,
            zIndex: 1,
          }}
        />

        {/* Bottom-right: floating project number watermark */}
        {!isScreenshot && (
          <div
            className="absolute bottom-6 right-8 font-syne font-bold select-none pointer-events-none"
            style={{
              fontSize: "clamp(72px, 12vw, 140px)",
              lineHeight: 1,
              color: "rgba(255,255,255,0.06)",
              zIndex: 2,
              letterSpacing: "-0.04em",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </div>
        )}

        {/* Top-right: accent bar + external link icon */}
        <div
          className="absolute top-6 right-6 flex items-center gap-3"
          style={{ zIndex: 3 }}
        >
          <div
            style={{
              width: 32, height: 32,
              borderRadius: "50%",
              background: `rgba(${project.accentRgb},0.2)`,
              border: `0.5px solid rgba(${project.accentRgb},0.5)`,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            <ExternalLink size={13} color={project.glowColor} />
          </div>
        </div>

        {/* Accent bar at bottom of image */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{ height: 3, background: project.gradientBar, zIndex: 3 }}
        />
      </div>

    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MOBILE CARD — simple stacked list for small screens
// ─────────────────────────────────────────────────────────────────────────────

function MobileCard({ project, index }: { project: EnhancedProject; index: number }) {
  const isScreenshot = project.imageDisplay === "screenshot";

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      style={{
        borderRadius: 16,
        overflow: "hidden",
        border: "0.5px solid var(--border)",
        background: "var(--surface)",
        boxShadow: `0 0 60px rgba(${project.accentRgb},0.06)`,
      }}
    >
      {/* Accent bar */}
      <div style={{ height: 3, background: project.gradientBar }} />

      {/* Image */}
      <div className="relative w-full" style={{ height: isScreenshot ? 240 : 200, background: isScreenshot ? "var(--bg-2)" : "transparent" }}>
        <div
          className="absolute inset-0"
          style={{ padding: isScreenshot ? 14 : 0 }}
        >
          <div
            className="relative h-full w-full overflow-hidden"
            style={{
              borderRadius: isScreenshot ? 16 : 0,
              background: isScreenshot ? "#ffffff" : "transparent",
              border: isScreenshot ? "1px solid rgba(15, 14, 13, 0.08)" : "none",
            }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className={isScreenshot ? "object-contain" : "object-cover"}
              style={{ objectPosition: isScreenshot ? "center 54%" : undefined }}
            />
          </div>
        </div>
        {!isScreenshot && (
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.55) 100%)" }}
          />
        )}
        <div
          className="absolute bottom-3 left-4"
          style={isScreenshot ? {
            padding: "8px 10px",
            borderRadius: 12,
            background: "rgba(255,255,255,0.92)",
            boxShadow: "0 12px 30px rgba(15, 14, 13, 0.08)",
          } : undefined}
        >
          <p
            className="font-syne font-bold"
            style={{
              fontSize: 20,
              color: isScreenshot ? "var(--text-primary)" : "#fff",
              letterSpacing: "-0.02em",
            }}
          >
            {project.title}
          </p>
          <p
            className="font-dm"
            style={{
              fontSize: 11,
              color: isScreenshot ? "var(--text-secondary)" : "rgba(255,255,255,0.65)",
              marginTop: 2,
            }}
          >
            {project.year}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-4">
        <div
          className="font-dm inline-flex items-center gap-2 w-fit"
          style={{
            fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase",
            color: project.glowColor, padding: "3px 10px",
            border: `0.5px solid rgba(${project.accentRgb},0.35)`, borderRadius: 99,
            background: `rgba(${project.accentRgb},0.06)`,
          }}
        >
          <span style={{ width: 4, height: 4, borderRadius: "50%", background: project.glowColor, display: "inline-block" }} />
          {project.subtitle}
        </div>

        <p className="font-dm" style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.7 }}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t: string) => (
            <span
              key={t}
              className="font-dm"
              style={{
                fontSize: 10, padding: "3px 9px",
                border: "0.5px solid var(--border)", borderRadius: 4,
                color: "var(--text-muted)", background: "var(--surface-2)",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={project.liveUrl} target="_blank" rel="noopener noreferrer"
            className="font-dm no-underline flex-1 flex items-center justify-center gap-1.5"
            style={{
              fontSize: 12, color: project.glowColor, padding: "9px 0",
              border: `0.5px solid rgba(${project.accentRgb},0.4)`, borderRadius: 6,
              background: `rgba(${project.accentRgb},0.06)`, fontWeight: 500,
            }}
          >
            Live site <ArrowUpRight size={11} />
          </a>
          <a
            href={project.githubUrl} target="_blank" rel="noopener noreferrer"
            className="font-dm no-underline flex-1 flex items-center justify-center gap-1.5"
            style={{
              fontSize: 12, color: "var(--text-muted)", padding: "9px 0",
              border: "0.5px solid var(--border)", borderRadius: 6,
            }}
          >
            <Github size={11} /> Source
          </a>
        </div>
      </div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// VERTICAL PROGRESS RAIL
// ─────────────────────────────────────────────────────────────────────────────

function ProgressRail({
  total,
  active,
  projects,
}: {
  total: number;
  active: number;
  projects: EnhancedProject[];
}) {
  return (
    <div
      className="absolute flex flex-col items-center gap-3"
      style={{ right: 28, top: "50%", transform: "translateY(-50%)", zIndex: 20 }}
    >
      {Array.from({ length: total }).map((_, i) => (
        <div key={i} className="relative flex items-center justify-center" style={{ width: 20, height: 20 }}>
          {/* Outer ring when active */}
          <AnimatePresence>
            {i === active && (
              <motion.div
                key="ring"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  position: "absolute",
                  width: 18, height: 18,
                  borderRadius: "50%",
                  border: `1.5px solid ${projects[i].glowColor}`,
                  boxShadow: `0 0 10px ${projects[i].glowColor}60`,
                }}
              />
            )}
          </AnimatePresence>
          {/* Dot */}
          <motion.div
            animate={{
              width: i === active ? 7 : 5,
              height: i === active ? 7 : 5,
              background: i === active ? projects[i].glowColor : "var(--border)",
              boxShadow: i === active ? `0 0 8px ${projects[i].glowColor}` : "none",
            }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ borderRadius: "50%", flexShrink: 0 }}
          />
        </div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN SECTION
//
// Desktop: sticky viewport + runway scroll, GSAP scrub drives slide transitions.
//   Each slide occupies the full viewport.
//   Transition: current slide text clips/fades left, image clips left.
//               next slide enters from right.
//
// Mobile: simple animated card list (no horizontal scroll nonsense on mobile).
//
// Architecture:
//   • Runway div:  height = n × 100vh  (provides scroll distance)
//   • Sticky div:  position:sticky, top:0, height:100vh  (locks panel)
//   • Each .proj-slide: absolute inset-0 (all stack on top of each other)
//   • GSAP timeline: clipPath + x transitions per slide pair
//   • scrub:0.6 = very responsive, no lag feel
// ─────────────────────────────────────────────────────────────────────────────

export default function Projects() {
  const headerRef  = useRef<HTMLDivElement>(null);
  const runwayRef  = useRef<HTMLDivElement>(null);
  const stageRef   = useRef<HTMLDivElement>(null);
  const stackRef   = useRef<HTMLDivElement>(null);
  const inView     = useInView(headerRef, { once: true, margin: "-80px" });
  const projects   = useEnhancedProjects();
  const ctxRef     = useRef<gsap.Context | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const n = projects.length;

  useEffect(() => {
    // Desktop only — mobile uses simple list
    const mq = window.matchMedia("(min-width: 640px)");
    if (!mq.matches) return;
    if (!runwayRef.current || !stageRef.current || !stackRef.current || n === 0) return;

    ctxRef.current?.revert();

    ctxRef.current = gsap.context(() => {
      const slides      = gsap.utils.toArray<HTMLElement>(".proj-slide",        stackRef.current!);
      const textPanels  = gsap.utils.toArray<HTMLElement>(".proj-text-panel",   stackRef.current!);
      const imgPanels   = gsap.utils.toArray<HTMLElement>(".proj-image-panel",  stackRef.current!);
      const imgs        = gsap.utils.toArray<HTMLElement>(".proj-img",          stackRef.current!);

      // ── Initial state ──────────────────────────────────────────────────────
      // Slide 0: fully visible, in place
      // Slides 1..n-1: sitting off-screen to the right, waiting
      slides.forEach((slide, i) => {
        if (i === 0) {
          gsap.set(slide, { xPercent: 0, zIndex: i + 1, autoAlpha: 1 });
        } else {
          gsap.set(slide, { xPercent: 100, zIndex: i + 1, autoAlpha: 1 });
        }
      });

      // Image parallax offset — images start slightly zoomed & shifted
      imgs.forEach((img, i) => {
        if (i !== 0) gsap.set(img, { scale: 1.1, xPercent: 5 });
        else gsap.set(img, { scale: 1.08, xPercent: 0 });
      });

      // Text panels: slide 0 visible, rest offset
      textPanels.forEach((panel, i) => {
        if (i !== 0) gsap.set(panel, { xPercent: 0 }); // hidden by parent slide
      });

      // ── Build scrubbed timeline ────────────────────────────────────────────
      const tl = gsap.timeline({ paused: true });

      for (let i = 0; i < n - 1; i++) {
        const currSlide  = slides[i];
        const nextSlide  = slides[i + 1];
        const currImg    = imgs[i];
        const nextImg    = imgs[i + 1];
        const idx        = i;

        const segStart = i;       // each transition = 1 unit in timeline

        // 1) Current slide exits LEFT — text panel slides out faster (parallax depth)
        tl.to(currSlide, {
          xPercent: -100,
          duration: 1,
          ease: "power2.inOut",
        }, segStart);

        // 2) Current image has subtle parallax — moves less than the slide
        tl.to(currImg, {
          xPercent: -8,
          scale: 1.05,
          duration: 1,
          ease: "power2.inOut",
        }, segStart);

        // 3) Next slide enters FROM RIGHT — lands at xPercent:0
        tl.to(nextSlide, {
          xPercent: 0,
          duration: 1,
          ease: "power2.inOut",
          onUpdate() {
            setActiveIdx(this.progress() >= 0.5 ? idx + 1 : idx);
          },
        }, segStart);

        // 4) Next image: parallax settle — was slightly offset, now neutral
        tl.to(nextImg, {
          xPercent: 0,
          scale: 1.04,
          duration: 1,
          ease: "power2.inOut",
        }, segStart);
      }

      // ── ScrollTrigger ──────────────────────────────────────────────────────
      ScrollTrigger.create({
        trigger: runwayRef.current,
        start: "top top",
        end: () => `+=${(n - 1) * window.innerHeight}`,
        pin: stageRef.current,
        pinSpacing: false,
        anticipatePin: 1,
        scrub: 0.4,
        animation: tl,
        invalidateOnRefresh: true,
        fastScrollEnd: true,
      });
    });

    return () => { ctxRef.current?.revert(); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [n]);

  return (
    <>
      {/* ── HEADER ─────────────────────────────────────────────────────── */}
      <div
        id="projects"
        ref={headerRef}
        style={{
          background: "var(--bg)",
          maxWidth: 800,
          margin: "0 auto",
          padding: "clamp(60px,10vh,100px) clamp(16px,4vw,40px) clamp(40px,6vh,72px)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            className="font-dm font-medium tracking-widest uppercase block"
            style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 12 }}
          >
            My Work
          </span>
          <h2
            className="font-syne font-bold"
            style={{
              fontSize: "clamp(28px,5vw,52px)",
              color: "var(--text-primary)",
              lineHeight: 1.05,
              marginBottom: 16,
              letterSpacing: "-0.02em",
            }}
          >
            Featured Projects
          </h2>
          <p
            className="font-dm leading-relaxed"
            style={{ fontSize: "clamp(13px,2vw,15px)", color: "var(--text-secondary)", maxWidth: 480 }}
          >
            A selection of things I've built — from privacy-first PDF tools to
            AI-powered restaurant systems and real-time collaboration engines.
          </p>
        </motion.div>
      </div>

      {/* ── DESKTOP: Runway + sticky scroll experience ─────────────────── */}
      <div
        ref={runwayRef}
        className="hidden sm:block"
        style={{
          position: "relative",
          height: `${n * 100}vh`,
          background: "var(--bg)",
          width: "100%",
        }}
      >
        <div
          ref={stageRef}
          style={{
            position: "relative",
            height: "100vh",
            width: "100%",
            overflow: "hidden",
            background: "var(--bg)",
            zIndex: 10,
            willChange: "transform",
          }}
        >
          {/* Card stack — overflow hidden clips slides entering/exiting */}
          <div
            ref={stackRef}
            style={{
              position: "absolute",
              inset: 0,
              overflow: "hidden",
            }}
          >
            {projects.map((project, i) => (
              <ProjectSlide
                key={project.title}
                project={project}
                index={i}
                total={n}
                isActive={i === activeIdx}
              />
            ))}
          </div>

          {/* Progress rail */}
          {n > 1 && (
            <ProgressRail total={n} active={activeIdx} projects={projects} />
          )}

          {/* Scroll hint — only on first slide */}
          <AnimatePresence>
            {activeIdx === 0 && (
              <motion.div
                key="hint"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute bottom-8 left-1/2 font-dm flex flex-col items-center gap-2"
                style={{ transform: "translateX(-50%)", zIndex: 20 }}
              >
                <span style={{ fontSize: 10, color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                  Scroll to explore
                </span>
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
                  style={{
                    width: 1, height: 28,
                    background: "linear-gradient(to bottom, var(--text-muted), transparent)",
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ── MOBILE: Stacked cards ────────────────────────────────────────── */}
      <div
        className="sm:hidden flex flex-col gap-6"
        style={{
          padding: "0 clamp(14px,4vw,24px) clamp(40px,8vh,80px)",
          background: "var(--bg)",
        }}
      >
        {projects.map((project, i) => (
          <MobileCard key={project.title} project={project} index={i} />
        ))}
      </div>

      {/* Bottom breathing room (desktop only) */}
      <div
        className="hidden sm:block"
        style={{ height: "clamp(40px,8vh,80px)", background: "var(--bg)" }}
      />
    </>
  );
}