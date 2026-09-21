import Image from "next/image";

// A mill's own mark, recoloured to the ground it sits on: cream on dark,
// ink on cream. The source PNGs are dark marks on transparency.
export function MillLogo({
  name,
  logo,
  tone = "cream",
  className = "h-[clamp(34px,3.4vw,46px)] w-auto",
}: {
  name: string;
  logo: string;
  tone?: "cream" | "ink";
  className?: string;
}) {
  return (
    <Image
      src={logo}
      alt={name}
      width={300}
      height={123}
      className={className}
      style={{
        filter: tone === "cream" ? "brightness(0) invert(0.95)" : "brightness(0.15)",
        opacity: tone === "cream" ? 0.86 : 0.9,
      }}
    />
  );
}
