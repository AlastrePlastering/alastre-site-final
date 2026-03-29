"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

function IconBase({
  children,
  className = "h-5 w-5",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function UpBeamIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M12 19V7" />
      <path d="m6 11 6-6 6 6" />
      <path d="M5 21h14" />
    </IconBase>
  );
}


function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </IconBase>
  );
}

function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="m9 18 6-6-6-6" />
    </IconBase>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="m8 6 10 6-10 6z" fill="currentColor" stroke="none" />
    </IconBase>
  );
}

function BuildingIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M4 20V6l8-3 8 3v14" />
      <path d="M9 20v-4h6v4" />
      <path d="M8 8h.01" />
      <path d="M12 8h.01" />
      <path d="M16 8h.01" />
      <path d="M8 12h.01" />
      <path d="M12 12h.01" />
      <path d="M16 12h.01" />
    </IconBase>
  );
}

function HammerIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="m14 7 3-3 3 3-3 3" />
      <path d="M4 20 14 10" />
      <path d="m11 7 6 6" />
    </IconBase>
  );
}

function LayersIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="m12 4 8 4-8 4-8-4 8-4Z" />
      <path d="m4 12 8 4 8-4" />
      <path d="m4 16 8 4 8-4" />
    </IconBase>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M12 3 5 6v5c0 5 3.5 8 7 10 3.5-2 7-5 7-10V6l-7-3Z" />
      <path d="m9.5 12 1.7 1.7 3.8-3.8" />
    </IconBase>
  );
}

function BadgeIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M12 3l2.1 2.1 3-.3.9 2.9 2.7 1.4-1 2.8 1 2.8-2.7 1.4-.9 2.9-3-.3L12 21l-2.1-2.1-3 .3-.9-2.9-2.7-1.4 1-2.8-1-2.8L6 7.7l.9-2.9 3 .3L12 3Z" />
      <path d="m9.5 12 1.7 1.7 3.8-3.8" />
    </IconBase>
  );
}

function PanelIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 10h18" />
    </IconBase>
  );
}

function PointerIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="m7 4 10 8-4 1 2 5-2 1-2-5-3 3V4Z" />
    </IconBase>
  );
}

function HomeIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V20h14V9.5" />
    </IconBase>
  );
}

function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <rect x="3" y="7" width="18" height="12" rx="2" />
      <path d="M9 7V5h6v2" />
      <path d="M3 12h18" />
    </IconBase>
  );
}

function FolderIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M3 7h6l2 2h10v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
    </IconBase>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
      <circle cx="9.5" cy="7" r="3" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.9" />
      <path d="M16 3.1a3 3 0 0 1 0 5.8" />
    </IconBase>
  );
}

function MessageIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M4 5h16v11H8l-4 3V5Z" />
    </IconBase>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.4 2.6a2 2 0 0 1-.6 1.7l-1.8 1.8a16 16 0 0 0 7 7l1.8-1.8a2 2 0 0 1 1.7-.6l2.6.4a2 2 0 0 1 1.7 2Z" />
    </IconBase>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </IconBase>
  );
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M12 21s6-5.3 6-11a6 6 0 1 0-12 0c0 5.7 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </IconBase>
  );
}


function SparkIcon({ className }: { className?: string }) {
  return (
    <IconBase className={className}>
      <path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Z" />
      <path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z" />
      <path d="M5 14l.9 2.1L8 17l-2.1.9L5 20l-.9-2.1L2 17l2.1-.9L5 14Z" />
    </IconBase>
  );
}

function InstagramBadge() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function AquaGlow({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute rounded-full bg-cyan-300/28 blur-3xl ${className}`}
    />
  );
}

function BackgroundTexture({
  src,
  alt,
  opacityClass = "opacity-[0.03]",
}: {
  src: string;
  alt: string;
  opacityClass?: string;
}) {
  return (
    <div className={`absolute inset-0 ${opacityClass}`}>
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </div>
  );
}

function NavLink({
  href,
  children,
  icon: Icon,
}: {
  href: string;
  children: React.ReactNode;
  icon?: React.ComponentType<{ className?: string }>;
}) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 320, damping: 18 }}
      className="group relative inline-flex"
    >
      <a
        href={href}
        className="group relative inline-flex items-center overflow-hidden rounded-2xl border border-transparent px-1.5 py-1.5 text-sm font-medium text-zinc-700"
      >
        <span className="absolute inset-0 rounded-2xl border border-cyan-200/70 bg-gradient-to-r from-cyan-50 via-white to-cyan-50 opacity-0 shadow-[0_10px_30px_rgba(34,211,238,0.12)] transition duration-200 group-hover:opacity-100" />
        <span className="absolute inset-x-3 bottom-1 h-[2px] origin-left rounded-full bg-gradient-to-r from-cyan-400 via-cyan-300 to-transparent scale-x-0 transition duration-200 group-hover:scale-x-100" />
        <span className="relative z-10 flex items-center gap-2 rounded-[14px] px-3 py-2.5 transition-colors group-hover:text-zinc-950">
          {Icon ? (
            <span className="text-cyan-600">
              <Icon className="h-4 w-4" />
            </span>
          ) : null}
          <span>{children}</span>
        </span>
      </a>
    </motion.div>
  );
}

function SocialDockLink({
  href,
  label,
  sublabel,
  dark = true,
  children,
}: {
  href: string;
  label: string;
  sublabel: string;
  dark?: boolean;
  children: React.ReactNode;
}) {
  return (
    <motion.div whileHover={{ y: -5, scale: 1.02 }} className="group">
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`flex items-center gap-3 rounded-2xl px-4 py-3 shadow-2xl ${
          dark
            ? "border border-white/10 bg-zinc-950/95 text-white backdrop-blur"
            : "bg-white text-zinc-950"
        }`}
      >
        {children}
        <div className="hidden sm:block">
          <p
            className={`text-[10px] uppercase tracking-[0.25em] ${
              dark ? "text-zinc-400" : "text-zinc-500"
            }`}
          >
            {label}
          </p>
          <p className="text-sm font-semibold">{sublabel}</p>
        </div>
      </a>
    </motion.div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  light?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7 }}
      className="max-w-3xl"
    >
      <p
        className={`text-sm font-semibold uppercase tracking-[0.35em] ${
          light ? "text-cyan-200/80" : "text-zinc-500"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-4xl font-bold tracking-tight md:text-5xl ${
          light ? "text-white" : "text-zinc-950"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-4 text-lg leading-8 ${
          light ? "text-zinc-300" : "text-zinc-600"
        }`}
      >
        {description}
      </p>
    </motion.div>
  );
}

function WhyCard({
  title,
  text,
  icon: Icon,
}: {
  title: string;
  text: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-[0_18px_50px_rgba(0,0,0,0.05)]"
    >
      <BackgroundTexture
        src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&fit=crop&w=1800&q=80"
        alt="Concrete texture"
        opacityClass="opacity-[0.015]"
      />
      <div className="relative">
        <div className="w-fit rounded-2xl bg-zinc-950 p-3 text-white">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="mt-4 text-xl font-bold text-zinc-950">{title}</h3>
        <p className="mt-3 leading-7 text-zinc-600">{text}</p>
      </div>
    </motion.div>
  );
}

function BeforeAfterSlider() {
  const [position, setPosition] = useState(52);

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
      <div className="relative h-[420px] w-full">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80"
          alt="Shell construction"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute left-0 top-0 h-full overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <img
            src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1600&q=80"
            alt="Drywall interior finish"
            className="h-full w-full max-w-none object-cover"
            style={{ width: "100vw" }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />
        <div className="absolute left-5 top-5 rounded-full bg-black/55 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white backdrop-blur">
          Finished Interior
        </div>
        <div className="absolute right-5 top-5 rounded-full bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-zinc-950 backdrop-blur">
          Shell Structure
        </div>
        <div
          className="absolute bottom-0 top-0"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        >
          <div className="h-full w-[3px] bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.08)]" />
          <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/90 text-zinc-950 shadow-xl backdrop-blur">
            <PointerIcon className="h-5 w-5" />
          </div>
        </div>
        <input
          type="range"
          min="15"
          max="85"
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          className="absolute inset-x-6 bottom-24 z-20 h-2 cursor-pointer appearance-none rounded-full bg-white/45 accent-cyan-500"
          aria-label="Compare shell and finished work"
        />
      </div>
    </div>
  );
}

function BuildYourVision() {
  const [tool, setTool] = useState<"draw" | "erase">("draw");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isDrawingRef = useRef(false);
  const lastPointRef = useRef<{ x: number; y: number } | null>(null);

  const drawBlueprintBackground = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number
  ) => {
    ctx.clearRect(0, 0, width, height);

    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, "#0a0f1f");
    gradient.addColorStop(1, "#111827");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    ctx.strokeStyle = "rgba(103, 232, 249, 0.10)";
    ctx.lineWidth = 1;

    for (let x = 0; x < width; x += 24) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    for (let y = 0; y < height; y += 24) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    ctx.strokeStyle = "rgba(103, 232, 249, 0.22)";
    ctx.lineWidth = 1.2;

    for (let x = 0; x < width; x += 120) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    for (let y = 0; y < height; y += 120) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    const resizeCanvas = () => {
      const ratio = window.devicePixelRatio || 1;
      const rect = parent.getBoundingClientRect();

      canvas.width = rect.width * ratio;
      canvas.height = 420 * ratio;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `420px`;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      drawBlueprintBackground(ctx, rect.width, 420);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  const getPoint = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return null;

    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const startDrawing = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const point = getPoint(e);
    if (!point) return;
    isDrawingRef.current = true;
    lastPointRef.current = point;
  };

  const draw = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawingRef.current) return;

    const canvas = canvasRef.current;
    const point = getPoint(e);
    if (!canvas || !point || !lastPointRef.current) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.beginPath();
    ctx.moveTo(lastPointRef.current.x, lastPointRef.current.y);
    ctx.lineTo(point.x, point.y);

    if (tool === "draw") {
      ctx.strokeStyle = "#67e8f9";
      ctx.lineWidth = 3;
      ctx.shadowColor = "rgba(103, 232, 249, 0.35)";
      ctx.shadowBlur = 8;
    } else {
      ctx.strokeStyle = "#111827";
      ctx.lineWidth = 14;
      ctx.shadowBlur = 0;
    }

    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.stroke();

    lastPointRef.current = point;
  };

  const stopDrawing = () => {
    isDrawingRef.current = false;
    lastPointRef.current = null;
  };

  const resetCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    drawBlueprintBackground(ctx, rect.width, rect.height);
  };

  return (
    <section className="relative overflow-hidden bg-zinc-950 py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(103,232,249,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.10),transparent_24%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200/80">
              Interactive Experience
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              Build Your Vision
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-300">
              Sketch a concept, trace your idea, and interact with the page
              without affecting the rest of the website.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => setTool("draw")}
                className={`rounded-2xl px-5 py-3 text-sm font-semibold transition ${
                  tool === "draw"
                    ? "bg-cyan-300 text-zinc-950"
                    : "border border-white/10 bg-white/5 text-white"
                }`}
              >
                Draw
              </button>

              <button
                onClick={() => setTool("erase")}
                className={`rounded-2xl px-5 py-3 text-sm font-semibold transition ${
                  tool === "erase"
                    ? "bg-cyan-300 text-zinc-950"
                    : "border border-white/10 bg-white/5 text-white"
                }`}
              >
                Erase
              </button>

              <button
                onClick={resetCanvas}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Reset
              </button>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <p className="text-[10px] uppercase tracking-[0.26em] text-zinc-400">
                  Tool
                </p>
                <p className="mt-3 text-xl font-bold">
                  {tool === "draw" ? "Drawing Mode" : "Erase Mode"}
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <p className="text-[10px] uppercase tracking-[0.26em] text-zinc-400">
                  Style
                </p>
                <p className="mt-3 text-xl font-bold">Blueprint Board</p>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <p className="text-[10px] uppercase tracking-[0.26em] text-zinc-400">
                  Experience
                </p>
                <p className="mt-3 text-xl font-bold">Interactive</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-cyan-200/15 bg-black/20 p-3 shadow-[0_25px_90px_rgba(6,182,212,0.18)] backdrop-blur">
            <div className="mb-3 flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-white/5 px-4 py-3">
              <div>
                <p className="text-[10px] uppercase tracking-[0.26em] text-zinc-400">
                  Live Blueprint Canvas
                </p>
                <p className="text-sm font-semibold text-white">
                  Draw a home concept directly on the page
                </p>
              </div>
              <div className="rounded-full bg-cyan-300/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-200">
                Active
              </div>
            </div>

            <div className="relative rounded-[1.5rem] border border-white/10 bg-zinc-900">
              <canvas
                ref={canvasRef}
                onPointerDown={startDrawing}
                onPointerMove={draw}
                onPointerUp={stopDrawing}
                onPointerLeave={stopDrawing}
                className="block w-full cursor-crosshair rounded-[1.5rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  const shellServices = [
    "Shell construction homes",
    "Concrete foundations and slabs",
    "Concrete driveways and sidewalks",
    "CMU block installation",
    "Columns, tie beams, and structural formwork",
    "Rebar placement and structural coordination",
  ];

  const plasteringServices = [
    "Interior metal framing",
    "Drywall hanging",
    "Drywall finish Level 4 and 5",
    "Exterior stucco systems",
    "Residential and commercial build-outs",
  ];

  const stats = [
    { value: "2", label: "Specialized companies" },
    { value: "5", label: "Core trade groups" },
    { value: "1", label: "Standard of quality" },
  ];

  const highlights = [
    {
      title: "Clear Division of Services",
      text: "Visitors instantly understand what belongs to Alastre Shell and what belongs to Alastre Plastering.",
      icon: LayersIcon,
    },
    {
      title: "Professional Presentation",
      text: "Premium layout, motion, spacing, and detail create a stronger image for clients and builders.",
      icon: ShieldIcon,
    },
    {
      title: "Built to Convert",
      text: "The page keeps social links visible at all times and pushes traffic to Instagram and YouTube Shorts.",
      icon: BadgeIcon,
    },
  ];

  const whyAlastre = [
    {
      title: "We build by plan",
      text: "No guessing, no improvising, no messy execution. We organize every phase with structure and purpose.",
      icon: ShieldIcon,
    },
    {
      title: "Clean work. No rework.",
      text: "We care about finish, alignment, detail, and presentation because clean execution protects time and money.",
      icon: BadgeIcon,
    },
    {
      title: "Real coordination",
      text: "Shell, drywall, finish, and stucco are treated like a system, not random trades fighting each other on site.",
      icon: LayersIcon,
    },
  ];

  const serviceTabs = [
    {
      key: "shell",
      name: "Alastre Shell",
      subtitle: "Concrete, shell homes, driveways, sidewalks",
      icon: BuildingIcon,
      services: shellServices,
    },
    {
      key: "plastering",
      name: "Alastre Plastering",
      subtitle: "Framing, drywall, finish, stucco",
      icon: HammerIcon,
      services: plasteringServices,
    },
  ];

  const projects = [
    {
      title: "Alastre Shell",
      description:
        "Shell construction, structural concrete, driveways, sidewalks, and full exterior structural execution.",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Alastre Plastering",
      description:
        "Interior framing, drywall, finish, and build-outs delivered with clean production and detail.",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Stucco Systems",
      description:
        "Exterior stucco finishes built with strong prep, durability, and a clean final look.",
      image:
        "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Project Review",
      text: "We define the correct division and make the scope feel organized from the start.",
    },
    {
      step: "02",
      title: "Visual Structure",
      text: "Motion, layers, interactive panels, and stronger sections keep the website alive while the user scrolls.",
    },
    {
      step: "03",
      title: "Conversion Focus",
      text: "The dock, calls to action, and presentation modules keep attention moving toward your social channels and estimate flow.",
    },
  ];

  const [activeTab, setActiveTab] = useState("shell");
  const [liveMode, setLiveMode] = useState("queue");
  const [motionMode, setMotionMode] = useState("left");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [aiMessage, setAiMessage] = useState("");
  const [aiReply, setAiReply] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [contactSending, setContactSending] = useState(false);
  const [contactStatus, setContactStatus] = useState("");
  

  const activeService = useMemo(
    () => serviceTabs.find((tab) => tab.key === activeTab) ?? serviceTabs[0],
    [activeTab]
  );
  const ActiveServiceIcon = activeService.icon;

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  async function handleAiSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!aiMessage.trim()) return;

    try {
      setAiLoading(true);
      setAiReply("");

      const res = await fetch("/api/assistant", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: aiMessage,
        }),
      });

      const data = await res.json();
      setAiReply(data.reply || "No response received.");
    } catch (error) {
      console.error("AI request failed:", error);
      setAiReply("Something went wrong. Please try again.");
    } finally {
      setAiLoading(false);
    }
  };
async function handleContactSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();

  if (!contactName || !contactEmail || !contactMessage) {
    setContactStatus("Please fill all required fields.");
    return;
  }

  try {
    setContactSending(true);
    setContactStatus("");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: contactName,
        email: contactEmail,
        phone: contactPhone,
        message: contactMessage,
      }),
    });

    const data = await res.json();

    if (data.success) {
      setContactStatus("Message sent successfully.");
      setContactName("");
      setContactEmail("");
      setContactPhone("");
      setContactMessage("");
    } else {
      setContactStatus("Error sending message.");
    }

  } catch (error) {
    console.error(error);
    setContactStatus("Something went wrong.");
  } finally {
    setContactSending(false);
  }
  }

    <div className="min-h-screen overflow-x-hidden bg-white text-zinc-900 selection:bg-cyan-100 selection:text-zinc-950">
      <AnimatePresence>
        {showBackToTop ? (
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 30, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            onClick={scrollToTop}
            aria-label="Back to top"
            className="fixed bottom-[24rem] right-4 z-[90] group md:right-5"
          >
            <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-[1.7rem] border border-cyan-300/30 bg-zinc-950/95 text-white shadow-[0_20px_50px_rgba(6,182,212,0.30)] backdrop-blur-xl transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_28px_70px_rgba(6,182,212,0.38)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(103,232,249,0.24),transparent_42%),radial-gradient(circle_at_75%_75%,rgba(168,85,247,0.16),transparent_38%)]" />
              <div className="absolute inset-[6px] rounded-[1.25rem] border border-white/10" />
              <div className="absolute h-8 w-8 rounded-full bg-cyan-300/15 blur-xl transition duration-300 group-hover:scale-125" />
              <span className="relative z-10 flex flex-col items-center">
                <UpBeamIcon className="h-5 w-5 text-cyan-200" />
                <span className="mt-1 text-[9px] font-bold uppercase tracking-[0.28em] text-zinc-300">
                  Top
                </span>
              </span>
            </div>
          </motion.button>
        ) : null}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setIsAiOpen((prev) => !prev)}
        className="fixed bottom-5 left-5 z-[90] flex items-center gap-2 rounded-2xl border border-cyan-400/30 bg-zinc-950/90 px-4 py-3 text-sm font-semibold text-white shadow-[0_20px_60px_rgba(34,211,238,0.25)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-cyan-300/50"
      >
        <SparkIcon className="h-5 w-5" />
        Ask Alastre
      </button>

      <AnimatePresence>
        {isAiOpen ? (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 left-5 z-[95] w-[min(92vw,420px)] overflow-hidden rounded-[24px] border border-white/10 bg-zinc-950/95 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
          >
            <div className="border-b border-white/10 px-4 py-3">
              <div className="text-sm font-semibold text-white">Ask Alastre AI</div>
              <div className="text-xs text-zinc-400">
                Construction help only. No pricing.
              </div>
            </div>

            <div className="space-y-3 p-4">
              <form onSubmit={handleAiSubmit} className="space-y-3">
                <textarea
                  value={aiMessage}
                  onChange={(e) => setAiMessage(e.target.value)}
                  placeholder="Ask about block, concrete, drywall, stucco, framing..."
                  className="min-h-[110px] w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-500"
                />

                <button
                  type="submit"
                  disabled={aiLoading}
                  className="inline-flex items-center justify-center rounded-2xl bg-cyan-400 px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {aiLoading ? "Thinking..." : "Send"}
                </button>
              </form>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-zinc-200">
                {aiReply ? aiReply : "Your reply will appear here."}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="fixed bottom-5 right-5 z-[70] flex flex-col gap-3">
        <SocialDockLink
          href="https://www.instagram.com/alastreplastering"
          label="Instagram"
          sublabel="Alastre Plastering"
        >
          <div className="rounded-xl bg-white/10 p-2">
            <InstagramBadge />
          </div>
        </SocialDockLink>
        <SocialDockLink
          href="https://www.instagram.com/alastreshell"
          label="Instagram"
          sublabel="Alastre Shell"
        >
          <div className="rounded-xl bg-white/10 p-2">
            <InstagramBadge />
          </div>
        </SocialDockLink>
        <SocialDockLink
          href="https://www.youtube.com/@AlastrePlastering/shorts"
          label="YouTube"
          sublabel="Watch Shorts"
          dark={false}
        >
          <div className="rounded-xl bg-zinc-950 p-2 text-white">
            <PlayIcon className="h-5 w-5" />
          </div>
        </SocialDockLink>
      </div>

      <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/75 shadow-[0_10px_30px_rgba(0,0,0,0.03)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-6"
          >
            <div className="flex flex-col items-center">
              <img
                src="/logos/alastre-plastering.png"
                alt="Alastre Plastering logo"
                className="mb-2 h-14 w-auto object-contain"
              />
              <span className="text-[11px] font-medium uppercase tracking-[0.35em] text-zinc-500">
                Alastre Plastering
              </span>
            </div>
            <span className="text-xs text-zinc-400">•</span>
            <div className="flex flex-col items-center">
              <img
                src="/logos/alastre-shell.png"
                alt="Alastre Shell logo"
                className="mb-2 h-12 w-auto object-contain"
              />
              <span className="text-[11px] font-medium uppercase tracking-[0.35em] text-zinc-500">
                Alastre Shell
              </span>
            </div>
          </motion.div>

          <nav className="hidden items-center gap-2 text-sm font-medium md:flex">
            <NavLink href="#home" icon={HomeIcon}>
              Alastre Home
            </NavLink>
            <NavLink href="#services" icon={BriefcaseIcon}>
              Capabilities
            </NavLink>
            <NavLink href="#work" icon={FolderIcon}>
              Featured Projects
            </NavLink>
            <NavLink href="#about" icon={UsersIcon}>
              Who We Are
            </NavLink>
            <NavLink href="#contact" icon={MessageIcon}>
              Start a Project
            </NavLink>
          </nav>
        </div>
      </header>

      <section id="home" className="relative isolate overflow-hidden bg-zinc-950 text-white">
        <div className="absolute inset-0">
          <img
    src="/images/backgroundalastre.jpg"
    alt="Construction background"
    className="h-full w-full object-cover"
  />
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black/75 to-zinc-900/70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(103,232,249,0.18),transparent_24%),radial-gradient(circle_at_82%_78%,rgba(103,232,249,0.14),transparent_24%),radial-gradient(circle_at_60%_30%,rgba(168,85,247,0.10),transparent_22%)]" />
        </div>

        <div className="fixed left-5 top-28 z-[65] hidden flex-col gap-4 xl:flex">
          <motion.div
            drag
            dragMomentum={false}
            whileHover={{ scale: 1.02 }}
            className="w-64 cursor-grab rounded-[2rem] border border-cyan-200/20 bg-zinc-950/82 p-4 text-white shadow-[0_25px_80px_rgba(6,182,212,0.22)] backdrop-blur-xl active:cursor-grabbing"
          >
            <div className="mb-3 flex items-center gap-3">
              <div className="rounded-2xl bg-cyan-300/15 p-3 text-cyan-200">
                <PanelIcon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-400">
                  Live Module
                </p>
                <p className="text-sm font-semibold">Active Capabilities</p>
              </div>
            </div>

            <div className="space-y-2">
              <button
                onClick={() => setLiveMode("queue")}
                className={`w-full rounded-2xl border px-3 py-2 text-left transition ${
                  liveMode === "queue"
                    ? "border-cyan-300/40 bg-cyan-300/15 text-white"
                    : "border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.22em]">
                    Active Projects
                  </span>
                  <span className="text-sm font-semibold">Projects</span>
                </div>
              </button>

              <button
                onClick={() => setLiveMode("trades")}
                className={`w-full rounded-2xl border px-3 py-2 text-left transition ${
                  liveMode === "trades"
                    ? "border-cyan-300/40 bg-cyan-300/15 text-white"
                    : "border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.22em]">
                    Trade Range
                  </span>
                  <span className="text-sm font-semibold">Divisions</span>
                </div>
              </button>

              <button
                onClick={() => setLiveMode("coverage")}
                className={`w-full rounded-2xl border px-3 py-2 text-left transition ${
                  liveMode === "coverage"
                    ? "border-cyan-300/40 bg-cyan-300/15 text-white"
                    : "border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.22em]">
                    Coverage
                  </span>
                  <span className="text-sm font-semibold">South Florida</span>
                </div>
              </button>
            </div>

            <div className="mt-3 rounded-2xl border border-white/10 bg-white/5 p-3">
              {liveMode === "queue" ? (
                <div>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-zinc-400">
                    Live Status
                  </p>
                  <p className="mt-2 text-sm font-semibold">Current Workflow</p>
                  <p className="mt-1 text-xs leading-6 text-zinc-300">
                    From shell construction to drywall finish, we keep every phase moving
                    with structure, coordination, and clean execution.
                  </p>
                </div>
              ) : liveMode === "trades" ? (
                <div>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-zinc-400">
                    Division Focus
                  </p>
                  <p className="mt-2 text-sm font-semibold">Core Divisions</p>
                  <p className="mt-1 text-xs leading-6 text-zinc-300">
                    Alastre Shell handles structural concrete, block, slabs, driveways,
                    and shell execution. Alastre Plastering handles framing, drywall,
                    finish, and stucco.
                  </p>
                </div>
              ) : (
                <div>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-zinc-400">
                    Coverage Area
                  </p>
                  <p className="mt-2 text-sm font-semibold">South Florida Coverage</p>
                  <p className="mt-1 text-xs leading-6 text-zinc-300">
                    Serving Miami-Dade, Broward, Homestead, Pinecrest, Southwest Ranches,
                    and surrounding areas.
                  </p>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            drag
            dragMomentum={false}
            whileHover={{ scale: 1.02 }}
            className="w-64 cursor-grab rounded-[2rem] border border-fuchsia-300/15 bg-zinc-950/82 p-4 text-white shadow-[0_25px_80px_rgba(168,85,247,0.18)] backdrop-blur-xl active:cursor-grabbing"
          >
            <div className="mb-3 flex items-center gap-3">
              <div className="rounded-2xl bg-white/10 p-3 text-cyan-200">
                <PointerIcon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
                  Motion
                </p>
                <p className="text-sm font-semibold">Scroll Behavior</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setMotionMode("left")}
                className={`rounded-xl px-2 py-2 text-[10px] uppercase tracking-[0.22em] transition ${
                  motionMode === "left"
                    ? "bg-cyan-300/20 text-cyan-100"
                    : "bg-white/5 text-zinc-400"
                }`}
              >
                Left
              </button>
              <button
                onClick={() => setMotionMode("right")}
                className={`rounded-xl px-2 py-2 text-[10px] uppercase tracking-[0.22em] transition ${
                  motionMode === "right"
                    ? "bg-cyan-300/20 text-cyan-100"
                    : "bg-white/5 text-zinc-400"
                }`}
              >
                Right
              </button>
              <button
                onClick={() => setMotionMode("bottom")}
                className={`rounded-xl px-2 py-2 text-[10px] uppercase tracking-[0.22em] transition ${
                  motionMode === "bottom"
                    ? "bg-cyan-300/20 text-cyan-100"
                    : "bg-white/5 text-zinc-400"
                }`}
              >
                Bottom
              </button>
            </div>

            <div className="mt-3 rounded-2xl border border-white/10 bg-white/5 p-3">
              <div className="relative h-20 overflow-hidden rounded-2xl bg-black/20">
                {motionMode === "left" ? (
                  <motion.div
                    initial={{ x: -80, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    key="left-preview"
                    className="absolute left-3 top-5 rounded-xl bg-cyan-300/25 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-white"
                  >
                    Shell enters from left
                  </motion.div>
                ) : motionMode === "right" ? (
                  <motion.div
                    initial={{ x: 80, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    key="right-preview"
                    className="absolute right-3 top-5 rounded-xl bg-fuchsia-300/20 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-white"
                  >
                    Plastering enters from right
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    key="bottom-preview"
                    className="absolute left-1/2 top-5 -translate-x-1/2 rounded-xl bg-white/15 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-white"
                  >
                    Contact rises from bottom
                  </motion.div>
                )}
              </div>
              <p className="mt-3 text-xs leading-6 text-zinc-300">
                This motion preview shows how your sections can reveal cleanly while users scroll.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="relative mx-auto grid min-h-[88vh] max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="mb-6 inline-flex rounded-full border border-cyan-200/35 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-zinc-200 backdrop-blur">
              South Florida Construction
            </div>

            <h1 className="text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              Two companies. <br />
              One powerful presence.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 md:text-xl">
              <span className="font-semibold text-white">
                Alastre Plastering
              </span>{" "}
              handles framing, drywall, finish, and stucco.
              <span className="font-semibold text-white"> Alastre Shell</span>{" "}
              handles shell construction homes, concrete driveways, sidewalks,
              and structural concrete work.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <motion.div whileHover={{ y: -4, scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-4 text-sm font-semibold text-zinc-950 shadow-2xl"
                >
                  Request Estimate <ArrowRightIcon className="h-4 w-4" />
                </a>
              </motion.div>

              <motion.div whileHover={{ y: -4, scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-6 py-4 text-sm font-semibold text-white backdrop-blur hover:bg-white/10"
                >
                  Explore Services <ChevronRightIcon className="h-4 w-4" />
                </a>
              </motion.div>
            </div>

            <div className="mt-12 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.12 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/12 to-white/6 p-5 shadow-lg shadow-cyan-400/15 backdrop-blur"
                >
                  <p className="text-3xl font-black">{stat.value}</p>
                  <p className="mt-2 text-sm text-zinc-300">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="grid gap-5"
          >
            <motion.div
              whileHover={{ y: -8, rotate: -1 }}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-7 shadow-2xl backdrop-blur-xl"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-white/10 p-3">
                  <BuildingIcon className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-zinc-300">
                    Company 01
                  </p>
                  <h2 className="text-2xl font-bold">Alastre Shell</h2>
                </div>
              </div>
              <p className="mt-5 text-zinc-300">
                Shell construction homes, concrete driveways, sidewalks, block,
                rebar, slabs, columns, and structural execution.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8, rotate: 1 }}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-7 shadow-2xl backdrop-blur-xl"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-white/10 p-3">
                  <HammerIcon className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-zinc-300">
                    Company 02
                  </p>
                  <h2 className="text-2xl font-bold">Alastre Plastering</h2>
                </div>
              </div>
              <p className="mt-5 text-zinc-300">
                Interior framing, drywall, finish, and exterior stucco with
                production, clean detail, and strong presentation.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <BuildYourVision />

      <section
        id="services"
        className="relative overflow-hidden bg-[linear-gradient(to_bottom,rgba(255,255,255,1),rgba(244,251,255,1),rgba(255,255,255,1))] py-24"
      >
        <BackgroundTexture
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80"
          alt="Drywall background"
          opacityClass="opacity-[0.025]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(103,232,249,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.06),transparent_24%)]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <SectionTitle
            eyebrow="Services"
            title="Clear scopes. Premium presentation."
            description="The page separates both companies the right way so clients instantly understand what Alastre Plastering does and what Alastre Shell does."
          />

          <div className="mt-16 grid gap-8 lg:grid-cols-[0.42fr_0.58fr]">
            <div className="space-y-4">
              {serviceTabs.map((tab) => {
                const TabIcon = tab.icon;
                const selected = tab.key === activeTab;

                return (
                  <motion.button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    whileHover={{ y: -4, scale: 1.01 }}
                    className={`group relative w-full overflow-hidden rounded-[2rem] border p-6 text-left transition duration-300 ${
                      selected
                        ? "border-cyan-200 bg-zinc-950 text-white shadow-[0_20px_60px_rgba(6,182,212,0.18)]"
                        : "border-zinc-200 bg-white text-zinc-900 hover:border-cyan-100 hover:shadow-xl"
                    }`}
                  >
                    {selected ? (
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/15 via-transparent to-transparent" />
                    ) : null}
                    <div className="relative flex items-start gap-4">
                      <div
                        className={`rounded-2xl p-3 ${
                          selected
                            ? "bg-white/10"
                            : "bg-cyan-50 text-cyan-600"
                        }`}
                      >
                        <TabIcon className="h-6 w-6" />
                      </div>
                      <div>
                        <p
                          className={`text-xs uppercase tracking-[0.3em] ${
                            selected ? "text-cyan-100/70" : "text-zinc-500"
                          }`}
                        >
                          Company
                        </p>
                        <h3 className="mt-1 text-2xl font-bold">{tab.name}</h3>
                        <p
                          className={`mt-2 text-sm ${
                            selected ? "text-zinc-300" : "text-zinc-600"
                          }`}
                        >
                          {tab.subtitle}
                        </p>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <BackgroundTexture
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1800&q=80"
                alt="Construction texture"
                opacityClass="opacity-[0.02]"
              />
              <AquaGlow className="-right-10 -top-10 h-48 w-48" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.key}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.35 }}
                  className="relative"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <div className="rounded-2xl bg-zinc-950 p-3 text-white shadow-lg shadow-cyan-200/20">
                      <ActiveServiceIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-cyan-600">
                        Interactive View
                      </p>
                      <h3 className="text-3xl font-bold text-zinc-950">
                        {activeService.name}
                      </h3>
                    </div>
                  </div>

                  <p className="max-w-2xl text-lg leading-8 text-zinc-600">
                    {activeService.subtitle}. This section gives the page more
                    movement and lets visitors interact instead of only reading
                    static blocks.
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {activeService.services.map((service, index) => (
                      <motion.div
                        key={service}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: index * 0.05 }}
                        whileHover={{ y: -4 }}
                        className="rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4 text-zinc-700 transition hover:border-cyan-200 hover:bg-cyan-50/40"
                      >
                        {service}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  whileHover={{ y: -8, scale: 1.01 }}
                  className="group relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-white p-7 shadow-[0_18px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_22px_60px_rgba(6,182,212,0.12)]"
                >
                  <BackgroundTexture
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=80"
                    alt="Drywall texture"
                    opacityClass="opacity-[0.015]"
                  />
                  <div className="relative">
                    <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-300 via-cyan-200 to-transparent" />
                    <div className="w-fit rounded-2xl bg-cyan-50 p-3 text-cyan-600">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-2xl font-bold text-zinc-950">
                      {item.title}
                    </h3>
                    <p className="mt-3 leading-7 text-zinc-600">{item.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="work" className="relative overflow-hidden bg-zinc-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle
            eyebrow="Featured Work"
            title="Built to feel alive, not flat."
            description="This section uses layered cards, stronger spacing, depth, and motion so the site feels premium instead of just text inside boxes."
            light
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {processSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-300 to-transparent" />
                <p className="text-5xl font-black text-cyan-200/70">{item.step}</p>
                <h3 className="mt-5 text-2xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 leading-7 text-zinc-300">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl backdrop-blur"
              >
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-64 w-full object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-[1deg]"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="mt-4 leading-7 text-zinc-300">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(to_bottom,rgba(255,255,255,1),rgba(242,252,255,1),rgba(250,245,255,0.45),rgba(255,255,255,1))] py-24">
        <BackgroundTexture
          src="https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&fit=crop&w=1800&q=80"
          alt="Concrete shell background"
          opacityClass="opacity-[0.05]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right_center,rgba(103,232,249,0.12),transparent_28%),radial-gradient(circle_at_left_bottom,rgba(168,85,247,0.08),transparent_26%)]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[0.52fr_0.48fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-zinc-500">
                Interactive Feel
              </p>
              <h3 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 md:text-4xl">
                Move the slider and feel the difference between structure and
                finish.
              </h3>
              <p className="mt-4 text-lg leading-8 text-zinc-600">
                This module makes the site feel alive while showing the range
                between shell execution and finished interior presentation.
              </p>
            </div>

            <BeforeAfterSlider />
          </div>

          <div className="mt-20 grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-zinc-500">
                Why Alastre
              </p>
              <h3 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 md:text-4xl">
                We do not build like random trades. We build like a system.
              </h3>
              <p className="mt-4 text-lg leading-8 text-zinc-600">
                This is the section that tells builders, owners, and developers
                why your company deserves serious trust.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1">
              {whyAlastre.map((item) => (
                <WhyCard
                  key={item.title}
                  title={item.title}
                  text={item.text}
                  icon={item.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="relative overflow-hidden py-24">
        <BackgroundTexture
          src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1800&q=80"
          alt="Drywall installation background"
          opacityClass="opacity-[0.025]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.92),rgba(255,255,255,0.96))]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <AquaGlow className="-left-20 top-10 h-64 w-64" />
          <AquaGlow className="bottom-0 right-0 h-72 w-72" />

          <div>
            <SectionTitle
              eyebrow="About"
              title="Two separate companies, one serious standard."
              description="Alastre Shell stays focused on shell homes, structural concrete, driveways, and sidewalks. Alastre Plastering stays focused on framing, drywall, finish, and stucco. The site now makes that difference look sharp and intentional."
            />
          </div>

          <div className="grid gap-5">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7 }}
              whileHover={{ y: -6 }}
              className="rounded-[2rem] bg-zinc-950 p-8 text-white shadow-2xl"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
                Coverage
              </p>
              <p className="mt-3 text-3xl font-bold">Residential and commercial work</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              whileHover={{ y: -6 }}
              className="rounded-[2rem] border border-zinc-200 bg-zinc-50 p-8 shadow-xl"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                Presence
              </p>
              <p className="mt-3 text-3xl font-bold text-zinc-950">
                Dynamic layout with motion and constant social traffic buttons
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative overflow-hidden bg-[linear-gradient(to_bottom,rgba(255,255,255,1),rgba(244,251,255,1),rgba(248,244,255,0.42),rgba(9,9,11,1))] py-24"
      >
        <BackgroundTexture
          src="https://images.unsplash.com/photo-1600607687644-c7f34b5063c8?auto=format&fit=crop&w=1800&q=80"
          alt="Stucco finish background"
          opacityClass="opacity-[0.035]"
        />
        <BackgroundTexture
          src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1800&q=80"
          alt="Stucco wall texture"
          opacityClass="opacity-[0.025]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.16),transparent_28%),radial-gradient(circle_at_left_center,rgba(168,85,247,0.12),transparent_22%)]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-zinc-500">
                Contact
              </p>
              <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
                Ready to price your project?
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-600">
                The form is ready for your real phone, email, and estimate
                workflow. The social dock stays visible at the bottom right
                across the full page to push traffic to Instagram and YouTube
                Shorts.
              </p>

              <div className="mt-8 grid gap-4 text-zinc-700">
                <motion.div whileHover={{ x: 6 }} className="flex items-center gap-3">
                  <PhoneIcon className="h-5 w-5 text-cyan-600" />
                  <span>Add your business phone</span>
                </motion.div>
                <motion.div whileHover={{ x: 6 }} className="flex items-center gap-3">
                  <MailIcon className="h-5 w-5 text-cyan-600" />
                  <span>Add your business email</span>
                </motion.div>
                <motion.div whileHover={{ x: 6 }} className="flex items-center gap-3">
                  <MapPinIcon className="h-5 w-5 text-fuchsia-500" />
                  <span>South Florida service area</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              whileHover={{ y: -4 }}
              className="rounded-[2rem] border border-zinc-200 bg-white/90 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur"
            >
              <BackgroundTexture
                src="https://images.unsplash.com/photo-1600607687644-c7f34b5063c8?auto=format&fit=crop&w=1800&q=80"
                alt="Stucco texture"
                opacityClass="opacity-[0.015]"
              />
              
                <form onSubmit={handleContactSubmit} className="relative grid gap-4">

  <input
    type="text"
    placeholder="Name"
    value={contactName}
    onChange={(e) => setContactName(e.target.value)}
    className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:border-cyan-400"
    required
  />

  <input
    type="email"
    placeholder="Email"
    value={contactEmail}
    onChange={(e) => setContactEmail(e.target.value)}
    className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:border-cyan-400"
    required
  />

  <input
    type="text"
    placeholder="Phone"
    value={contactPhone}
    onChange={(e) => setContactPhone(e.target.value)}
    className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:border-cyan-400"
  />

  <textarea
    placeholder="Tell us about your project..."
    value={contactMessage}
    onChange={(e) => setContactMessage(e.target.value)}
    className="min-h-[140px] w-full resize-none rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:border-cyan-400"
    required
  />

  <button
    type="submit"
    disabled={contactSending}
    className="rounded-2xl bg-zinc-950 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-800 disabled:opacity-60"
  >
    {contactSending ? "Sending..." : "Send Message"}
  </button>

  {contactStatus && (
    <p
      className={`text-sm ${
        contactStatus.includes("success")
          ? "text-green-600"
          : "text-red-500"
      }`}
    >
      {contactStatus}
    </p>
  )}


</form>
        
       


          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative mt-20 overflow-hidden rounded-[2.25rem] border border-white/10 bg-zinc-950 px-8 py-10 text-white shadow-[0_25px_90px_rgba(0,0,0,0.35)]"
          >
            <BackgroundTexture
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=80"
              alt="Construction footer background"
              opacityClass="opacity-[0.10]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(6,182,212,0.18),rgba(9,9,11,0.95),rgba(168,85,247,0.16))]" />
            <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-200/80">
                  Final Section
                </p>
                <h3 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                  Built for strong first impressions and real client trust.
                </h3>
                <p className="mt-4 max-w-xl text-lg leading-8 text-zinc-300">
                  This footer can later hold your real phone, email, quote link,
                  project gallery, or direct lead form without feeling empty at
                  the end of the page.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <p className="text-[10px] uppercase tracking-[0.26em] text-zinc-400">
                    Brand Split
                  </p>
                  <p className="mt-3 text-xl font-bold">Shell + Plastering</p>
                </div>
                <div className="rounded-[1.5rem] border border-cyan-300/20 bg-cyan-300/10 p-5 backdrop-blur">
                  <p className="text-[10px] uppercase tracking-[0.26em] text-cyan-100/70">
                    Color Energy
                  </p>
                  <p className="mt-3 text-xl font-bold">Turquoise + Violet</p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <p className="text-[10px] uppercase tracking-[0.26em] text-zinc-400">
                    Lead Ready
                  </p>
                  <p className="mt-3 text-xl font-bold">Estimate Flow</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
