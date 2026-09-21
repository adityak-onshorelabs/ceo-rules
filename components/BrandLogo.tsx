import Image from "next/image";

const WIDTH = 700;
const HEIGHT = 105;

const SRC = {
  blue: "/brand/ceo-rules-logo-blue.png",
  ivory: "/brand/ceo-rules-logo-ivory.png",
} as const;

const SIZE_CLASS = {
  nav: "brand-logo-nav",
  footer: "brand-logo-footer",
} as const;

const SIZE_ATTR = {
  nav: "(min-width: 1024px) 220px, 176px",
  footer: "168px",
} as const;

export function BrandLogo({
  variant,
  size,
  priority = false,
  decorative = false,
  className = "",
}: {
  variant: "blue" | "ivory";
  size: "nav" | "footer";
  priority?: boolean;
  decorative?: boolean;
  className?: string;
}) {
  return (
    <Image
      src={SRC[variant]}
      alt={decorative ? "" : "CEO Rules"}
      width={WIDTH}
      height={HEIGHT}
      sizes={SIZE_ATTR[size]}
      priority={priority}
      className={`${SIZE_CLASS[size]} h-auto w-full ${className}`.trim()}
    />
  );
}
