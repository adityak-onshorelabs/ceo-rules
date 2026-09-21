import Link from "next/link";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { home, site } from "@/lib/content";

// The address / hours / WhatsApp trio, on either ground.
export function VisitDetails({ dark = true }: { dark?: boolean }) {
  const muted = dark ? "text-[rgba(244,241,234,.5)]" : "text-[rgba(28,26,23,.5)]";
  const text = dark ? "text-[rgba(244,241,234,.85)]" : "text-[rgba(28,26,23,.8)]";
  const rule = dark ? "border-[rgba(244,241,234,.18)]" : "border-[rgba(28,26,23,.18)]";
  return (
    <div className={`grid grid-cols-[repeat(auto-fit,minmax(min(100%,190px),1fr))] gap-10 border-t pt-10 ${rule}`}>
      <div>
        <p className={`label mb-3 ${muted}`}>The house</p>
        <address className={`text-[14.5px] not-italic leading-[1.7] ${text}`}>
          {site.address.map((l) => (
            <span key={l} className="block">
              {l}
            </span>
          ))}
        </address>
        <a
          href={site.mapHref}
          target="_blank"
          rel="noopener noreferrer"
          className="link-line mt-3 !pb-1 !text-[12px] !tracking-[0.18em]"
        >
          Directions <span aria-hidden>↗</span>
        </a>
      </div>
      <div>
        <p className={`label mb-3 ${muted}`}>Hours</p>
        <p className={`text-[14.5px] leading-[1.7] ${text}`}>
          {site.hours[0]}
          <br />
          {site.hours[1]}
        </p>
      </div>
      <div>
        <p className={`label mb-3 ${muted}`}>Speak to us</p>
        <a
          href={site.whatsapp.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`border-b pb-[3px] text-[14.5px] leading-[1.7] transition-colors duration-[240ms] hover:border-gold ${text} ${
            dark ? "border-[rgba(244,241,234,.3)]" : "border-[rgba(28,26,23,.25)]"
          }`}
        >
          {site.whatsapp.label}
        </a>
      </div>
    </div>
  );
}

// 08 Invitation. Address, hours, WhatsApp, and the appointment.
export function Visit() {
  const v = home.visit;
  return (
    <section id="visit" className="split on-dark relative bg-ink">
      <div className="flex flex-col justify-center px-[clamp(24px,6vw,110px)] py-[clamp(110px,17vh,210px)]">
        <p className="kicker text-[rgba(244,241,234,.6)]">{v.kicker}</p>
        <Reveal as="h2" className="max-w-[14ch] text-[clamp(34px,4.4vw,72px)] leading-[1.03] tracking-[-0.026em]">
          {v.title}
        </Reveal>
        <p className="body mt-[clamp(24px,3.5vh,36px)] max-w-[42ch] text-[rgba(244,241,234,.74)]">{v.body}</p>
        <Link href={site.appointment} className="link-box mt-[clamp(32px,4.5vh,52px)] self-start !px-[26px] !py-[15px]">
          {v.cta} <span aria-hidden>→</span>
        </Link>
        <div className="mt-[clamp(56px,9vh,110px)]">
          <VisitDetails />
        </div>
      </div>
      <div className="relative min-h-[clamp(380px,80vh,820px)]">
        <Photo
          src={v.image}
          alt={v.alt}
          position="46% 50%"
          mobilePosition="40% 50%"
          motion="reveal"
          grade="plate"
          sizes="(min-width: 860px) 50vw, 100vw"
          audit={v.audit}
          auditAt="bl"
        />
      </div>
    </section>
  );
}
