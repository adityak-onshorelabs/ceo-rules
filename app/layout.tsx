import type { Metadata } from "next";
import { Fraunces, Montserrat } from "next/font/google";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Loader } from "@/components/Loader";
import "./globals.css";

// Serif for headlines.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  axes: ["opsz"],
  style: ["normal", "italic"],
  display: "swap",
});

// Montserrat for body, UI, eyebrows.
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CEO Rules — The quiet language of confidence",
  description:
    "A house that teaches self-made men the quiet language of confidence through timeless craftsmanship. Bespoke tailoring, Bandra, Mumbai.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${montserrat.variable}`}>
      <body>
        <Loader />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
