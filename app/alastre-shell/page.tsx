"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const shortVideos = [
  "BGAp5IxdeeI",
  "RxxoJl3EA3Q",
  "u2a2gw-UoFE",
  "7KOvFo6IYdE",
  "g9RA4ls2CFY",
  "dJaZYx26yKc",
];

const projects = [
  {
    name: "Golan Casita Residence",
    description:
      "12,000+ sqft residential shell construction, covering excavation, structural elements, and roof system through sheathing.",
    cover: "/images/projects/golan/golan-1.jpg",
    images: [
      "/images/projects/golan/golan-2.jpg",
      "/images/projects/golan/golan-3.jpg",
      "/images/projects/golan/golan-4.jpg",
    ],
  },
  {
    name: "Bucare Guest House",
    
    description:
      "1200+ sqft structural shell work with concrete, block, coordination, and disciplined field execution — executed with full code compliance, respect for the owner’s trust, and a clear commitment to our role on site.",
    cover: "/images/projects/bucare/bucare-1.jpg",
    images: [
      "/images/projects/bucare/bucare-2.jpg",
      "/images/projects/bucare/bucare-3.jpg",
      "/images/projects/bucare/bucare-4.jpg",
    ],
  },
  {
    name: "Exterior Concrete Works",
    description:
      "Driveways, sidewalks, slab-related exterior scope, and structural concrete presentation.",
    cover: "/images/projects/concrete/concrete-1.jpg",
    images: [
      "/images/projects/concrete/concrete-1.jpg",
      "/images/projects/concrete/concrete-2.jpg",
      "/images/projects/concrete/concrete-3.jpg",
    ],
  },
];

function SectionTag({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-300 ${className}`}
    >
      {children}
    </div>
  );
}
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[10px] uppercase tracking-[0.24em] text-white/70 backdrop-blur-md sm:px-4 sm:text-[11px]">
      <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
      {children}
    </div>
  );
}

function PremiumBackButton({ compact = false }: { compact?: boolean }) {
  return (
    <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
      <Link
        href="https://www.alastreplastering.com"
        className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-cyan-300/25 bg-white/[0.05] font-semibold text-white/95 backdrop-blur-md transition-all duration-300 hover:border-cyan-300/50 hover:bg-cyan-300/[0.08] hover:shadow-[0_0_30px_rgba(34,211,238,0.22)] ${
          compact
            ? "px-4 py-2 text-[11px] sm:px-5 sm:text-sm"
            : "px-6 py-3 text-sm"
        }`}
      >
        <span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.20),transparent_65%)] opacity-0 blur-lg transition duration-300 group-hover:opacity-100" />

        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute -left-[35%] top-1/2 h-[180%] w-[24%] -translate-y-1/2 rounded-full bg-cyan-300/12 blur-xl"
          animate={{ x: ["0%", "420%"] }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <span className="pointer-events-none absolute -left-[120%] top-0 h-full w-[70%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent transition-all duration-700 group-hover:left-[140%]" />

        <ArrowLeft className="relative z-10 h-4 w-4 transition duration-300 group-hover:-translate-x-1" />
        <span className="relative z-10 tracking-[0.02em]">
          Back to Main Experience
        </span>
      </Link>
    </motion.div>
  );
}

function AnimatedShellLogo({ scrolled }: { scrolled: boolean }) {
  return (
    <motion.div
      className="hidden md:block"
      initial={{ opacity: 0, y: -10 }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="relative"
        animate={{
          scale: scrolled ? 1 : 1.08,
        }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
      >
        <motion.div
          className={`absolute inset-0 rounded-full blur-2xl transition-all duration-500 ${
            scrolled ? "bg-cyan-300/35" : "bg-cyan-300/20"
          }`}
          animate={{
            opacity: scrolled ? [0.3, 0.6, 0.3] : [0.15, 0.4, 0.15],
            scale: scrolled ? [1, 1.15, 1] : [0.95, 1.12, 0.95],
          }}
          transition={{
            duration: scrolled ? 2 : 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <img
          src="/images/alastre-shell-logo-blanco.png"
          alt="Alastre Shell Logo"
          className={`relative w-auto object-contain transition-all duration-500 hover:scale-110 ${
            scrolled
              ? "h-[30px] opacity-100 drop-shadow-[0_0_28px_rgba(34,211,238,0.35)]"
              : "h-[90px] opacity-90 drop-shadow-[0_0_18px_rgba(255,255,255,0.12)]"
          }`}
        />
      </motion.div>
    </motion.div>
  );
}

function SideBlueprints() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(80,170,255,0.10),transparent_26%),linear-gradient(to_bottom,rgba(7,11,17,0.45),rgba(7,11,17,0.94))]" />

      <motion.div
        animate={{ y: [0, -8, 0], x: [0, 6, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[8%] top-[16%] h-3.5 w-3.5 border border-cyan-300/25 bg-cyan-300/5 md:h-4 md:w-4"
      />
      <motion.div
        animate={{ y: [0, 10, 0], x: [0, -8, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[8%] top-[22%] h-4 w-4 border border-white/20 bg-white/5 md:h-5 md:w-5"
      />
      <motion.div
        animate={{ y: [0, -8, 0], x: [0, 8, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[10%] bottom-[18%] h-4 w-4 border border-cyan-300/20 bg-cyan-300/5 md:h-5 md:w-5"
      />
      <motion.div
        animate={{ y: [0, 9, 0], x: [0, -10, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[10%] bottom-[16%] h-3.5 w-3.5 border border-white/20 bg-white/5 md:h-4 md:w-4"
      />

      <svg
        className="absolute left-0 top-0 hidden h-full w-[22%] opacity-[0.16] md:block xl:w-[20%]"
        viewBox="0 0 320 900"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M210 220 L110 300 L210 380"
          stroke="rgba(120,220,255,0.65)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 1.2 }}
        />
        <motion.path
          d="M120 380 L120 560 L250 560 L250 380"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 1] }}
          transition={{
            duration: 2.2,
            delay: 0.35,
            repeat: Infinity,
            repeatDelay: 1.2,
          }}
        />
        <motion.path
          d="M165 560 L165 455 L205 455 L205 560"
          stroke="rgba(120,220,255,0.55)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 1] }}
          transition={{
            duration: 1.6,
            delay: 0.65,
            repeat: Infinity,
            repeatDelay: 1.2,
          }}
        />
        <motion.line
          x1="80"
          y1="260"
          x2="280"
          y2="260"
          stroke="rgba(120,220,255,0.16)"
          strokeWidth="1"
          animate={{
            y1: [260, 620, 260],
            y2: [260, 620, 260],
            opacity: [0, 0.65, 0],
          }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      <svg
        className="absolute right-0 top-0 hidden h-full w-[22%] opacity-[0.16] md:block xl:w-[20%]"
        viewBox="0 0 320 900"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M110 220 L210 300 L110 380"
          stroke="rgba(120,220,255,0.65)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 1.2 }}
        />
        <motion.path
          d="M70 380 L70 560 L200 560 L200 380"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 1] }}
          transition={{
            duration: 2.2,
            delay: 0.35,
            repeat: Infinity,
            repeatDelay: 1.2,
          }}
        />
        <motion.path
          d="M115 560 L115 455 L155 455 L155 560"
          stroke="rgba(120,220,255,0.55)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 1] }}
          transition={{
            duration: 1.6,
            delay: 0.65,
            repeat: Infinity,
            repeatDelay: 1.2,
          }}
        />
        <motion.line
          x1="40"
          y1="260"
          x2="240"
          y2="260"
          stroke="rgba(120,220,255,0.16)"
          strokeWidth="1"
          animate={{
            y1: [260, 620, 260],
            y2: [260, 620, 260],
            opacity: [0, 0.65, 0],
          }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "linear" }}
        />
      </svg>
    </div>
  );
}

function HeroShortsPlayer() {
  const [queue, setQueue] = useState<string[]>([]);
  const [currentVideo, setCurrentVideo] = useState("");
  const [loaded, setLoaded] = useState(false);

  const playerRef = useRef<any>(null);
  const playerHostRef = useRef<HTMLDivElement | null>(null);

  const shuffleVideos = (videos: string[]) => {
    const arr = [...videos];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const getNextVideo = (current: string, currentQueue: string[]) => {
    let nextQueue = [...currentQueue];

    if (nextQueue.length === 0) {
      nextQueue = shuffleVideos(shortVideos.filter((id) => id !== current));
    }

    const nextVideo = nextQueue[0];
    const remaining = nextQueue.slice(1);

    return { nextVideo, remaining };
  };

  useEffect(() => {
    const shuffled = shuffleVideos(shortVideos);
    setCurrentVideo(shuffled[0]);
    setQueue(shuffled.slice(1));
  }, []);

  useEffect(() => {
    if (!currentVideo || !playerHostRef.current) return;

    let cancelled = false;

    const loadYouTubeAPI = () => {
      return new Promise<void>((resolve) => {
        if ((window as any).YT && (window as any).YT.Player) {
          resolve();
          return;
        }

        const existingScript = document.querySelector(
          'script[src="https://www.youtube.com/iframe_api"]'
        );

        if (!existingScript) {
          const tag = document.createElement("script");
          tag.src = "https://www.youtube.com/iframe_api";
          document.body.appendChild(tag);
        }

        const previous = (window as any).onYouTubeIframeAPIReady;
        (window as any).onYouTubeIframeAPIReady = () => {
          if (typeof previous === "function") previous();
          resolve();
        };
      });
    };

    setLoaded(false);

    loadYouTubeAPI().then(() => {
      if (cancelled || !playerHostRef.current) return;

      if (playerRef.current && typeof playerRef.current.destroy === "function") {
        try {
          playerRef.current.destroy();
        } catch {}
      }

      playerHostRef.current.innerHTML = "";

      const mountNode = document.createElement("div");
      mountNode.style.width = "100%";
      mountNode.style.height = "100%";
      playerHostRef.current.appendChild(mountNode);

      playerRef.current = new (window as any).YT.Player(mountNode, {
        videoId: currentVideo,
        width: "100%",
        height: "100%",
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
        },
        events: {
          onReady: (event: any) => {
            if (cancelled) return;
            setLoaded(true);
            event.target.playVideo();
          },
          onStateChange: (event: any) => {
            const YT = (window as any).YT;
            if (!YT || cancelled) return;

            if (event.data === YT.PlayerState.ENDED) {
              const { nextVideo, remaining } = getNextVideo(currentVideo, queue);
              setQueue(remaining);
              setCurrentVideo(nextVideo);
            }
          },
        },
      });
    });

    return () => {
      cancelled = true;
    };
  }, [currentVideo, queue]);

  useEffect(() => {
    return () => {
      if (playerRef.current && typeof playerRef.current.destroy === "function") {
        try {
          playerRef.current.destroy();
        } catch {}
      }
    };
  }, []);

  return (
    <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-black/30 shadow-[0_24px_70px_rgba(0,0,0,0.42)] sm:rounded-[28px]">
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(7,11,17,0.88),rgba(7,11,17,0.18),rgba(7,11,17,0.30))]" />

      <motion.div
        animate={{ x: ["-10%", "110%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        className="absolute top-6 z-20 h-px w-32 bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent sm:top-8 sm:w-40"
      />

      <div className="relative z-10 flex items-center justify-between gap-2 p-4 sm:p-5">
        <div className="rounded-full border border-white/12 bg-black/25 px-3 py-2 text-[9px] uppercase tracking-[0.28em] text-white/70 backdrop-blur-md sm:px-4 sm:text-[11px]">
          Hero Shorts
        </div>

        <div className="rounded-full border border-white/12 bg-black/25 px-3 py-2 text-[9px] uppercase tracking-[0.28em] text-white/70 backdrop-blur-md sm:px-4 sm:text-[11px]">
          {currentVideo ? "Playing" : "Loading"}
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[420px] px-3 pb-0 sm:px-4">
        <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[18px] bg-black sm:rounded-[22px]">
          <div ref={playerHostRef} className="absolute inset-0 h-full w-full" />

          {!loaded && (
            <div className="pointer-events-none absolute inset-0 z-10 animate-pulse bg-white/5" />
          )}
        </div>
      </div>

      <div className="relative z-10 p-4 sm:p-5">
        <div className="mb-2 text-[10px] uppercase tracking-[0.28em] text-white/55 sm:text-[11px]">
          Alastre Shell
        </div>
        <h2 className="text-lg font-semibold leading-tight tracking-[-0.03em] sm:text-2xl md:text-[2rem] xl:text-[2.35rem]">
        Structure first. Presence always.
        </h2>
      </div>
    </div>
  );
}

type ImageModalProps = {
  src: string;
  alt: string;
  onClose: () => void;
};

function ImageModal({ src, alt, onClose }: ImageModalProps) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white hover:text-black"
        aria-label="Close image"
      >
        <X className="h-5 w-5" />
      </button>

      <div
        className="relative max-h-[92vh] max-w-[96vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={alt}
          className="max-h-[92vh] max-w-[96vw] rounded-[18px] object-contain shadow-[0_30px_100px_rgba(0,0,0,0.45)]"
        />
      </div>
    </div>
  );
}

export default function AlastreShellPage() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Alastre Shell",
    url: "https://www.alastreplastering.com/alastre-shell",
    image: "https://www.alastreplastering.com/images/alastre-shell-hero.jpg",
    description:
      "Shell construction, structural concrete, driveways, sidewalks, slabs, block, columns, tie beams, and exterior structural execution.",
    areaServed: "South Florida",
    telephone: "786-724-6573",
  };

  return (
    <>
      <main className="relative min-h-screen overflow-x-hidden bg-[#070b11] text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <SideBlueprints />

        <motion.div
          animate={{
            backgroundColor: scrolled
              ? "rgba(7, 11, 17, 0.80)"
              : "rgba(7, 11, 17, 0)",
            borderColor: scrolled
              ? "rgba(255,255,255,0.08)"
              : "rgba(255,255,255,0)",
            boxShadow: scrolled
              ? "0 20px 50px rgba(0,0,0,0.30)"
              : "0 0 0 rgba(0,0,0,0)",
            backdropFilter: scrolled ? "blur(18px)" : "blur(0px)",
          }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className="sticky top-0 z-50 border-b"
        >
          <motion.div
            animate={{
              paddingTop: scrolled ? "10px" : "16px",
              paddingBottom: scrolled ? "10px" : "16px",
            }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-4 sm:px-6 md:px-8"
          >
            <motion.div
              animate={{
                scale: scrolled ? 0.96 : 1,
                y: scrolled ? -1 : 0,
              }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              <PremiumBackButton compact />
            </motion.div>

            <motion.div
              animate={{
                scale: scrolled ? 0.9 : 1,
                y: scrolled ? -1 : 0,
              }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              <AnimatedShellLogo scrolled={scrolled} />
            </motion.div>
          </motion.div>
        </motion.div>

        <section className="relative z-10 mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-4 px-4 pb-10 pt-4 sm:px-6 md:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-5 lg:pb-14">
          <div className="grid gap-4">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.045] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:rounded-[28px] sm:p-6 md:p-8"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(90,180,255,0.10),transparent_26%)]" />

              <div className="relative">
                <SectionTag>Structural Shell Division</SectionTag>

                <div className="mt-4 space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-cyan-300/20 bg-cyan-300/8 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-cyan-200">
                      South Florida Shell
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-white/65">
                      Real Jobsite Content
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {["Concrete", "Block", "Tie Beams", "Columns"].map((item) => (
                      <div
                        key={item}
                        className="rounded-[14px] border border-white/10 bg-black/20 px-3 py-3 text-center text-[11px] font-medium uppercase tracking-[0.18em] text-white/70"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <h1 className="mt-5 max-w-4xl text-[2.15rem] font-semibold leading-[0.95] tracking-[-0.05em] sm:text-[3.8rem] md:text-[4.8rem] xl:text-[5.5rem]">
                  Shell work
                  <span className="block text-white/45">with</span>
                  <span className="block">real presence.</span>
                </h1>

                <p className="mt-5 max-w-2xl text-sm leading-6 text-white/72 sm:text-base sm:leading-7 md:text-lg">
                Complete structural execution — concrete, block, and shell systems built with precision.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition duration-300 hover:scale-[1.02]"
                  >
                    View Shell Projects
                  </a>

                  <a
                    href="#video"
                    className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:border-cyan-300/35 hover:bg-white/10"
                  >
                    Watch Video
                  </a>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {[
                    "Shell homes",
                    "Structural concrete",
                    "Driveways & sidewalks",
                  ].map((item, idx) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 + idx * 0.05 }}
                      whileHover={{ y: -3 }}
                      className="rounded-[16px] border border-white/10 bg-black/20 px-4 py-4"
                    >
                      <div className="text-sm font-medium text-white/90">
                        {item}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="grid gap-4 md:grid-cols-[0.8fr_1.2fr]">
              <motion.div
                whileHover={{ y: -3 }}
                className="relative overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.045] p-5 shadow-[0_16px_40px_rgba(0,0,0,0.32)] backdrop-blur-xl sm:rounded-[24px]"
              >
                <div className="relative flex h-full items-center justify-center">
                <img
  src="/images/alastre-contact.JPG"
  alt="Alastre Shell logo"
  className="h-[90px] sm:h-[120px] md:h-[160px] lg:h-[180px] w-auto object-contain"
/>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -3 }}
                className="relative overflow-hidden rounded-[20px] border border-white/10 bg-black/20 p-5 shadow-[0_16px_40px_rgba(0,0,0,0.32)] sm:rounded-[24px]"
              >
                <div className="text-[10px] uppercase tracking-[0.24em] text-white/45 sm:text-[11px]">
                  Shell Identity
                </div>
                <div className="mt-3 text-lg font-semibold tracking-[-0.03em] sm:text-xl md:text-2xl">
                  Same world. Stronger shell presence.
                </div>
                <p className="mt-3 max-w-xl text-sm leading-6 text-white/65 sm:text-base">
                  Compact, interactive, premium, and built to match the main site
                  without feeling overloaded on mobile.
                </p>

                <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-cyan-200">
                  Interactive shell section
                  <ChevronRight className="h-4 w-4" />
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >
            <HeroShortsPlayer />
          </motion.div>
        </section>

        <section
          id="video"
          className="relative z-10 mx-auto mt-10 w-full max-w-[1280px] scroll-mt-24 px-4 sm:px-6 md:px-8 md:mt-14"
        >
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55 }}
            className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
          >
            <div>
            <Link
  href="https://www.youtube.com/@AlastrePlastering/shorts"
  target="_blank"
  rel="noopener noreferrer"
  className="group block cursor-pointer rounded-[24px] transition-all duration-300"
>
  <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 group-hover:border-red-500/40 group-hover:bg-white/[0.05] group-hover:shadow-[0_0_35px_rgba(255,0,0,0.18)]">
    <SectionTag className="transition duration-300 group-hover:text-red-400">
      Watch More On YouTube
    </SectionTag>

    <h2 className="mt-4 text-2xl font-semibold tracking-[-0.05em] transition-all duration-300 group-hover:scale-[1.01] group-hover:text-white sm:text-4xl md:text-5xl lg:text-6xl">
      Built - Not Explained.
    </h2>
  </div>
</Link>
            </div>

            <p className="max-w-2xl text-sm leading-6 text-white/62 sm:text-base">
               



            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.99 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.04] p-2 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:rounded-[28px] sm:p-3"
          >
            <div className="aspect-video overflow-hidden rounded-[18px] sm:rounded-[22px]">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/AhC1Dsm4S-o?autoplay=1&mute=1&start=7&loop=1&playlist=AhC1Dsm4S-o&rel=0&playsinline=1"
                title="Alastre Shell Company Video"
                allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </motion.div>
        </section>

        <section
          id="projects"
          className="relative z-10 mx-auto mt-10 w-full max-w-[1280px] scroll-mt-24 px-4 pb-20 sm:px-6 md:px-8 md:mt-14"
        >
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55 }}
            className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <SectionTag>Featured Shell Projects</SectionTag>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.05em] sm:text-4xl md:text-5xl lg:text-6xl">
                Built projects.
              </h2>
            </div>

            <p className="max-w-2xl text-sm leading-6 text-white/62 sm:text-base">
              Shell projects by name with shell images only.
            </p>
          </motion.div>

          <div className="space-y-6 sm:space-y-8">
            {projects.map((project, idx) => (
              <motion.article
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.04] p-4 shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:rounded-[28px] sm:p-5 md:p-6"
              >
                <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedImage({ src: project.cover, alt: project.name })
                    }
                    className="relative min-h-[220px] overflow-hidden rounded-[18px] border border-white/10 text-left sm:rounded-[22px]"
                  >
                    <img
                      src={project.cover}
                      alt={project.name}
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(7,11,17,0.82),rgba(7,11,17,0.20))]" />
                    <div className="absolute left-3 top-3 rounded-full border border-white/12 bg-black/25 px-3 py-2 text-[9px] uppercase tracking-[0.28em] text-white/70 backdrop-blur-md sm:left-4 sm:top-4 sm:px-4 sm:text-[11px]">
                      Project {idx + 1}
                    </div>
                  </button>

                  <div className="flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.24em] text-white/42 sm:text-[11px]">
                        Shell Construction
                      </div>
                      <h3 className="mt-3 text-xl font-semibold tracking-[-0.04em] sm:text-2xl md:text-[1.9rem]">
                        {project.name}
                      </h3>
                      <p className="mt-4 max-w-2xl text-sm leading-6 text-white/62 sm:text-base">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
                  {project.images.map((image, imageIndex) => (
                    <motion.button
                      type="button"
                      key={image}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.24 }}
                      onClick={() =>
                        setSelectedImage({
                          src: image,
                          alt: `${project.name} ${imageIndex + 1}`,
                        })
                      }
                      className="group overflow-hidden rounded-[18px] border border-white/10 bg-black/20 text-left sm:rounded-[20px]"
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={image}
                          alt={`${project.name} ${imageIndex + 1}`}
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        />
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <PremiumBackButton />
          </div>
        </section>
      </main>

      {selectedImage && (
        <ImageModal
          src={selectedImage.src}
          alt={selectedImage.alt}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
}