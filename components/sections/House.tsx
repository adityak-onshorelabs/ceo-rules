import { homeHouse } from "@/lib/content";

export function House() {
  return (
    <section id="house" className="chapter bg-bg">
      <div className="mx-auto max-w-editorial">
        <div className="house-grid">
          <div className="col-span-4 md:col-span-6 lg:col-span-7">
            <h2 className="t-observation max-w-[14ch] text-ink">{homeHouse.headline}</h2>
            <p className="t-body mt-6 max-w-[46ch] text-ink-muted">{homeHouse.body}</p>
            <p className="t-meta mt-10 text-ink-muted">{homeHouse.meta}</p>
          </div>
        </div>

        <div className="mt-[var(--s-16)] house-grid">
          <blockquote className="col-span-4 md:col-span-6 lg:col-span-7">
            <p className="t-serif max-w-[18ch] text-ink">
              Anis fitted me the same day, then flew a tailor with our finished suits to Goa.
            </p>
            <p className="t-body mt-6 max-w-[46ch] text-ink-muted">{homeHouse.story.body}</p>
            <footer className="t-meta mt-6 text-ink-muted">{homeHouse.story.author}</footer>
          </blockquote>

          <blockquote className="col-span-4 md:col-span-5 lg:col-span-4 lg:col-start-9 lg:pt-3">
            <p className="t-annotate text-ink-muted">{homeHouse.supporting.quote}</p>
            <footer className="t-meta mt-5 text-ink-muted">{homeHouse.supporting.author}</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
