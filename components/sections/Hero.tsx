import Link from "next/link";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { home, site } from "@/lib/content";

// 01 Place (brief §5). The daytime storefront, full width, no card, no margins.
//
// Desktop: the type is art-directed into the one genuine negative space the
// photograph has, the pale cladding at the upper left, clear of the signage,
// the plaque and the mannequins. It is set in House Ink over a soft local lift
// of tone, not a dark overlay. Its width is held in vw so it keeps clear of the
// sign, which sits ~22.6% in from the left at any desktop width.
//
// Mobile: a portrait crop centred on the sign and the door, with the type set
// on House Ivory directly beneath it: its own composition, not the desktop
// frame squeezed down (brief §21).
export function Hero() {
  const h = home.hero;
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-cream lg:h-[calc(100svh-var(--nav-h))] lg:min-h-[600px]"
    >
      <div className="relative h-[62svh] min-h-[360px] lg:absolute lg:inset-0 lg:h-auto lg:min-h-0">
        <Photo
          src={h.image}
          alt={h.alt}
          position="50% 30%"
          mobilePosition="42% 50%"
          grade="day"
          scrims={["lift-tl"]}
          scrimCls={{ "lift-tl": "hidden lg:block" }}
          motion="load"
          priority
          audit={h.audit}
        />
      </div>

      <div className="relative z-10 px-[var(--gutter)] pb-[clamp(48px,8vh,72px)] pt-[clamp(32px,5vh,44px)] lg:absolute lg:left-[clamp(28px,2.6vw,56px)] lg:top-[clamp(32px,5vh,64px)] lg:w-[19.5vw] lg:p-0">
        <Reveal onLoad as="p" className="kicker !mb-[22px] text-[rgba(28,26,23,.62)]">
          {h.kicker}
        </Reveal>
        <Reveal
          onLoad
          as="h1"
          className="max-w-[12ch] font-serif text-[clamp(38px,10vw,48px)] font-light leading-[1.02] tracking-[-0.025em] text-ink lg:max-w-none lg:text-[2.8vw]"
        >
          {h.title}
        </Reveal>
        <Reveal onLoad delay={0.1} className="mt-[clamp(24px,3.4vh,32px)]">
          <Link href={site.appointment} className="link-line !text-[12px] !gap-3 text-ink">
            {h.cta} <span aria-hidden className="text-[14px]">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
