import { homeHouse } from "@/lib/content";

export function House() {
  return (
    <section
      id="house"
      className="bg-bg px-[var(--page-pad)] py-[clamp(3.5rem,10svh,6.5rem)]"
    >
      <div className="mx-auto max-w-[42rem]">
        <p className="t-meta text-ink-muted">The House · Since 1881</p>
        <h2 className="t-observation mt-5 max-w-[16ch] text-ink">{homeHouse.headline}</h2>
        <p className="t-body mt-5 max-w-[46ch] text-ink-muted">{homeHouse.body}</p>

        <blockquote className="mt-[clamp(2.5rem,6vh,4rem)] max-w-[40rem] border-t border-[color-mix(in_srgb,var(--ink)_12%,transparent)] pt-8">
          <p className="t-body max-w-[46ch] text-ink">{homeHouse.story.body}</p>
          <footer className="t-meta mt-5 text-ink-muted">{homeHouse.story.author}</footer>
        </blockquote>
      </div>
    </section>
  );
}
