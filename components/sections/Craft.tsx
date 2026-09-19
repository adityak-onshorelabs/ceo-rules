import { Plate } from "@/components/Plate";
import { homeCraft } from "@/lib/content";
import { img } from "@/lib/images";

export function Craft() {
  const cut = homeCraft.beats[0];
  const canvas = homeCraft.beats[1];
  const fit = homeCraft.beats[2];
  const finish = homeCraft.beats[3];

  return (
    <section id="craft" className="chapter bg-surface">
      <div className="mx-auto max-w-editorial">
        <h2 className="t-observation max-w-[14ch] text-ink">{homeCraft.observation}</h2>

        <div className="mt-10 house-grid items-end lg:mt-12">
          <div className="col-span-4 md:col-span-2 lg:col-span-4">
            <p className="t-meta text-ink-muted">{cut.label}</p>
            <p className="t-annotate mt-2 max-w-[22ch] text-ink">{cut.body}</p>
          </div>
          <figure className="col-span-4 md:col-span-4 lg:col-span-8">
            <Plate
              image={img(cut.imageId)}
              sizes="(min-width: 1024px) 512px, 92vw"
              className="aspect-[16/9] w-full max-w-[32rem] md:ml-auto"
            />
          </figure>
        </div>

        <figure className="mt-10 w-[70%] max-w-[20rem] md:mt-12">
          <Plate
            image={img(canvas.imageId)}
            sizes="(min-width: 1024px) 320px, 70vw"
            className="aspect-[3/2] w-full"
          />
          <p className="t-meta mt-4 text-ink-muted">{canvas.label}</p>
          <p className="t-annotate mt-2 max-w-[22ch] text-ink-muted">{canvas.body}</p>
        </figure>

        <div className="mt-10 flex flex-col items-end md:mt-12">
          <div className="w-[80%] max-w-[20rem]">
            <p className="t-meta text-ink-muted">{fit.label}</p>
            <p className="t-annotate mt-2 max-w-[22ch] text-ink">{fit.body}</p>
            <figure className="mt-5">
              <Plate
                image={img(fit.imageId)}
                sizes="320px"
                className="aspect-[3/2] w-full"
              />
            </figure>
          </div>
        </div>

        <div className="mt-10 max-w-[32rem] md:mt-12">
          <p className="t-meta text-ink-muted">{finish.label}</p>
          <p className="t-annotate mt-2 max-w-[26ch] text-ink-muted">{finish.body}</p>
          <figure className="mt-5">
            <Plate
              image={img(finish.imageId)}
              sizes="(min-width: 1024px) 512px, 92vw"
              className="aspect-[3/2] w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
