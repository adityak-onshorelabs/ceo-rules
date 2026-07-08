"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Plate } from "@/components/Plate";
import { Grain } from "@/components/Grain";
import { CtaLink } from "@/components/CtaLink";
import { hero } from "@/lib/content";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Slow parallax: image drifts and lifts as you scroll away. Disabled for reduced motion.
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "14%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.06, reduce ? 1.06 : 1.0]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, reduce ? 1 : 0]);

  return (
    <section
      ref={ref}
      id="top"
      data-nav="dark"
      className="on-dark relative flex min-h-[100svh] flex-col justify-end overflow-hidden"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Plate
          src={hero.image}
          alt={hero.imageAlt}
          priority
          scrim="none"
          className="h-full w-full"
        />
      </motion.div>
      <Grain />

      {/* Legibility scrims. Top: for the nav. Left: a dark bed for the copy column so the
          ivory type never bleeds over bright areas of the image. Bottom: anchors the base.
          The image stays open on the right. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-[5] h-48"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.15 0.012 58 / 0.72) 0%, transparent 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-[5] w-full md:w-[72%]"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.13 0.012 58 / 0.82) 0%, oklch(0.13 0.012 58 / 0.5) 42%, transparent 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-[70%]"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, oklch(0.14 0.012 58 / 0.6) 45%, oklch(0.13 0.012 58 / 0.92) 100%)",
        }}
      />

      <motion.div
        style={{
          opacity: fade,
          textShadow: "0 1px 24px oklch(0.12 0.012 58 / 0.5)",
        }}
        className="relative z-10 mx-auto w-full max-w-editorial px-[clamp(1.5rem,6vw,6rem)] pb-[clamp(3.5rem,9vh,7rem)]"
      >
        <motion.p
          initial={{ opacity: 0, y: reduce ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="eyebrow mb-6"
          style={{ color: "var(--gold-on-dark)" }}
        >
          {hero.eyebrow}
        </motion.p>

        <h1 className="t-display max-w-[15ch] text-ink-dark">
          {hero.headline.map((line, i) => (
            <motion.span
              key={line}
              className="block"
              initial={{ opacity: 0, y: reduce ? 0 : 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.28 + i * 0.12,
              }}
            >
              {line}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: reduce ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.62 }}
          className="mt-8 max-w-[52ch] text-[clamp(1.05rem,1.4vw,1.35rem)] leading-[1.6] text-ink-dark"
        >
          {hero.lede}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
          className="mt-11"
        >
          <CtaLink href={hero.cta.href} dark>
            {hero.cta.label}
          </CtaLink>
        </motion.div>
      </motion.div>
    </section>
  );
}
