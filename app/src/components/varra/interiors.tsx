import { Reveal } from "./reveal";

const MATERIALS = [
  { name: "Oak", note: "Rift-sawn white oak on walls and floors, oiled, never stained." },
  { name: "Travertine", note: "Honed Roman travertine for kitchens, baths and the terrace floors." },
  { name: "Bronze", note: "Bronze-anodised frames from floor to ceiling, sliding fully away." },
  { name: "Light", note: "Indirect cove lighting, warm, dimmed to the hour of the day." },
];

export function Interiors() {
  return (
    <section className="vr-section vr-interiors" id="interiors">
      <Reveal className="vr-interiors__head">
        <h2 className="vr-display">
          Light oak, warm stone, <em>soft light.</em>
        </h2>
      </Reveal>

      <Reveal className="vr-interiors__plate">
        <figure>
          <img
            alt="Kitchen and dining room in light oak and travertine with a blue-hour city view"
            decoding="async"
            loading="lazy"
            src="/assets/kit/kitchen.jpg"
          />
        </figure>
      </Reveal>

      <div className="vr-interiors__row">
        <Reveal className="vr-interiors__second">
          <figure>
            <img
              alt="Living room with a cream sofa and the terrace olive tree beyond open glass doors"
              decoding="async"
              loading="lazy"
              src="/assets/kit/living.jpg"
            />
          </figure>
        </Reveal>
        <Reveal className="vr-materials" delay={100}>
          <p className="vr-lede">
            Four materials, used everywhere, so that the eye stops looking for
            the next thing and rests on the view.
          </p>
          <dl>
            {MATERIALS.map((material) => (
              <div key={material.name}>
                <dt>{material.name}</dt>
                <dd>{material.note}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
