/** 02 — Trust bar: single black band, yellow tick separators = the tunnel line baseline. */
const ITEMS = [
  "#1 Ranked — 5 Universities + USDA",
  "Since 1909",
  "Lifetime Warranty",
  "Free Shipping on Trap Orders",
  "Made in USA",
];

export default function TrustStrip() {
  return (
    <section aria-label="Why Cinch Traps" className="relative overflow-hidden bg-ink py-6">
      {/* Tunnel line: enters top-left at x=58 (from hero), runs as the tick baseline, exits bottom-right at x=1382 (into 03) */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M58 0 C 66 30, 120 62, 300 62 H 1120 C 1260 62, 1350 80, 1382 100"
          stroke="#FFCC00"
          strokeWidth="2"
          strokeDasharray="10 6"
        />
      </svg>
      <ul className="relative mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-y-3 px-5 sm:px-8">
        {ITEMS.map((item, i) => (
          <li key={item} className="flex items-center">
            {i > 0 && (
              <span
                aria-hidden="true"
                className="mx-4 inline-block h-4 w-0.5 bg-yellow sm:mx-6"
              />
            )}
            <span className="font-display text-xs font-medium uppercase tracking-[0.18em] text-white sm:text-sm">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
