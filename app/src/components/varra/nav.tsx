const LINKS = [
  { href: "#project", index: "01", label: "Project" },
  { href: "#architecture", index: "02", label: "Architecture" },
  { href: "#residences", index: "03", label: "Residences" },
  { href: "#location", index: "04", label: "Location" },
];

/**
 * Fixed header blended with `mix-blend-mode: difference`, so it reads light on
 * the film and dark on the bone sections without any scroll logic.
 */
export function SiteNav() {
  return (
    <header className="vr-nav">
      <a className="vr-nav__brand" href="#scene-01" aria-label="Varra, back to top">
        <span className="vr-nav__wordmark">Varra</span>
        <span className="vr-nav__sub">Residences</span>
      </a>
      <nav className="vr-nav__links" aria-label="Site">
        {LINKS.map((link) => (
          <a href={link.href} key={link.href}>
            <small>{link.index}</small>
            {link.label}
          </a>
        ))}
      </nav>
      <a className="vr-nav__cta" href="#visit">
        Arrange a visit
      </a>
    </header>
  );
}
