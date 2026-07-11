import Image from "next/image";
import { Fragment } from "react";

/** 07 — Testimonials: QUIET quote wall on warm #FBFAF6. Oversized yellow quote marks.
 *  HARD RULE: no star icons, no rating counts. Quotes verbatim from the manifest. */

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

      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-32">
        <h2 className="text-center font-display text-2xl font-bold uppercase leading-tight text-ink sm:text-3xl">
          The Only Product That Has Worked.
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:gap-8">
          {QUOTES.map((q, i) => (
            <Fragment key={q.author + q.quote.slice(0, 12)}>
              <figure
                className="relative flex flex-col bg-white p-8 shadow-[0_2px_0_rgba(17,17,17,0.06)] sm:p-10"
              >
                <span
                  aria-hidden="true"
                  className="font-display text-6xl font-bold leading-none text-yellow"
                >
                  &ldquo;
                </span>
                <blockquote className="mt-2 flex-1">
                  <p className="text-base leading-relaxed text-ink/85 sm:text-lg">
                    {q.quote}
                  </p>
                </blockquote>
                <figcaption className="mt-6 font-display text-sm font-semibold uppercase tracking-[0.14em] text-ink">
                  — {q.author}
                </figcaption>
              </figure>
              {/* Photo card sits in the grid like the ref: hands + trap lower-left among the quotes */}
              {i === 1 && (
                <div className="relative min-h-[240px] overflow-hidden shadow-[0_2px_0_rgba(17,17,17,0.06)]">
                  <Image
                    src="/images/design/elements/testimonial-photo-hands.png"
                    alt="Weathered hands holding a well-used CINCH trap"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>
              )}
            </Fragment>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="#reviews"
            className="inline-flex items-center gap-2 border-2 border-ink px-7 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:bg-ink hover:text-yellow"
          >
            Read All Reviews
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true">
              <path d="M0 5h13M10 1l4 4-4 4" stroke="currentColor" strokeWidth="1.8" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
