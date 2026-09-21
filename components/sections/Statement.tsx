import { Reveal } from "@/components/Reveal";
import { home } from "@/lib/content";

// The breath between Place and Material: a two-column editorial statement.
export function Statement() {
  const s = home.statement;
  return (
    <section className="section bg-cream">
      <div className="breath mx-auto max-w-[1400px]">
        <Reveal
          as="p"
          className="max-w-[22ch] font-serif text-[clamp(24px,2.6vw,38px)] font-light leading-[1.32] tracking-[-0.015em]"
        >
          {s.lead}
        </Reveal>
        <Reveal as="p" delay={0.08} className="body text-[rgba(28,26,23,.72)]">
          {s.body}
        </Reveal>
      </div>
    </section>
  );
}
