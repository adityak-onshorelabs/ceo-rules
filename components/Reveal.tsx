"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 14,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "span" | "li" | "p" | "h1" | "h2" | "figure" | "article";
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  const variants: Variants = {
    hidden: { opacity: 0, y: Math.min(y, 16) },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduce ? 0 : 0.5,
        ease: [0.25, 1, 0.5, 1],
        delay: reduce ? 0 : delay,
      },
    },
  };

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
    >
      {children}
    </MotionTag>
  );
}
