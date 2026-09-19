import { Plate } from "@/components/Plate";
import { AppointmentCta } from "@/components/AppointmentCta";
import { visit } from "@/lib/content";
import { img } from "@/lib/images";

export function Visit({
  includeProcessLink: _includeProcessLink = true,
  variant = "contained",
}: {
  includeProcessLink?: boolean;
  variant?: "contained" | "arrival";
}) {
  const image = img(variant === "arrival" ? "storefrontDay" : visit.imageId);

  const heading = (
    <>
      <h2 className="t-observation max-w-[14ch] text-ink">{visit.headline}</h2>
      <p className="t-body mt-5 max-w-measure text-ink-muted">{visit.lead}</p>
    </>
  );

  const meta = (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      <div>
        <p className="t-meta mb-3 text-ink-muted">{visit.addressLabel}</p>
        <address className="t-annotate not-italic text-ink-muted">
          {visit.address.map((l) => (
            <span key={l} className="block">
              {l}
            </span>
          ))}
        </address>
        <a
          href={visit.whatsapp.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${visit.whatsapp.label} (opens WhatsApp)`}
          className="t-annotate mt-4 inline-block text-ink"
        >
          {visit.whatsapp.label}
        </a>
      </div>

      <div>
        <p className="t-meta mb-3 text-ink-muted">{visit.hoursLabel}</p>
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
          className="mt-4 inline-block border-b border-brass pb-0.5 text-[0.9rem] text-ink transition-colors duration-200 hover:text-walnut"
        >
          {visit.mapLabel}
        </a>
      </div>
    </div>
  );

  if (variant === "arrival") {
    return (
      <section id="visit" className="chapter bg-surface">
        <div className="mx-auto max-w-editorial">
          <div className="max-w-[36rem]">{heading}</div>

          <div className="mt-[var(--s-12)] house-grid items-start">
            <figure className="col-span-4 md:col-span-6 lg:col-span-7">
              <Plate
                image={image}
                sizes="(min-width: 1024px) 680px, (min-width: 768px) 70vw, 92vw"
                className="aspect-[4/5] w-full md:aspect-[3/2]"
              />
            </figure>

            <div className="col-span-4 flex flex-col gap-8 md:col-span-6 lg:col-span-4 lg:col-start-9">
              <div>
                <p className="t-meta mb-3 text-ink-muted">{visit.addressLabel}</p>
                <address className="t-annotate not-italic text-ink-muted">
                  {visit.address.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </address>
                <a
                  href={visit.whatsapp.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${visit.whatsapp.label} (opens WhatsApp)`}
                  className="t-annotate mt-4 inline-block text-ink"
                >
                  {visit.whatsapp.label}
                </a>
              </div>
              <div>
                <p className="t-meta mb-3 text-ink-muted">{visit.hoursLabel}</p>
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
                  className="mt-4 inline-block border-b border-brass pb-0.5 text-[0.9rem] text-ink transition-colors duration-200 hover:text-walnut"
                >
                  {visit.mapLabel}
                </a>
              </div>
              <AppointmentCta label={visit.appointmentLabel} />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="visit" className="section-major bg-surface">
      <div className="mx-auto max-w-editorial">
        <figure className="mb-10">
          <Plate
            image={image}
            sizes="(min-width: 1024px) 80vw, 100vw"
            className="aspect-[4/5] w-full md:aspect-[4/3]"
          />
        </figure>
        {heading}
        <div className="mt-10">{meta}</div>
        <div className="mt-10">
          <AppointmentCta />
        </div>
      </div>
    </section>
  );
}
