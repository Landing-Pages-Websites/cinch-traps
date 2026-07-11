/** 08 — Email capture band (solid CINCH yellow, black text/input) + black footer.
 *  The tunnel line terminates here at the signup input with a pointed end (trap set).
 *  Form is intentionally non-wired (no provider IDs yet). */

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
    <section id="signup">
      {/* Yellow signup band — text on yellow is ALWAYS #111 */}
      <div className="relative overflow-hidden bg-yellow">

        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-8 px-5 py-16 sm:px-8 lg:flex-row lg:justify-between lg:py-20">
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="font-display text-2xl font-bold uppercase leading-tight text-ink sm:text-3xl">
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
              className="w-full border-2 border-ink bg-yellow px-4 py-3.5 text-base text-ink placeholder:text-ink/60 focus:bg-white"
            />
            <button
              type="submit"
              className="shrink-0 bg-ink px-7 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.14em] text-yellow transition-transform hover:-translate-y-0.5"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>

      {/* Black footer */}
      <footer className="bg-ink text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
            <div>
              <span className="inline-block bg-yellow px-3 py-1.5 font-display text-2xl font-bold uppercase tracking-[0.18em] text-ink">
                CINCH
              </span>
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
                Cinch Traps LLC · 10140 SW Allen Blvd Suite A, Beaverton, OR
                97005
              </p>
              <p className="mt-2 text-sm text-white/70">
                <a
                  href="tel:+15036440150"
                  className="underline decoration-yellow/60 underline-offset-4 hover:text-yellow"
                >
                  503-644-0150
                </a>{" "}
                ·{" "}
                <a
                  href="tel:+18776440150"
                  className="underline decoration-yellow/60 underline-offset-4 hover:text-yellow"
                >
                  877-644-0150
                </a>
              </p>
              <p className="mt-2 text-sm text-white/60">
                Orders fulfilled within 24 hours on business days.
              </p>
            </div>

            <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              {FOOTER_COLS.map((col) => (
                <div key={col.heading}>
                  <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-yellow">
                    {col.heading}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {col.links.map((link) => (
                      <li key={link}>
                        <a
                          href="#main"
                          className="text-sm text-white/75 transition-colors hover:text-yellow"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>

          <div className="mt-14 flex flex-col items-center gap-6 border-t border-white/15 pt-8 sm:flex-row sm:justify-between">
            <ul className="flex flex-wrap items-center justify-center gap-3">
              {BADGES.map((badge) => (
                <li
                  key={badge}
                  className="border border-yellow/70 px-3 py-1.5 font-display text-xs font-medium uppercase tracking-[0.16em] text-yellow"
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
    </section>
  );
}
