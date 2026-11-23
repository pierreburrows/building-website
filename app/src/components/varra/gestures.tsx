import { Reveal } from "./reveal";

const MARQUEE = [
  "Pale travertine",
  "Bronze glass",
  "Carved terraces",
  "Olive gardens",
  "Century City",
];

const GESTURES = [
  {
    alt: "Close view of the travertine lattice casting shadows across bronze glass",
    body: "Fins of honed travertine, set one storey apart, shade the glass and give the tower its rhythm. From the street it reads as stone. From inside, as light.",
    image: "/assets/kit/lattice.jpg",
    title: "The lattice",
  },
  {
    alt: "A deep corner terrace with an olive tree, open to the living room behind",
    body: "A room without a ceiling of its own. Each terrace is cut into the corner of the plan, planted with an olive tree and sheltered on two sides.",
    image: "/assets/kit/terrace.jpg",
    title: "The terrace",
  },
  {
    alt: "The travertine entrance portal at dusk with bronze doors standing open",
    body: "A double-height portal of travertine, bronze doors and a forecourt of olive trees. Home begins at the street.",
    image: "/assets/kit/arrival.jpg",
    title: "The arrival",
  },
];

export function Gestures() {
  const strip = [...MARQUEE, ...MARQUEE];

  return (
    <section className="vr-gestures" id="architecture">
      <div aria-hidden="true" className="vr-marquee">
        <div className="vr-marquee__track">
          {strip.map((item, index) => (
            <span key={`${item}-${index}`}>
              {item}
              <b>✦</b>
            </span>
          ))}
        </div>
      </div>

      <div className="vr-section vr-gestures__inner">
        <Reveal className="vr-gestures__head">
          <h2 className="vr-display">
            Three gestures, <em>one building.</em>
          </h2>
          <p className="vr-lede">
            The architecture is three decisions, repeated 19 times. Everything
            else follows from them.
          </p>
          <figure className="vr-gestures__plate">
            <img
              alt="The tower seen across the palm-lined boulevard at golden hour"
              decoding="async"
              loading="lazy"
              src="/assets/kit/tower.jpg"
            />
          </figure>
        </Reveal>

        <ol className="vr-gestures__list">
          {GESTURES.map((gesture, index) => (
            <li className="vr-gesture" data-flip={index % 2 === 1 ? "true" : "false"} key={gesture.title}>
              <Reveal className="vr-gesture__media">
                <figure>
                  <img alt={gesture.alt} decoding="async" loading="lazy" src={gesture.image} />
                </figure>
              </Reveal>
              <Reveal className="vr-gesture__text" delay={120}>
                <span className="vr-gesture__num">0{index + 1}</span>
                <h3>{gesture.title}</h3>
                <p>{gesture.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
