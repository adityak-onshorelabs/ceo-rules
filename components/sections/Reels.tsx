import Link from "next/link";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { home, site } from "@/lib/content";

// 06 From the House. Three Instagram Reels as 9:16 posters. The poster frames
// are stand-ins until the client picks the three Reels.
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

        <div className="mt-[clamp(48px,7vh,84px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,270px),1fr))] gap-[clamp(26px,3.2vw,52px)]">
          {r.items.map((it, i) => (
            <a
              key={it.line}
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="on-dark group relative block aspect-[9/16] overflow-hidden bg-ink-deep"
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
                  className="grid h-[30px] w-[30px] flex-none place-items-center border border-[rgba(244,241,234,.6)] text-[10px] transition-colors duration-[240ms] group-hover:border-gold"
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
