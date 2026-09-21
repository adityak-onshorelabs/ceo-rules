"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

// Between-page transition. app/template.tsx remounts on every navigation, so on
// each route change a cinema-dark panel covers the new page's first frame and
// lifts away, while the page fades in behind it: a quiet curtain wipe. On the
// very first load this sits under the opening Loader (z-100) and isn't seen.
// Reduced-motion renders the page plainly, no curtain.
const EASE = [0.16, 1, 0.3, 1] as const;

export default function Template({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();

  if (reduce) return <>{children}</>;

  return (
    <>
      {/* Opacity only: a transform here would become the containing block for
          the fixed Nav and break its stickiness. */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.7 }}
      >
        {children}
      </motion.div>

      {/* The lifting panel. Holds a covered beat, then sweeps up and out. */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[90] bg-bg-dark"
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 1.05, ease: EASE, delay: 0.3 }}
      />
    </>
  );
}
