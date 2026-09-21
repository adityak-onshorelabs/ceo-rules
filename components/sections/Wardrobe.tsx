import Link from "next/link";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { home } from "@/lib/content";

// 05 Man. The finished garment, and the six things the house makes.
export function Wardrobe() {
  const w = home.wardrobe;
  return (
    <section id="wardrobe" className="on-dark relative flex min-h-screen items-end overflow-hidden bg-ink-deep">
      <Photo
        src={w.image}
        alt={w.alt}
        position="50% 36%"
        mobilePosition="50% 14%"
        grade="interior"
        scrims={["deepen-bl"]}
        motion="drift"
        audit={w.audit}
        auditAt="tr"
      />
      <div className="halo-cream relative z-10 w-full max-w-[calc(var(--gutter)+760px)] px-[var(--gutter)] pb-[clamp(76px,12vh,150px)] pt-40">
        <p className="kicker text-cream">{w.kicker}</p>
        <Reveal as="h2" className="h-section !max-w-[18ch]">
          {w.title}
        </Reveal>
        <div className="mt-[clamp(34px,5vh,54px)] flex flex-wrap items-baseline gap-x-12 gap-y-[22px] border-t border-[rgba(244,241,234,.2)] pt-[30px]">
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
