"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { testimonials } from "@/lib/content";

// A featured story, highlighted, then the shorter voices one at a time.
export function Testimonials() {
  const reduce = useReducedMotion();
  const [[index, dir], setState] = useState<[number, number]>([0, 1]);
  const paused = useRef(false);
  const items = testimonials.items;
  const n = items.length;

  const go = useCallback(
    (d: number) => setState(([p]) => [(p + d + n) % n, d]),
    [n],
  );
  const to = useCallback((k: number) => setState(([p]) => [k, k >= p ? 1 : -1]), []);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      if (!paused.current) go(1);
    }, 6500);
    return () => clearInterval(id);
  }, [go, reduce]);

  const f = testimonials.featured;
  const current = items[index];

  return (
    <section
      id="testimonials"
      data-nav="light"
      className="section mx-auto max-w-editorial"
    >
      <Reveal as="p" className="eyebrow mb-8">
        {testimonials.eyebrow}
      </Reveal>

      {/* Featured: the legendary-service story. */}
      <div className="grid grid-cols-1 gap-x-[clamp(3rem,7vw,7rem)] gap-y-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
        <Reveal>
          <p
            aria-hidden
            className="font-serif text-[clamp(3rem,6vw,5rem)] leading-none text-gold-ink"
          >
            &ldquo;
          </p>
          <blockquote className="mt-2 font-serif text-[clamp(1.8rem,3.4vw,2.8rem)] italic leading-[1.14] text-ink">
            {f.lead}
          </blockquote>
        </Reveal>

        <Reveal delay={0.08} className="lg:pt-[clamp(2rem,5vw,4rem)]">
          <p className="max-w-measure text-ink-muted">{f.body}</p>
          <p className="mt-6 eyebrow">{f.author}</p>
        </Reveal>
      </div>

      {/* The shorter voices, one at a time. */}
      <div
        role="group"
        aria-roledescription="carousel"
        aria-label="More from clients of the house"
        tabIndex={0}
        onMouseEnter={() => (paused.current = true)}
        onMouseLeave={() => (paused.current = false)}
        onFocusCapture={() => (paused.current = true)}
        onBlurCapture={() => (paused.current = false)}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") go(1);
          if (e.key === "ArrowLeft") go(-1);
        }}
        className="mt-[var(--s-16)] border-t border-hairline pt-[var(--s-12)] outline-offset-8"
      >
        <div className="relative flex min-h-[4.5em] items-start" aria-live="polite">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.blockquote
              key={index}
              custom={dir}
              initial={reduce ? { opacity: 0 } : { opacity: 0, x: dir * 44 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, x: dir * -44 }}
              transition={{ duration: reduce ? 0.2 : 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-[34ch] font-serif text-[clamp(1.4rem,2.6vw,2.1rem)] italic leading-[1.2] text-ink"
            >
              &ldquo;{current.quote}&rdquo;
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous"
            className="text-ink transition-colors duration-300 hover:text-gold-ink"
          >
            <span aria-hidden className="text-xl">&larr;</span>
          </button>
          <div className="flex items-center gap-2.5">
            {items.map((_, k) => (
              <button
                key={k}
                type="button"
                onClick={() => to(k)}
                aria-label={`Go to ${k + 1} of ${n}`}
                aria-current={k === index}
                className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                  k === index ? "bg-gold-ink" : "bg-ink-faint hover:bg-ink-muted"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next"
            className="text-ink transition-colors duration-300 hover:text-gold-ink"
          >
            <span aria-hidden className="text-xl">&rarr;</span>
          </button>
          <p className="ml-2 eyebrow" aria-live="polite">
            {current.author}
          </p>
        </div>
      </div>
    </section>
  );
}
