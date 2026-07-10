/** 04 — Shop by category: warm #F6F5F0 surface (continuous with 05), tunnel line underlines the headline. */

const CARDS = [
  {
    title: "Mole Traps",
    price: "from $24.99",
    kit: "Mole Kit $49.99 · Deluxe $54.99",
  },
  {
    title: "Gopher Traps",
    price: "from $24.99",
    kit: "Gopher Kit $54.99 · Deluxe $64.99",
  },
  {
    title: "Accessories",
    price: "from $4.50",
    kit: "Flags · tunnel tools · parts",
  },
];

/* Minimal stamped-line scissor-trap icon (no product photos available in approved assets). */
function TrapIcon() {
  return (
    <svg
      width="88"
      height="88"
      viewBox="0 0 88 88"
      fill="none"
      aria-hidden="true"
      className="text-ink"
    >
      <path
        d="M24 12 C 20 34, 30 44, 44 50 C 58 44, 68 34, 64 12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M30 76 C 34 58, 38 54, 44 50 C 50 54, 54 58, 58 76"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="44" cy="50" r="6" stroke="currentColor" strokeWidth="2.5" />
      <path d="M20 12h8M60 12h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export default function ShopCategories() {
  return (
    <section id="shop" className="relative bg-cream">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.28em] text-golddark">
            Free Shipping on Trap Orders · Continental US
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-tight text-ink sm:text-4xl lg:text-5xl">
            Kits Include Everything You Need.
          </h2>
          {/* Tunnel line enters top-center and underlines the headline */}
          <svg
            aria-hidden="true"
            className="mx-auto mt-5 h-4 w-64"
            viewBox="0 0 256 16"
            fill="none"
          >
            <path d="M0 4 C 60 4, 90 12, 128 12 S 200 4, 256 8" stroke="#FFCC00" strokeWidth="2" />
            <circle cx="128" cy="12" r="3.5" fill="#FFCC00" />
          </svg>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {CARDS.map((card) => (
            <article
              key={card.title}
              className="group flex flex-col border border-ink/10 bg-white shadow-[0_2px_0_rgba(17,17,17,0.06)] transition-transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-center bg-[linear-gradient(180deg,#EDECE6,#E2E1DA)] py-12">
                <TrapIcon />
              </div>
              <div className="flex flex-1 flex-col border-t-4 border-yellow p-7">
                <h3 className="font-display text-xl font-bold uppercase tracking-[0.1em] text-ink">
                  {card.title}
                </h3>
                <p className="mt-1 font-display text-lg font-semibold text-golddark">
                  {card.price}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{card.kit}</p>
                <a
                  href="#shop"
                  aria-label={`Shop ${card.title.toLowerCase()}`}
                  className="mt-6 inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-[0.14em] text-ink"
                >
                  Shop Now
                  <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true">
                    <path d="M0 5h13M10 1l4 4-4 4" stroke="currentColor" strokeWidth="1.8" />
                  </svg>
                  <span className="block h-0.5 w-0 bg-yellow transition-all group-hover:w-6" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#shop"
            className="inline-flex items-center gap-2 bg-ink px-8 py-4 font-display text-base font-semibold uppercase tracking-[0.14em] text-yellow transition-transform hover:-translate-y-0.5"
          >
            Shop All Products
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden="true">
              <path d="M0 6h15M11 1l5 5-5 5" stroke="currentColor" strokeWidth="2" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
