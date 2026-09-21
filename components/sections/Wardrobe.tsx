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
        position="38% 32%"
        grade="interior"
        scrims={["interior"]}
        motion="drift"
        audit={w.audit}
        auditAt="tr"
      />
      <div className="relative z-10 w-full px-[var(--gutter)] pb-[clamp(76px,12vh,150px)] pt-40">
        <p className="kicker text-[rgba(244,241,234,.7)]">{w.kicker}</p>
        <Reveal as="h2" className="h-section !max-w-[18ch]">
          {w.title}
        </Reveal>
        <div className="mt-[clamp(34px,5vh,54px)] flex flex-wrap items-baseline gap-x-12 gap-y-[22px] border-t border-[rgba(244,241,234,.2)] pt-[30px]">
          {w.categories.map((c) => (
            <span key={c} className="text-[clamp(13px,1.05vw,15px)] uppercase tracking-[0.14em] text-[rgba(244,241,234,.86)]">
              {c}
            </span>
          ))}
          <Link href="/the-wardrobe" className="link-line ml-auto !pb-1.5">
            {w.cta} <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
