import { Reveal } from "@/components/Reveal";
import { heritage } from "@/lib/content";

// The reveal. Dark, for gravitas. The year is the one big number the site earns.
export function Heritage() {
  return (
    <section
      id="heritage"
      data-nav="dark"
      className="on-dark section mx-auto max-w-editorial"
    >
      <Reveal>
        <p className="max-w-measure t-lede text-ink-dark-muted">{heritage.lead}</p>
      </Reveal>

      {/* The reveal itself. */}
      <Reveal delay={0.1}>
        <p className="mt-[clamp(3rem,8vh,7rem)] font-serif leading-none text-gold-on-dark text-[clamp(4.5rem,15vw,13rem)] tracking-[-0.02em]">
          {heritage.year}
        </p>
      </Reveal>
      <Reveal delay={0.16}>
        <p className="mt-4 t-h2 text-ink-dark">{heritage.years}</p>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mt-[clamp(2.5rem,6vh,5rem)] max-w-measure t-lede text-ink-dark-muted">
          {heritage.body}
        </p>
      </Reveal>

      <Reveal delay={0.12}>
        <p className="mt-12 font-serif text-[clamp(1.2rem,1.7vw,1.6rem)] italic text-gold-on-dark">
          {heritage.close}
        </p>
      </Reveal>
    </section>
  );
}
