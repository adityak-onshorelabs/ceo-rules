import type { Metadata } from "next";
import { Instrument_Sans, Newsreader } from "next/font/google";
import { SkipLink } from "@/components/SkipLink";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  style: ["normal", "italic"],
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["normal", "italic"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "CEO Rules — Bespoke tailoring, Bandra, Mumbai",
  description:
    "A family house of bespoke tailoring in Bandra, Mumbai. Six generations since 1881.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${newsreader.variable}`}
    >
      <body>
        <SkipLink />
        {children}
      </body>
    </html>
  );
}
