"use client";

import { useState } from "react";

const NAV = [
  { href: "#shop", label: "Shop" },
  { href: "#mole-or-gopher", label: "Mole or Gopher?" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#heritage", label: "Our Story" },
  { href: "#reviews", label: "Reviews" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-yellow focus:px-4 focus:py-2 focus:font-display focus:font-semibold focus:text-ink"
      >
        Skip to content
      </a>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
        {/* Wordmark: plain condensed type on yellow field (logo used as-is rule) */}
        <a href="#main" aria-label="Cinch Traps — home" className="inline-flex">
          <span className="bg-yellow px-3 py-1.5 font-display text-2xl font-bold uppercase tracking-[0.18em] text-ink">
            CINCH
          </span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-display text-sm font-medium uppercase tracking-[0.14em] text-white transition-colors hover:text-yellow"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#shop"
            className="bg-yellow px-4 py-2 font-display text-sm font-semibold uppercase tracking-[0.14em] text-ink transition-transform hover:-translate-y-0.5"
          >
            Shop Traps
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-11 w-11 items-center justify-center bg-ink/60 text-white lg:hidden"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="mx-5 flex flex-col gap-1 border-t-2 border-yellow bg-ink p-4 lg:hidden"
        >
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="px-2 py-3 font-display text-base font-medium uppercase tracking-[0.14em] text-white hover:text-yellow"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#shop"
            onClick={() => setOpen(false)}
            className="mt-2 bg-yellow px-4 py-3 text-center font-display text-base font-semibold uppercase tracking-[0.14em] text-ink"
          >
            Shop Traps
          </a>
        </nav>
      )}
    </header>
  );
}
