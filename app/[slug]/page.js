import { notFound } from "next/navigation";
import { Header, Footer } from "../components";
const pages = {
  "tietoa-meista": {
    tag: "MEIDÄN YHTEISÖMME",
    title: "Vantaa kuuluu meille kaikille.",
    intro:
      "Hyvinvoivat perheet ja yhteisöllinen Vantaa — sitä varten olemme olemassa.",
    sections: [
      [
        "Tietoa meistä",
        "Vantaa yhdessä ry on vuoden 2018 alussa perustettu poliittisesti ja uskonnollisesti sitoutumaton yhdistys. Vantaan kaupunki on Suomen monikulttuurisin kunta ja haluamme järjestönä omalta osaltamme edistää kasvavan ja monikulttuuristuvan kaupungin kuntalaisten hyvinvointia ja osallisuutta. ",
      ],
      [        "Missio",
        "Missiomme on edistää yhteisöllisyyttä ja yhdenvertaisuutta, jossa jokaisella on mahdollisuus osallistua, vaikuttaa ja tulla hyväksytyksi omana itsenään.",
      ],
      [        "Arvot",
        "Yhteisölähtöisyys ja yhdenvertaisuus ohjaavat kaikkea toimintaamme.",
      ],
      [
        "Visio",
        "Visiomme on hyvinvoivat perheet ja nuoret sekä yhteisöllinen Vantaa, jossa jokainen tuntee kuuluvansa yhteisöön ja tulee kohdatuksi yhdenvertaisesti.",
      ],
    ],
  },
  toiminta: {
    tag: "YHDESSÄ TEKEMISEN ILO",
    title: "Löydä oma tapasi osallistua.",
    intro:
      "Kohtaamisia, liikuntaa ja tukea arkeen. Toimintamme on tarkoitettu eri-ikäisille vantaalaisille.",
    sections: [
      [
        "Toimintakeskus",
        "Toimintakeskus sijaitsee Länsi-Vantaalla Myyräncolon kulttuuritalon toisessa kerroksessa. Se on kaikenikäisille avoin kohtaamispaikka, jonka tavoitteena on edistää vieraskielisten kuntalaisten hyvinvointia ja osallisuutta. Toimintakeskus tarjoaa monipuolista ja helposti lähestyttävää toimintaa. Se on paikka, jossa voi viettää vapaa-aikaa, tavata uusia ihmisiä ja osallistua yhteiseen tekemiseen. Keskuksessa järjestetään tapahtumia ja työpajoja. Lisäksi tarjolla on monikielistä ohjausta ja neuvontaa maahanmuuttajille. Toiminnan tavoitteena on vahvistaa yhteisöllisyyttä, lisätä ihmisten välistä vuorovaikutusta ja edistää hyvää yhteiseloa.",
      ],
      [
        "Jalkautuva nuorisotyö ja kerhotoiminta",
        "Nuorisotyöllä ja kerhotoiminnalla ehkäistään syrjäytymistä ja häiriökäyttäytymistä, vahvistetaan lasten ja nuorten osallisuutta ja tarjotaan turvallista, mielekästä tekemistä sekä mahdollisuuksia kasvaa osana yhteisöä.",
      ],
      [
        "Matalan kynnyksen harrastustoiminta",
        "Harrastusten korkeat kustannukset voivat estää monia maahanmuuttajaperheitä tarjoamasta lapsilleen mahdollisuutta harrastaa. Yhdistyksemme tarjoaa maksutonta ja matalan kynnyksen harrastustoimintaa lapsille, nuorille ja aikuisille. Järjestämme viikoittain lasten ja nuorten liikuntaryhmiä sekä aikuisille esimerkiksi naisten kuntosaliryhmiä ja miesten palloilukerhoja.",
      ],
    ],
  },
  toimintakalenteri: {
    tag: "TERVETULOA MUKAAN",
    title: "Yhteistä tekemistä viikkoon.",
    intro:
      "Toimintakalenteristamme löydät ajantasaiset tiedot toiminnastamme ja aikatauluistamme. Facebook- ja Instagram-sivuillamme jaamme uutisia, tiedotteita sekä kuvia ja videoita yhteisestä tekemisestämme.",
    sections: [
      [
        "Toimintakeskus",
        "Jönsaksentie 6 A, 2. kerros, 01600 Vantaa. Vanhan sivuston aukioloajat: ma–pe 16.30–22, la–su 14–22.",
      ],
      [
        "Lasten ja nuorten liikunta",
        "Hakunila, Lehtikuusen koulu: pe 21–22, la 18–19, su 19–21. Länsimäen koulu: ke 20.30–22, la 15–18, su 18–19. Rajakylän koulu: pe 17–18. Pähkinärinteen koulu: pe–su 20–22. Kilterin koulu, Myyrmäki: pe 19.30–21.30, su 18–20. Harrastukset ovat avoimia ja maksuttomia lapsille ja nuorille.",
      ],
      [
        "Neuvontapalvelut",
        "Monikielinen neuvonta toimii ajanvarauksella. Varaa aika: info@vantaayhdessary.fi tai 046 587 0831 / 046 844 2177.",
      ],
      [
        "Yhteinen pöytä – ruokajakelu",
        "Ruokajakelu järjestetään tiistaisin toimintakeskuksessa klo 11.00–14.00.",
      ],
      [
        "Aikuisten liikuntaryhmät",
        "Naisten kuntosaliryhmät kokoontuvat sunnuntaisin Myyrmäessä klo 12.00–14.00.  Miesten palloilukerho perjantaisin- sunnuntaisin klo 19.00–22.00. Lisätiedot ja ilmoittautuminen: 📞 046 844 2177",
      ],
      [
        "Kumppanimme",
        "Teemme tiivistä yhteistyötä eri toimijoiden ja yhdistysten kanssa: Nuorisopalvelut: Nuorten aikuisten toimintaa ke klo 17–20 sekä Tyttöjen illat (Myyrmäen nuorisotilla) kerran kuukaudessa ma klo 17–20. Myyrmäen asukastila: Tyttöjen kerho to klo 17–19.30. Yhteinen pöytä: Ruokajakelu ti klo 11–14. Velmu ry ja Bass Camp Helsinki ry: Nuorten aikuisten toimintaa Skenesalissa ke klo 17–20. Myyrmäen Lobby: Vantaan Kesälavan kulttuuripäivä vuosittain elokuussa. Tusmo ry: Yhteiset tapahtumat ja retket lapsiperheille..",
        
      ],
    ],
  },
  yhteystiedot: {
    tag: "OLL AAN YHTEYDESSÄ".replace("OLL AAN", "OLLAAN"),
    title: "Tervetuloa juttelemaan.",
    intro:
      "Haluatko mukaan toimintaan, tarvitsetko neuvontaa tai onko sinulla yhteistyöidea? Ota meihin yhteyttä.",
    sections: [
      [
        "Vieraile toimistollamme",
        "Jönsaksentie 6 A 11, 01600 Vantaa. Myyräncolo – Myyrinpuhos, Myyrmäki. Sovi vierailusta etukäteen.",
      ],
      ["Soita meille", "📞 046 587 0831 · 046 844 2177"],
      ["Kirjoita meille", "📧 info@vantaayhdessary.fi "],
    ],
  },
};
export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}
export default async function Page({ params }) {
  const { slug } = await params;
  const p = pages[slug];
  if (!p) notFound();
  return (
    <>
      <Header />
      <main>
        <section className="page-intro">
          <div className="eyebrow">{p.tag}</div>
          <h1>{p.title}</h1>
          <p>{p.intro}</p>
        </section>
        <section className="content-section">
          {p.sections.map(([title, text]) => (
            <article key={title}>
              <h2>{title}</h2>
              <p>{text}</p>
            </article>
          ))}
          {slug === "yhteystiedot" && (
            <article>
              <h2>Henkilökunta</h2>
              <h3>Mohamed Omar</h3>
              
              <a
                className="text-link"
                href="mailto:mohamed.omar@vantaayhdessary.fi"
              >
                📧 mohamed.omar@vantaayhdessary.fi
              </a>
            </article>
          )}
          <div className="actions">
            <a className="button" href="mailto:info@vantaayhdessary.fi">
              Lähetä sähköpostia ↗
            </a>
            <a className="text-link" href="tel:+358465870831">
              Soita 046 587 0831 →
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
