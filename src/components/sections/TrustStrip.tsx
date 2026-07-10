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
    <section aria-label="Why Cinch Traps" className="relative bg-ink py-6">
      <ul className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-y-3 px-5 sm:px-8">
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
      {/* Tunnel line runs through the band and exits bottom-right */}
      <svg
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-3 w-full"
        viewBox="0 0 1440 12"
        preserveAspectRatio="none"
        fill="none"
      >
        <path d="M0 2 H 1200 C 1300 2, 1360 10, 1440 12" stroke="#FFCC00" strokeWidth="2" strokeDasharray="10 6" />
      </svg>
    </section>
  );
}
