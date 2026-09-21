"use client";

import { useEffect, useRef, useState } from "react";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { home } from "@/lib/content";

// 03 Making (brief §7): cut, canvas, fit, finish as consecutive moments inside
// the atelier. No cards, no four-column grid.
//
// Desktop: one photographic field holds the left half, edge to edge, and stays
// while the four moments pass on House Ivory at the right. As a moment reaches
// the middle of the screen the field cross-fades to it. Scrolling stays native
// (no pinning of the page, no hijacking); only the photograph is sticky.
// The half-width field also keeps today's sub-1100px source frames sharp,
// where full-screen frames would pixelate (brief §4).
//
// Mobile: the same four moments in order, each a full-width photograph with its
// line beneath it.
export function Craft() {
  const c = home.craft;
  const [active, setActive] = useState(0);
  const moments = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.index));
        }
      },
      // A moment is "current" while it crosses the middle band of the screen.
      { rootMargin: "-45% 0px -45% 0px" },
    );
    moments.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="craft" aria-labelledby="craft-title" className="bg-cream lg:grid lg:grid-cols-2">
      {/* Desktop: the sticky photographic field. */}
      <div className="relative hidden lg:block">
        <div className="sticky top-[var(--nav-h)] h-[calc(100svh-var(--nav-h))] overflow-hidden bg-ink-deep">
          {c.steps.map((s, i) => (
            <div
              key={s.label}
              aria-hidden={i !== active}
              className={`absolute inset-0 transition-opacity duration-700 ease-house ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
            >
              <Photo
                src={s.image}
                alt={s.alt}
                position={s.position}
                grade="plate"
                sizes="50vw"
                audit={s.audit}
                auditAt="bl"
              />
            </div>
          ))}
        </div>
      </div>

      <div>
        <header className="px-[clamp(24px,5vw,96px)] pb-[clamp(56px,9vh,96px)] pt-[var(--section-y)] lg:flex lg:min-h-[64svh] lg:flex-col lg:justify-end lg:pb-[clamp(40px,6vh,64px)]">
          <p className="kicker text-[rgba(28,26,23,.62)]">{c.kicker}</p>
          <Reveal as="h2" className="h-section">
            <span id="craft-title">{c.title}</span>
          </Reveal>
        </header>

        <ol className="lg:pb-[18svh]">
          {c.steps.map((s, i) => (
            <li
              key={s.label}
              data-index={i}
              ref={(el) => {
                moments.current[i] = el;
              }}
              className="pb-[clamp(64px,10vh,96px)] lg:flex lg:min-h-[calc(82svh-var(--nav-h))] lg:flex-col lg:justify-center lg:pb-0"
            >
              {/* Mobile: the photograph leads each moment, full width. */}
              <div className="relative aspect-[4/5] lg:hidden">
                <Photo
                  src={s.image}
                  alt={s.alt}
                  position={s.position}
                  grade="plate"
                  sizes="100vw"
                  audit={s.audit}
                  auditAt="bl"
                />
              </div>
              <div
                className={`px-[clamp(24px,5vw,96px)] pt-7 transition-opacity duration-500 lg:pt-0 ${
                  i === active ? "lg:opacity-100" : "lg:opacity-40"
                }`}
              >
                <p className="text-[11.5px] uppercase tracking-[0.24em] text-[rgba(28,26,23,.62)]">{s.label}</p>
                <p className="mt-4 max-w-[14ch] font-serif text-[clamp(30px,8vw,40px)] font-light leading-[1.08] tracking-[-0.022em] text-ink lg:text-[clamp(34px,3.2vw,54px)]">
                  {s.line}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
