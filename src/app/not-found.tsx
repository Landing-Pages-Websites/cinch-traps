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
        get you sorted.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block bg-yellow px-7 py-4 font-display text-base font-semibold uppercase tracking-[0.14em] text-ink transition-transform hover:-translate-y-0.5"
      >
        Back to Home
      </Link>
    </main>
  );
}
