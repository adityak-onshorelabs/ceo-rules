import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { VisitDetails } from "@/components/sections/Visit";
import { appointment as a, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Appointment — CEO Rules",
  description:
    "Book a private appointment at the house in Bandra West. Thirty minutes, a cup of coffee, and no obligation to commission anything.",
};

export default function AppointmentPage() {
  return (
    <>
      {/* The right column is cream from the top, so the header starts solid. */}
      <Nav solid />
      <main className="grid min-h-screen grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))]">
        <div className="on-dark relative min-h-[clamp(380px,58vh,760px)] overflow-hidden bg-ink-deep">
          <Photo
            src={a.image}
            alt={a.alt}
            position="50% 38%"
            grade="interior"
            scrims={["card"]}
            motion="load"
            priority
            sizes="(min-width: 900px) 50vw, 100vw"
          />
          <div className="absolute inset-x-0 bottom-0 z-10 p-[clamp(32px,5vw,64px)]">
            <p className="kicker !mb-5 text-[rgba(244,241,234,.7)]">{a.place}</p>
            <p className="max-w-[24ch] font-serif text-[clamp(22px,2.2vw,34px)] font-light leading-[1.34]">{a.pull}</p>
          </div>
        </div>

        <div className="on-cream flex flex-col justify-center px-[clamp(24px,5vw,90px)] pb-[clamp(70px,10vh,120px)] pt-[clamp(130px,17vh,190px)]">
          <p className="kicker text-[rgba(28,26,23,.55)]">{a.kicker}</p>
          <Reveal onLoad as="h1" className="max-w-[13ch] text-[clamp(34px,4.2vw,68px)] leading-[1.02] tracking-[-0.026em]">
            {a.title}
          </Reveal>
          <p className="body mt-[clamp(26px,4vh,40px)] max-w-[44ch] text-[rgba(28,26,23,.72)]">{a.body}</p>

          {a.calendly ? (
            <iframe
              src={a.calendly}
              title="Book an appointment"
              className="mt-[clamp(36px,5vh,56px)] h-[680px] w-full border border-[rgba(28,26,23,.2)]"
            />
          ) : (
            <div className="mt-[clamp(36px,5vh,56px)] flex flex-col items-start gap-5 border border-[rgba(28,26,23,.2)] p-[clamp(28px,4vw,48px)]">
              <p className="label text-[rgba(28,26,23,.55)]">Hold an hour</p>
              <p className="max-w-[40ch] text-[15px] leading-[1.7] text-[rgba(28,26,23,.72)]">{a.fallback}</p>
              <a
                href={site.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-box mt-1 !px-6 !py-[15px] !text-[11.5px]"
              >
                Book on WhatsApp <span aria-hidden>↗</span>
              </a>
            </div>
          )}

          <div className="mt-[clamp(48px,7vh,80px)]">
            <VisitDetails dark={false} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
