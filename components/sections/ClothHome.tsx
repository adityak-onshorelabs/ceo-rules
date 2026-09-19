import { Plate } from "@/components/Plate";
import { homeCloth } from "@/lib/content";
import { img } from "@/lib/images";

export function ClothHome() {
  return (
    <section id="cloth" className="chapter bg-bg">
      <div className="mx-auto max-w-editorial">
        <div className="house-grid items-end">
          <div className="col-span-4 md:col-span-6 lg:col-span-5">
            <p className="t-meta text-ink-muted">{homeCloth.kicker}</p>
            <h2 className="t-observation mt-4 max-w-[14ch] text-ink">{homeCloth.observation}</h2>
            <p className="t-body mt-6 hidden max-w-[38ch] text-ink-muted lg:block">{homeCloth.body}</p>
          </div>

          <figure className="col-span-4 md:col-span-6 lg:col-span-7 lg:col-start-6">
            <Plate
              image={img(homeCloth.primaryImageId)}
              sizes="(min-width: 1024px) 512px, 92vw"
              className="aspect-[3/2] w-full max-w-[32rem] lg:ml-auto"
            />
          </figure>

          <p className="col-span-4 t-body max-w-[38ch] text-ink-muted lg:hidden">{homeCloth.body}</p>
        </div>

        <div className="mt-12 house-grid items-start lg:mt-14">
          <div className="col-span-4 md:col-span-3 lg:col-span-4">
            <p className="t-meta text-ink-muted">Suiting & jacketing</p>
            <ul className="mt-4">
              {homeCloth.suiting.map((house) => (
                <li key={house.name} className="t-h2 py-1.5 text-ink">
                  {house.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-4 md:col-span-3 lg:col-span-3">
            <p className="t-meta text-ink-muted">Shirting</p>
            <ul className="mt-4">
              {homeCloth.shirting.map((house) => (
                <li key={house.name} className="t-h2 py-1.5 text-ink">
                  {house.name}
                </li>
              ))}
            </ul>
          </div>

          <figure className="col-span-3 w-[70%] max-w-[20rem] md:col-span-2 lg:col-span-4 lg:col-start-9 lg:w-full">
            <Plate
              image={img(homeCloth.secondaryImageId)}
              sizes="(min-width: 1024px) 320px, 70vw"
              className="aspect-[4/5] w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
