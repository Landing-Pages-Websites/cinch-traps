import Image from "next/image";

/** 01 — Hero. Full-bleed golden-hour field, dark bottom scrim, tunnel line exits bottom-left. */
export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[92svh] flex-col justify-end overflow-hidden bg-ink">
      <Image
        src="/images/design/elements/hero-field-plate.png"
        alt="Golden-hour field at sunset with a homeowner walking a dog in the distance"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Readability scrim, darkening into #111 at the bottom edge */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.55)_0%,rgba(17,17,17,0.15)_35%,rgba(17,17,17,0.55)_70%,#111111_100%)]"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-36 sm:px-8 lg:pb-28">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.28em] text-yellow">
              Handmade in Oregon · Since 1909
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold uppercase leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              The Original Mole &amp; Gopher Trap.{" "}
              <span className="text-yellow">Tried-and-True Since 1909.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
              Ranked #1 by five universities and the USDA. Handmade from
              American galvanized steel. Lifetime warranty. Free shipping on
              trap orders.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a
                href="#shop"
                className="inline-flex items-center gap-2 bg-yellow px-7 py-4 font-display text-base font-semibold uppercase tracking-[0.14em] text-ink transition-transform hover:-translate-y-0.5"
              >
                Shop Traps
                <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden="true">
                  <path d="M0 6h15M11 1l5 5-5 5" stroke="currentColor" strokeWidth="2" />
                </svg>
              </a>
              <a
                href="#mole-or-gopher"
                className="border-b-2 border-yellow pb-1 font-display text-sm font-medium uppercase tracking-[0.16em] text-white transition-colors hover:text-yellow"
              >
                Mole or Gopher? Find your trap
              </a>
            </div>
          </div>

          {/* SINCE 1909 stamp roundel — inline SVG */}
          <svg
            width="132"
            height="132"
            viewBox="0 0 132 132"
            role="img"
            aria-label="Since 1909 stamp badge"
            className="hidden shrink-0 lg:block"
          >
            <circle cx="66" cy="66" r="63" fill="none" stroke="#FFCC00" strokeWidth="1.5" />
            <circle cx="66" cy="66" r="52" fill="none" stroke="#FFCC00" strokeWidth="1.5" strokeDasharray="4 4" />
            <text
              x="66"
              y="60"
              textAnchor="middle"
              fill="#FFCC00"
              fontFamily="var(--font-oswald)"
              fontSize="15"
              letterSpacing="4"
            >
              SINCE
            </text>
            <text
              x="66"
              y="86"
              textAnchor="middle"
              fill="#FFCC00"
              fontFamily="var(--font-oswald)"
              fontSize="26"
              fontWeight="600"
              letterSpacing="3"
            >
              1909
            </text>
          </svg>
        </div>
      </div>

      {/* Tunnel-line motif: dips across, exits bottom-left at x=58 (4%) — TrustStrip enters at the same x */}
      <svg
        aria-hidden="true"
        className="relative -mb-px h-10 w-full"
        viewBox="0 0 1440 40"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M1440 8 C 1100 8, 900 30, 620 30 S 220 14, 100 30 C 80 33, 62 36, 58 40"
          stroke="#FFCC00"
          strokeWidth="2"
        />
        <circle cx="620" cy="30" r="4" fill="#FFCC00" />
      </svg>
    </section>
  );
}
