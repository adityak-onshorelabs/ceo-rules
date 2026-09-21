import { AppointmentCta } from "@/components/AppointmentCta";
import { visit } from "@/lib/content";

export function Visit({
  includeProcessLink: _includeProcessLink = true,
}: {
  includeProcessLink?: boolean;
}) {
  return (
    <section
      id="visit"
      className="bg-bg px-[var(--page-pad)] py-[clamp(2.75rem,7svh,4.5rem)]"
    >
      <div className="mx-auto max-w-editorial">
        <div className="max-w-[28rem]">
          <h2 className="t-observation max-w-[14ch] text-ink">{visit.headline}</h2>
          <p className="t-body mt-4 max-w-measure text-ink-muted">{visit.lead}</p>
        </div>

        <div
          id="appointment"
          className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10"
        >
          <div>
            <p className="t-meta mb-2.5 text-ink-muted">The House</p>
            <address className="t-annotate not-italic text-ink-muted">
              {visit.address.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </address>
          </div>

          <div>
            <p className="t-meta mb-2.5 text-ink-muted">{visit.hoursLabel}</p>
            <p className="t-annotate text-ink-muted">
              {visit.hours.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </p>
            <a
              href={visit.mapHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${visit.mapLabel} (opens in a new tab)`}
              className="mt-3 inline-block border-b border-ink pb-0.5 text-[0.9rem] text-ink transition-opacity duration-200 hover:opacity-80"
            >
              {visit.mapLabel}
            </a>
          </div>

          <div className="flex flex-col justify-end sm:col-span-2 lg:col-span-1">
            <AppointmentCta label={visit.appointmentLabel} />
          </div>
        </div>
      </div>
    </section>
  );
}
