import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/content";

// Two-column editorial breath used under every interior hero.
export function Breath({ title, body }: { title: string; body: string | string[] }) {
  const paras = Array.isArray(body) ? body : [body];
  return (
    <section className="section bg-cream">
      <div className="breath mx-auto max-w-wide">
        <Reveal as="h2" className="h-breath">
          {title}
        </Reveal>
        <div className="space-y-[26px]">
          {paras.map((p) => (
            <p key={p.slice(0, 24)} className="body text-[rgba(28,26,23,.72)]">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

// Closing band that hands every interior page to the appointment.
export function Closing({
  kicker,
  title,
  body,
  ground = "deep",
}: {
  kicker: string;
  title: string;
  body?: string;
  ground?: "deep" | "ink";
}) {
  const dark = ground === "ink";
  return (
    <section
      className={
        dark ? "section on-dark bg-ink" : "section-accent on-cream bg-cream-deep"
      }
    >
      <div className={`mx-auto ${dark ? "max-w-[1100px]" : "max-w-page"}`}>
        <p className={`kicker ${dark ? "text-[rgba(244,241,234,.6)]" : "text-[rgba(28,26,23,.55)]"}`}>{kicker}</p>
        <Reveal as="p" className="statement">
          {title}
        </Reveal>
        {body ? (
          <p className="body mt-[clamp(36px,5vh,60px)] text-[rgba(28,26,23,.72)]">{body}</p>
        ) : null}
        <Link href={site.appointment} className="link-box mt-[clamp(40px,6vh,70px)]">
          Book a Private Appointment <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
