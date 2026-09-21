import { AppointmentCta } from "@/components/AppointmentCta";
import { OpeningCutMark } from "@/components/OpeningCutMark";
import { hero } from "@/lib/content";

export function HouseStatement() {
  return (
    <section className="chapter-tight bg-bg text-center">
      <p className="t-meta text-ink-muted">{hero.eyebrow}</p>
      <h1 className="mx-auto mt-5 max-w-[22ch] font-sans text-[clamp(1.85rem,2.6vw,2.55rem)] font-medium leading-[1.12] tracking-[-0.03em] text-ink">
        {hero.statement.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h1>
      <div className="mt-8 flex justify-center">
        <AppointmentCta label={hero.cta.label} tone="ink" />
      </div>
      <div className="mx-auto mt-10 w-full max-w-xl overflow-hidden lg:max-w-2xl">
        <OpeningCutMark />
      </div>
    </section>
  );
}
