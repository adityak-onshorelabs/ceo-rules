import Link from "next/link";
import { ReelFilm, ReelSlides } from "@/components/ReelTiles";
import { Reveal } from "@/components/Reveal";
import { home, site } from "@/lib/content";

// 06 From the House (brief §13). The three posts the client chose from
// @ceorules, as editorial vertical films in the house's own frame: no
// Instagram embed chrome, feed grid or follower count. Desktop sets the three
// side by side; mobile is a row you swipe, each near full width, so they are
// watched the natural vertical way. Each opens the original post.
export function Reels() {
  const r = home.reels;
  return (
    <section id="rules" className="section bg-cream">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-[rgba(28,26,23,.16)] pb-[34px]">
          <div>
            <p className="kicker !mb-[18px] text-[rgba(28,26,23,.55)]">{r.kicker}</p>
            <Reveal as="h2" className="max-w-[20ch] text-[clamp(30px,3.4vw,54px)] leading-[1.06] tracking-[-0.024em]">
              {r.title}
            </Reveal>
          </div>
          <div className="flex flex-wrap gap-8 text-[rgba(28,26,23,.7)]">
            <Link href={r.more.href} className="link-line !pb-1.5">
              {r.more.label} <span aria-hidden>→</span>
            </Link>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="link-line !pb-1.5">
              Instagram <span aria-hidden>↗</span>
            </a>
          </div>
        </div>

        <div
          aria-label="Three Reels from the house"
          className="no-scrollbar -mx-[var(--gutter)] mt-[clamp(48px,7vh,84px)] flex snap-x snap-mandatory scroll-px-[var(--gutter)] gap-4 overflow-x-auto px-[var(--gutter)] lg:mx-0 lg:grid lg:snap-none lg:grid-cols-3 lg:gap-[clamp(26px,3.2vw,52px)] lg:overflow-visible lg:px-0"
        >
          {r.items.map((it) => (
            <figure key={it.href} className="w-[78vw] max-w-[380px] flex-none snap-start lg:w-auto lg:max-w-none">
              <div className="on-dark relative aspect-[9/16] overflow-hidden bg-ink-deep">
                {it.kind === "film" ? (
                  <ReelFilm video={it.video} poster={it.poster} alt={it.alt} label={it.label} line={it.line} />
                ) : (
                  <ReelSlides slides={it.slides} alt={it.alt} label={it.label} line={it.line} />
                )}
              </div>
              <figcaption className="mt-4">
                <a
                  href={it.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track="instagram_click"
                  className="link-line !pb-1.5 text-[rgba(28,26,23,.76)]"
                >
                  Watch on Instagram <span aria-hidden>↗</span>
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
