# Design Polish Pass — Cinch Traps Homepage

Date: 2026-07-11. Scope: (A) tunnel-line motif continuity across all section
seams, (B) per-section text/image composition harmony vs `public/design/refs/`.
No copy changes, no approved assets touched, no structural rework.

## JOB A — Tunnel-line motif continuity

Before: the yellow #FFCC00 tunnel line was isolated per-section fragments —
a 256px headline underline in ShopCategories, a 3px-tall strip at the bottom of
TrustStrip, paths that started/ended at arbitrary x-positions (e.g. hero exited
at x=0/1440 while the next section entered elsewhere). It read frame-by-frame.

After: one line traveling down the page. Every section's SVG layer is
absolute/full-bleed (`inset-0`, `preserveAspectRatio="none"`,
`pointer-events-none`, `aria-hidden`) and its entry/exit x-coordinates match
the adjacent section exactly at y=0 / y=100% (viewBox x on a 1440 scale):

| Seam | Exit x (section above) | Entry x (section below) | Notes |
|---|---|---|---|
| 01 Hero → 02 TrustStrip | 58 | 58 | Hero path re-terminated at x=58 bottom edge (was x=0 corner); TrustStrip gained a full-height layer entering top-left at 58, running as the tick baseline |
| 02 TrustStrip → 03 MoleOrGopher | 1382 | 1382 | Strip exits bottom-right at 1382; 03 entry moved from 1440 (corner) to 1382 |
| 03 → 04 ShopCategories | 720 | 720 | 03 already exited bottom-center at 720; 04 replaced its detached 256px inline underline with a full-section path entering at 720, dipping to underline the headline (marker dot kept), then running down the left gutter |
| 04 → 05 HowItWorks | 720 | 720 | Crosses the shared #F6F5F0 band unbroken — the line is the only seam marker, per manifest |
| 05 → 06 Heritage | 115 | 115 | 05's 32px-tall top-strip SVG became a full-section path exiting bottom-left at 115; 06 entry moved from x=0 to 115. Line turns steel-silver (#BBC1C4) in 06 per manifest |
| 06 → 07 Testimonials | 1325 | 1325 | 06 exit re-aimed to reach y=800 at x=1325 (was drifting off at y=780); 07 entry moved from 1440/y=30 to 1325/y=0 |
| 07 → 08 SignupFooter | 720 | 720 | 08's path now enters top-center at 720 and terminates at the signup input with a filled pointed arrowhead (trap set — line ends). Line is #111 on the yellow band |

Verified by full-page screenshot (1440px): every seam crop shows the dashes
continuing across the boundary with no lateral jump.

## JOB B — Composition harmony vs refs

### 01 Hero (ref 01-hero.png)
- Ref: headline block left over the darker/emptier field; subject (walker+dog)
  right of center. Build had `object-center` + only a vertical scrim — the
  subject drifted toward center and the text zone wasn't reliably dark.
- Fix: `object-[62%_center]` on the field plate (pushes subject right of
  center) + added a left-side horizontal scrim
  (`rgba(17,17,17,.55) → transparent at 62%`) so the headline owns clean dark
  ground and the subject stays clear of the text. Vertical bottom-fade scrim
  unchanged.

### 06 Heritage (ref 06-heritage.png)
- Ref: dark editorial split — text left on quiet dark, steel trap macro
  clearly right-anchored. Build stretched the image across `lg:w-3/5` with
  `object-center` at 70% opacity under a heavy wash, so the trap read as a
  faint centered texture bleeding behind the text column.
- Fix: image container narrowed to `lg:w-[55%]`, `object-[70%_center]`
  (right-anchors the trap coil), opacity 90% on desktop, and the gradient
  rebalanced (`#111 0% → .72 at 35% → .18 at 75% → .05 at 100%`) so the trap
  reads as real photography on the right while the left stays clean dark for
  the text. Silver tunnel line opacity 0.5 → 0.7 for visibility against steel.

### 07 Testimonials (ref 07-testimonials.png)
- Ref places the hands-holding-trap photo as a card INSIDE the quote wall
  (lower-left area). Build had no photo at all — quotes only.
- Fix: inserted `testimonial-photo-hands.png` as a photo card in the grid
  after the second quote (renders lower-left in the 2-col wall), object-cover,
  same shadow treatment as quote cards. No quotes altered.

### 03 Mole-or-Gopher (ref 03-mole-or-gopher.png)
- Checked: mound photos fill their cards edge-to-edge, subjects centered,
  mole round-cone left / gopher fan-mound right, matching the ref. No change
  needed beyond the motif entry-x fix.

## Hard-rule compliance
- No star ratings anywhere (unchanged).
- #FFCC00 used only as decorative line/accents, never as text on light bg.
- `public/images/design/` and `public/design/` untouched.
- All copy verbatim from the manifest.
- Builds green (`npm run build`) before each push.
