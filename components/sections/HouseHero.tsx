import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { house } from "@/lib/content";

// The House opens like the first page of a family history, not a shop front:
// the words come first on the ivory, set large; the storefront follows, shown
// whole in its own 4:3 frame, with the three-part lineage beside it
// (PRODUCT.md: the heritage story belongs here, never on the homepage).
// No button: this page is read, and the bar carries "Visit the Atelier".
export function HouseHero() {
  const h = house.hero;
  return (
    <section aria-labelledby="house-title" className="bg-cream text-ink">
      <div className="mx-auto max-w-wide px-[var(--gutter)] pb-[clamp(36px,6vh,72px)] pt-[calc(var(--nav-h)+clamp(40px,8vh,104px))]">
        <Reveal
          onLoad
          className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3 border-b border-[rgba(28,26,23,.18)] pb-5"
        >
          <p className="kicker !mb-0 text-[rgba(28,26,23,.72)]">{h.kicker}</p>
          <p className="label text-[rgba(28,26,23,.55)]">{h.place}</p>
        </Reveal>
        <Reveal onLoad delay={0.08} className="mt-[clamp(28px,5vh,56px)]">
          <h1
            id="house-title"
            className="max-w-[11ch] font-serif text-[clamp(52px,9vw,156px)] font-light leading-[0.94] tracking-[-0.035em]"
          >
            {h.title}
          </h1>
        </Reveal>
      </div>

      {/* The storefront is shown whole: the frame matches the photograph's own
          4:3, so nothing is cropped. The lineage sits beside it on desktop. */}
      <div className="mx-auto grid max-w-wide grid-cols-1 items-end gap-x-[clamp(32px,4vw,72px)] px-[var(--gutter)] pb-[clamp(56px,9vh,112px)] lg:grid-cols-[minmax(0,min(62%,calc(66vh*4/3)))_1fr]">
        <div className="relative aspect-[4/3] w-full">
          <Photo
            src={h.image}
            alt={h.alt}
            grade="day"
            motion="reveal"
            priority
            sizes="(min-width: 1024px) 60vw, 100vw"
          />
        </div>

        <ol className="mt-[clamp(28px,4vh,40px)] border-t border-[rgba(28,26,23,.18)] lg:mt-0">
          {h.lineage.map((l, i) => (
            <Reveal
              as="li"
              key={l.mark}
              delay={i * 0.06}
              className="border-b border-[rgba(28,26,23,.18)] py-[clamp(22px,3.4vh,36px)]"
            >
              <p className="font-serif text-[clamp(28px,2.6vw,42px)] font-light leading-none tracking-[-0.02em]">{l.mark}</p>
              <p className="mt-3 max-w-[34ch] text-[15px] leading-[1.6] text-[rgba(28,26,23,.72)]">{l.line}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
