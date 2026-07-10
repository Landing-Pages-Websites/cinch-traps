import Image from "next/image";

/** 03 — Mole or Gopher router: white bg, split comparison, tunnel line dips between the cards. */
export default function MoleOrGopher() {
  return (
    <section id="mole-or-gopher" className="relative overflow-hidden bg-white">
      {/* Tunnel line: enters top-right, dips between the two cards, exits bottom-center */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M1440 0 C 1300 60, 900 90, 720 260 C 700 500, 700 640, 720 900"
          stroke="#FFCC00"
          strokeWidth="2"
          strokeDasharray="12 8"
          opacity="0.6"
        />
      </svg>

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="text-center">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.28em] text-golddark">
            Know Your Enemy
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-tight text-ink sm:text-4xl lg:text-5xl">
            Mole or Gopher? Read the Mound.
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:gap-12">
          {[
            {
              title: "Mole",
              body: "Round cone of fine, fluffy soil — like a tiny volcano.",
              cta: "Shop Mole Traps",
              img: "/images/design/elements/mole-mound-photo.jpg",
              alt: "Round cone-shaped mole mound of fine fluffy soil in a lawn",
            },
            {
              title: "Gopher",
              body: "Fan or horseshoe-shaped mound with a plugged hole to one side.",
              cta: "Shop Gopher Traps",
              img: "/images/design/elements/gopher-mound-photo.jpg",
              alt: "Fan-shaped gopher mound with a plugged hole to one side",
            },
          ].map((card) => (
            <article key={card.title} className="flex flex-col bg-white text-center">
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
                <Image
                  src={card.img}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold uppercase tracking-[0.1em] text-ink">
                {card.title}
              </h3>
              <p className="mx-auto mt-2 max-w-sm text-base leading-relaxed text-ink/75">
                {card.body}
              </p>
              <a
                href="#shop"
                className="mx-auto mt-5 inline-block bg-yellow px-6 py-3 font-display text-sm font-semibold uppercase tracking-[0.14em] text-ink transition-transform hover:-translate-y-0.5"
              >
                {card.cta}
              </a>
            </article>
          ))}
        </div>

        {/* Brushed-steel plaque */}
        <div className="steel-plaque relative mx-auto mt-14 max-w-xl rounded-md px-8 py-5 text-center">
          {["left-3 top-3", "right-3 top-3", "bottom-3 left-3", "bottom-3 right-3"].map(
            (pos) => (
              <span
                key={pos}
                aria-hidden="true"
                className={`absolute ${pos} h-2.5 w-2.5 rounded-full bg-[radial-gradient(circle_at_35%_35%,#eef1f2,#7d8487)] shadow-inner`}
              />
            ),
          )}
          <p className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-ink">
            Trap size is chosen by tunnel diameter — S / M / L
          </p>
        </div>
      </div>
    </section>
  );
}
