# Cinch Traps Homepage — Section Status

Build order per public/design/section_manifest.json. Manifest wins for text, refs win for layout, page_flow wins for backgrounds/motif.

## Done
- [x] Global: layout.tsx (Oswald + Open Sans via next/font, metadata/OG), globals.css tokens, Header (responsive, hamburger, skip link)
- [x] 01-hero (Hero.tsx)
- [x] 02-trust-strip (TrustStrip.tsx)
- [x] 03-mole-or-gopher (MoleOrGopher.tsx)
- [x] 04-shop-categories (ShopCategories.tsx)
- [x] 05-how-it-works (HowItWorks.tsx — positional step images, HTML number squares)
- [x] 06-heritage (Heritage.tsx — dark anchor, steel macro, USDA quote verbatim)
- [x] 07-testimonials (Testimonials.tsx — quote wall, NO stars, verbatim quotes)
- [x] 08-signup-footer (SignupFooter.tsx — yellow band, non-wired form, black footer)
- [x] Custom 404 (src/app/not-found.tsx)

## Remaining
- [ ] Optional: fresh-session 375px mobile screenshot pass (desktop 1440px visual QA passed; DOM/content/images/alt verified live; responsive classes in place)

## Deploy verification (done)
- Production LIVE at https://cinch-traps.vercel.app (200): all 8 sections + custom 404 rendering, no broken images, every img has alt.
- GOTCHA: the bare `cinch-traps.vercel.app` alias was left pointing at a stale deployment and 404'd even though new git deploys were READY. Fix: POST /v2/deployments/{latest_dpl}/aliases {"alias":"cinch-traps.vercel.app"} (teamId=team_RogwTw2cEfQuRq0okTLYD018).

## Notes
- Hard rules: no star ratings; #FFCC00 never text on light; text on yellow = #111; no invented quotes/stats; tunnel-line motif per page_flow.motif_continuity as inline SVG (terminates at signup input, pointed end).
- 04 + 05 share ONE continuous #F6F5F0 surface (tunnel line is the only seam marker).
- Git author peter@gomega.ai required for Vercel deploys. Prod: https://cinch-traps.vercel.app
