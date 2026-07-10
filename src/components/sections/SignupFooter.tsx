/** 08 — Email capture band (solid yellow, black text/input) + black footer.
 *  Tunnel line terminates at the signup input with a pointed end (trap set). */

const FOOTER_COLS = [
  {
    heading: "Shop",
    links: ["Mole Traps", "Gopher Traps", "Accessories", "Apparel"],
  },
  {
    heading: "Learn",
    links: ["How It Works", "Mole & Gopher Info", "FAQs", "Reviews"],
  },
  {
    heading: "Company",
    links: ["About", "Legacy of Don Sprague", "Contact"],
  },
];

const BADGES = ["Made in USA", "Since 1909", "Lifetime Warranty"];

export default function SignupFooter() {
  return (
    <>
      {/* Signup band */}
      <section aria-labelledby="signup-heading" className="relative bg-yellow">
        {/* tunnel line terminates here: pointed end at the input */}
        <svg
          aria-hidden="true"
          className="absolute left-0 top-0 h-6 w-full"
          viewBox="0 0 1440 24"
          preserveAspectRatio="none"
          fill="none"
        >
          <path d="M720 0 C 720 8, 700 14, 620 18 L 560 20 L 548 24 L 560 16 Z" fill="#111111" opacity="0.9" />
        </svg>

        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-5 py-16 sm:px-8 lg:flex-row lg:justify-between lg:py-20">
          <div className="max-w-xl text-center lg:text-left">
            <h2
              id="signup-heading"
              className="font-display text-2xl font-bold uppercase leading-tight text-ink sm:text-3xl"
            >
              Trapping Tips From the Oregon Workshop.
            </h2>
            <p className="mt-2 text-base text-ink/80">
              Seasonal reminders and field-tested advice. No spam.
            </p>
          </div>

          <form
            className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
            action="#"
            method="post"
          >
            <label htmlFor="signup-email" className="sr-only">
              Email address
            </label>
            <input
              id="signup-email"
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder="Your email address"
              className="w-full border-2 border-ink bg-yellow px-4 py-3.5 text-base text-ink placeholder:text-ink/60"
            />
            <button
              type="submit"
              className="shrink-0 bg-ink px-7 py-3.5 font-display text-base font-semibold uppercase tracking-[0.14em] text-yellow transition-transform hover:-translate-y-0.5"
            >
              Sign Up
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div>
              <span className="inline-block bg-yellow px-3 py-1.5 font-display text-xl font-bold uppercase tracking-[0.18em] text-ink">
                CINCH
              </span>
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
                Cinch Traps LLC · 10140 SW Allen Blvd Suite A, Beaverton, OR
                97005
              </p>
              <p className="mt-3 text-sm text-white/70">
                <a href="tel:+15036440150" className="hover:text-yellow">
                  503-644-0150
                </a>{" "}
                ·{" "}
                <a href="tel:+18776440150" className="hover:text-yellow">
                  877-644-0150 (toll-free)
                </a>
              </p>
              <p className="mt-1 text-sm text-white/70">
                Orders fulfilled within 24 hours on business days.
              </p>
            </div>

            {FOOTER_COLS.map((col) => (
              <nav key={col.heading} aria-label={col.heading}>
                <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-yellow">
                  {col.heading}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#main"
                        className="text-sm text-white/80 transition-colors hover:text-yellow"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-start gap-6 border-t border-white/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <ul className="flex flex-wrap gap-3">
              {BADGES.map((badge) => (
                <li
                  key={badge}
                  className="border border-yellow px-3 py-1.5 font-display text-xs font-medium uppercase tracking-[0.16em] text-yellow"
                >
                  {badge}
                </li>
              ))}
            </ul>
            <p className="text-xs text-white/50">
              © {new Date().getFullYear()} Cinch Traps LLC. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
