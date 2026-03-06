"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  amount?: number;
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  amount = 0.2,
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionIntroProps) {
  const centered = align === "center";

  return (
    <Reveal
      className={cn(
        "space-y-5",
        centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl",
      )}
    >
      <span className="inline-flex rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-cyan-200/90">
        {eyebrow}
      </span>
      <div className="space-y-4">
        <h2 className="text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
          {title}
        </h2>
        <p className="text-base leading-8 text-slate-300 sm:text-lg">{description}</p>
      </div>
    </Reveal>
  );
}

export function WaveDivider({ flip = false }: { flip?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden",
        flip && "rotate-180",
      )}
    >
      <motion.svg
        className="h-24 w-full text-slate-950/70"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        fill="none"
        animate={{ x: flip ? [0, -18, 0] : [0, 18, 0] }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <path
          d="M0 120L48 117.3C96 115 192 109 288 90.7C384 72 480 40 576 37.3C672 35 768 61 864 74.7C960 88 1056 88 1152 82.7C1248 77 1344 67 1392 61.3L1440 56V160H1392C1344 160 1248 160 1152 160C1056 160 960 160 864 160C768 160 672 160 576 160C480 160 384 160 288 160C192 160 96 160 48 160H0Z"
          fill="url(#wave-gradient)"
        />
        <defs>
          <linearGradient id="wave-gradient" x1="0" y1="0" x2="1440" y2="0">
            <stop stopColor="#070a14" stopOpacity="0.98" />
            <stop offset="0.5" stopColor="#070d18" stopOpacity="0.92" />
            <stop offset="1" stopColor="#05070f" stopOpacity="0.98" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
}
