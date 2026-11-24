import { createFileRoute } from "@tanstack/react-router";

import { ScrollScrub } from "@/components/scroll-scrub/scroll-scrub";
import { SiteFooter } from "@/components/varra/footer";
import { Gestures } from "@/components/varra/gestures";
import { Interiors } from "@/components/varra/interiors";
import { JourneyHud } from "@/components/varra/journey-hud";
import { Location } from "@/components/varra/location";
import { SiteNav } from "@/components/varra/nav";
import { Residences } from "@/components/varra/residences";
import { Story } from "@/components/varra/story";
import { Viewing } from "@/components/varra/viewing";
import { scrollScrubScenes, scrollScrubTheme } from "@/scroll-scrub-scenes";

import "@/varra.css";

const FONTS_HREF =
  "https://fonts.googleapis.com/css2?family=Archivo:ital,wdth,wght@0,100,400;0,100,500;0,125,600..900&family=Instrument+Serif:ital@1&family=JetBrains+Mono:wght@400;500&display=swap";

export const Route = createFileRoute("/")({
  // Title, description, favicon and social card come from the root route
  // (app-meta.json). This page only adds its web fonts.
  head: () => ({
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: FONTS_HREF },
    ],
  }),
  component: Index,
});

// The page IS the journey: the scrub controller owns media time, every chapter
// stays server-rendered, and the editorial sections follow the film.
function Index() {
  return (
    <main className="vr">
      <SiteNav />
      <div className="vr-journey-wrap">
        <ScrollScrub
          className="vr-journey"
          scenes={scrollScrubScenes}
          theme={scrollScrubTheme}
        />
        <JourneyHud />
      </div>
      <Story />
      <Gestures />
      <Residences />
      <Interiors />
      <Location />
      <Viewing />
      <SiteFooter />
    </main>
  );
}
