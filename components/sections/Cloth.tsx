import Link from "next/link";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { home, mills } from "@/lib/content";

// 02 Material (brief §6). The photograph is the section: the cloth shelves in
// low atelier light. On desktop the type sits in the dark run of shelves at the
// left, with only a local deepening of tone behind it. The frame has no quiet
// area in a portrait crop, so on mobile the photograph leads and the type
// follows on House Ink beneath it rather than fighting the pattern. The mills
// are listed as names, quiet proof rather than the visual hero: no logos, no
// carousel.
export function Cloth() {
  const c = home.cloth;
  return (
    <section
      id="cloth"
      className="on-dark relative overflow-hidden bg-ink-deep lg:flex lg:min-h-[calc(100svh-var(--nav-h))] lg:items-center"
    >
      <div className="relative h-[56svh] min-h-[340px] lg:absolute lg:inset-0 lg:h-auto lg:min-h-0">
        <Photo
          src={c.image}
          alt={c.alt}
          position="50% 50%"
          mobilePosition="55% 50%"
          grade="atelier"
          scrims={["deepen-l"]}
          scrimCls={{ "deepen-l": "hidden lg:block" }}
          motion="drift"
          audit={c.audit}
        />
      </div>
      <div className="relative z-10 w-full px-[var(--gutter)] lg:halo-cream pb-[clamp(56px,9vh,96px)] pt-[clamp(40px,6vh,56px)] lg:max-w-[calc(var(--gutter)+460px)] lg:py-[clamp(96px,14vh,160px)]">
        <p className="kicker !mb-[26px] text-[rgba(244,241,234,.92)]">{c.kicker}</p>
        <Reveal
          as="h2"
          className="max-w-[12ch] font-serif text-[clamp(36px,9vw,48px)] font-light leading-[1.02] tracking-[-0.025em] lg:text-[clamp(40px,3.8vw,64px)]"
        >
          {c.title}
        </Reveal>
        <p className="body mt-[clamp(22px,3.4vh,34px)] max-w-[40ch] text-[rgba(244,241,234,.92)]">{c.body}</p>

        <div className="mt-[clamp(36px,6vh,64px)] border-t border-[rgba(244,241,234,.22)] pt-6">
          <p className="label mb-4 !text-[11px] text-[rgba(244,241,234,.82)]">{c.millsLabel}</p>
          <ul className="flex flex-wrap gap-x-7 gap-y-2 text-[clamp(14px,1.05vw,15.5px)] leading-[1.6] tracking-[0.04em] text-cream">
            {mills.map((m) => (
              <li key={m.name}>{m.name}</li>
            ))}
          </ul>
        </div>

        <Link href={c.cta.href} className="link-line mt-[clamp(28px,4vh,40px)]">
          {c.cta.label} <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
