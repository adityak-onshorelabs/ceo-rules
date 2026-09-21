"use client";

import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react";
import { Photo } from "@/components/Photo";

type Stage = {
  title: string;
  when: string;
  body: string;
  image: string;
  alt: string;
  position: string;
};

const pad = (n: number) => String(n).padStart(2, "0");

// The bespoke process (brief §15): one stage at a time in a large photographic
// field. Not six cards, not a product carousel.
//
// Desktop: the photograph takes the larger share of the screen and cross-fades
// between stages; beside it, the six stages as a numbered list (tabs), the
// current stage's words, and previous/next. Arrow keys move between stages.
// Mobile: the stages are full-width slides you swipe, with a counter and
// previous/next beneath.
export function Stages({ stages, label }: { stages: Stage[]; label: string }) {
  const [active, setActive] = useState(0);
  const track = useRef<HTMLDivElement>(null);
  const slides = useRef<(HTMLDivElement | null)[]>([]);
  const last = stages.length - 1;

  // Mobile: keep the counter in step with the slide being swiped to.
  useEffect(() => {
    const root = track.current;
    if (!root) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.index));
        }
      },
      { root, threshold: 0.6 },
    );
    slides.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const go = useCallback(
    (i: number) => {
      const next = Math.max(0, Math.min(last, i));
      setActive(next);
      const root = track.current;
      // Only scroll the mobile track when it is the visible layout.
      if (root && root.offsetParent !== null) {
        root.scrollTo({ left: next * root.clientWidth, behavior: "smooth" });
      }
    },
    [last],
  );

  const onKey = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      go(active + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(active - 1);
    }
  };

  const s = stages[active];
  const button =
    "grid h-11 w-11 place-items-center border border-[rgba(28,26,23,.3)] text-[16px] transition-colors duration-[240ms] hover:border-ink disabled:opacity-30 disabled:hover:border-[rgba(28,26,23,.3)]";

  return (
    <section
      aria-roledescription="carousel"
      aria-label={label}
      onKeyDown={onKey}
      className="bg-cream"
    >
      {/* Desktop */}
      <div className="hidden lg:grid lg:h-[calc(100svh-var(--nav-h))] lg:min-h-[640px] lg:grid-cols-[1.35fr_1fr]">
        <div className="relative overflow-hidden bg-ink-deep">
          {stages.map((st, i) => (
            <div
              key={st.title}
              aria-hidden={i !== active}
              className={`absolute inset-0 transition-opacity duration-700 ease-house ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
            >
              <Photo src={st.image} alt={st.alt} position={st.position} grade="plate" sizes="58vw" />
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-between px-[clamp(32px,4.5vw,88px)] py-[clamp(40px,7vh,80px)]">
          <div role="tablist" aria-label="Stages" className="flex flex-col">
            {stages.map((st, i) => (
              <button
                key={st.title}
                type="button"
                role="tab"
                id={`stage-tab-${i}`}
                aria-selected={i === active}
                aria-controls="stage-panel"
                tabIndex={i === active ? 0 : -1}
                onClick={() => go(i)}
                className={`flex items-baseline gap-5 border-b border-[rgba(28,26,23,.12)] py-3 text-left transition-colors duration-[240ms] ${
                  i === active ? "text-ink" : "text-[rgba(28,26,23,.5)] hover:text-ink"
                }`}
              >
                <span className="w-7 text-[12px] tracking-[0.2em] tabular-nums">{pad(i + 1)}</span>
                <span className="text-[15px] tracking-[0.01em]">{st.title}</span>
              </button>
            ))}
          </div>

          <div id="stage-panel" role="tabpanel" aria-labelledby={`stage-tab-${active}`} aria-live="polite" className="py-8">
            <p className="text-[12px] uppercase tracking-[0.24em] text-[rgba(28,26,23,.66)]">{s.when}</p>
            <h3 className="mt-4 max-w-[14ch] font-serif text-[clamp(32px,2.8vw,48px)] font-light leading-[1.06] tracking-[-0.022em]">
              {s.title}
            </h3>
            <p className="body mt-5 max-w-[42ch] text-[rgba(28,26,23,.76)]">{s.body}</p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-[12px] uppercase tracking-[0.24em] text-[rgba(28,26,23,.66)] tabular-nums">
              Stage {pad(active + 1)} of {pad(stages.length)}
            </p>
            <div className="flex gap-2">
              <button type="button" className={button} onClick={() => go(active - 1)} disabled={active === 0} aria-label="Previous stage">
                ←
              </button>
              <button type="button" className={button} onClick={() => go(active + 1)} disabled={active === last} aria-label="Next stage">
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden">
        <div ref={track} className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto">
          {stages.map((st, i) => (
            <div
              key={st.title}
              data-index={i}
              ref={(el) => {
                slides.current[i] = el;
              }}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${stages.length}: ${st.title}`}
              className="w-full flex-none snap-center"
            >
              <div className="relative aspect-[4/5]">
                <Photo src={st.image} alt={st.alt} position={st.position} grade="plate" sizes="100vw" />
              </div>
              <div className="px-[var(--gutter)] pt-7">
                <p className="text-[12px] uppercase tracking-[0.24em] text-[rgba(28,26,23,.66)] tabular-nums">
                  {pad(i + 1)} · {st.when}
                </p>
                <h3 className="mt-3 font-serif text-[clamp(30px,8vw,38px)] font-light leading-[1.08] tracking-[-0.022em]">
                  {st.title}
                </h3>
                <p className="body mt-4 text-[rgba(28,26,23,.76)]">{st.body}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between px-[var(--gutter)] pb-[clamp(56px,9vh,96px)] pt-8">
          <p className="text-[12px] uppercase tracking-[0.24em] text-[rgba(28,26,23,.66)] tabular-nums" aria-live="polite">
            {pad(active + 1)} / {pad(stages.length)}
          </p>
          <div className="flex gap-2">
            <button type="button" className={button} onClick={() => go(active - 1)} disabled={active === 0} aria-label="Previous stage">
              ←
            </button>
            <button type="button" className={button} onClick={() => go(active + 1)} disabled={active === last} aria-label="Next stage">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
