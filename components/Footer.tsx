import { footer } from "@/lib/content";

// Minimal, elegant, nothing unnecessary.
export function Footer() {
  return (
    <footer className="on-dark">
      <div className="mx-auto flex max-w-editorial flex-col gap-8 px-[clamp(1.75rem,6vw,7rem)] py-[clamp(3rem,7vh,5rem)] sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-sans text-sm font-semibold uppercase tracking-[0.22em] text-ink-dark">
            {footer.wordmark}
          </p>
          <p className="mt-3 max-w-[32ch] text-[0.9rem] text-ink-dark-muted">
            {footer.line}
          </p>
        </div>

        <div className="flex items-center gap-8">
          <a
            href={footer.instagram.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-[0.8rem] uppercase tracking-[0.14em] text-ink-dark-muted transition-colors duration-300 hover:text-ink-dark"
          >
            {footer.instagram.label}
          </a>
          <span className="font-sans text-[0.8rem] uppercase tracking-[0.14em] text-ink-dark-muted">
            {footer.since}
          </span>
        </div>
      </div>
    </footer>
  );
}
