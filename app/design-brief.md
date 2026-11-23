# Design brief: VARRA, private residences in Los Angeles

- **Design read**: a buyer-facing launch site for a single luxury residential tower. The register is quiet confidence: cinematic footage, large uppercase display type, one italic serif flourish per headline, and very little else.
- **Concept spine**: "the approach". The whole page is one unbroken walk toward, up, into and through the building. The scrolled film is the walk; the sections afterwards are what you learned on the way.
- **Delivery tier**: cinema. The animated website is the Tier-1 mechanic; everything after it is editorial with transform-only micro-motion.

Animation mode: animated-website

## Journey

- **Journey shape**: multi-leg (5 legs, Architecture A, continuous forward flight). Justification: the story moves through genuinely different places (boulevard, facade, lattice, terrace, interior) and each leg starts from the previous leg's actual last frame.
- **Journey** (one chapter per leg, HTML read over the footage):
  1. The boulevard. Headline "VARRA", body "Private residences in Los Angeles". The hero wordmark over palms and the distant tower.
  2. The form. "FROM THE GROUND, a rhythm." Pale travertine outside, light oak within. Tags: 19 floors, 36 homes.
  3. The lattice. "A LATTICE of stone." Deep fins of honed travertine hold the glass back from the sun.
  4. The terrace. "A TERRACE, carved in." Every residence opens onto a corner terrace cut into the body of the building.
  5. The interior. "THE CITY, held at a distance." Oak, limestone and soft light. CTA: Arrange a private visit.
- **World grammar**: one 19-storey tower in Century City, Los Angeles; a lattice of pale travertine fins and horizontal stone bands over bronze-tinted glass; deep planted corner terraces with olive trees. Camera is a slow, steady forward dolly with a gentle rise, never a cut. Light is late golden hour outside turning to blue hour through the glass. Exposure locked, no on-screen text.
- **Mobile framing**: the tower and every focal point stay in the centre-safe band; mobile encodes are capped at 720 px tall and use the same posters' centre crop.
- **Delivery budget**: at most 32 MiB for all desktop clips, 16 MiB for all mobile clips.

## Locked palette

- Ink `#0F0E0C` (page ground), Bone `#F1ECE3` (light sections and type on dark), Stone `#D8C7A3` (accent: progress bar, kickers, rules), Dusk `#2B4664` (the location chapter only), muted ink `#B9B2A6` on dark and `#6B655C` on light.
- Defence: the palette is the building's own materials (travertine, bone render, bronze shadows) plus the dusk sky of the aerial shot. No orange or amber accent anywhere; the warmth lives in the footage, not the chrome.

## Locked type

- Display: Archivo, expanded width (wdth 125), weights 700 to 900, uppercase, tight leading.
- Flourish: Instrument Serif italic, one phrase per headline, never a whole sentence.
- Labels: JetBrains Mono, uppercase, wide tracking, for kickers, timecodes, meta rows and the footer.
- Body: Archivo at normal width, weight 400.

## Section plan

1. Journey (scroll-scrub film, five chapters) - pinned film family
2. The project (dark): scroll-lit paragraph plus a four-figure stat strip - typographic statement family
3. Architecture (bone): marquee, "THREE GESTURES, one building.", three alternating image-and-text rows - alternating media rows family
4. Residences (dark): "EVERY PLAN BEGINS with the terrace.", hover list with a sticky image panel - index list family
5. Interiors (warm dark): "LIGHT OAK, WARM STONE, soft light.", one wide image and a materials grid - single plate family
6. Location (dusk blue): "BETWEEN THE HILLS, and the sea.", aerial plate and a distances table - split plate family
7. Visit (dark): "ARRANGE A private visit.", the form - form family
8. Footer - footer family

Eyebrow budget: ceil(8 / 3) = 3. Eyebrows used: project, residences, visit.

## Asset plan

- Film: five 4K legs generated with Kling 3.0 from the approved boulevard still, each later leg from the previous leg's real last frame; encoded to desktop 1080p and mobile 720p with first-frame posters.
- Stills: tower exterior, lattice detail, terrace, arrival, living room, kitchen, garden residence, corner residence, penthouse, aerial. All generated, all referenced.
- Brand: SVG monogram favicon, OG card from the sunset cover scene, marketplace cover from the same scene.

## CTA inventory

- Nav "Arrange a visit": outlined pill in the blended header.
- Chapter "Arrange a private visit": filled bone pill with an arrow glyph, inside the final film chapter.
- Form "Send request": full-width filled bar that reports sending and done states.
- Residence rows: the rows themselves are the interaction (hover or focus swaps the plate).
