import { Reveal } from "@/components/Reveal";
import { ContactSheet } from "@/components/ContactSheet";
import { home } from "@/lib/content";

// 03 Making (brief §7): cut, canvas, fit, finish as one contact sheet of
// consecutive atelier moments. See ContactSheet.
export function Craft() {
  const c = home.craft;
  return (
    <ContactSheet
      id="craft"
      labelledBy="craft-title"
      header={
        <div className="lg:flex lg:items-end lg:justify-between lg:gap-12">
          <div>
            <p className="kicker text-[rgba(244,241,234,.8)]">{c.kicker}</p>
            <Reveal as="h2" className="h-section">
              <span id="craft-title">{c.title}</span>
            </Reveal>
          </div>
          <p className="mt-6 max-w-[34ch] text-[15px] leading-[1.7] text-[rgba(244,241,234,.8)] lg:mt-0">
            Four moments from the table, in the order a coat is made.
          </p>
        </div>
      }
      frames={c.steps}
    />
  );
}
