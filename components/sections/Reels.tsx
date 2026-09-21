import Link from "next/link";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { home, site } from "@/lib/content";

// 06 From the House (brief §13). Three selected Reels as editorial vertical
// films: approved posters that open the Reel, never Instagram's own embed
// chrome, feed grids or follower counts. Desktop sets the three side by side;
// mobile is a row you swipe, each poster near full width, so they are watched
// the natural vertical way. Posters are stand-ins until the Reels are chosen.
export function Reels() {
  const r = home.reels;
  return (
    <section id="rules" className="section bg-cream">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-[rgba(28,26,23,.16)] pb-[34px]">
          <div>
            <p className="kicker !mb-[18px] text-[rgba(28,26,23,.55)]">{r.kicker}</p>
            <Reveal as="h2" className="max-w-[20ch] text-[clamp(30px,3.4vw,54px)] leading-[1.06] tracking-[-0.024em]">
              {r.title}
            </Reveal>
          </div>
          <div className="flex flex-wrap gap-8 text-[rgba(28,26,23,.7)]">
            <Link href={r.more.href} className="link-line !pb-1.5">
              {r.more.label} <span aria-hidden>→</span>
            </Link>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="link-line !pb-1.5">
              Instagram <span aria-hidden>↗</span>
            </a>
          </div>
        </div>

        <div
          aria-label="Three Reels from the house"
          className="no-scrollbar -mx-[var(--gutter)] mt-[clamp(48px,7vh,84px)] flex snap-x snap-mandatory scroll-px-[var(--gutter)] gap-4 overflow-x-auto px-[var(--gutter)] lg:mx-0 lg:grid lg:snap-none lg:grid-cols-3 lg:gap-[clamp(26px,3.2vw,52px)] lg:overflow-visible lg:px-0"
        >
          {r.items.map((it, i) => (
            <a
              key={it.line}
              href={it.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Watch on Instagram: ${it.line}`}
              className="on-dark group relative block aspect-[9/16] w-[78vw] max-w-[360px] flex-none snap-start overflow-hidden bg-ink-deep lg:w-auto lg:max-w-none"
            >
              <Photo
                src={it.image}
                alt={it.alt}
                position={it.position}
                grade="reel"
                scrims={["reel"]}
                sizes="(min-width: 900px) 33vw, 100vw"
                audit={i === 0 ? r.audit : undefined}
                auditAt="tl"
              />
              <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-3 p-7">
                <p className="max-w-[18ch] font-serif text-[clamp(18px,1.5vw,21px)] font-light leading-[1.3]">
                  {it.line}
                </p>
                <span
                  aria-hidden
                  className="grid h-[30px] w-[30px] flex-none place-items-center border border-[rgba(244,241,234,.6)] text-[12px] transition-colors duration-[240ms] group-hover:border-gold"
                >
                  ▶
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
