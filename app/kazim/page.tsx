import type { Metadata, Viewport } from "next";
import Image from "next/image";
import Link from "next/link";

const WHATSAPP_HREF = "https://wa.me/919833817791"; // +91 98338 17791
const WEBSITE_HREF = "/";
const MAP_HREF =
  "https://www.google.com/maps/search/?api=1&query=CEO+Rules+Shabistan+CHSL+Dr+Ambedkar+Road+Bandra+West+Mumbai";
const STOREFRONT_SRC = "/images/storefront.webp";
const STOREFRONT_ALT =
  "The CEO Rules storefront in daylight, Bandra, with the wooden house sign above the entrance";

export const metadata: Metadata = {
  title: "Kazim Soomar — CEO Rules",
  description: "Kazim Soomar · CEO Rules · Mumbai",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  viewportFit: "cover",
};

function Action({
  href,
  label,
  external = false,
}: {
  href: string;
  label: string;
  external?: boolean;
}) {
  const className =
    "group flex flex-col text-[#0a0558] transition-colors duration-200 ease-out-quart hover:text-[#0a0558]/70";

  const inner = (
    <>
      <span className="flex min-h-12 items-center justify-between font-sans text-[0.8125rem] font-medium uppercase tracking-[0.12em]">
        <span>{label}</span>
        <span aria-hidden>↗</span>
      </span>
      <span
        aria-hidden
        className="h-px w-full origin-left bg-[#0a0558] transition-transform duration-300 ease-out-quart group-hover:scale-y-[1.6]"
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

export default function KazimPage() {
  return (
    <main
      id="main"
      className="flex min-h-[100svh] items-stretch justify-center bg-bg md:items-center pt-[max(env(safe-area-inset-top),2.5rem)] pr-[max(env(safe-area-inset-right),var(--page-pad))] pb-[max(env(safe-area-inset-bottom),2rem)] pl-[max(env(safe-area-inset-left),var(--page-pad))]"
    >
      <div className="flex w-full max-w-[22rem] flex-col">
        <header>
          <h1 className="font-sans text-[clamp(2.5rem,11vw,3.15rem)] font-medium uppercase leading-[0.88] tracking-[-0.04em] text-[#0a0558]">
            Kazim
            <br />
            Soomar
          </h1>
          <p className="t-meta mt-5 text-[#0a0558]/55">Bandra - Mumbai</p>
        </header>

        <figure className="my-auto w-full py-8 md:py-10">
          <a
            href={MAP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get directions (opens in Google Maps)"
            className="group block text-[#0a0558] transition-colors duration-200 ease-out-quart hover:text-[#0a0558]/70"
          >
            <span className="relative block aspect-[3/2] w-full overflow-hidden">
              <Image
                src={STOREFRONT_SRC}
                alt={STOREFRONT_ALT}
                fill
                priority
                sizes="352px"
                quality={80}
                className="object-cover object-[30%_38%] md:object-[center_42%]"
              />
            </span>
            <span className="flex min-h-12 items-center justify-between font-sans text-[0.8125rem] font-medium uppercase tracking-[0.12em]">
              <span>Get directions</span>
              <span aria-hidden>↗</span>
            </span>
            <span
              aria-hidden
              className="block h-px w-full origin-left bg-[#0a0558] transition-transform duration-300 ease-out-quart group-hover:scale-y-[1.6]"
            />
          </a>
          <p className="t-meta mt-5 text-[#0a0558]/55">
            a family business
            <br />
            since 1881
          </p>
        </figure>

        <div>
          <Action href={WHATSAPP_HREF} label="WhatsApp" external />
          <Action href={WEBSITE_HREF} label="Website" />
        </div>
      </div>
    </main>
  );
}
