import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Insights } from "@/components/sections/Insights";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Insights — CEO Rules",
  description:
    "What the founder sees. A little of what Anis has learned on fit, fabric, and dressing well, shared freely.",
};

export default function InsightsPage() {
  return (
    <>
      <Nav />
      <main>
        <Insights />
      </main>
      <Footer />
    </>
  );
}
