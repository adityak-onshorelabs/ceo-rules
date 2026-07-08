import { Reveal } from "@/components/Reveal";
import { Plate } from "@/components/Plate";
import { Grain } from "@/components/Grain";

// Full-bleed topper for the secondary pages (The House / The Cloth / The Atelier).
// A cinema-dark band with a left legibility bed, so ivory type holds over any bright
// region of the photograph (same recipe as the home Hero).
export function PageHero({
  eyebrow,
  title,
  lede,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section
      data-nav="dark"
      className="on-dark relative flex min-h-[70svh] flex-col justify-end overflow-hidden"
    >
      <div className="absolute inset-0">
        <Plate src={image} alt={imageAlt} priority className="h-full w-full" />
      </div>
      <Grain />

      {/* Legibility scrims: a dark bed under the copy column, an anchored base. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-[5] w-full md:w-[74%]"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.13 0.012 58 / 0.82) 0%, oklch(0.13 0.012 58 / 0.5) 44%, transparent 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-[62%]"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, oklch(0.14 0.012 58 / 0.55) 45%, oklch(0.13 0.012 58 / 0.9) 100%)",
        }}
      />

      <div
        className="relative z-10 mx-auto w-full max-w-editorial px-[clamp(1.5rem,6vw,6rem)] pb-[clamp(3.5rem,9vh,7rem)] pt-[clamp(7rem,16vh,10rem)]"
        style={{ textShadow: "0 1px 24px oklch(0.12 0.012 58 / 0.5)" }}
      >
        <Reveal as="p" className="eyebrow mb-6 text-gold-on-dark">
          {eyebrow}
        </Reveal>
        <Reveal>
          <h1 className="t-display max-w-[16ch] text-ink-dark">{title}</h1>
        </Reveal>
        {lede ? (
          <Reveal delay={0.08}>
            <p className="mt-8 max-w-measure t-lede text-ink-dark">{lede}</p>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
