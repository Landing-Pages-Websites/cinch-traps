# Cinch Traps Homepage — Section Status

Build order per public/design/section_manifest.json. Manifest wins for text, refs win for layout, page_flow wins for backgrounds/motif.

## Done — ALL SECTIONS COMPLETE
- [x] Global: layout.tsx (Oswald + Open Sans via next/font, metadata/OG/Twitter), globals.css tokens, Header (responsive, hamburger, skip link)
- [x] 01-hero (Hero.tsx — hero-field-plate.png, SINCE 1909 SVG roundel, scrim into #111)
- [x] 02-trust-strip (TrustStrip.tsx — black band, yellow tick separators)
- [x] 03-mole-or-gopher (MoleOrGopher.tsx — mound photos, steel plaque w/ screw heads)
- [x] 04-shop-categories (ShopCategories.tsx — 3 cards, verbatim prices, stamped-line trap icon)
- [x] 05-how-it-works (HowItWorks.tsx — positional step images how-step1..4, HTML number squares, dashed connectors)
- [x] 06-heritage (Heritage.tsx — dark #111 + grain, heritage-steel-macro.png, USDA quote verbatim, Oregon stamp SVG)
- [x] 07-testimonials (Testimonials.tsx — quote wall #FBFAF6, NO stars, verbatim quotes, testimonial-photo-hands.png)
- [x] 08-signup-footer (SignupFooter.tsx — yellow band, black-outline input, non-wired form; black footer w/ badges)
- [x] Custom 404 (src/app/not-found.tsx)
- [x] Tunnel-line motif travels per page_flow.motif_continuity (inline SVG in every section, silver in 06, terminates pointed at signup)
- [x] npm run build green (static, / + /_not-found)

## Remaining (follow-up polish, non-blocking)
- [ ] Side-by-side screenshot QA vs public/design/refs at 1440/375
- [ ] Lighthouse pass on production deploy

## Notes
- Hard rules honored: no star ratings; #FFCC00 never text on light; text on yellow = #111; no invented quotes/stats/prices.
- 04 + 05 share ONE continuous #F6F5F0 surface (tunnel line is the only seam marker).
- Git author peter@gomega.ai required for Vercel deploys. Prod: https://cinch-traps.vercel.app
