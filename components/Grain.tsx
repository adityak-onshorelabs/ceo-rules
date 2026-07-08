// Fine film grain over dark full-bleed imagery. The high-frequency noise masks
// upscale softness / compression in the source photos, so low-res reads as
// cinematic rather than blurry. Sits above the scrim, below the copy.
export function Grain({ opacity = 0.14 }: { opacity?: number }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[6] mix-blend-overlay"
      style={{
        opacity,
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        backgroundSize: "180px 180px",
      }}
    />
  );
}
