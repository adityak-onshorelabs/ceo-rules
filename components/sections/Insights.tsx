"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { insights } from "@/lib/content";

// The founder's insights as a long-form reading page: a sticky contents rail that
// tracks the active essay, quiet serif numerals as anchors, and the fit checklist
// pulled into a recessed field so no two entries read the same.
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
    <section id="insights" data-nav="light" className="section mx-auto max-w-editorial">
      {/* Header */}
      <header className="grid grid-cols-1 items-end gap-y-8 stitch-bottom pb-[clamp(2.5rem,6vh,4rem)] lg:grid-cols-[1fr_auto]">
        <div className="max-w-[42rem]">
          <p className="eyebrow mb-8">{insights.eyebrow}</p>
          <h1 className="t-display text-ink">{insights.title}</h1>
          <p className="mt-8 max-w-measure t-lede text-ink">{insights.intro}</p>
        </div>
        <p className="eyebrow tabular-nums text-ink-faint lg:text-right">
          {String(entries.length).padStart(2, "0")} reflections
        </p>
      </header>

      {/* Reading layout: contents rail + essays */}
      <div className="mt-[clamp(3rem,8vh,6rem)] grid grid-cols-1 gap-x-[clamp(3rem,7vw,7rem)] lg:grid-cols-[0.42fr_1fr]">
        {/* Sticky contents */}
        <aside className="hidden lg:block">
          <nav className="sticky top-28" aria-label="Contents">
            <p className="eyebrow mb-6">Contents</p>
            <ol className="space-y-3.5">
              {entries.map((e, i) => (
                <li key={e.id} className="flex gap-3 leading-snug">
                  <span className="eyebrow tabular-nums pt-0.5 text-ink-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <a
                    href={`#${e.id}`}
                    className={`text-[0.95rem] transition-colors duration-300 ${
                      active === e.id
                        ? "text-ink"
                        : "text-ink-faint hover:text-ink-muted"
                    }`}
                  >
                    {e.tag}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        {/* Essays */}
        <div>
          {entries.map((n, i) => (
            <Reveal
              as="article"
              key={n.id}
              delay={0.02}
              className={`scroll-mt-28 stitch-bottom py-[clamp(3rem,6vh,5rem)] first:pt-0 ${
                i === 0 ? "lg:pt-0" : ""
              }`}
            >
              <div
                id={n.id}
                ref={(el) => {
                  refs.current[n.id] = el;
                }}
                className="grid grid-cols-1 gap-x-[clamp(1.5rem,3vw,3rem)] gap-y-4 sm:grid-cols-[auto_1fr]"
              >
                <span
                  aria-hidden
                  className="font-serif leading-none text-ink-faint text-[clamp(2rem,4vw,3.25rem)]"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="max-w-measure">
                  <p className="eyebrow mb-4 text-gold-ink">{n.tag}</p>
                  <h2 className="t-h2 text-balance text-ink">{n.title}</h2>
                  <p className="mt-5 text-ink-muted">{n.body}</p>

                  {"list" in n && n.list ? (
                    <ul className="mt-7 space-y-3 rounded-[2px] bg-surface p-[clamp(1.25rem,3vw,2rem)]">
                      {n.list.map((item) => (
                        <li key={item} className="flex gap-3 text-ink">
                          <span aria-hidden className="mt-1 text-gold-ink">
                            &#10003;
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {"coda" in n && n.coda ? (
                    <p className="mt-6 font-serif text-[clamp(1.1rem,1.5vw,1.35rem)] italic text-gold-ink">
                      {n.coda}
                    </p>
                  ) : null}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
