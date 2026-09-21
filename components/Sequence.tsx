import type { ReactNode } from "react";
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

// Consecutive moments as an editorial spread (brief §7, §28: no cards, no
// feature grids, photography dominates).
//
// Desktop: each moment is its own large photograph bleeding off one edge of
// the screen, alternating left and right down the page, with its label
// and line set in the open side. Nothing is pinned; the page simply
// scrolls, and each photograph unrolls once as it arrives.
// Mobile: the moments in order, each a full-width photograph with its words
// beneath.
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
  return (
    <section id={id} aria-labelledby={labelledBy} className="bg-cream pb-[var(--section-y)]">
      <header className="px-[var(--gutter)] pb-[clamp(56px,10vh,120px)] pt-[var(--section-y)]">
        <div className="mx-auto max-w-wide">{header}</div>
      </header>

      <ol className="flex flex-col gap-[clamp(72px,14vh,168px)]">
        {moments.map((m, i) => {
          const photoLeft = i % 2 === 0;
          return (
            <li key={m.label} className="lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-[clamp(24px,3vw,56px)]">
              <div
                className={`relative aspect-[4/5] lg:aspect-auto lg:h-[clamp(520px,calc(82svh-var(--nav-h)*0.2),880px)] ${
                  photoLeft ? "lg:col-span-7 lg:col-start-1" : "lg:col-span-7 lg:col-start-6 lg:row-start-1"
                }`}
              >
                <Photo
                  src={m.image}
                  alt={m.alt}
                  position={m.position}
                  grade="plate"
                  motion="reveal"
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  audit={m.audit}
                  auditAt="bl"
                />
              </div>
              <div
                className={`px-[var(--gutter)] pt-7 lg:row-start-1 lg:px-0 lg:pt-0 ${
                  photoLeft ? "lg:col-span-4 lg:col-start-9 lg:pr-[var(--gutter)]" : "lg:col-span-4 lg:col-start-1 lg:pl-[var(--gutter)]"
                }`}
              >
                <p className="text-[12px] uppercase tracking-[0.24em] text-[rgba(28,26,23,.66)]">{m.label}</p>
                <h3 className="mt-4 max-w-[15ch] font-serif text-[clamp(30px,8vw,40px)] font-light leading-[1.08] tracking-[-0.022em] text-ink lg:text-[clamp(32px,2.9vw,50px)]">
                  {m.line}
                </h3>
                {m.body ? <p className="body mt-5 max-w-[40ch] text-[rgba(28,26,23,.74)]">{m.body}</p> : null}
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
