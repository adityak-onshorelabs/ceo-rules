import Link from "next/link";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { home, site } from "@/lib/content";

// 01 Place. The storefront, arrival, the city.
export function Hero() {
  const h = home.hero;
  return (
    <section id="top" className="on-dark relative flex min-h-screen items-end overflow-hidden bg-ink-deep">
      <Photo
        src={h.image}
        alt={h.alt}
        position="32% 45%"
        grade="hero-base"
        scrims={["left", "base"]}
        motion="load"
        priority
        audit={h.audit}
      />
      <div className="relative z-10 max-w-[1100px] px-[var(--gutter)] pb-[clamp(84px,13vh,160px)] pt-40">
        <Reveal onLoad as="p" className="kicker !mb-9 text-[rgba(244,241,234,.78)]">
          {h.kicker}
        </Reveal>
        <Reveal onLoad as="h1" className="h-hero">
          {h.title}
        </Reveal>
        <Reveal onLoad delay={0.1} className="mt-[clamp(32px,5vh,54px)]">
          <Link href={site.appointment} className="link-line !text-[12px] !gap-3.5 !pb-[9px]">
            {h.cta} <span aria-hidden className="text-[14px]">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
