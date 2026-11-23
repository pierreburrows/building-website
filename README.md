# Varra Residences

A scroll-driven launch site for a fictional residential tower in Century City,
Los Angeles. The visitor's scroll plays a five-leg, 4K-generated film (boulevard,
facade, lattice, terrace, interior) while the chapters read over it; editorial
sections follow for the project, architecture, residences, interiors, location
and private viewings.

The site is built on the Higgsfield website builder's `scroll-scrub` template
(React 19 + TanStack Start, server-rendered in a single Cloudflare Worker) and
every image and film leg was generated with Higgsfield (GPT Image 2.6 for the
stills, Kling 3.0 in 4K for the film).

## Layout

- `app/design-brief.md` - the brief: concept, palette, type, journey, sections
- `app/src/scroll-scrub-scenes.ts` - the film legs and chapter copy
- `app/src/routes/index.tsx` - the page
- `app/src/components/varra/` - nav, HUD, sections, booking form
- `app/src/varra.css` - the site's token layer and styles
- `app/src/lib/api/viewing.functions.ts` - the viewing-request server function (D1)
- `app/public/assets/world/` - encoded film legs and exact first-frame posters
- `app/public/assets/kit/` - the image kit
- `app/public/assets/brand/` - favicon and social card

## Running locally

```bash
cd app
bun install
bun run dev
```

`bun run typecheck` runs the route generator and `tsc`. Deploys are built by the
Higgsfield platform from this repository.

All imagery is computer generated. Varra is a design study, not an offering.
