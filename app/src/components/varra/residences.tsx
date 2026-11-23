import { useState } from "react";

import { Reveal } from "./reveal";

const RESIDENCES = [
  {
    alt: "Garden residence bedroom opening onto a walled garden with olive trees",
    id: "garden",
    image: "/assets/kit/garden.jpg",
    meta: ["Levels 2 to 5", "3 bedrooms", "From 2,650 sq ft"],
    name: "Garden residence",
  },
  {
    alt: "Corner residence living room with two glass walls meeting at the terrace",
    id: "corner",
    image: "/assets/kit/corner.jpg",
    meta: ["Levels 6 to 17", "3 to 4 bedrooms", "From 3,100 sq ft"],
    name: "Corner residence",
  },
  {
    alt: "Double-height penthouse living room with a roof terrace and pool",
    id: "penthouse",
    image: "/assets/kit/penthouse.jpg",
    meta: ["Levels 18 and 19", "4 bedrooms", "5,400 sq ft with roof terrace"],
    name: "Penthouse",
  },
];

/**
 * Index list with a sticky plate. Hover, focus or tap a row to swap the image.
 * The first row is active on load so the plate is never empty.
 */
export function Residences() {
  const [active, setActive] = useState(0);

  return (
    <section className="vr-section vr-residences" id="residences">
      <Reveal className="vr-residences__head">
        <p className="vr-label">02 / Residences</p>
        <h2 className="vr-display">
          Every plan begins <em>with the terrace.</em>
        </h2>
        <p className="vr-lede">
          Thirty-six homes, three plans. Each one is drawn outward from its
          terrace: the living room faces it, the bedrooms borrow its light, and
          nothing in the apartment is more than two rooms from the open air.
        </p>
      </Reveal>

      <div className="vr-residences__grid">
        <ul className="vr-res-list">
          {RESIDENCES.map((residence, index) => (
            <li key={residence.id}>
              <button
                aria-current={active === index ? "true" : undefined}
                className="vr-res"
                onClick={() => setActive(index)}
                onFocus={() => setActive(index)}
                onMouseEnter={() => setActive(index)}
                type="button"
              >
                <span className="vr-res__index">0{index + 1}</span>
                <span className="vr-res__name">{residence.name}</span>
                <span className="vr-res__meta">
                  {residence.meta.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </span>
              </button>
            </li>
          ))}
        </ul>

        <div className="vr-res__plate" aria-live="polite">
          {RESIDENCES.map((residence, index) => (
            <img
              alt={active === index ? residence.alt : ""}
              className={active === index ? "is-active" : undefined}
              decoding="async"
              key={residence.id}
              loading="lazy"
              src={residence.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
