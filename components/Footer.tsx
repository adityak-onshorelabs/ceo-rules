import Link from "next/link";
import { footer } from "@/lib/content";
import { FooterDoodle } from "@/components/Illustrations";
import { BrandLogo } from "@/components/BrandLogo";

// The closing frame. Minimal, but complete: the houses, hours, a way to reach them.
// A faint scissors-and-thread doodle drifts across the background.
export function Footer() {
  return (
    <footer className="on-dark stitch-top-dark relative overflow-hidden">
      <FooterDoodle
        className="pointer-events-none absolute -right-8 top-1/2 hidden w-[min(56rem,72%)] -translate-y-1/2 text-ink-dark opacity-[0.1] lg:block"
      />
      <div className="relative z-10 mx-auto max-w-editorial px-[clamp(1.75rem,6vw,7rem)] py-[clamp(3.5rem,8vh,6rem)]">
        <div className="grid grid-cols-1 gap-x-[clamp(2.5rem,6vw,6rem)] gap-y-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr]">
          {/* The house */}
          <div>
            <BrandLogo className="h-4 w-auto" />
            <span className="sr-only">{footer.wordmark}</span>
            <p className="mt-3 max-w-[30ch] text-[0.9rem] text-ink-dark-muted">
              {footer.line}
            </p>
          </div>

          {/* The house */}
          <div>
            <p className="eyebrow">{footer.addressLabel}</p>
            <address className="mt-4 space-y-1 text-[0.9rem] not-italic text-ink-dark-muted">
              {footer.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>

          {/* Hours + how to reach */}
          <div>
            <p className="eyebrow">{footer.hoursLabel}</p>
            <p className="mt-4 text-[0.9rem] text-ink-dark-muted">{footer.hours}</p>
            <div className="mt-6 flex flex-col gap-2">
              <a
                href={footer.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.9rem] text-ink-dark transition-colors duration-300 hover:text-gold-on-dark"
              >
                {footer.whatsapp.label}
              </a>
              <a
                href={footer.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[0.8rem] uppercase tracking-[0.14em] text-ink-dark-muted transition-colors duration-300 hover:text-ink-dark"
              >
                {footer.instagram.label}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-[clamp(3rem,7vh,5rem)] flex flex-wrap items-center justify-between gap-x-10 gap-y-5 stitch-top-dark pt-6">
          <span className="font-sans text-[0.8rem] uppercase tracking-[0.14em] text-ink-dark-muted">
            {footer.since}
          </span>
          <nav aria-label="Pages" className="flex flex-wrap gap-x-6 gap-y-2">
            {footer.pages.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="font-sans text-[0.75rem] uppercase tracking-[0.14em] text-ink-dark-muted transition-colors duration-300 hover:text-ink-dark"
              >
                {p.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
