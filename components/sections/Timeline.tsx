"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { Plate } from "@/components/Plate";
import { house, timeline } from "@/lib/content";

type Mode = "swipe" | "pin" | "list";

// The line, from 1881 (Brioni /history model). On a wide screen the section
// pins and the years travel sideways as you scroll down, a gold tacking line
// filling beneath them. On touch it is a row you swipe; under reduced motion it
// settles into a quiet vertical list. The server renders the swipe row, which
// works everywhere without script.
export function Timeline({ withIntro = true, withClose = true }: { withIntro?: boolean; withClose?: boolean }) {
  const reduce = useReducedMotion();
  const [mode, setMode] = useState<Mode>("swipe");
  const [travel, setTravel] = useState(0);
  const outer = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px) and (pointer: fine)");
    const decide = () => {
      const next: Mode = reduce ? "list" : mq.matches ? "pin" : "swipe";
      setMode(next);
      if (track.current) {
        setTravel(Math.max(0, track.current.scrollWidth - window.innerWidth));
        // The swipe row may have snapped sideways; pinning drives x itself.
        if (next !== "swipe" && track.current.parentElement) track.current.parentElement.scrollLeft = 0;
      }
    };
    decide();
    mq.addEventListener("change", decide);
    window.addEventListener("resize", decide);
    return () => {
      mq.removeEventListener("change", decide);
      window.removeEventListener("resize", decide);
    };
  }, [reduce]);

  const { scrollYProgress } = useScroll({ target: outer, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -travel]);
  const fill = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const pin = mode === "pin";
  const list = mode === "list";

  return (
    <section id="line" data-nav="dark" className="on-dark">
      {withIntro ? (
        <div className="mx-auto max-w-editorial px-[clamp(1.75rem,6vw,7rem)] pt-[var(--section-y)]">
          <Reveal as="p" className="eyebrow mb-8">
            {timeline.eyebrow}
          </Reveal>
          <Reveal>
            <p className="max-w-[22ch] t-h2 text-ink-dark">{timeline.intro}</p>
          </Reveal>
        </div>
      ) : null}

      <div ref={outer} className="relative" style={pin ? { height: `calc(100vh + ${travel}px)` } : undefined}>
        <div
          className={
            pin
              ? "sticky top-0 flex h-screen flex-col items-start justify-center overflow-hidden"
              : list
                ? ""
                : "no-scrollbar snap-x snap-mandatory scroll-px-[clamp(1.75rem,6vw,7rem)] overflow-x-auto"
          }
        >
          <motion.ol
            ref={track}
            style={pin ? { x } : undefined}
            className={
              list
                ? "mx-auto max-w-editorial space-y-[clamp(2.5rem,6vh,4.5rem)] px-[clamp(1.75rem,6vw,7rem)] py-[clamp(3rem,8vh,6rem)]"
                : "flex w-max gap-[clamp(2rem,4vw,4.5rem)] px-[clamp(1.75rem,6vw,7rem)] py-[clamp(3rem,8vh,5rem)]"
            }
          >
            {timeline.beats.map((b) => (
              <li
                key={b.marker}
                className={
                  list
                    ? "grid grid-cols-1 items-baseline gap-x-[clamp(2rem,5vw,5rem)] gap-y-3 stitch-top-dark pt-[clamp(1.5rem,4vh,3rem)] sm:grid-cols-[0.4fr_1fr]"
                    : "w-[min(78vw,26rem)] flex-none snap-start"
                }
              >
                {list ? null : (
                  <Plate src={b.image} alt={b.alt} className="h-[min(44vh,24rem)] w-full" />
                )}
                <div className={list ? "" : "stitch-top-dark mt-6 pt-6"}>
                  <p className="font-serif leading-none text-gold-on-dark text-[clamp(3rem,6vw,5rem)] tracking-[-0.02em]">
                    {b.marker}
                  </p>
                  <p className="mt-3 eyebrow">{b.label}</p>
                </div>
                <p className={`${list ? "" : "mt-4"} max-w-[34ch] text-[0.98rem] leading-relaxed text-ink-dark-muted`}>
                  {b.body}
                </p>
              </li>
            ))}
          </motion.ol>

          {/* Progress: the gold tacking line fills as the years pass. */}
          {pin ? (
            <div className="mx-[clamp(1.75rem,6vw,7rem)] h-px self-stretch bg-hairline-dark">
              <motion.div
                className="h-px origin-left bg-gold-on-dark"
                style={{ scaleX: fill }}
              />
            </div>
          ) : null}
        </div>
      </div>

      {withClose ? (
        <div className="mx-auto max-w-editorial px-[clamp(1.75rem,6vw,7rem)] pb-[var(--section-y)] pt-[clamp(2rem,6vh,4rem)]">
          <Reveal>
            <p className="font-serif text-[clamp(1.2rem,1.7vw,1.6rem)] italic text-gold-on-dark">
              {timeline.close}
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-[clamp(2rem,5vh,3.5rem)] max-w-[24ch] font-serif text-[clamp(1.6rem,3vw,2.6rem)] leading-[1.15] text-ink-dark">
              {house.tagline}
            </p>
          </Reveal>
        </div>
      ) : (
        <div className="pb-[var(--section-y-tight)]" />
      )}
    </section>
  );
}
