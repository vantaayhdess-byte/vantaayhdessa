import { Header, Footer, services } from "./components";
import Photo from "./Photo";
import Gallery from "./Gallery";
import photos from "./photos.json";
import RandomHero from "./RandomHero";
import HomeAnnouncements from "./HomeAnnouncements";
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <RandomHero
            photos={["community", "outdoors", "garden", "meeting-02"].map(
              (id) => photos.find((photo) => photo.id === id),
            )}
          />
          <div className="hero-shade" />
          <div className="hero-copy">
            <div className="eyebrow">VANTAA YHDESSÄ RY</div>
            <h1>
              Yhdessä olemme
              <br />
              <span>enemmän.</span>
            </h1>
            <p>
              Jokainen tarvitsee paikan, johon kuulua. Luomme kohtaamisia,
              tuemme perheitä ja rakennamme yhteistä arkea Vantaalla.
            </p>
            <div className="actions">
              <a className="button" href="/toiminta">
                Tutustu toimintaan <span>→</span>
              </a>
              <a className="button outline" href="/yhteystiedot">
                Tule mukaan
              </a>
            </div>
          </div>
        </section>
        <HomeAnnouncements />
        <section className="welcome section">
          <div className="welcome-copy">
            <div className="eyebrow">TERVETULOA MEIDÄN JOUKKOOMME</div>
            <h2>
              Monia taustoja.
              <br />
              <span>Yksi yhteinen Vantaa.</span>
            </h2>
            <p className="lead">Avoin yhteisö, jossa jokaiselle on tilaa.</p>
            <p>
              Vuonna 2018 perustettu Vantaa yhdessä ry edistää maahanmuuttajien
              osallisuutta ja hyvinvointia sekä kulttuurien välistä yhteistyötä.
              Tuemme erityisesti lapsiperheitä ja nuoria.
            </p>
            <p>
              Yhteisölähtöisyys ja yhdenvertaisuus ohjaavat kaikkea
              toimintaamme. Tule tutustumaan, löydä harrastus tai kysy tukea
              arkeen.
            </p>
            <a className="button" href="/tietoa-meista">
              Tutustu yhdistykseen →
            </a>
          </div>
          <div className="welcome-photo">
            <Photo
              photo={photos.find((p) => p.id === "garden")}
              sizes="(max-width: 800px) 90vw, 560px"
            />
            <div>Yhteisiä hetkiä. Aitoja kohtaamisia.</div>
          </div>
        </section>
        
       
        
        <section className="section calendar-preview">
          <div>
            <div className="eyebrow">KOHTAAMISIA ARJESSA</div>
            <h2>
              Nähdään
              <br />
              <span>toiminnassa.</span>
            </h2>
            <p>
              Liikuntaa, neuvontaa ja yhteistä tekemistä. Tutustu ohjelmaan ja
              kysy ajantasaisista ryhmistä.
            </p>
            <a className="button" href="/toimintakalenteri">
              Katso toimintakalenteri →
            </a>
          </div>
          <div className="agenda">
            <a href="/toimintakalenteri">
              <span>01</span>
              <div>
                <h3>Harrastustoiminta</h3>
                <p>Lapsille ja nuorille · eri puolilla Vantaata</p>
              </div>
              ↗
            </a>
             <a href="/toimintakalenteri">
              <span>02</span>
              <div>
                <h3>Kumppanimme</h3>
                <p>Yhdessä olemme enemmän</p>
              </div>
              ↗
            </a>
            <a href="/toimintakalenteri">
              <span>03</span>
              <div>
                <h3>Monikielinen neuvonta</h3>
                <p>Tukea arkeen · ajanvarauksella</p>
              </div>
              ↗
            </a>
            <a href="/toimintakalenteri">
              <span>04</span>
              <div>
                <h3>Yhteinen pöytä</h3>
                <p>Ruokajakelu · toimintakeskus</p>
              </div>
              ↗
            </a>
          </div>
        </section>
        <section className="cta">
          <div>
            <h2>Hyvä arki syntyy yhdessä.</h2>
            <p>Tule tutustumaan, kysy lisää tai lähde mukaan toimintaan.</p>
          </div>
          <a className="button light" href="/yhteystiedot">
            Ota yhteyttä →
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
