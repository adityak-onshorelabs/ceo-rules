"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion";
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
  // Daylight storefront: keep its warmth, only settle the highlights.
  day: "saturate(.94) contrast(1.02) brightness(.98)",
  // Cloth in low atelier light: warm, a touch deeper.
  atelier: "saturate(.86) contrast(1.06) brightness(.9)",
} as const;

// Scrims keep type legible over any bright region of a frame.
export const SCRIMS = {
  base: "linear-gradient(0deg, rgba(14,13,11,.72) 0%, rgba(14,13,11,0) 42%)",
  left: "linear-gradient(105deg, rgba(14,13,11,.78) 0%, rgba(14,13,11,.42) 38%, rgba(14,13,11,0) 66%)",
  side: "linear-gradient(90deg, rgba(14,13,11,.86) 0%, rgba(14,13,11,.5) 46%, rgba(14,13,11,.1) 100%)",
  card: "linear-gradient(0deg, rgba(14,13,11,.86) 0%, rgba(14,13,11,.1) 55%)",
  interior: "linear-gradient(0deg, rgba(14,13,11,.88) 0%, rgba(14,13,11,.12) 58%)",
  reel: "linear-gradient(0deg, rgba(14,13,11,.8) 0%, rgba(14,13,11,0) 48%)",
  // Localised treatments (brief §5): a soft pool of tone behind the type only,
  // never a wash over the photograph.
  "lift-tl": "radial-gradient(ellipse 30% 64% at 0% 4%, rgba(244,241,234,.8) 0%, rgba(244,241,234,.58) 46%, rgba(244,241,234,.16) 78%, rgba(244,241,234,0) 100%)",
  "deepen-l": "linear-gradient(90deg, rgba(14,13,11,.8) 0%, rgba(14,13,11,.7) 26%, rgba(14,13,11,.36) 38%, rgba(14,13,11,0) 50%)",
  // Contact-sheet frames: a firm pool at the base, where the caption sits.
  "frame-base": "linear-gradient(0deg, rgba(14,13,11,.92) 0%, rgba(14,13,11,.84) 24%, rgba(14,13,11,.5) 42%, rgba(14,13,11,0) 60%)",
  "frame-base-tall": "linear-gradient(0deg, rgba(14,13,11,.94) 0%, rgba(14,13,11,.88) 34%, rgba(14,13,11,.55) 52%, rgba(14,13,11,0) 72%)",
  // Interior heroes: a pool of tone under the lower-left type block only.
  "deepen-bl": "radial-gradient(ellipse 92% 118% at 0% 100%, rgba(14,13,11,.9) 0%, rgba(14,13,11,.8) 36%, rgba(14,13,11,.46) 64%, rgba(14,13,11,0) 92%)",
  "deepen-b": "radial-gradient(ellipse 110% 55% at 30% 100%, rgba(14,13,11,.7) 0%, rgba(14,13,11,.25) 60%, rgba(14,13,11,0) 100%)",
} as const;

const EASE = [0.16, 1, 0.3, 1] as const;

export function Photo({
  src,
  alt,
  position = "50% 50%",
  mobilePosition,
  grade = "plate",
  scrims = [],
  motion: mode = "none",
  priority = false,
  sizes = "100vw",
  audit,
  auditAt = "br",
  className = "absolute inset-0",
  scrimCls,
}: {
  src: string;
  alt: string;
  position?: string;
  /** Crop below 1024px (brief §21: every major photograph gets its own mobile crop). */
  mobilePosition?: string;
  grade?: keyof typeof GRADES;
  scrims?: (keyof typeof SCRIMS)[];
  /** "load": one-shot 1.04 → 1 settle (heroes). "drift": scroll-linked −6% travel.
   *  "reveal": the frame unrolls from the top once in view, like cloth off a bolt. */
  motion?: "none" | "load" | "drift" | "reveal";
  priority?: boolean;
  sizes?: string;
  audit?: string;
  auditAt?: AuditPlacement;
  className?: string;
  /** Per-scrim classes, e.g. to show a treatment only at one breakpoint. */
  scrimCls?: Partial<Record<keyof typeof SCRIMS, string>>;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-6%"]);

  // Markup is identical on server and client; reduced motion (only known on the
  // client) just zeroes the travel and the duration, so hydration never mismatches.
  const drift = mode === "drift";
  const load = mode === "load";
  const reveal = mode === "reveal";
  // Watch the unclipped frame: a fully clipped element never reads as "in view".
  const seen = useInView(ref, { once: true, amount: 0.25 });

  return (
    <div ref={ref} className={`overflow-hidden bg-ink-deep ${className}`}>
      <motion.div
        className="absolute inset-0"
        initial={reveal ? { clipPath: "inset(0 0 100% 0)" } : false}
        animate={reveal ? { clipPath: seen ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)" } : undefined}
        transition={reveal ? { duration: reduce ? 0 : 1.1, ease: EASE } : undefined}
      >
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
            className="object-cover [object-position:var(--pos-m)] lg:[object-position:var(--pos)]"
            style={
              {
                "--pos": position,
                "--pos-m": mobilePosition ?? position,
                filter: GRADES[grade],
              } as React.CSSProperties
            }
          />
        </motion.div>
        {scrims.map((s) => (
          <div key={s} aria-hidden className={`absolute inset-0 ${scrimCls?.[s] ?? ""}`} style={{ background: SCRIMS[s] }} />
        ))}
      </motion.div>
      {audit ? <AuditNote text={audit} at={auditAt} /> : null}
    </div>
  );
}
