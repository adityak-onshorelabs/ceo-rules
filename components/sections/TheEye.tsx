import { Plate } from "@/components/Plate";
import { homeEye } from "@/lib/content";
import { img } from "@/lib/images";

export function TheEye() {
  return (
    <section id="anis" className="bg-navy text-bg">
      <div className="chapter mx-auto max-w-editorial">
        <p className="t-meta text-bg/55">{homeEye.kicker}</p>
        <h2 className="t-statement mt-5 text-bg">{homeEye.name}</h2>
        {homeEye.title ? (
          <p className="t-meta mt-4 text-bg/55">{homeEye.title}</p>
        ) : null}

        <div className="mt-10 house-grid items-start lg:mt-12">
          <figure className="col-span-4 md:col-span-4 lg:col-span-6">
            <Plate
              image={img(homeEye.workImageId)}
              sizes="(min-width: 1024px) 512px, (min-width: 768px) 50vw, 92vw"
              className="aspect-[4/5] w-full max-w-[32rem] md:aspect-square"
            />
          </figure>

          <div className="col-span-4 md:col-span-2 lg:col-span-5 lg:col-start-8 lg:pt-2">
            <p className="t-serif max-w-[16ch] text-bg">{homeEye.approach}</p>
            <p className="t-body mt-6 max-w-[36ch] text-bg/70">{homeEye.body}</p>
            <figure className="mt-10 w-full max-w-[22.5rem] md:max-w-[26.25rem]">
              <Plate
                image={img(homeEye.relationImageId)}
                sizes="(min-width: 1024px) 420px, 80vw"
                className="aspect-[4/5] w-full"
              />
            </figure>
          </div>
        </div>

        {homeEye.feedMode !== "off" && homeEye.notes.length > 0 ? (
          <ul className="mt-12">
            {homeEye.notes.map((note) => (
              <li key={note.id}>
                <a href={note.permalink ?? note.href} className="t-annotate text-bg">
                  {note.title}
                </a>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
