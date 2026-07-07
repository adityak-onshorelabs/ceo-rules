import { Reveal } from "@/components/Reveal";
import { Carousel } from "@/components/Carousel";
import { craft } from "@/lib/content";

// Attention to detail, in Anis's own words, with the details as a slow carousel.
export function Craft() {
  return (
    <section id="craft" data-nav="light" className="section mx-auto max-w-editorial">
      <Reveal as="p" className="eyebrow mb-10">
        {craft.eyebrow}
      </Reveal>
      <Reveal>
        <h2 className="t-h1 max-w-[16ch] text-balance text-ink">{craft.headline}</h2>
      </Reveal>
      <Reveal delay={0.06}>
        <p className="mt-6 max-w-measure t-lede text-ink">{craft.lead}</p>
      </Reveal>

      <div className="mt-12 max-w-[40rem]">
        <Carousel items={craft.details} label="What the house attends to" />
      </div>

      <Reveal delay={0.08} className="mt-14 max-w-measure border-t border-hairline pt-8">
        <p className="t-lede italic text-gold-ink">{craft.close}</p>
      </Reveal>
    </section>
  );
}
