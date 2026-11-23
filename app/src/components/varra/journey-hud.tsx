import { useEffect, useRef } from "react";

const FILM_SECONDS = 50;

function pad(value: number) {
  return value.toString().padStart(2, "0");
}

/**
 * The small timecode in the corner of the film, driven by the engine's own
 * `--ss-progress` variable. Reads the DOM only inside an effect (SSR safe) and
 * writes text directly, never through React state.
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
      const rect = root.getBoundingClientRect();
      const visible = rect.bottom > window.innerHeight * 0.5 && rect.top < window.innerHeight;
      node.dataset.visible = visible ? "true" : "false";
      if (!visible) {
        return;
      }
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
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <div aria-hidden="true" className="vr-hud" data-visible="true" ref={ref}>
      <span>Varra / Los Angeles</span>
      <span data-timecode="">TC 00:00:00:00</span>
    </div>
  );
}
