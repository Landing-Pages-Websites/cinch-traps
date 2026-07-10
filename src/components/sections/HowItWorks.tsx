import Image from "next/image";

/** 05 — How It Works: quiet section, same #F6F5F0 band as 04 (tunnel line is the only seam marker).
 *  Step images are positional by filename — never reorder. Number squares are an HTML layer. */

const STEPS = [
  {
    n: "1",
    label: "Find the active tunnel",
    img: "/images/design/elements/how-step1-mound.png",
    alt: "Illustration of a fresh soil mound marking an active tunnel",
  },
  {
    n: "2",
    label: "Open it with the tunnel tool",
    img: "/images/design/elements/how-step2-trap-set.png",
    alt: "Illustration of the tunnel opened with the tunnel tool and a trap set inside",
  },
  {
    n: "3",
    label: "Set two traps facing opposite directions",
    img: "/images/design/elements/how-step3-trap.png",
    alt: "Illustration of two traps set facing opposite directions in the tunnel",
  },
  {
    n: "4",
    label: "Done — check the flag",
    img: "/images/design/elements/how-step4-trap-sprung.png",
    alt: "Illustration of a sprung trap with its marker flag raised",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-cream">
      {/* seam marker: tunnel line crossing unbroken from section 04 */}
      <svg
        aria-hidden="true"
        className="absolute -top-2 left-0 h-4 w-full"
        viewBox="0 0 1440 16"
        preserveAspectRatio="none"
        fill="none"
      >
        <path d="M720 0 C 700 8, 500 8, 300 10 S 80 14, 0 16" stroke="#FFCC00" strokeWidth="2" strokeDasharray="12 8" opacity="0.6" />
      </svg>

      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="text-center">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-golddark sm:text-sm">
            No Poison. No Guesswork. No Touching the Animal.
          </p>
          <h2 className="mt-3 font-display text-2xl font-bold uppercase leading-tight text-ink sm:text-3xl">
            Set It in 4 Simple Steps.
          </h2>
        </div>

        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {STEPS.map((step, i) => (
            <li key={step.n} className="relative flex flex-col items-center text-center">
              {/* dashed connector to the next step (desktop) */}
              {i < STEPS.length - 1 && (
                <svg
                  aria-hidden="true"
                  className="absolute -right-4 top-16 hidden h-2 w-8 lg:block"
                  viewBox="0 0 32 8"
                  fill="none"
                >
                  <path d="M0 4h32" stroke="#FFCC00" strokeWidth="2" strokeDasharray="6 5" />
                </svg>
              )}
              <div className="relative w-full">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md">
                  <Image
                    src={step.img}
                    alt={step.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                {/* stamped yellow number square — HTML layer per asset contract */}
                <span
                  aria-hidden="true"
                  className="absolute -left-2 -top-3 flex h-10 w-10 items-center justify-center bg-yellow font-display text-lg font-bold text-ink shadow-[2px_2px_0_rgba(17,17,17,0.9)]"
                >
                  {step.n}
                </span>
              </div>
              <p className="mt-4 max-w-[16rem] font-display text-base font-medium uppercase tracking-[0.06em] text-ink">
                <span className="sr-only">Step {step.n}: </span>
                {step.label}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-12 text-center">
          <a
            href="#how-it-works"
            className="inline-block border-2 border-ink px-7 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:bg-ink hover:text-yellow"
          >
            See Full Instructions
          </a>
        </div>
      </div>
    </section>
  );
}
