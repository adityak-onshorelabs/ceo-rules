"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

// Restraint is the spec: opacity + a short rise, once, never re-triggered.
// `onLoad` plays on mount (hero type: 800ms, 200ms delay, +16px); otherwise it
// plays when 20% of the element is in view (section headings: 700ms, +20px).
export function Reveal({
  children,
  className,
  delay = 0,
  onLoad = false,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  onLoad?: boolean;
  as?: "div" | "p" | "h1" | "h2" | "li" | "article" | "figure";
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as];

  // Same markup on server and client; reduced motion only zeroes the timing.
  const hidden = { opacity: 0, y: onLoad ? 16 : 20 };
  const shown = {
    opacity: 1,
    y: 0,
    transition: reduce
      ? { duration: 0 }
      : { duration: onLoad ? 0.8 : 0.7, ease: EASE, delay: onLoad ? 0.2 + delay : delay },
  };

  return onLoad ? (
    <Tag className={className} initial={hidden} animate={shown}>
      {children}
    </Tag>
  ) : (
    <Tag
      className={className}
      initial={hidden}
      whileInView={shown}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </Tag>
  );
}
