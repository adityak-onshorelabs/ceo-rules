import Link from "next/link";
import { footer, nav } from "@/lib/content";
import { FooterMark } from "@/components/FooterMark";

export function Footer() {
  const links = [...nav.leftLinks, ...nav.rightLinks, nav.cta];

  return (
    <footer className="relative overflow-hidden bg-navy text-bg">
      <div className="pointer-events-none absolute bottom-[-2.5rem] right-[-3rem] text-bg sm:bottom-[-1.5rem] sm:right-[-1rem]">
        <FooterMark />
      </div>

      <div className="relative mx-auto max-w-editorial px-[var(--page-pad)] py-[clamp(3.25rem,7vh,5.25rem)]">
        <div className="grid grid-cols-1 gap-x-[clamp(2rem,5vw,5rem)] gap-y-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="font-sans text-sm font-medium uppercase tracking-[0.18em] text-bg">
              {footer.wordmark}
            </p>
            <p className="t-annotate mt-3 text-bg/65">{footer.line}</p>
            <p className="t-annotate mt-2 max-w-[22ch] text-bg/55">{footer.heritage}</p>
          </div>

          <div>
            <p className="t-meta mb-4 text-bg/50">The house</p>
            <nav className="flex flex-col gap-2" aria-label="Footer">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-[0.95rem] text-bg/70 transition-colors duration-200 hover:text-bg"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="t-meta mb-4 text-bg/50">{footer.addressLabel}</p>
            <address className="space-y-1 text-[0.9rem] not-italic text-bg/65">
              {footer.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <p className="mt-4 text-[0.9rem] text-bg/65">{footer.hours}</p>
            <div className="mt-6 flex flex-col gap-2">
              <a
                href={footer.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${footer.whatsapp.label} (opens WhatsApp)`}
                className="text-[0.9rem] text-bg transition-colors duration-200 hover:text-bg/80"
              >
                {footer.whatsapp.label}
              </a>
              <a
                href={footer.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${footer.instagram.label} (opens in a new tab)`}
                className="text-[0.9rem] text-bg/70 transition-colors duration-200 hover:text-bg"
              >
                {footer.instagram.label}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
