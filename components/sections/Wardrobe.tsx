import { Plate } from "@/components/Plate";
import { CtaLink } from "@/components/CtaLink";
import { homeWardrobe } from "@/lib/content";
import { img } from "@/lib/images";

export function Wardrobe() {
  return (
    <section id="wardrobe" className="chapter bg-bg">
      <div className="mx-auto max-w-editorial">
        <div className="house-grid items-start">
          <div className="col-span-4 md:col-span-3 lg:col-span-5">
            <h2 className="t-observation max-w-[12ch] text-ink">{homeWardrobe.observation}</h2>
            <p className="t-body mt-4 max-w-[28ch] text-ink-muted">{homeWardrobe.lead}</p>

            <ul className="mt-12">
              {homeWardrobe.pieces.map((p) => (
                <li
                  key={p.name}
                  className="py-2 font-sans text-[clamp(1.65rem,3vw,2.25rem)] font-medium tracking-[-0.03em] text-ink"
                >
                  {p.name}
                </li>
              ))}
            </ul>

            <div className="mt-12">
              <CtaLink href={homeWardrobe.link.href}>{homeWardrobe.link.label}</CtaLink>
            </div>
          </div>

          <figure className="col-span-4 mt-4 md:col-span-3 md:mt-8 lg:col-span-6 lg:col-start-7">
            <Plate
              image={img(homeWardrobe.imageId)}
              sizes="(min-width: 1024px) 540px, (min-width: 768px) 50vw, 92vw"
              className="aspect-[3/2] w-full max-w-[33.75rem]"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
