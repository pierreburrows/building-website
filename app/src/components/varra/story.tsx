import { useEffect, useRef } from "react";

const STORY =
  "Varra is a new residential tower in Century City, Los Angeles: 36 private homes over 19 floors, rising above the palms of the boulevard. A lattice of pale travertine holds the bronze glass back from the sun and carries the terraces, so every home has a sheltered outdoor room of its own, carved into the corner and facing the city.";

const WORDS = STORY.split(" ");

const STATS = [
  { figure: "36", label: "Private homes" },
  { figure: "19", label: "Floors" },
  { figure: "4", label: "Corner terraces per floor" },
  { figure: "2027", label: "First residents" },
];

/**
 * The project statement. Words start in muted ink (fully visible) and light up
 * as the paragraph travels through the viewport. Reduced motion lights all of
 * them at once.
 */
export function Story() {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const paragraph = ref.current;
    if (!paragraph) {
      return;
    }
    const words = [...paragraph.querySelectorAll<HTMLElement>(".vr-word")];
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      for (const word of words) {
        word.classList.add("is-lit");
      }
      return;
    }

    let frame = 0;
    let lit = 0;

    const update = () => {
      frame = 0;
      const rect = paragraph.getBoundingClientRect();
      const viewport = window.innerHeight;
      const start = viewport * 0.9;
      const end = viewport * 0.35;
      const travel = rect.height + (start - end);
      const progress = Math.min(1, Math.max(0, (start - rect.top) / travel));
      const target = Math.round(progress * words.length);
      if (target === lit) {
        return;
      }
      if (target > lit) {
        for (let index = lit; index < target; index += 1) {
          words[index].classList.add("is-lit");
        }
      } else {
        for (let index = target; index < lit; index += 1) {
          words[index].classList.remove("is-lit");
        }
      }
      lit = target;
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
    <section className="vr-section vr-story" id="project">
      <p className="vr-label">01 / The project</p>
      <p className="vr-story__text" ref={ref}>
        {WORDS.map((word, index) => (
          <span className="vr-word" key={`${word}-${index}`}>
            {word}{" "}
          </span>
        ))}
      </p>
      <dl className="vr-stats">
        {STATS.map((stat) => (
          <div className="vr-stat" key={stat.label}>
            <dt>{stat.label}</dt>
            <dd>{stat.figure}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
