import Image from "next/image";

/** 05 — How It Works: QUIET section. Continues the #F6F5F0 surface from 04 unbroken.
 *  Step visuals are the approved painterly illustrations (positional filenames = step numbers).
 *  Number squares are an HTML layer (never baked into the asset). */

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
    alt: "Illustration of a tunnel opened with the tunnel tool, trap being set",
  },
  {
    n: "3",
    label: "Set two traps facing opposite directions",
    img: "/images/design/elements/how-step3-trap.png",
    alt: "Illustration of two Cinch traps set facing opposite directions in the tunnel",
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
      {/* Tunnel line: enters top-center at x=720 (unbroken 04→05 seam, same #F6F5F0 band), exits bottom-left at x=115 (into 06) */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M720 0 C 760 120, 1390 160, 1396 400 C 1400 620, 400 560, 180 700 C 100 752, 108 830, 115 900"
          stroke="#FFCC00"
          strokeWidth="2"
          strokeDasharray="12 8"
          opacity="0.7"
        />
      </svg>

      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="text-center">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-golddark sm:text-sm">
            No Poison. No Guesswork. No Touching the Animal.
          </p>
          <h2 className="mt-3 font-display text-2xl font-bold uppercase leading-tight text-ink sm:text-3xl">
            Set It in 4 Simple Steps.
          </h2>
        </div>

        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {STEPS.map((step) => (
            <li key={step.n} className="relative flex flex-col items-center text-center">
              <div className="relative w-full max-w-[260px]">
                <div className="relative aspect-square overflow-hidden rounded-md">
                  <Image
                    src={step.img}
                    alt={step.alt}
                    fill
                    sizes="(max-width: 640px) 80vw, (max-width: 1024px) 40vw, 22vw"
                    className="object-cover"
                  />
                </div>
                {/* Stamped yellow number square — HTML layer over every tile */}
                <span
                  aria-hidden="true"
                  className="absolute -left-2 -top-2 flex h-11 w-11 items-center justify-center bg-yellow font-display text-xl font-bold text-ink shadow-[2px_2px_0_#111111]"
                >
                  {step.n}
                </span>
              </div>
              <p className="mt-5 max-w-[240px] font-display text-base font-medium uppercase tracking-[0.08em] text-ink">
                <span className="sr-only">Step {step.n}: </span>
                {step.label}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-14 text-center">
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 border-2 border-ink px-7 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:bg-ink hover:text-yellow"
          >
            See Full Instructions
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true">
              <path d="M0 5h13M10 1l4 4-4 4" stroke="currentColor" strokeWidth="1.8" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
