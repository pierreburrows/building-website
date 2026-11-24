import { useEffect, useRef } from "react";

const FILM_SECONDS = 50;

function pad(value: number) {
  return value.toString().padStart(2, "0");
}

/**
 * The small timecode in the corner of the film, driven by the engine's own
 * `--ss-progress` variable. It is a zero-height sticky element placed after
 * the journey inside the same wrapper, so it rides the viewport bottom while
 * the film is on screen and leaves with it: no visibility logic needed. Reads
 * the DOM only inside an effect (SSR safe) and writes text directly, never
 * through React state.
 */
export function JourneyHud() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    const root = document.querySelector<HTMLElement>(".vr-journey");
    const code = node?.querySelector<HTMLElement>("[data-timecode]");
    if (!node || !root || !code) {
      return;
    }

    let frame = 0;
    let lastText = "";

    const update = () => {
      frame = 0;
      const progress = Number.parseFloat(
        getComputedStyle(root).getPropertyValue("--ss-progress"),
      );
      const seconds = Number.isFinite(progress) ? progress * FILM_SECONDS : 0;
      const whole = Math.floor(seconds);
      const frames = Math.floor((seconds - whole) * 24);
      const text = `TC 00:${pad(Math.floor(whole / 60))}:${pad(whole % 60)}:${pad(frames)}`;
      if (text !== lastText) {
        lastText = text;
        code.textContent = text;
      }
    };

    const schedule = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    return () => {
      window.removeEventListener("scroll", schedule);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <div aria-hidden="true" className="vr-hud" ref={ref}>
      <div className="vr-hud__inner">
        <span>Varra / Los Angeles</span>
        <span data-timecode="">TC 00:00:00:00</span>
      </div>
    </div>
  );
}
