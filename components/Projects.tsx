"use client";

import { useRef, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github, ArrowRight, Calendar } from "lucide-react";
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
  bgFrom: string;
  bgTo: string;
};

// ─────────────────────────────────────────────────────────────────────────────
// COLOR MAP
// ─────────────────────────────────────────────────────────────────────────────

function getProjectUIProps(color: string, isDark: boolean) {
  const colorMap: Record<string, { gradient: string; glow: string; bgFrom: string; bgTo: string }> = {
    emerald: {
      gradient: "linear-gradient(90deg,#10b981,#0d9488)",
      glow: "#10b981",
      bgFrom: isDark ? "#061812" : "#d1f2eb",
      bgTo:   isDark ? "#0c2e1e" : "#a7f3d0",
    },
    amber: {
      gradient: "linear-gradient(90deg,#f59e0b,#ea580c)",
      glow: "#f59e0b",
      bgFrom: isDark ? "#1a1002" : "#fef3c7",
      bgTo:   isDark ? "#2e1c04" : "#fed7aa",
    },
    violet: {
      gradient: "linear-gradient(90deg,#a78bfa,#4f46e5)",
      glow: "#a78bfa",
      bgFrom: isDark ? "#0c071e" : "#ede9fe",
      bgTo:   isDark ? "#160d36" : "#ddd6fe",
    },
    rose: {
      gradient: "linear-gradient(90deg,#f43f5e,#ec4899)",
      glow: "#f43f5e",
      bgFrom: isDark ? "#180508" : "#ffe4e6",
      bgTo:   isDark ? "#2a0c14" : "#fbcfe8",
    },
    sky: {
      gradient: "linear-gradient(90deg,#38bdf8,#0ea5e9)",
      glow: "#38bdf8",
      bgFrom: isDark ? "#020e1c" : "#e0f2fe",
      bgTo:   isDark ? "#061a2e" : "#bae6fd",
    },
    lime: {
      gradient: "linear-gradient(90deg,#84cc16,#16a34a)",
      glow: "#84cc16",
      bgFrom: isDark ? "#081202" : "#dcfce7",
      bgTo:   isDark ? "#0f1e05" : "#bef264",
    },
  };
  const props = colorMap[color] || colorMap.violet;
  return { gradientBar: props.gradient, glowColor: props.glow, bgFrom: props.bgFrom, bgTo: props.bgTo };
}

function useEnhancedProjects(): EnhancedProject[] {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  const isDark = mounted ? resolvedTheme === "dark" : false;
  return projectsData.map((p) => ({ ...p, ...getProjectUIProps(p.color, isDark) }));
}

// ─────────────────────────────────────────────────────────────────────────────
// CANVAS IMAGE
// ─────────────────────────────────────────────────────────────────────────────

function ProjectImage({ project }: { project: EnhancedProject }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const draw = () => {
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      if (!w || !h) return;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);

      const bg = ctx.createLinearGradient(0, 0, w, h);
      bg.addColorStop(0, project.bgFrom);
      bg.addColorStop(1, project.bgTo);
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      ctx.globalAlpha = 0.22;
      for (let i = 0; i < 5; i++) {
        const x = w * (0.08 + i * 0.22);
        const y = h * (0.28 + Math.sin(i * 1.6) * 0.3);
        const r = 50 + i * 24;
        const g = ctx.createRadialGradient(x, y, 0, x, y, r);
        g.addColorStop(0, project.accent);
        g.addColorStop(1, "transparent");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 0.28;
      ctx.fillStyle = project.accent;
      for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 14; col++) {
          if (Math.random() > 0.42) continue;
          const x = (col + 0.5) * (w / 13);
          const y = (row + 0.5) * (h / 4.5);
          ctx.beginPath();
          ctx.arc(x, y, 1 + Math.random() * 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 0.1;
      ctx.strokeStyle = project.accent;
      ctx.lineWidth = 0.8;
      for (let i = 0; i < 3; i++) {
        const cx = w * (0.2 + i * 0.3);
        const s = 22 + i * 18;
        ctx.strokeRect(cx - s / 2, h * 0.46 - s / 2, s, s);
      }
      ctx.globalAlpha = 0.1;
      ctx.strokeStyle = project.accent;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, h * 0.72);
      ctx.lineTo(w, h * 0.28);
      ctx.stroke();
      ctx.globalAlpha = 1;
    };
    const ro = new ResizeObserver(draw);
    ro.observe(canvas);
    draw();
    return () => ro.disconnect();
  }, [project]);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: "clamp(150px, 22vh, 240px)" }}
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, transparent 35%, rgba(0,0,0,0.45) 100%)" }}
      />
      <div className="absolute bottom-3 left-4 pr-4 sm:bottom-4 sm:left-5">
        <p
          className="font-syne font-bold leading-none"
          style={{ fontSize: "clamp(17px, 3vw, 26px)", color: "var(--text-primary)" }}
        >
          {project.title}
        </p>
      </div>
      <div
        className="absolute bottom-4 right-4 sm:right-5 flex items-center gap-1 font-dm"
        style={{ fontSize: 12, color: "var(--text-secondary)" }}
      >
        <Calendar size={11} />
        {project.year}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CARD CONTENT
// ─────────────────────────────────────────────────────────────────────────────

function CardContent({ project }: { project: EnhancedProject }) {
  return (
    <div
      className="relative rounded-2xl md:rounded-3xl overflow-hidden"
      style={{
        background: "var(--surface)",
        border: "0.5px solid var(--border)",
        boxShadow: `0 1px 0 var(--border) inset, 0 24px 80px rgba(0,0,0,0.1), 0 0 120px ${project.glowColor}12`,
      }}
    >
      <div style={{ height: 3, background: project.gradientBar, boxShadow: `0 0 18px ${project.glowColor}80` }} />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px at 50% -8%, ${project.glowColor}12 0%, transparent 55%)`,
          borderRadius: "inherit",
        }}
      />
      <ProjectImage project={project} />
      <div className="p-4 sm:p-5 md:p-6 lg:p-7">
        <div className="flex items-start justify-between mb-3">
          <p
            className="font-dm font-medium tracking-widest uppercase"
            style={{ fontSize: "clamp(9px, 1.4vw, 11px)", color: "var(--text-muted)" }}
          >
            {project.subtitle}
          </p>
          <div className="flex gap-1.5 flex-shrink-0 ml-2">
            {([
              { href: project.githubUrl, Icon: Github,       label: "GitHub" },
              { href: project.liveUrl,   Icon: ExternalLink, label: "Live"   },
            ] as const).map(({ href, Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.93 }}
                className="flex items-center justify-center rounded-xl flex-shrink-0"
                style={{
                  width: 32, height: 32,
                  border: "0.5px solid var(--border)",
                  background: "var(--surface-2)",
                  color: "var(--text-muted)",
                  transition: "color .15s, border-color .15s, background .15s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = project.accent;
                  el.style.borderColor = project.accent + "55";
                  el.style.background = project.glowColor + "18";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = "var(--text-muted)";
                  el.style.borderColor = "var(--border)";
                  el.style.background = "var(--surface-2)";
                }}
              >
                <Icon size={13} />
              </motion.a>
            ))}
          </div>
        </div>

        <p
          className="font-dm leading-relaxed"
          style={{
            fontSize: "clamp(12px, 1.7vw, 13.5px)",
            color: "var(--text-secondary)",
            marginBottom: "clamp(10px, 1.8vh, 18px)",
            lineHeight: 1.7,
          }}
        >
          {project.description}
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(4px, 0.9vh, 8px) 14px",
            marginBottom: "clamp(10px, 1.8vh, 18px)",
          }}
        >
          {project.highlights.map((h: string) => (
            <div
              key={h}
              className="flex items-center gap-2 font-dm"
              style={{ fontSize: "clamp(10px, 1.4vw, 12px)", color: "var(--text-secondary)" }}
            >
              <span
                className="flex-shrink-0 rounded-full"
                style={{ width: 5, height: 5, background: project.accent, boxShadow: `0 0 4px ${project.accent}` }}
              />
              {h}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5" style={{ marginBottom: "clamp(10px, 1.8vh, 18px)" }}>
          {project.tech.slice(0, 5).map((t: string) => (
            <span
              key={t}
              className="font-dm rounded-lg"
              style={{
                fontSize: "clamp(9px, 1.2vw, 11px)",
                padding: "3px 9px",
                border: "0.5px solid var(--border)",
                background: "var(--surface-2)",
                color: "var(--text-muted)",
              }}
            >
              {t}
            </span>
          ))}
          {project.tech.length > 5 && (
            <span
              className="font-dm rounded-lg"
              style={{
                fontSize: "clamp(9px, 1.2vw, 11px)",
                padding: "3px 9px",
                border: "0.5px solid var(--border)",
                background: "var(--surface-2)",
                color: "var(--text-muted)",
              }}
            >
              +{project.tech.length - 5}
            </span>
          )}
        </div>

        <motion.a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-dm font-medium no-underline"
          style={{ fontSize: "clamp(11px, 1.4vw, 12px)", color: project.accent }}
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 420, damping: 22 }}
        >
          View project
          <ArrowRight size={12} />
        </motion.a>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PROJECTS SECTION
//
// ┌─────────────────────────────────────────────────────────────────┐
// │  <section>   (position: relative)                               │
// │                                                                  │
// │  ┌── Header ──────────────────────────────────────────────────┐ │
// │  │  "My Work" + title + description  (normal flow)            │ │
// │  └────────────────────────────────────────────────────────────┘ │
// │                                                                  │
// │  ┌── Runway div  (height = N × 100vh) ───────────────────────┐ │
// │  │                                                             │ │
// │  │  ┌── Sticky panel  (position:sticky, top:0, h:100vh) ───┐  │ │
// │  │  │  Full-viewport panel. Does NOT scroll away.           │  │ │
// │  │  │  Contains the card stack centered in the viewport.    │  │ │
// │  │  │                                                        │  │ │
// │  │  │  card[0]  z:1  → visible from start                   │  │ │
// │  │  │  card[1]  z:2  → translateY(100vh), GSAP slides in    │  │ │
// │  │  │  card[N]  z:N+1 → same                                │  │ │
// │  │  └────────────────────────────────────────────────────────┘  │ │
// │  │  (runway is taller than sticky panel →                       │ │
// │  │   sticky panel stays locked while runway scrolls through)    │ │
// │  └─────────────────────────────────────────────────────────────┘ │
// └─────────────────────────────────────────────────────────────────┘
//
// GSAP scroll trigger anchors to runway's TOP edge.
// Card[i] enters when runway has scrolled  (i-1)*100vh  from its top.
// Card[i] completes entrance at             i*100vh.
//
// KEY FIX vs previous version:
//   The header is OUTSIDE the runway. This means the sticky panel starts
//   at the very top of the runway and sticks at top:0 of the viewport
//   (accounting for the fixed navbar via top: var(--nav-height, 0px)).
//   No partial card crop, no section scroll-away bug.
// ─────────────────────────────────────────────────────────────────────────────

// How many vh of scroll runway each card transition occupies.
// 100vh = user must scroll one full screen height per card.
const SCROLL_PER_CARD = 100;

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stackRef   = useRef<HTMLDivElement>(null);
  const headerRef  = useRef<HTMLDivElement>(null);
  const inView     = useInView(headerRef, { once: true, margin: "-80px" });
  const projects   = useEnhancedProjects();
  const ctxRef     = useRef<gsap.Context | null>(null);

  useEffect(() => {
    if (!sectionRef.current || !stackRef.current || projects.length === 0) return;

    ctxRef.current?.revert();

    ctxRef.current = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".project-card", stackRef.current!);

      // Set initial state: all cards except first start below viewport
      cards.forEach((card, i) => {
        if (i !== 0) {
          gsap.set(card, { y: "100vh" });
        }
      });

      // Single pinned timeline for all cards
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          start: "top top",
          end: () => `+=${cards.length * 100}%`,
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      // Build timeline: scale current card, slide next card up
      cards.forEach((card, i) => {
        const isLastCard = i === cards.length - 1;

        // Skip card 0 - keep it fixed and visible
        if (i === 0) {
          // Just bring in card 1 without scaling card 0
          if (cards[i + 1]) {
            timeline.to(
              cards[i + 1],
              {
                y: 0,
                ease: "power2.inOut",
              }
            );
          }
          return;
        }

        // Scale + dim current card (only for cards 1+ that aren't the last)
        if (!isLastCard) {
          timeline.to(card, {
            scale: 0.93,
            opacity: 0.6,
            ease: "power1.inOut",
          });
        }

        // Slide next card up from bottom (only if next exists)
        if (cards[i + 1]) {
          timeline.to(
            cards[i + 1],
            {
              y: 0,
              ease: "power2.inOut",
            },
            "<" // Start simultaneously with scale (or at same time for last card)
          );
        }
      });
    }, sectionRef);

    return () => { ctxRef.current?.revert(); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projects.length]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{ background: "var(--bg)", position: "relative" }}
    >

      {/* ── HEADER — normal flow, sits above the sticky runway ─────────── */}
      {/* Lives OUTSIDE the runway so it doesn't affect sticky positioning  */}
      <div
        ref={headerRef}
        style={{
          maxWidth: 800,
          margin: "0 auto",
          padding: "clamp(60px, 10vh, 100px) clamp(16px, 4vw, 40px) clamp(40px, 6vh, 72px)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            className="font-dm font-medium tracking-widest uppercase block"
            style={{ fontSize: 11, color: "var(--text-muted)", marginBottom: 12 }}
          >
            My Work
          </span>
          <h2
            className="font-syne font-bold"
            style={{ fontSize: "clamp(28px, 5vw, 52px)", color: "var(--text-primary)", lineHeight: 1.05, marginBottom: 16 }}
          >
            Featured Projects
          </h2>
          <p
            className="font-dm leading-relaxed"
            style={{ fontSize: "clamp(13px, 2vw, 15px)", color: "var(--text-secondary)", maxWidth: 480 }}
          >
            A selection of things I've built — from privacy-first PDF tools to
            AI-powered restaurant systems and real-time collaboration engines.
          </p>
        </motion.div>
      </div>

      {/* ── RUNWAY — drives all scroll math ────────────────────────────── */}
      {/*
        Removed: runway div is no longer needed with pinned timeline.
        The section itself is pinned by ScrollTrigger.
      */}

      {/* ── CARD STACK ─────────────────────────────────────────────── */}
      {/*
        Simple absolute-positioned cards.
        - Card 0 starts at y: 0 (visible)
        - Cards 1..N start at y: 100vh (below, out of view)
        - Timeline animates y: 100vh → 0 as user scrolls
        - Increased container height to show card more prominently
      */}
      <div
        style={{
          position: "relative",
          height: "120vh",
          width: "100%",
          overflow: "hidden",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          paddingTop: "clamp(40px, 0vh, 100px)",
        }}
      >
        <div
          ref={stackRef}
          style={{
            position: "relative",
            width: "min(92vw, 940px)",
            height: "clamp(440px, 78vh, 720px)",
          }}
        >
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="project-card"
              style={{
                position: "absolute",
                inset: 0,
                zIndex: i + 1,
                willChange: "transform, opacity, scale",
              }}
            >
              <CardContent project={project} />
            </div>
          ))}
        </div>
      </div>

      {/* Breathing room at the bottom of the section */}
      <div style={{ height: "1vh" }} />
    </section>
  );
}