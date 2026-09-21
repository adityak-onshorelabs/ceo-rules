"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Photo } from "@/components/Photo";

export type Moment = {
  label: string;
  line: string;
  body?: string;
  image: string;
  alt: string;
  position: string;
  audit?: string;
};

// Consecutive moments beside one photograph (brief §7, §28: no cards, no
// feature grids). Desktop: the photographic field holds the left half, edge to
// edge, sticky while the moments pass on House Ivory at the right; it
// cross-fades as each moment crosses the middle of the screen. Scrolling stays
// native, only the photograph is sticky. Mobile: the moments in order, each a
// full-width photograph with its words beneath.
export function Sequence({
  id,
  labelledBy,
  header,
  moments,
}: {
  id?: string;
  labelledBy?: string;
  header: ReactNode;
  moments: Moment[];
}) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.index));
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    refs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id={id} aria-labelledby={labelledBy} className="bg-cream lg:grid lg:grid-cols-2">
      <div className="relative hidden lg:block">
        <div className="sticky top-[var(--nav-h)] h-[calc(100svh-var(--nav-h))] overflow-hidden bg-ink-deep">
          {moments.map((m, i) => (
            <div
              key={m.label}
              aria-hidden
              className={`absolute inset-0 transition-opacity duration-700 ease-house ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
            >
              <Photo src={m.image} alt="" position={m.position} grade="plate" sizes="50vw" audit={m.audit} auditAt="bl" />
            </div>
          ))}
        </div>
      </div>

      <div>
        <header className="px-[clamp(24px,5vw,96px)] pb-[clamp(56px,9vh,96px)] pt-[var(--section-y)] lg:flex lg:min-h-[64svh] lg:flex-col lg:justify-end lg:pb-[clamp(40px,6vh,64px)]">
          {header}
        </header>

        <ol className="lg:pb-[18svh]">
          {moments.map((m, i) => (
            <li
              key={m.label}
              data-index={i}
              ref={(el) => {
                refs.current[i] = el;
              }}
              className="pb-[clamp(64px,10vh,96px)] lg:flex lg:min-h-[calc(82svh-var(--nav-h))] lg:flex-col lg:justify-center lg:pb-0"
            >
              {/* The photograph carries the alt text once, here: on mobile it
                  leads the moment; on desktop the sticky field shows it. */}
              <div className="relative aspect-[4/5] lg:hidden">
                <Photo src={m.image} alt={m.alt} position={m.position} grade="plate" sizes="100vw" audit={m.audit} auditAt="bl" />
              </div>
              <div
                className={`px-[clamp(24px,5vw,96px)] pt-7 transition-opacity duration-500 lg:pt-0 ${
                  i === active ? "lg:opacity-100" : "lg:opacity-40"
                }`}
              >
                <p className="text-[12px] uppercase tracking-[0.24em] text-[rgba(28,26,23,.66)]">{m.label}</p>
                <h3 className="mt-4 max-w-[15ch] font-serif text-[clamp(30px,8vw,40px)] font-light leading-[1.08] tracking-[-0.022em] text-ink lg:text-[clamp(34px,3.2vw,54px)]">
                  {m.line}
                </h3>
                {m.body ? (
                  <p className="body mt-5 max-w-[42ch] text-[rgba(28,26,23,.74)]">{m.body}</p>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
