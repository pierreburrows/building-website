export function SiteFooter() {
  return (
    <footer className="vr-footer">
      <div className="vr-footer__top">
        <a className="vr-footer__wordmark" href="#scene-01">
          Varra
        </a>
        <p className="vr-footer__tag">Private residences in Los Angeles</p>
      </div>
      <div className="vr-footer__cols">
        <div>
          <h3>Project</h3>
          <a href="#project">The project</a>
          <a href="#architecture">Architecture</a>
          <a href="#residences">Residences</a>
          <a href="#location">Location</a>
        </div>
        <div>
          <h3>Visit</h3>
          <a href="#visit">Arrange a private visit</a>
          <span>Avenue of the Stars, Century City</span>
          <span>Open daily, 10 to 6</span>
        </div>
        <div>
          <h3>Contact</h3>
          <a href="mailto:hello@varra-residences.la">hello@varra-residences.la</a>
          <span>+1 310 555 0119</span>
        </div>
      </div>
      <div className="vr-footer__legal">
        <span>© 2026 Varra Residences</span>
        <span>
          A design study. All imagery is computer generated; plans, figures and
          availability are illustrative.
        </span>
      </div>
    </footer>
  );
}
