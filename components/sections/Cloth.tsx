import Link from "next/link";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { home } from "@/lib/content";

// 02 Material. The cloth books, and the houses we keep.
export function Cloth() {
  const c = home.cloth;
  return (
    <section id="cloth" className="on-dark relative flex min-h-screen items-center overflow-hidden bg-ink-deep">
      <Photo
        src={c.image}
        alt={c.alt}
        position="58% 50%"
        grade="hero-left"
        scrims={["side"]}
        motion="drift"
        audit={c.audit}
      />
      <div className="relative z-10 max-w-[720px] px-[var(--gutter)] py-[clamp(120px,18vh,210px)]">
        <p className="kicker text-[rgba(244,241,234,.7)]">{c.kicker}</p>
        <Reveal as="h2" className="h-section !max-w-[14ch] !text-[clamp(36px,5vw,82px)]">
          {c.title}
        </Reveal>
        <p className="body mt-[clamp(28px,4vh,44px)] max-w-[46ch] text-[rgba(244,241,234,.74)]">{c.body}</p>
        <Link href={c.cta.href} className="link-line mt-[clamp(32px,4vh,48px)]">
          {c.cta.label} <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
