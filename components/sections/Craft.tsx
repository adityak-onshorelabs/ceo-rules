import { Reveal } from "@/components/Reveal";
import { Sequence } from "@/components/Sequence";
import { home } from "@/lib/content";

// 03 Making (brief §7): cut, canvas, fit, finish as consecutive moments inside
// the atelier. See Sequence for the layout. The half-width photographic field
// also keeps today's sub-1100px source frames sharp, where full-screen frames
// would pixelate (brief §4).
export function Craft() {
  const c = home.craft;
  return (
    <Sequence
      id="craft"
      labelledBy="craft-title"
      header={
        <>
          <p className="kicker text-[rgba(28,26,23,.66)]">{c.kicker}</p>
          <Reveal as="h2" className="h-section">
            <span id="craft-title">{c.title}</span>
          </Reveal>
        </>
      }
      moments={c.steps}
    />
  );
}
