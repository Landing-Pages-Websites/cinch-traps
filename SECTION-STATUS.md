# Cinch Traps Homepage — Section Status

Build order per public/design/section_manifest.json. Manifest wins for text, refs win for layout, page_flow wins for backgrounds/motif.

## Done
- [x] Global: layout.tsx (Oswald + Open Sans via next/font, metadata/OG), globals.css tokens, Header (responsive, hamburger, skip link)
- [x] 01-hero (Hero.tsx)
- [x] 02-trust-strip (TrustStrip.tsx)
- [x] 03-mole-or-gopher (MoleOrGopher.tsx)
- [x] 04-shop-categories (ShopCategories.tsx)

## Remaining
- [ ] 05-how-it-works (steps use positional images how-step1..4 in public/images/design/elements/)
- [ ] 06-heritage (dark #111 + steel texture, heritage-steel-macro.png, USDA quote verbatim)
- [ ] 07-testimonials (quote wall #FBFAF6, NO stars, testimonial-photo-hands.png optional)
- [ ] 08-signup-footer (yellow band + black footer, non-wired email form)
- [ ] Custom 404 (src/app/not-found.tsx)
- [ ] Final responsive/a11y pass + verify production deploy

## Notes
- Hard rules: no star ratings; #FFCC00 never text on light; text on yellow = #111; no invented quotes/stats; tunnel-line motif per page_flow.motif_continuity as inline SVG.
- 04 + 05 share ONE continuous #F6F5F0 surface (tunnel line is the only seam marker).
- Git author peter@gomega.ai required for Vercel deploys. Prod: https://cinch-traps.vercel.app
