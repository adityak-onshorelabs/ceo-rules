"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

// Slow, quiet carousel of short statements. Auto-advances (pauses on hover/focus),
// keyboard + dot navigation, and respects reduced motion.
export function Carousel({
  items,
  label,
}: {
  items: string[];
  label: string;
}) {
  const reduce = useReducedMotion();
  const [[index, dir], setState] = useState<[number, number]>([0, 1]);
  const paused = useRef(false);
  const n = items.length;

  const go = useCallback(
    (d: number) => setState(([p]) => [(p + d + n) % n, d]),
    [n],
  );
  const to = useCallback(
    (k: number) => setState(([p]) => [k, k >= p ? 1 : -1]),
    [],
  );

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      if (!paused.current) go(1);
    }, 5500);
    return () => clearInterval(id);
  }, [go, reduce]);

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label={label}
      tabIndex={0}
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      onFocusCapture={() => (paused.current = true)}
      onBlurCapture={() => (paused.current = false)}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(1);
        if (e.key === "ArrowLeft") go(-1);
      }}
      className="rounded-[1px] outline-offset-8"
    >
      <span className="eyebrow tabular-nums">
        {String(index + 1).padStart(2, "0")} &nbsp;/&nbsp;{" "}
        {String(n).padStart(2, "0")}
      </span>

      <div
        className="relative mt-5 flex min-h-[2.4em] items-start"
        aria-live="polite"
      >
        <AnimatePresence mode="wait" custom={dir}>
          <motion.p
            key={index}
            custom={dir}
            initial={reduce ? { opacity: 0 } : { opacity: 0, x: dir * 44 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, x: dir * -44 }}
            transition={{ duration: reduce ? 0.2 : 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[clamp(1.9rem,3.8vw,3.2rem)] leading-[1.08] text-ink"
          >
            {items[index]}
          </motion.p>
        </AnimatePresence>
      </div>

      <div className="mt-9 flex items-center gap-6">
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
      </div>
    </div>
  );
}
