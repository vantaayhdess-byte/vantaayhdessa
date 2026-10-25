function Links() {
  return (
    <>
      <a href="/">Etusivu</a>
      <a href="/tietoa-meista">Meistä</a>
      <a href="/toiminta">Toiminta</a>
      <a href="/toimintakalenteri">Toimintakalenteri</a>
      <a href="/kuvagalleria">Kuvagalleria</a>
      <a href="/yhteystiedot">Yhteystiedot</a>
    </>
  );
}
export function Header() {
  return (
    <>
      <div className="topbar">
        <span>Tervetuloa mukaan — Vantaa yhdessä ry</span>
        <div>
          <a href="tel:+358465870831">Puh. 046 587 0831</a>
          <a href="mailto:info@vantaayhdessary.fi">info@vantaayhdessary.fi</a>
        </div>
      </div>
      <header>
        <a className="brand" href="/">
          <img
            className="brand-logo"
            src="/photos/logo.webp"
            alt="Vantaa yhdessä ry"
          />
          <span>
            Vantaa yhdessä<small>YHTEISÖLLISYYTTÄ EDISTÄMÄSSÄ</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Päävalikko">
          <Links />
        </nav>
        <details className="mobile-menu">
          <summary>
            Valikko <span aria-hidden="true">☰</span>
          </summary>
          <nav aria-label="Mobiilivalikko">
            <Links />
          </nav>
        </details>
      </header>
    </>
  );
}
export function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <a className="brand" href="/">
          <img
            className="brand-logo"
            src="/photos/logo.webp"
            alt="Vantaa yhdessä ry"
          />
          <span>Vantaa yhdessä ry</span>
        </a>
        <p>
          Hyvinvoivat perheet.
          <br />
          Yhteisöllinen Vantaa .
        </p>
        <a href="/yhteystiedot">Rakennetaan yhdessä. ↗</a>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Vantaa yhdessä ry</span>
        <a
          href="https://www.facebook.com/somfin.ry"
          target="_blank"
          rel="noreferrer"
        >
          Facebook ↗
        </a>
        <span>Jönsaksentie 6, 01600 Vantaa</span>
      </div>
    </footer>
  );
}
export const services = [
  {
    n: "01",
    title: "Lapset, nuoret ja perheet",
    text: "Harrastuksia, yhteisiä hetkiä ja turvallisia aikuisia. Tilaa kasvaa ja löytää oma yhteisö.",
    image: "children",
    alt: "Lapset viettävät yhteistä vapaa-aikaa olohuoneessa.",
  },
  {
    n: "02",
    title: "Liikunta ja harrastukset",
    text: "Matalan kynnyksen liikuntaa lapsille, nuorille ja aikuisille. Yhdessä tekemisen iloa.",
    image: "sports",
    alt: "Lapset leikkivät yhdessä liikuntasalissa.",
  },
  {
    n: "03",
    title: "Tukea ja kohtaamisia",
    text: "Monikielistä neuvontaa, apua arkeen ja kohtaamispaikka, johon on helppo tulla.",
    image: "support",
    alt: "Osallistujat kohtaavat yhteisen pöydän ääressä.",
  },
];
