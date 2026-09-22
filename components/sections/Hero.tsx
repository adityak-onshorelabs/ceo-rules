import Link from "next/link";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { home, site } from "@/lib/content";

// 01 Place (brief §5). The daytime storefront, full width, no card, no margins.
//
// Desktop: the type does not compete with the signage. It sits on a solid
// House Ivory panel down the left of the fold, and the photograph fills the
// rest edge to edge (top, right, bottom), framed so the whole façade and sign
// read uncut. The appointment CTA is a solid block of
// the official blue: the one place the signature accent carries weight.
//
// Mobile: a portrait crop centred on the sign and the door, with the same
// panel content set on House Ivory directly beneath (brief §21).
export function Hero() {
  const h = home.hero;
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-cream lg:grid lg:h-[100svh] lg:min-h-[680px] lg:grid-cols-[min(36vw,540px)_1fr]"
    >
      <div className="relative h-[62svh] min-h-[360px] lg:order-2 lg:h-auto lg:min-h-0">
        <Photo
          src={h.image}
          alt={h.alt}
          position="30% 40%"
          mobilePosition="42% 50%"
          grade="day"
          motion="load"
          priority
          audit={h.audit}
          auditAt="br"
        />
      </div>

      <div className="relative z-10 flex flex-col bg-cream px-[var(--gutter)] pb-[clamp(48px,8vh,72px)] pt-[clamp(32px,5vh,44px)] lg:order-1 lg:justify-end lg:px-[clamp(32px,3.2vw,60px)] lg:pb-[clamp(48px,8vh,88px)] lg:pt-[calc(var(--nav-h)+clamp(40px,6vh,68px))]">
        <Reveal onLoad as="p" className="kicker !mb-[22px] text-[rgba(28,26,23,.72)]">
          {h.kicker}
        </Reveal>
        <Reveal
          onLoad
          as="h1"
          className="max-w-[12ch] font-serif text-[clamp(38px,10vw,48px)] font-light leading-[1.02] tracking-[-0.025em] text-ink lg:text-[clamp(40px,3.5vw,60px)]"
        >
          {h.title}
        </Reveal>
        <Reveal onLoad delay={0.1} className="mt-[clamp(28px,4vh,40px)]">
          <Link
            href={site.appointment}
            className="inline-flex min-h-12 items-center gap-4 bg-blue px-6 py-4 text-[12px] uppercase tracking-[0.2em] text-cream transition-colors duration-[240ms] hover:bg-ink"
          >
            {h.cta} <span aria-hidden className="text-[14px]">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
