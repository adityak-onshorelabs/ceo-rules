import { AppointmentCta } from "@/components/AppointmentCta";
import { MediaField } from "@/components/MediaField";
import { hero } from "@/lib/content";
import { img } from "@/lib/images";

export function Hero() {
  const image = img(hero.imageId);

  return (
    <section id="top" className="bg-bg pt-[4.5rem]">
      <MediaField
        image={image}
        priority
        videoReady
        sizes="100vw"
        objectPosition="center 42%"
        objectPositionTablet="center 40%"
        objectPositionMobile="42% 36%"
        className="h-[min(78svh,36rem)] w-full sm:h-[82svh] lg:h-[85svh]"
      >
        {/* Soft local lift on pavement only — not a full-image scrim */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[36%] bg-gradient-to-t from-[color-mix(in_srgb,var(--bg)_55%,transparent)] via-[color-mix(in_srgb,var(--bg)_18%,transparent)] to-transparent"
        />
        <div className="absolute inset-x-0 bottom-0 z-[2] px-[var(--page-pad)] pb-[clamp(1.75rem,5vh,3.25rem)] pt-16">
          <div className="max-w-[34ch]">
            <p className="t-meta text-ink-muted">{hero.eyebrow}</p>
            <h1 className="mt-4 font-sans text-[clamp(1.85rem,3.2vw,2.65rem)] font-medium leading-[1.12] tracking-[-0.03em] text-ink">
              {hero.statement.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
            <div className="mt-7">
              <AppointmentCta label={hero.cta.label} tone="ink" />
            </div>
          </div>
        </div>
      </MediaField>
    </section>
  );
}
