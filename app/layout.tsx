import type { Metadata } from "next";
import { Instrument_Sans, Newsreader } from "next/font/google";
import "./globals.css";

// Newsreader carries every display headline and pull-quote (weights 200/300 only).
// Variable, with the optical-size axis so large settings draw the display cut.
const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  axes: ["opsz"],
  style: ["normal", "italic"],
  display: "swap",
  // next/font has no fallback metrics for Newsreader; Georgia stands in.
  adjustFontFallback: false,
  fallback: ["Georgia", "serif"],
});

// Instrument Sans carries everything functional: kickers, nav, body, captions.
const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CEO Rules — Private tailoring, Bandra",
  description:
    "A family house of bespoke tailoring in Bandra, Mumbai. Six generations in cloth, since 1881.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${newsreader.variable} ${instrument.variable}`}>
      <body>{children}</body>
    </html>
  );
}
