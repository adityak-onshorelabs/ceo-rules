"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { AuditNote, type AuditPlacement } from "@/components/AuditNote";

// One photograph, graded in CSS so the whole site holds one temperature
// regardless of how the source was shot. Always sits on the ink-deep ground so
// an image fades into dark, never white. Filter presets follow the handoff spec.
const GRADES = {
  "hero-base": "saturate(.82) contrast(1.06) brightness(.92)",
  "hero-left": "saturate(.7) contrast(1.1) brightness(.72)",
  interior: "saturate(.78) contrast(1.06) brightness(.84)",
  card: "saturate(.62) contrast(1.12) brightness(.8)",
  plate: "saturate(.7) contrast(1.06) brightness(.84)",
  reel: "saturate(.8) contrast(1.05) brightness(.86)",
} as const;

// Scrims keep type legible over any bright region of a frame.
export const SCRIMS = {
  base: "linear-gradient(0deg, rgba(14,13,11,.72) 0%, rgba(14,13,11,0) 42%)",
  left: "linear-gradient(105deg, rgba(14,13,11,.78) 0%, rgba(14,13,11,.42) 38%, rgba(14,13,11,0) 66%)",
  side: "linear-gradient(90deg, rgba(14,13,11,.86) 0%, rgba(14,13,11,.5) 46%, rgba(14,13,11,.1) 100%)",
  card: "linear-gradient(0deg, rgba(14,13,11,.86) 0%, rgba(14,13,11,.1) 55%)",
  interior: "linear-gradient(0deg, rgba(14,13,11,.88) 0%, rgba(14,13,11,.12) 58%)",
  reel: "linear-gradient(0deg, rgba(14,13,11,.8) 0%, rgba(14,13,11,0) 48%)",
} as const;

const EASE = [0.16, 1, 0.3, 1] as const;

export function Photo({
  src,
  alt,
  position = "50% 50%",
  grade = "plate",
  scrims = [],
  motion: mode = "none",
  priority = false,
  sizes = "100vw",
  audit,
  auditAt = "br",
  className = "absolute inset-0",
}: {
  src: string;
  alt: string;
  position?: string;
  grade?: keyof typeof GRADES;
  scrims?: (keyof typeof SCRIMS)[];
  /** "load": one-shot 1.04 → 1 settle (heroes). "drift": scroll-linked −6% travel. */
  motion?: "none" | "load" | "drift";
  priority?: boolean;
  sizes?: string;
  audit?: string;
  auditAt?: AuditPlacement;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-6%"]);

  // Markup is identical on server and client; reduced motion (only known on the
  // client) just zeroes the travel and the duration, so hydration never mismatches.
  const drift = mode === "drift";
  const load = mode === "load";

  return (
    <div ref={ref} className={`overflow-hidden bg-ink-deep ${className}`}>
      <motion.div
        className={`absolute inset-x-0 top-0 ${drift ? "h-[107%]" : "h-full"}`}
        style={drift ? { y } : undefined}
        initial={load ? { scale: 1.04 } : false}
        animate={load ? { scale: 1 } : undefined}
        transition={load ? { duration: reduce ? 0 : 1.2, ease: EASE } : undefined}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          quality={90}
          className="object-cover"
          style={{ objectPosition: position, filter: GRADES[grade] }}
        />
      </motion.div>
      {scrims.map((s) => (
        <div key={s} aria-hidden className="absolute inset-0" style={{ background: SCRIMS[s] }} />
      ))}
      {audit ? <AuditNote text={audit} at={auditAt} /> : null}
    </div>
  );
}
