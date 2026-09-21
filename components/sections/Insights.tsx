"use client";

import { useEffect, useRef, useState } from "react";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { insights } from "@/lib/content";

// The founder's essays as a long-form reading page: a sticky contents rail that
// tracks the active essay beside the essays themselves.
export function Insights() {
  const entries = insights.entries;
  const [active, setActive] = useState(entries[0]?.id);
  const refs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const obs = new IntersectionObserver(
      (items) => {
        const visible = items
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
    );
    Object.values(refs.current).forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="essays" className="section bg-cream">
      <div className="mx-auto grid max-w-wide grid-cols-1 gap-x-[var(--breath-gap)] lg:grid-cols-[0.36fr_1fr]">
        <aside className="hidden lg:block">
          <nav className="sticky top-32" aria-label="Contents">
            <p className="kicker text-[rgba(28,26,23,.55)]">Contents</p>
            <ol className="space-y-4">
              {entries.map((e, i) => (
                <li key={e.id} className="flex items-baseline gap-4">
                  <span className="text-[12px] tracking-[0.2em] tabular-nums text-[rgba(28,26,23,.4)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <a
                    href={`#${e.id}`}
                    className={`border-b pb-0.5 text-[14px] transition-colors duration-[240ms] ${
                      active === e.id
                        ? "border-gold text-ink"
                        : "border-transparent text-[rgba(28,26,23,.5)] hover:text-ink"
                    }`}
                  >
                    {e.tag}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        <div className="border-t border-[rgba(28,26,23,.18)]">
          {entries.map((n, i) => (
            <article
              key={n.id}
              id={n.id}
              ref={(el) => {
                refs.current[n.id] = el;
              }}
              className="scroll-mt-28 border-b border-[rgba(28,26,23,.18)] py-[clamp(56px,8vh,100px)]"
            >
              <Reveal className="grid grid-cols-1 gap-x-[clamp(24px,3vw,48px)] gap-y-6 sm:grid-cols-[auto_1fr]">
                <span aria-hidden className="numeral text-[rgba(28,26,23,.22)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="max-w-[60ch]">
                  <p className="label mb-4 text-[rgba(28,26,23,.55)]">{n.tag}</p>
                  <h2 className="max-w-[20ch] text-[clamp(28px,3vw,46px)] leading-[1.08] tracking-[-0.022em]">
                    {n.title}
                  </h2>
                  <p className="body mt-6 text-[rgba(28,26,23,.72)]">{n.body}</p>

                  {n.list ? (
                    <ul className="mt-8 border-t border-[rgba(28,26,23,.18)]">
                      {n.list.map((item) => (
                        <li
                          key={item}
                          className="border-b border-[rgba(28,26,23,.18)] py-4 text-[15px] leading-[1.6] text-ink"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {n.coda ? <p className="pull mt-8 italic">{n.coda}</p> : null}

                  <div className="relative mt-10 aspect-[3/2] w-full">
                    <Photo
                      src={n.image}
                      alt={n.imageAlt}
                      grade="plate"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                  </div>
                </div>
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
