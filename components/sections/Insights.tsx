import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { insights } from "@/lib/content";

// The founder's rules, read top to bottom. Each rule is a full-bleed spread:
// the photograph fills one half, the words sit in the other, and the sides
// alternate down the page. Nothing sticks, tracks or steers the scroll; the
// ids stay as plain anchors for linking to a single rule.
//
// Mobile: the photograph leads, the rule follows beneath it.
export function Insights() {
  return (
    <section id="essays" aria-label="The rules" className="bg-cream">
      {insights.entries.map((n, i) => {
        const flip = i % 2 === 1;
        return (
          <article
            key={n.id}
            id={n.id}
            className="scroll-mt-[var(--nav-h)] border-b border-[rgba(28,26,23,.12)] lg:grid lg:grid-cols-2"
          >
            <div
              className={`relative aspect-[4/5] sm:aspect-[3/2] lg:aspect-auto lg:min-h-[clamp(560px,86vh,920px)] ${
                flip ? "lg:order-2" : ""
              }`}
            >
              <Photo
                src={n.image}
                alt={n.imageAlt}
                position={n.position}
                grade="plate"
                motion="reveal"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>

            <div className="flex items-center px-[var(--gutter)] py-[clamp(56px,9vh,112px)] lg:px-[clamp(40px,5.5vw,104px)]">
              <Reveal className="max-w-[52ch]">
                <p className="label mb-6 flex items-baseline gap-4 text-[rgba(28,26,23,.55)]">
                  <span className="tabular-nums text-[rgba(28,26,23,.4)]">{String(i + 1).padStart(2, "0")}</span>
                  <span aria-hidden className="h-px w-8 translate-y-[-3px] bg-gold" />
                  {n.tag}
                </p>
                <h2 className="max-w-[18ch] text-[clamp(30px,3.2vw,50px)] leading-[1.06] tracking-[-0.024em]">
                  {n.title}
                </h2>
                <p className="body mt-7 text-[rgba(28,26,23,.72)]">{n.body}</p>

                {n.list ? (
                  <ul className="mt-8 border-t border-[rgba(28,26,23,.18)]">
                    {n.list.map((item) => (
                      <li
                        key={item}
                        className="border-b border-[rgba(28,26,23,.18)] py-4 text-[15px] leading-[1.6] text-ink"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}

                {n.coda ? <p className="pull mt-8 italic">{n.coda}</p> : null}
              </Reveal>
            </div>
          </article>
        );
      })}
    </section>
  );
}
