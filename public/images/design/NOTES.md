# Extracted Assets

- `assets/hero-background-clean.png` - lossless cleaned full-bleed hero background.
- `assets/hero-background-clean.webp` - web delivery version of the same cleaned background.

The source screenshot does not contain recoverable photo pixels beneath the large left-side text, logo, CTA, and line art, so that area has been covered with a smooth dark matte. It is suitable for rebuilding the same hero layout with HTML layered over it, but it is not a true text-free original photograph.

# Rebuild In Code

- Full-screen dark readability overlay: Use layered CSS `linear-gradient()` / `radial-gradient()` on a `::before` pseudo-element over the background image.
- `CINCH` wordmark and small tagline: Rebuild as HTML text with a tall condensed uppercase font and letter spacing, or recreate as inline SVG text/paths.
- Main headline and supporting copy: Rebuild as semantic HTML text with a condensed distressed display font; use a CSS/SVG noise mask if the worn print texture is needed.
- Circular `SINCE 1909` badge: Recreate as inline SVG with stroked circles, centered text, and an optional SVG noise/distress mask.
- Yellow `SHOP TRAPS` CTA: Use a normal button/anchor with CSS background color, dark text, and an inline arrow icon.
- Secondary `MOLE OR GOPHER? FIND YOUR TRAP` link: Use an anchor with uppercase letter spacing and a CSS `border-bottom`.
- Yellow bottom waveform/marker: Recreate as an inline SVG path with a stroked line and small circle marker.
- Bottom/side vignette: Use CSS gradients rather than an extracted texture or overlay image.
- Man, dog, barn, field, flag, trees, and dirt mounds: Keep baked into the full-bleed photographic background; no separate layer is needed.
# Extracted Assets

- `assets/mole-mound.jpg` - 776x440 photo crop of the mole mound/lawn area, from source box `x:0 y:198 w:776 h:440`.
- `assets/gopher-mound.jpg` - 750x440 photo crop of the gopher mound/lawn area, from source box `x:786 y:198 w:750 h:440`.

No full-bleed background image was extracted because the page background is a simple light surface and the organic photography exists only in the two comparison panels.

# Rebuild With HTML/CSS/SVG

- Page background: use a white/off-white CSS background with a very subtle radial vignette if desired.
- Header text and labels: use live HTML text with a tall condensed bold font such as Bebas Neue, Oswald, or an equivalent local display face.
- Distressed yellow rules around the title: use CSS pseudo-elements or inline SVG strokes, with a rough mask/filter if the worn edge is important.
- Yellow connector path and circular nodes: recreate as an inline SVG path with rounded corners, `stroke: #f5b800`, `fill: none`, and small SVG circles.
- Photo panel rounded corners and center gutter: apply CSS `border-radius` and layout spacing to the extracted rectangular photos.
- Mole/Gopher headings and body copy: use live HTML text, centered beneath each photo.
- Yellow CTA buttons: use CSS background color, fixed padding, bold condensed text, and no image asset.
- Metal trap-size plaque: recreate as a CSS rounded rectangle with layered gray linear gradients or an SVG noise filter for the brushed texture.
- Plaque screw heads: use small inline SVG circles with radial gradients and a short slot line.
- Plaque shadow: use a soft CSS `box-shadow`.
# Extracted Assets

- `assets/heritage-trap-photo-layer.png` - 1536x1024 transparent PNG photo layer; place it over a dark CSS background, aligned full-bleed/right. The left layout area is transparent, the trap photography is feathered in, and the bottom decorative rule/dots are cut out for SVG/CSS replacement.

# Rebuild In HTML/CSS/SVG

- Dark charcoal page background: use `background-color` plus radial/linear gradients for the vignette and warm right-side glow.
- Subtle gritty/grain texture: use a low-opacity CSS pseudo-element with procedural noise, layered gradients, or a generated CSS noise data texture rather than a standalone image.
- Top-left and bottom-right circuit/rule ornaments: recreate as inline SVG paths with gray strokes and yellow ring nodes.
- Round `HANDMADE IN OREGON / CINCH / SINCE 1909` stamp: recreate as inline SVG with text-on-path and a distressed yellow fill/filter.
- Main headline, subhead, body copy, quote, and attribution: rebuild as HTML text using a tall condensed display face plus a narrow sans/serif pairing.
- Yellow divider and quote accent: use CSS borders/pseudo-elements or a tiny inline SVG quote mark.
- Yellow `OUR STORY` button and arrow: use CSS for the rectangle/distress treatment and an inline SVG arrow icon.
- Center aged paper/photo card: rebuild with CSS/SVG using an off-white rectangle, scalloped/irregular edge mask, inner border corner marks, sepia gradients, and pseudo-element scratches/stains.
- Card diagonal lines and small blemish: recreate as low-opacity CSS/SVG strokes and radial-gradient marks.

# Global build notes (orchestrator)
- HARD RULE: no review-star ratings anywhere — hero + trust-strip emblems are RANK badges (laurel/rosette), never stars.
- Real people never generated: heritage founder photo slot receives the client's real Don Sprague archival photo at build time.
- Product cards use REAL client studio SKU photos (trap-product-*.jpg), not frame extractions.
- Tunnel-line motif = ONE inline SVG layer per section, 2px #FFCC00 stroke, traveling per page_flow.motif_continuity.


# Regeneration pass (reviewer feedback, 7/10)
- ALL raster assets regenerated as FULL-SCENE reconstructions: occluded areas AI-filled, edges extended beyond the ref crop so the build crops/resizes freely (object-fit: cover).
- how-step1-trap + how-step-trap-trigger reclassified CODE — vector-style line art, build as inline SVG.
- how-step-trap-set: the numbered square is NOT in the asset — number squares are an SVG/HTML layer on all step tiles.
- 05-how-it-works step imagery is ILLUSTRATION (warm painterly, per reviewer): how-step-trap-set.png + how-step-trap-reset.png regenerated in the ref's illustration style. Medium must match the comp — never substitute photos where the design shows illustration.
- CORRECTION: ALL FOUR how-it-works step visuals are painterly ILLUSTRATIONS (how-step1-mound, how-step-trap-set, how-step3-trap, how-step-trap-reset) — the earlier line-art/SVG call on steps 1+3 was wrong. Only the number squares, dashed connector lines, captions, and CTA are code.
