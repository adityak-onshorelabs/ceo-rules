import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { home, testimonial } from "@/lib/content";

// 07 History. 1881, six generations, and one client's word for it.
export function Heritage() {
  const h = home.heritage;
  return (
    <section id="house" className="section-accent on-cream bg-cream-deep">
      <div className="mx-auto max-w-page">
        <p className="kicker !mb-[30px] text-[rgba(28,26,23,.55)]">{h.kicker}</p>
        <Reveal
          as="p"
          className="max-w-[19ch] font-serif text-[clamp(30px,4vw,64px)] font-light leading-[1.16] tracking-[-0.02em]"
        >
          {h.title}
        </Reveal>
        <div className="mt-[clamp(44px,7vh,88px)] grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-[clamp(44px,6vw,110px)] border-t border-[rgba(28,26,23,.18)] pt-[clamp(40px,6vh,68px)]">
          <p className="body text-[rgba(28,26,23,.75)]">{h.body}</p>
          <figure>
            <blockquote className="text-[clamp(18px,1.6vw,23px)] leading-[1.5] tracking-[-0.01em]">
              “{testimonial.quote}”
            </blockquote>
            <figcaption className="mt-[18px] text-[12px] uppercase tracking-[0.2em] text-[rgba(28,26,23,.55)]">
              {testimonial.by}
            </figcaption>
          </figure>
        </div>
        <Link href={h.cta.href} className="link-line mt-[clamp(36px,5vh,60px)]">
          {h.cta.label} <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
