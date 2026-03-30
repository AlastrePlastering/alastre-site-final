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

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        

        <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-cyan-500">
          Site Activity
        </p>

        <div className="mt-4 text-5xl font-bold tracking-tight text-cyan-400 md:text-7xl">
          {realVisits === null ? "—" : `${displayVisits.toLocaleString()}+`}
        </div>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-cyan-600 md:text-lg">
          Real-time visitors exploring our work since the launch of our website.
        </p>
      </div>
    </section>
  );
}