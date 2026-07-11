/** 04 — Shop by category: warm #F6F5F0 surface (continuous with 05), tunnel line underlines the headline. */
import Image from "next/image";

const CARDS = [
  {
    title: "Mole Traps",
    price: "from $24.99",
    kit: "Mole Kit $49.99 · Deluxe $54.99",
    photo: "/images/design/elements/trap-product-mole.jpg",
    alt: "CINCH galvanized-steel mole trap, studio photo",
  },
  {
    title: "Gopher Traps",
    price: "from $24.99",
    kit: "Gopher Kit $54.99 · Deluxe $64.99",
    photo: "/images/design/elements/trap-product-gopher.jpg",
    alt: "CINCH galvanized-steel gopher trap, studio photo",
  },
  {
    title: "Accessories",
    price: "from $4.50",
    kit: "Flags · tunnel tools · parts",
    photo: "/images/design/elements/trap-product-kit.jpg",
    alt: "CINCH deluxe trap kit with box, flags and tunnel tool",
  },
];

export default function ShopCategories() {
  return (
    <section id="shop" className="relative overflow-hidden bg-cream">
      {/* Tunnel line: enters top-center at x=720 (from 03), dips to underline the headline,
          runs down the left gutter and exits bottom-center at x=720 — crossing the 04→05 seam unbroken */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M720 0 C 730 60, 640 130, 600 160 C 560 185, 600 205, 720 200 C 810 196, 860 175, 880 160 C 900 300, 60 260, 48 480 C 40 700, 620 760, 720 900"
          stroke="#FFCC00"
          strokeWidth="2"
          strokeDasharray="12 8"
          opacity="0.55"
        />
        <circle cx="720" cy="200" r="4" fill="#FFCC00" opacity="0.8" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.28em] text-golddark">
            Free Shipping on Trap Orders · Continental US
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-tight text-ink sm:text-4xl lg:text-5xl">
            Kits Include Everything You Need.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {CARDS.map((card) => (
            <article
              key={card.title}
              className="group flex flex-col border border-ink/10 bg-white shadow-[0_2px_0_rgba(17,17,17,0.06)] transition-transform hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[linear-gradient(180deg,#EDECE6,#E2E1DA)]">
                <Image
                  src={card.photo}
                  alt={card.alt}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
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
