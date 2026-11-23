/**
 * Small nodes slotted into the scroll-scrub chapters through `actions`.
 * The journey stylesheet turns `.scroll-scrub__actions` into `display: contents`
 * so these become flex items of the chapter copy and can be ordered around the
 * headline (italic flourish directly under the title, CTA after the body).
 */
export function ChapterItalic({ text }: { text: string }) {
  return <em className="vr-chapter-italic">{text}</em>;
}

export function ChapterVisitCta() {
  return (
    <a className="vr-cta-chapter" href="#visit">
      <span>Arrange a private visit</span>
      <i aria-hidden="true" />
    </a>
  );
}
