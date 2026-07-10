import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center bg-ink px-5 text-center">
      <p className="font-display text-sm font-semibold uppercase tracking-[0.28em] text-yellow">
        Tunnel&rsquo;s a dead end
      </p>
      <h1 className="mt-4 font-display text-6xl font-bold uppercase text-white sm:text-7xl">
        404
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-white/75">
        This page has gone underground. Head back to the surface and we&rsquo;ll
        get you to the right spot.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 bg-yellow px-7 py-4 font-display text-base font-semibold uppercase tracking-[0.14em] text-ink transition-transform hover:-translate-y-0.5"
      >
        Back to Home
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden="true">
          <path d="M0 6h15M11 1l5 5-5 5" stroke="currentColor" strokeWidth="2" />
        </svg>
      </Link>
      {/* Tunnel line, terminated */}
      <svg
        aria-hidden="true"
        className="mt-12 h-6 w-64"
        viewBox="0 0 256 24"
        fill="none"
      >
        <path
          d="M0 12 H 200 L 220 6 M200 12 L 220 18"
          stroke="#FFCC00"
          strokeWidth="2"
          strokeDasharray="10 6"
        />
      </svg>
    </main>
  );
}
