"use client";

import { useEffect, useRef, useState } from "react";

function animateValue(
  start: number,
  end: number,
  duration: number,
  onUpdate: (value: number) => void
) {
  const startTime = performance.now();

  function frame(now: number) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(start + (end - start) * eased);

    onUpdate(value);

    if (progress < 1) {
      requestAnimationFrame(frame);
    }
  }

  requestAnimationFrame(frame);
}

export default function VisitCounter() {
  const [displayVisits, setDisplayVisits] = useState(0);
  const [realVisits, setRealVisits] = useState<number | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;

    fetch("/api/visits", {
      method: "POST",
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((data) => {
        const total = typeof data.visits === "number" ? data.visits : 0;
        setRealVisits(total);
        animateValue(0, total, 1400, setDisplayVisits);
      })
      .catch(() => {
        setRealVisits(null);
      });
  }, []);

  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.10),transparent_35%)]" />
      <div className="relative max-w-7xl px-6 pl-6 md:pl-10">
        <div className="rounded-[2rem] border border-zinc-200/80 bg-white/90 p-10 text-center shadow-[0_20px_70px_rgba(0,0,0,0.08)] backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-600">
            Site Activity
          </p>

          <div className="mt-4 text-5xl font-bold tracking-tight text-zinc-900 md:text-7xl">
            {realVisits === null ? "—" : `${displayVisits.toLocaleString()}+`}
          </div>

          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 md:text-lg">
          Real-time visitors exploring our work since launch our Website.
          </p>
        </div>
      </div>
    </section>
  );
}