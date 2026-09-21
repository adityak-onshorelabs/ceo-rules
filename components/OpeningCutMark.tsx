export function OpeningCutMark() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 720 56"
      className="pointer-events-none h-12 w-full max-w-full overflow-hidden sm:h-14"
    >
      <g
        fill="none"
        stroke="color-mix(in srgb, var(--brand-blue) 18%, transparent)"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <ellipse cx="214" cy="17" rx="7.5" ry="6.5" />
        <ellipse cx="214" cy="39" rx="7.5" ry="6.5" />
        <path d="M221 20.5 L242 28 M221 35.5 L242 28" />
        <circle cx="242" cy="28" r="1.4" />
        <path d="M243.6 26.4 L288 20.5" />
        <path d="M243.6 29.6 L288 35.5" />
        <path
          d="M288 28
             C 360 24, 430 34, 508 26
             C 574 20, 632 31, 698 28"
          strokeDasharray="1.2 7.6"
        />
      </g>
    </svg>
  );
}
