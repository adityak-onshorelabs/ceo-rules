import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/content";

// Brief §19: a standalone QR contact card. No site navigation, no bio, no
// form, no marketing. Shared by the personal cards (/kazim, /anees); each page
// sets its own unindexed metadata. The storefront at night sits behind it,
// under a dark scrim so the ivory type reads. The name leads; the store map
// sits under the contact actions; the client's "est. in 1881" lockup closes
// the card as its footer.

export type ContactAction = { label: string; href: string; external?: boolean };

const action =
  "flex min-h-14 w-full items-center justify-between border border-[rgba(244,241,234,.45)] bg-[rgba(20,18,16,.3)] px-6 text-[13px] uppercase tracking-[0.22em] text-cream backdrop-blur-[2px] transition-colors duration-[240ms] hover:bg-cream hover:text-ink";

const mapAction =
  "flex min-h-14 w-full items-center justify-between bg-cream px-6 text-[13px] uppercase tracking-[0.22em] text-ink transition-colors duration-[240ms] hover:bg-[rgba(244,241,234,.85)]";

export function ContactCard({ name, actions }: { name: string; actions: ContactAction[] }) {
  return (
    <main className="relative isolate flex min-h-[100svh] flex-col items-center overflow-hidden bg-ink px-6 pb-10 pt-[34svh] text-center md:pt-[30svh]">
      {/* The storefront at night. Phones (portrait) get it as a top band at
          full strength, wide enough to read the whole lit CEO RULES sign,
          melting into the ink ground where the name and actions sit. Wider
          screens show it full-bleed under a scrim. */}
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-[62svh] md:inset-0 md:h-auto">
        <Image
          src="/images/storefront.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[44%_30%] md:object-[50%_45%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,26,23,.1)_0%,rgba(28,26,23,.2)_28%,rgba(28,26,23,.72)_48%,rgba(28,26,23,.92)_70%,var(--ink)_100%)] md:bg-[linear-gradient(180deg,rgba(20,18,16,.5)_0%,rgba(20,18,16,.7)_40%,rgba(20,18,16,.85)_100%)]" />
      </div>
      <div className="flex w-full flex-1 flex-col items-center">
        <h1 className="font-serif text-[clamp(44px,13vw,64px)] leading-[1.02] tracking-[-0.02em] text-cream [text-shadow:0_2px_24px_rgba(0,0,0,.45)]">
          {name}
        </h1>
        <span aria-hidden className="mt-6 block h-px w-12 bg-gold" />
        <div className="mt-10 flex w-full max-w-[320px] flex-col gap-3">
          {actions.map((a) =>
            a.external ? (
              <a key={a.label} href={a.href} target="_blank" rel="noopener noreferrer" className={action}>
                {a.label} <span aria-hidden>↗</span>
              </a>
            ) : (
              <Link key={a.label} href={a.href} className={action}>
                {a.label} <span aria-hidden>↗</span>
              </Link>
            ),
          )}
        </div>
        <div className="mt-8 w-full max-w-[320px]">
          <a href={site.mapHref} target="_blank" rel="noopener noreferrer" className={mapAction}>
            Find the store <span aria-hidden>↗</span>
          </a>
          <p className="mt-3 text-[12px] leading-[1.6] tracking-[0.04em] text-[rgba(244,241,234,.7)]">
            {site.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>
      </div>
      <footer className="mt-14">
        <Image
          src="/brand/ceo-rules-lockup-1881-ivory.png"
          alt="CEO Rules, a family business est. in 1881"
          width={1544}
          height={290}
          className="h-auto w-[min(200px,55vw)] opacity-85"
        />
      </footer>
    </main>
  );
}
