import { Reveal } from "@/components/Reveal";
import { Plate } from "@/components/Plate";
import { custodians, house } from "@/lib/content";

// Both brothers, co-equal. Portrait and words, on the ivory surface for rhythm
// after the dark lineage. Closes The House on the pedigree tagline.
export function Custodians() {
  return (
    <section
      data-nav="light"
      className="section section-tight mx-auto max-w-editorial"
    >
      <div className="grid grid-cols-1 items-center gap-x-[clamp(3rem,7vw,7rem)] gap-y-14 lg:grid-cols-[1fr_0.82fr]">
        {/* words */}
        <div>
          <Reveal as="p" className="eyebrow mb-8">
            {custodians.eyebrow}
          </Reveal>
          <Reveal>
            <h2 className="t-h1 max-w-[16ch] text-balance text-ink">
              {custodians.headline}
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="mt-8 max-w-measure t-lede text-ink">{custodians.body}</p>
          </Reveal>

          <Reveal delay={0.1} className="mt-12 border-t border-hairline pt-8">
            <dl className="grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2">
              {custodians.people.map((p) => (
                <div key={p.name}>
                  <dt className="font-serif text-[clamp(1.15rem,1.6vw,1.45rem)] text-ink">
                    {p.name}
                  </dt>
                  <dd className="mt-1 text-[0.95rem] text-ink-muted">{p.role}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-10 text-[0.95rem] italic text-ink-muted">
              {custodians.close}
            </p>
          </Reveal>
        </div>

        {/* portrait */}
        <Reveal as="figure" delay={0.14}>
          <Plate
            src={custodians.image}
            alt={custodians.imageAlt}
            className="aspect-[4/5] w-full"
          />
        </Reveal>
      </div>

      {/* Pedigree close. */}
      <Reveal delay={0.06}>
        <p className="mt-[clamp(3.5rem,8vh,6rem)] max-w-[24ch] font-serif text-[clamp(1.6rem,3vw,2.6rem)] leading-[1.15] text-ink">
          {house.tagline}
        </p>
      </Reveal>
    </section>
  );
}
