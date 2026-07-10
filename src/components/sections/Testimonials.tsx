import Image from "next/image";

/** 07 — Testimonial wall: quiet, warm off-white #FBFAF6, oversized yellow quote marks.
 *  HARD RULE: no stars, no rating counts. Quotes verbatim from the manifest. */

const QUOTES = [
  {
    quote:
      "I caught the Mole King NEXT DAY after receiving and setting \u201csmall\u201d traps. Been after the dude for 6 months and tried everything.",
    author: "Verified customer",
  },
  {
    quote:
      "I have tried them all. I gave up on the stores and searched for the traps online. I found Cinch Traps and they truly work.",
    author: "Sam Street",
  },
  {
    quote:
      "We use them in our yard here in east Texas — these gophers don't stand a chance!",
    author: "Jim from Texas",
  },
  {
    quote:
      "The quality and effectiveness is amazing. It's definitely a product I would recommend to everyone I know.",
    author: "Rich Olson",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="relative overflow-hidden bg-paper">
      {/* tunnel line: enters top-right, weaves between quote cards */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M1440 0 C 1250 100, 1000 180, 760 300 C 500 430, 900 560, 720 900"
          stroke="#FFCC00"
          strokeWidth="2"
          strokeDasharray="12 8"
          opacity="0.5"
        />
      </svg>

      <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
        <h2 className="text-center font-display text-2xl font-bold uppercase leading-tight text-ink sm:text-3xl">
          The Only Product That Has Worked.
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {QUOTES.map((q) => (
            <figure
              key={q.author + q.quote.slice(0, 12)}
              className="relative border border-ink/10 bg-white p-8 pt-10 shadow-[0_2px_0_rgba(17,17,17,0.05)]"
            >
              <span
                aria-hidden="true"
                className="absolute -top-4 left-6 font-display text-7xl font-bold leading-none text-yellow"
              >
                &ldquo;
              </span>
              <blockquote className="text-base leading-relaxed text-ink/85">
                {q.quote}
              </blockquote>
              <figcaption className="mt-4 font-display text-sm font-semibold uppercase tracking-[0.14em] text-ink/60">
                — {q.author}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-8 sm:flex-row sm:justify-center">
          <a
            href="#reviews"
            className="inline-block border-2 border-ink px-7 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:bg-ink hover:text-yellow"
          >
            Read All Reviews
          </a>
        </div>

        <div className="relative mx-auto mt-14 aspect-[21/9] max-w-3xl overflow-hidden rounded-md">
          <Image
            src="/images/design/elements/testimonial-photo-hands.png"
            alt="Hands holding a galvanized steel Cinch trap over freshly worked soil"
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
