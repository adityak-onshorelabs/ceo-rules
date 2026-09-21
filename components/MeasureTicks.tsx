// A short ruler segment: a baseline with alternating tick heights, like a tailor's
// tape. A quiet section signpost in the tailoring detail language. Decorative only;
// colour comes from the parent via currentColor. Sized 128x10 (1:1 with w-32 h-2.5).
export function MeasureTicks({ className = "" }: { className?: string }) {
  const ticks = Array.from({ length: 17 }, (_, i) => i);
  return (
    <svg
      aria-hidden
      viewBox="0 0 128 10"
      className={className}
      fill="none"
      preserveAspectRatio="none"
    >
      <line x1="0" y1="9" x2="128" y2="9" stroke="currentColor" strokeWidth="1" />
      {ticks.map((i) => {
        const x = i * 8;
        const long = i % 4 === 0;
        return (
          <line
            key={i}
            x1={x}
            y1="9"
            x2={x}
            y2={long ? "1" : "5"}
            stroke="currentColor"
            strokeWidth="1"
          />
        );
      })}
    </svg>
  );
}
