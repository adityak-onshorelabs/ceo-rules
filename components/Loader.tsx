"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

// Opening curtain. Cinema-dark, the wordmark and a drawn gold rule, then the
// whole panel lifts to reveal the page. Renders on every full load / refresh
// (it lives in the root layout; client-side route changes don't remount it).
// Motion is never load-bearing: reduced-motion gets a brief static hold.
const EASE = [0.16, 1, 0.3, 1] as const;

export function Loader() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Hold the curtain, then lift. Shorter and still for reduced-motion.
    const hold = reduce ? 500 : 1500;
    const t = setTimeout(() => setShow(false), hold);
    document.body.style.overflow = "hidden";
    return () => clearTimeout(t);
  }, [reduce]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        document.body.style.overflow = "";
      }}
    >
      {show && (
        <motion.div
          key="loader"
          aria-hidden
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg-dark px-8 text-center"
          initial={{ opacity: 1 }}
          exit={{
            y: reduce ? 0 : "-100%",
            opacity: reduce ? 0 : 1,
            transition: { duration: reduce ? 0.35 : 0.9, ease: EASE },
          }}
        >
          <motion.p
            className="eyebrow text-gold-on-dark"
            initial={{ opacity: 0, y: reduce ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduce ? 0.3 : 0.8, ease: EASE, delay: 0.1 }}
          >
            Bandra &middot; Mumbai
          </motion.p>

          <motion.p
            className="mt-6 font-sans text-[clamp(1.5rem,4vw,2.4rem)] font-semibold uppercase tracking-[0.3em] text-ink-dark"
            initial={{ opacity: 0, y: reduce ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduce ? 0.3 : 0.9, ease: EASE, delay: 0.2 }}
          >
            CEO&nbsp;Rules
          </motion.p>

          <motion.span
            aria-hidden
            className="mt-7 block h-px w-[clamp(4rem,10vw,7rem)] origin-center bg-gold-on-dark"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: reduce ? 0.3 : 1.1, ease: EASE, delay: 0.35 }}
          />

          <motion.p
            className="mt-7 max-w-[24ch] font-serif text-[clamp(1rem,1.6vw,1.25rem)] italic text-ink-dark-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: reduce ? 0.3 : 1, ease: EASE, delay: 0.5 }}
          >
            The quiet language of confidence.
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
