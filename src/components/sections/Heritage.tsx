import Image from "next/image";

/** 06 — Heritage: dark #111 band with steel texture; tunnel line turns steel-silver here. */
export default function Heritage() {
  return (
    <section id="heritage" className="grain relative overflow-hidden bg-ink">
      {/* warm right-side glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(90%_80%_at_85%_50%,rgba(255,204,0,0.10),transparent_60%)]"
      />
      {/* tunnel line: enters top-left, steel-silver against the dark, exits bottom-right */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M0 0 C 80 120, 60 300, 140 460 C 220 640, 1100 700, 1440 800"
          stroke="#BBC1C4"
          strokeWidth="2"
          strokeDasharray="14 10"
          opacity="0.45"
        />
      </svg>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-28">
        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.28em] text-yellow">
            The Legacy of Don Sprague
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
            Handmade in Oregon From American Galvanized Steel — Since 1909.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80">
            If it&rsquo;s not stamped CINCH, it&rsquo;s not the original. Built
            on Don Sprague&rsquo;s legacy of innovation, problem-solving, and a
            genuine passion for helping growers succeed.
          </p>

          <blockquote className="mt-8 border-l-4 border-yellow pl-5">
            <p className="font-display text-xl font-medium leading-snug text-white sm:text-2xl">
              &ldquo;CINCH Trap was the all-around best performer.&rdquo;
            </p>
            <cite className="mt-2 block text-sm not-italic text-steel">
              — USDA National Wildlife Research Center
            </cite>
          </blockquote>

          <a
            href="#heritage"
            className="mt-9 inline-flex items-center gap-2 bg-yellow px-7 py-4 font-display text-base font-semibold uppercase tracking-[0.14em] text-ink transition-transform hover:-translate-y-0.5"
          >
            Our Story
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden="true">
              <path d="M0 6h15M11 1l5 5-5 5" stroke="currentColor" strokeWidth="2" />
            </svg>
          </a>
        </div>

        <div className="relative">
          <div className="relative aspect-[3/2] overflow-hidden rounded-md">
            <Image
              src="/images/design/elements/heritage-steel-macro.png"
              alt="Macro detail of a galvanized steel Cinch trap mechanism in warm workshop light"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(120deg,rgba(17,17,17,0.35),transparent_45%)]"
            />
          </div>
          {/* stamp roundel overlapping the photo corner */}
          <svg
            width="104"
            height="104"
            viewBox="0 0 104 104"
            role="img"
            aria-label="Handmade in Oregon — Since 1909 stamp"
            className="absolute -bottom-6 -left-4 sm:-left-6"
          >
            <circle cx="52" cy="52" r="50" fill="#111111" stroke="#FFCC00" strokeWidth="1.5" />
            <circle cx="52" cy="52" r="41" fill="none" stroke="#FFCC00" strokeWidth="1" strokeDasharray="3 3" />
            <text x="52" y="42" textAnchor="middle" fill="#FFCC00" fontFamily="var(--font-oswald)" fontSize="10" letterSpacing="2">
              HANDMADE IN
            </text>
            <text x="52" y="58" textAnchor="middle" fill="#FFCC00" fontFamily="var(--font-oswald)" fontSize="14" fontWeight="600" letterSpacing="2">
              OREGON
            </text>
            <text x="52" y="74" textAnchor="middle" fill="#FFCC00" fontFamily="var(--font-oswald)" fontSize="10" letterSpacing="2">
              SINCE 1909
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}
