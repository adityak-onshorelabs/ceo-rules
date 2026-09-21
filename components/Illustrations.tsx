// Thin line-art tailoring illustrations. Decorative, sparse, currentColor so the
// caller sets the tone (kept faint on the page). DESIGN iconography: ~1.25px stroke.

// A pair of scissors gripping a long twirling thread. The thread is drawn first
// and the scissors sit on top of its starting point, so the blades visibly hold
// the line. Blade tips converge at (92,110); the thread starts there, horizontal.
export function FooterDoodle({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 560 220"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* the twirling thread, held at the scissors and curling across the frame */}
      <path d="M92 110 C 160 110, 214 112, 256 132 C 288 154, 312 152, 314 126 C 316 104, 288 105, 294 129 C 300 150, 334 152, 364 130 C 418 90, 468 104, 498 134 C 522 160, 510 192, 486 184 C 468 178, 474 154, 496 160 C 524 168, 540 152, 548 128" />

      {/* scissors, on top, blades converging on the thread's start */}
      <g transform="translate(46,96)">
        <ellipse cx="8" cy="8" rx="5" ry="4" />
        <ellipse cx="8" cy="20" rx="5" ry="4" />
        <line x1="11.5" y1="10.5" x2="24" y2="14" />
        <line x1="11.5" y1="17.5" x2="24" y2="14" />
        <circle cx="24" cy="14" r="1.4" fill="currentColor" stroke="none" />
        <line x1="24" y1="14" x2="46" y2="8" />
        <line x1="24" y1="14" x2="46" y2="20" />
      </g>
    </svg>
  );
}
