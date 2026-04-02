"use client";

import { motion } from "framer-motion";

const logoSrc = "/images/alastre-logo.png";

const sparks = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  angle: (360 / 24) * i,
  distance: 180 + (i % 6) * 28,
  delay: i * 0.028,
}));

const sideBeams = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  left: 4 + i * 8,
  delay: i * 0.1,
  height: 140 + (i % 5) * 50,
}));

export default function AlastreImpactLogoAnimation() {
  return (
    <section className="relative flex min-h-[95svh] items-center justify-center overflow-hidden bg-[#01040a] px-6 py-16 md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_44%,rgba(34,211,238,0.95),transparent_30%),radial-gradient(circle_at_50%_56%,rgba(14,165,233,0.62),transparent_38%),radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_20%),radial-gradient(circle_at_80%_24%,rgba(6,182,212,0.42),transparent_32%),linear-gradient(to_bottom,rgba(255,255,255,0.01),transparent_22%,rgba(8,47,73,1))]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:90px_90px] opacity-45 [mask-image:radial-gradient(circle_at_center,black_34%,transparent_78%)] [-webkit-mask-image:radial-gradient(circle_at_center,black_34%,transparent_78%)]" />

      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),transparent_12%)]"
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{ opacity: [0, 0.85, 0], scale: [0.2, 1.4, 1.9] }}
        transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
      />

      <motion.div
        className="absolute inset-0 bg-white"
        initial={{ opacity: 0.06 }}
        animate={{ opacity: [0.06, 0] }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      <motion.div
        className="absolute h-[36rem] w-[36rem] rounded-full border border-cyan-300/18 md:h-[44rem] md:w-[44rem]"
        animate={{ rotate: 360, scale: [0.88, 1.03, 0.92] }}
        transition={{
          rotate: { duration: 28, repeat: Infinity, ease: "linear" },
          scale: { duration: 7.5, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      <motion.div
        className="absolute h-[26rem] w-[26rem] rounded-full border border-cyan-200/24 md:h-[32rem] md:w-[32rem]"
        animate={{ rotate: -360, scale: [1.04, 0.95, 1.04] }}
        transition={{
          rotate: { duration: 18, repeat: Infinity, ease: "linear" },
          scale: { duration: 5.2, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      <motion.div
        className="absolute h-[20rem] w-[20rem] rounded-full bg-cyan-300/24 blur-3xl md:h-[24rem] md:w-[24rem]"
        animate={{ opacity: [0.3, 1, 0.35], scale: [0.7, 1.18, 0.82] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-0 overflow-hidden">
        
      </div>