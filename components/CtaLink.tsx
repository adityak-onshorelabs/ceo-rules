import Link from "next/link";

export function CtaLink({
  href,
  children,
  external = false,
  tone = "ink",
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  tone?: "ink" | "ivory";
}) {
  const className =
    tone === "ivory"
      ? "group inline-flex flex-col items-start gap-1 font-sans text-[0.95rem] text-bg"
      : "group inline-flex flex-col items-start gap-1 font-sans text-[0.95rem] text-ink transition-opacity duration-200 ease-out-quart hover:opacity-80";

  const inner = (
    <>
      <span>{children}</span>
      <span
        aria-hidden
        className={`h-px w-full origin-left transition-transform duration-300 ease-out-quart group-hover:scale-y-[1.6] ${
          tone === "ivory"
            ? "bg-bg opacity-[0.58] transition-opacity duration-200 ease-out-quart group-hover:opacity-100"
            : "bg-ink"
        }`}
      />
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {inner}
    </Link>
  );
}
