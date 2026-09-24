import Link from "next/link";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { home } from "@/lib/content";

// 05 Man. The finished garment, and the six things the house makes.
export function Wardrobe() {
  const w = home.wardrobe;
  return (
    <section id="wardrobe" className="on-dark relative overflow-hidden bg-ink-deep lg:flex lg:min-h-screen lg:items-end">
      {/* Mobile: the photograph leads; the type follows on House Ink (brief §21). */}
      <div className="relative h-[56svh] min-h-[320px] lg:absolute lg:inset-0 lg:h-auto lg:min-h-0">
      <Photo
        src={w.image}
        alt={w.alt}
        position="50% 50%"
        mobilePosition="30% 50%"
        grade="interior"
        scrims={["deepen-bl"]}
        scrimCls={{ "deepen-bl": "hidden lg:block" }}
        motion="drift"
        audit={w.audit}
        auditAt="tr"
      />
      </div>
      <div className="relative z-10 w-full max-w-[calc(var(--gutter)+760px)] px-[var(--gutter)] pb-[clamp(64px,10vh,150px)] pt-[clamp(36px,6vh,56px)] lg:halo-cream lg:pt-40">
        <p className="kicker text-cream">{w.kicker}</p>
        <Reveal as="h2" className="h-section !max-w-[18ch]">
          {w.title}
        </Reveal>
        <div className="mt-[clamp(34px,5vh,54px)] grid grid-cols-2 gap-x-8 gap-y-[22px] sm:flex sm:flex-wrap sm:items-baseline sm:gap-x-12 border-t border-[rgba(244,241,234,.2)] pt-[30px]">
          {w.categories.map((c) => (
            <span key={c} className="text-[clamp(13px,1.05vw,15px)] uppercase tracking-[0.14em] text-cream">
              {c}
            </span>
          ))}
        </div>
        <Link href="/the-wardrobe" className="link-line mt-[clamp(28px,4vh,40px)]">
          {w.cta} <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
