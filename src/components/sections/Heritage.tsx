import Image from "next/image";

/** 06 — Heritage: dark #111 anchor with steel texture. Tunnel line turns steel-silver here.
 *  Founder photo slot = neutral placeholder (real people are never generated). */
export default function Heritage() {
  return (
    <section id="heritage" className="grain relative overflow-hidden bg-ink">
      {/* Steel macro photography, right-anchored; text owns the quiet dark left zone */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[55%]" aria-hidden="true">
        <Image
          src="/images/design/elements/heritage-steel-macro.png"
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-cover object-[70%_center] opacity-45 lg:opacity-90"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#111111_0%,rgba(17,17,17,0.72)_35%,rgba(17,17,17,0.18)_75%,rgba(17,17,17,0.05)_100%)]" />
      </div>

      {/* Tunnel line: enters top-left at x=115 (from 05), turns steel-silver against the dark, exits bottom-right at x=1325 (into 07) */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M115 0 C 140 60, 180 140, 200 300 C 220 520, 700 640, 1100 700 C 1230 722, 1305 755, 1325 800"
          stroke="#BBC1C4"
          strokeWidth="2"
          strokeDasharray="14 10"
          opacity="0.7"
        />
        <circle cx="200" cy="300" r="4" fill="#FFCC00" opacity="0.8" />
      </svg>

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
