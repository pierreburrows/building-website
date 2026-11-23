import { Reveal } from "./reveal";

const DISTANCES = [
  { minutes: "6", place: "Beverly Hills" },
  { minutes: "10", place: "Sunset Boulevard" },
  { minutes: "18", place: "Santa Monica beach" },
  { minutes: "22", place: "Getty Center" },
  { minutes: "30", place: "LAX" },
];

export function Location() {
  return (
    <section className="vr-section vr-location" id="location">
      <div className="vr-location__grid">
        <Reveal className="vr-location__text">
          <h2 className="vr-display">
            Between the hills, <em>and the sea.</em>
          </h2>
          <p className="vr-lede">
            Century City sits on the quiet side of the Westside: hills to the
            north, the ocean to the west, and the boulevard running between
            them. Varra stands at the point where the towers end and the
            gardens begin.
          </p>
          <dl className="vr-distances">
            {DISTANCES.map((row) => (
              <div key={row.place}>
                <dt>{row.place}</dt>
                <dd>
                  {row.minutes}
                  <span> min</span>
                </dd>
              </div>
            ))}
          </dl>
          <p className="vr-location__address">
            Avenue of the Stars, Century City, Los Angeles
          </p>
        </Reveal>
        <Reveal className="vr-location__plate" delay={120}>
          <figure>
            <img
              alt="Aerial view of the tower at dusk between the Santa Monica Mountains and the Pacific"
              decoding="async"
              loading="lazy"
              src="/assets/kit/aerial.jpg"
            />
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
