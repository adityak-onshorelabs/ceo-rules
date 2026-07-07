import Link from "next/link";

// Text-forward CTA with a precious gold rule beneath. No pill, no fill, no bounce.
// Hover thickens/settles the rule and shifts the label. Luxury whispers.
export function CtaLink({
  href,
  children,
  dark = false,
}: {
  href: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex flex-col items-start gap-1 font-sans text-[0.95rem] tracking-wide transition-colors duration-300 ease-out-quart ${
        dark ? "text-ink-dark hover:text-gold-on-dark" : "text-ink hover:text-gold-ink"
      }`}
    >
      <span>{children}</span>
      <span
        aria-hidden
        className={`h-px w-full origin-left transition-transform duration-500 ease-out-expo group-hover:scale-y-[1.6] ${
          dark ? "bg-gold-on-dark" : "bg-gold"
        }`}
      />
    </Link>
  );
}
