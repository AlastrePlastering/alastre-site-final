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
        {sideBeams.map((beam) => (
          <motion.div
            key={beam.id}
            className="absolute bottom-0 w-px bg-gradient-to-t from-cyan-400/0 via-cyan-300/100 to-white/0"
            style={{ left: `${beam.left}%`, height: beam.height }}
            initial={{ opacity: 0, scaleY: 0, y: 50 }}
            animate={{
              opacity: [0, 1, 0],
              scaleY: [0, 1, 0.15],
              y: [50, -140, -260],
            }}
            transition={{
              duration: 1.9,
              delay: 0.35 + beam.delay,
              repeat: Infinity,
              repeatDelay: 2.6,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0">
        {sparks.map((spark) => (
          <motion.div
            key={spark.id}
            className="absolute left-1/2 top-1/2 h-[2px] w-44 origin-left rounded-full bg-gradient-to-r from-white via-cyan-300 to-transparent opacity-0"
            style={{ rotate: `${spark.angle}deg` }}
            initial={{ x: 0, y: 0, opacity: 0, scaleX: 0.1 }}
            animate={{
              x: Math.cos((spark.angle * Math.PI) / 180) * spark.distance,
              y: Math.sin((spark.angle * Math.PI) / 180) * spark.distance,
              opacity: [0, 1, 0],
              scaleX: [0.1, 1.05, 0.15],
            }}
            transition={{
              duration: 0.95,
              delay: 0.4 + spark.delay,
              repeat: Infinity,
              repeatDelay: 2.3,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center justify-center">
        <motion.div
          className="relative"
          initial={{
            opacity: 0,
            scale: 0.1,
            y: 180,
            rotate: -22,
            filter: "blur(18px)",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            rotate: 0,
            filter: "blur(0px)",
          }}
          transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="absolute inset-[-4rem] rounded-full bg-cyan-300/38 blur-3xl"
            animate={{ opacity: [0.25, 1, 0.3], scale: [0.55, 1.22, 0.74] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="absolute inset-[-2rem] rounded-[3rem] border border-cyan-200/20"
            animate={{ opacity: [0.16, 0.75, 0.18], scale: [0.92, 1.08, 0.96] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="absolute left-1/2 top-1/2 h-[128%] w-[128%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/12"
            animate={{ opacity: [0, 0.65, 0], scale: [0.45, 1.05, 1.36] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
          />

          <motion.div
            className="relative"
            animate={{
              y: [0, -14, 0],
              rotate: [0, 1.4, -1.4, 0],
              scale: [1, 1.035, 1],
            }}
            transition={{ duration: 4.3, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className="absolute inset-[-8%] rounded-[3rem] bg-cyan-300/24 blur-2xl"
              animate={{ opacity: [0.2, 0.75, 0.24], scale: [0.95, 1.08, 0.98] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.img
              src={logoSrc}
              alt="Alastre Plastering logo"
              className="relative z-10 mx-auto w-full max-w-[520px] drop-shadow-[0_0_22px_rgba(103,232,249,0.62)] md:max-w-[620px]"
              animate={{
                filter: [
                  "drop-shadow(0 0 18px rgba(103,232,249,0.4)) drop-shadow(0 0 48px rgba(14,165,233,0.28))",
                  "drop-shadow(0 0 40px rgba(103,232,249,1)) drop-shadow(0 0 110px rgba(14,165,233,0.55))",
                  "drop-shadow(0 0 22px rgba(103,232,249,0.5)) drop-shadow(0 0 58px rgba(14,165,233,0.3))",
                ],
              }}
              transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              className="absolute inset-0 z-20 overflow-hidden rounded-[2rem]"
              initial={{ x: "-150%", opacity: 0 }}
              animate={{ x: ["-150%", "140%"], opacity: [0, 1, 0] }}
              transition={{
                duration: 0.8,
                delay: 0.55,
                repeat: Infinity,
                repeatDelay: 2.1,
                ease: "easeInOut",
              }}
            >
              <div className="h-full w-56 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/85 to-transparent blur-md" />
            </motion.div>

            <motion.div
              className="absolute inset-x-[4%] top-[12%] z-30 h-[16%] rounded-full bg-white/30 blur-2xl"
              animate={{ opacity: [0, 1, 0], scaleX: [0.25, 1.12, 0.4] }}
              transition={{
                duration: 0.95,
                delay: 0.3,
                repeat: Infinity,
                repeatDelay: 2.1,
                ease: "easeOut",
              }}
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.75 }}
        >
          <motion.p
            className="text-center text-[10px] font-semibold uppercase tracking-[0.65em] text-cyan-100/95 sm:text-sm md:text-base"
            animate={{
              opacity: [0.45, 1, 0.55],
              letterSpacing: ["0.5em", "0.72em", "0.56em"],
            }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          >
            Plaster Is Our Language
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-300/90 to-transparent"
        animate={{ opacity: [0.15, 0.95, 0.18], scaleX: [0.7, 1, 0.78] }}
        transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}