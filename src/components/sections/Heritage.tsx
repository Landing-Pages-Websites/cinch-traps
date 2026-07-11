import Image from "next/image";

/** 06 — Heritage: dark #111 anchor with steel texture. The tunnel-line motif goes
 *  "underground" through this dark section (no line here — operator direction) and
 *  re-emerges in 07.
 *  Founder photo slot = neutral placeholder (real people are never generated). */
export default function Heritage() {
  return (
    <section id="heritage" className="grain relative overflow-hidden bg-ink">
      {/* Steel macro photography, full-bleed: the trap coil (at ~81% of the asset width)
          lands centered in the empty zone right of the text column (~75% of section width) */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/design/elements/heritage-steel-macro.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[50%_20%] opacity-40 lg:opacity-100"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#111111_0%,rgba(17,17,17,0.92)_38%,rgba(17,17,17,0.45)_56%,rgba(17,17,17,0)_74%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <div className="max-w-2xl">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.28em] text-yellow">
            The Legacy of Don Sprague
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold uppercase leading-tight text-white sm:text-4xl lg:text-5xl">
            Handmade in Oregon From American Galvanized Steel — Since 1909.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            If it&rsquo;s not stamped CINCH, it&rsquo;s not the original. Built
            on Don Sprague&rsquo;s legacy of innovation, problem-solving, and a
            genuine passion for helping growers succeed.
          </p>

          <blockquote className="mt-10 border-l-4 border-yellow pl-6">
            <p className="font-display text-xl font-medium leading-snug text-white sm:text-2xl">
              &ldquo;CINCH Trap was the all-around best performer.&rdquo;
            </p>
            <cite className="mt-3 block text-sm font-semibold not-italic uppercase tracking-[0.14em] text-steel">
              — USDA National Wildlife Research Center
            </cite>
          </blockquote>

          <a
            href="#heritage"
            className="mt-10 inline-flex items-center gap-2 bg-yellow px-7 py-4 font-display text-base font-semibold uppercase tracking-[0.14em] text-ink transition-transform hover:-translate-y-0.5"
          >
            Our Story
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden="true">
              <path d="M0 6h15M11 1l5 5-5 5" stroke="currentColor" strokeWidth="2" />
            </svg>
          </a>
        </div>

        {/* Stamp roundel — HANDMADE IN OREGON / SINCE 1909, inline SVG */}
        <svg
          width="150"
          height="150"
          viewBox="0 0 150 150"
          role="img"
          aria-label="Handmade in Oregon — Since 1909 stamp"
          className="absolute right-8 top-16 hidden opacity-90 lg:block"
        >
          <circle cx="75" cy="75" r="72" fill="none" stroke="#FFCC00" strokeWidth="1.5" />
          <circle cx="75" cy="75" r="58" fill="none" stroke="#FFCC00" strokeWidth="1" strokeDasharray="3 4" />
          <defs>
            <path id="stamp-arc" d="M75 24 a51 51 0 1 1 -0.01 0" fill="none" />
          </defs>
          <text fill="#FFCC00" fontFamily="var(--font-oswald)" fontSize="12" letterSpacing="3.5">
            <textPath href="#stamp-arc" startOffset="0%">
              HANDMADE IN OREGON · EST. 1909 ·
            </textPath>
          </text>
          <text
            x="75"
            y="70"
            textAnchor="middle"
            fill="#FFCC00"
            fontFamily="var(--font-oswald)"
            fontSize="22"
            fontWeight="700"
            letterSpacing="4"
          >
            CINCH
          </text>
          <text
            x="75"
            y="92"
            textAnchor="middle"
            fill="#FFCC00"
            fontFamily="var(--font-oswald)"
            fontSize="14"
            letterSpacing="3"
          >
            SINCE 1909
          </text>
        </svg>
      </div>
    </section>
  );
}
