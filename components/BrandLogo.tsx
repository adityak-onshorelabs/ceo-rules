import Image from "next/image";

// The official CEO RULES® wordmark (supplied by the client; transparent PNGs
// in public/brand). Ivory on dark grounds, brand blue on cream.
export function BrandLogo({
  tone = "ivory",
  className = "h-[clamp(14px,1.5vw,19px)] w-auto",
  priority = false,
}: {
  tone?: "ivory" | "blue";
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={tone === "ivory" ? "/brand/ceo-rules-logo-ivory.png" : "/brand/ceo-rules-logo-blue.png"}
      alt="CEO Rules"
      width={700}
      height={105}
      priority={priority}
      className={className}
    />
  );
}
