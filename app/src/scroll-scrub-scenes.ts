/**
 * Scene data for the scroll-scrub journey.
 *
 * Multi-leg, Architecture A: five seam-locked legs in journey order. Every
 * `poster` is the exact first frame of the encoded clip beside it, generated
 * from that clip after encoding.
 *
 * This array is a module constant on purpose: changing its identity rebuilds
 * the media controller.
 */
import { createElement, Fragment } from "react";

import type {
  ScrollScrubScene,
  ScrollScrubTheme,
} from "@/components/scroll-scrub/scroll-scrub";
import { ChapterItalic, ChapterVisitCta } from "@/components/varra/chapter-bits";

/** Brand tokens for the journey layer (see design-brief.md). */
export const scrollScrubTheme: ScrollScrubTheme = {
  accent: "#D8C7A3",
  background: "#0F0E0C",
  ink: "#F4EFE6",
  muted: "#CFC7B9",
};

export const scrollScrubScenes: ScrollScrubScene[] = [
  {
    body: "Private residences in Los Angeles",
    clip: "/assets/world/scene-01.mp4",
    id: "scene-01",
    label: "01",
    linger: 0.15,
    mobileClip: "/assets/world/scene-01-mobile.mp4",
    mobilePoster: "/assets/world/scene-01-mobile-poster.jpg",
    poster: "/assets/world/scene-01-poster.jpg",
    scroll: 1.8,
    title: "VARRA",
  },
  {
    actions: createElement(ChapterItalic, { text: "a rhythm." }),
    body: "Pale travertine outside, light oak within. The tower rises on a single repeated beat of stone.",
    clip: "/assets/world/scene-02.mp4",
    id: "scene-02",
    kicker: "01 / The form",
    label: "02",
    mobileClip: "/assets/world/scene-02-mobile.mp4",
    mobilePoster: "/assets/world/scene-02-mobile-poster.jpg",
    poster: "/assets/world/scene-02-poster.jpg",
    scroll: 1.6,
    tags: ["19 floors", "36 homes"],
    title: "From the ground,",
  },
  {
    actions: createElement(ChapterItalic, { text: "of stone." }),
    body: "Deep fins of honed travertine hold the glass back from the sun and give every floor its own band of shade.",
    clip: "/assets/world/scene-03.mp4",
    id: "scene-03",
    kicker: "02 / The lattice",
    label: "03",
    mobileClip: "/assets/world/scene-03-mobile.mp4",
    mobilePoster: "/assets/world/scene-03-mobile-poster.jpg",
    poster: "/assets/world/scene-03-poster.jpg",
    scroll: 1.6,
    title: "A lattice",
  },
  {
    actions: createElement(ChapterItalic, { text: "carved in." }),
    body: "Every residence opens onto a corner terrace cut into the body of the building: deep, planted and sheltered above the city.",
    clip: "/assets/world/scene-04.mp4",
    id: "scene-04",
    kicker: "03 / The terrace",
    label: "04",
    mobileClip: "/assets/world/scene-04-mobile.mp4",
    mobilePoster: "/assets/world/scene-04-mobile-poster.jpg",
    poster: "/assets/world/scene-04-poster.jpg",
    scroll: 1.6,
    title: "A terrace,",
  },
  {
    actions: createElement(
      Fragment,
      null,
      createElement(ChapterItalic, { text: "held at a distance." }),
      createElement(ChapterVisitCta),
    ),
    body: "Oak, limestone and soft light. The view arrives. The noise does not.",
    clip: "/assets/world/scene-05.mp4",
    id: "scene-05",
    kicker: "04 / The interior",
    label: "05",
    linger: 0.2,
    mobileClip: "/assets/world/scene-05-mobile.mp4",
    mobilePoster: "/assets/world/scene-05-mobile-poster.jpg",
    poster: "/assets/world/scene-05-poster.jpg",
    scroll: 1.8,
    title: "The city,",
  },
];
