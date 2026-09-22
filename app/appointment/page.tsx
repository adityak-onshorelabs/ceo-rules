import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { BookingFlow } from "@/components/BookingFlow";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";
import { VisitDetails } from "@/components/sections/Visit";
import { appointment as a } from "@/lib/content";

export const metadata: Metadata = {
  title: "Book a Private Appointment — CEO Rules",
  description:
    "Book a private appointment with Anis Soomar at the house in Bandra West. A cup of coffee, and no obligation to commission anything.",
};

// The appointment experience (brief §12): the house's branding at the top, a
// short introduction, then the booking: Calendly's inline widget for now, or
// the house's own flow on the Scheduling API once a token is in place
// (`appointment.booking` in lib/content.ts). Every header and homepage CTA
// routes here.
export default function AppointmentPage() {
  return (
    <>
      <Nav />
      <main className="lg:grid lg:grid-cols-[0.9fr_1.1fr]">
        {/* The photograph holds its place while you book (desktop). */}
        <div className="on-dark relative h-[46svh] min-h-[300px] overflow-hidden bg-ink-deep lg:sticky lg:top-[var(--nav-h)] lg:h-[calc(100svh-var(--nav-h))]">
          <Photo
            src={a.image}
            alt={a.alt}
            position="30% 50%"
            mobilePosition="22% 50%"
            grade="interior"
            scrims={["deepen-bl", "deepen-b"]}
            motion="load"
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
          />
          <div className="halo-cream absolute inset-x-0 bottom-0 z-10 p-[clamp(24px,4vw,56px)]">
            <p className="kicker !mb-4 text-cream">{a.place}</p>
            <p className="max-w-[24ch] font-serif text-[clamp(22px,2.1vw,32px)] font-light leading-[1.3]">{a.pull}</p>
          </div>
        </div>

        <div className="on-cream px-[clamp(24px,5vw,88px)] pb-[clamp(70px,10vh,120px)] pt-[clamp(48px,8vh,96px)]">
          <p className="kicker text-[rgba(28,26,23,.66)]">{a.kicker}</p>
          <Reveal onLoad as="h1" className="h-breath !max-w-[14ch]">
            {a.title}
          </Reveal>
          <p className="body mt-[clamp(22px,3.4vh,32px)] max-w-[46ch] text-[rgba(28,26,23,.76)]">{a.body}</p>

          <div className="mt-[clamp(32px,5vh,48px)]">
            {a.booking === "themed" ? <BookingFlow /> : <CalendlyEmbed url={a.calendly} />}
          </div>

          <div className="mt-[clamp(48px,7vh,80px)]">
            <VisitDetails dark={false} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
