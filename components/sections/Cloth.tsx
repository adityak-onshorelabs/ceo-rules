import { Reveal } from "@/components/Reveal";
import { MediaField } from "@/components/MediaField";
import { CtaLink } from "@/components/CtaLink";
import { MeasureTicks } from "@/components/MeasureTicks";
import { cloth } from "@/lib/content";
import { img } from "@/lib/images";

export function Cloth() {
  return (
    <section id="cloth" data-nav="light" className="section-tight mx-auto max-w-editorial">
      <Reveal>
        <MeasureTicks className="mb-10 h-2.5 w-32 text-walnut" />
      </Reveal>

      <div className="house-grid items-start">
        <div className="col-span-4 md:col-span-6 lg:col-span-12">
          <Reveal as="p" className="t-meta text-ink-muted">
            {cloth.housesLabel}
          </Reveal>
        </div>

        <div className="col-span-4 md:col-span-3 lg:col-span-5">
          <p className="t-meta text-ink-muted">{cloth.suitingLabel}</p>
          <ul className="mt-4">
            {cloth.suiting.map((house) => (
              <li key={house.name} className="flex items-baseline justify-between gap-6 py-1.5">
                <span className="t-h2 text-ink">{house.name}</span>
                {house.place ? <span className="t-meta text-ink-muted">{house.place}</span> : null}
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-4 md:col-span-3 lg:col-span-4 lg:col-start-8">
          <p className="t-meta text-ink-muted">{cloth.shirtingLabel}</p>
          <ul className="mt-4">
            {cloth.shirting.map((house) => (
              <li key={house.name} className="t-h2 py-1.5 text-ink">
                {house.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-16 lg:mt-20">
        <Reveal as="p" className="t-meta text-ink-muted">
          {cloth.cut.label}
        </Reveal>
        <p className="t-annotate mt-2 max-w-[28ch] text-ink">{cloth.cut.body}</p>
      </div>

      <figure className="field-edge-right mt-8">
        <MediaField
          image={img(cloth.edgesImageId)}
          sizes="(min-width: 1024px) 70vw, 100vw"
          className="aspect-[3/2] w-full"
        />
      </figure>

      <div className="mt-16 lg:mt-20">
        <Reveal as="p" className="t-meta text-ink-muted">
          {cloth.canvas.label}
        </Reveal>
        <p className="t-serif mt-3 max-w-[16ch] text-ink">{cloth.canvas.line}</p>
        <p className="t-annotate mt-3 max-w-[36ch] text-ink-muted">{cloth.canvas.body}</p>

        <figure className="mt-8 max-w-[31rem]">
          <MediaField
            image={img(cloth.formImageId)}
            sizes="496px"
            className="aspect-square w-full"
          />
        </figure>
      </div>

      <div className="mt-16 lg:mt-20">
        <Reveal as="p" className="t-meta text-ink-muted">
          {cloth.fit.label}
        </Reveal>
        <p className="t-annotate mt-2 max-w-[22ch] text-ink">{cloth.fit.body}</p>
      </div>

      <div className="mt-12 max-w-[32rem] lg:mt-16">
        <Reveal as="p" className="t-meta text-ink-muted">
          {cloth.finish.label}
        </Reveal>
        <p className="t-annotate mt-2 max-w-[26ch] text-ink-muted">{cloth.finish.body}</p>
        <div className="mt-10">
          <CtaLink href={cloth.teach.link.href}>{cloth.teach.link.label}</CtaLink>
        </div>
      </div>
    </section>
  );
}
