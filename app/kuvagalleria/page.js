import { Header, Footer } from "../components";
import Gallery from "../Gallery";
import photos from "../photos.json";
import videos from "../videos.json";

export const metadata = {
  title: "Kuvagalleria | Vantaa yhdessä ry",
  description:
    "Kuvia yhteisistä hetkistä, lasten ja nuorten toiminnasta, liikunnasta ja kohtaamisista.",
};
export default function GalleryPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-intro gallery-intro">
          <div className="eyebrow">MEIDÄN YHTEISET HETKEMME</div>
          <h1>
            Elämää <span>yhdessä.</span>
          </h1>
          <p>
            Kurkista mukaan yhdistyksemme arkeen. Yhteisiä retkiä, leikkiä,
            liikuntaa ja kohtaamisia — pieniä hetkiä, joista yhteisö rakentuu.
          </p>
        </section>
        <section className="section gallery-page" aria-label="Kuvagalleria">
          <Gallery photos={photos} />
        </section>
        <section
          className="section video-gallery"
          aria-labelledby="video-gallery-title"
        >
          <div className="section-heading">
            <div className="eyebrow">LIIKKUVIA MUISTOJA</div>
            <h2 id="video-gallery-title">
              Hetkiä <span>videolla.</span>
            </h2>
            <p>
              Lyhyitä välähdyksiä yhteisestä toiminnasta. Käynnistä video
              painamalla toistopainiketta.
            </p>
          </div>
          <div className="video-grid">
            {videos.map((video) => (
              <article className="video-card" key={video.id}>
                <video
                  controls
                  playsInline
                  preload="none"
                  poster={`/photos/${video.poster}-960.webp`}
                  width={video.width}
                  height={video.height}
                  aria-label={`${video.title}, ${video.duration}`}
                >
                  <source src={`/photos/${video.file}`} type="video/mp4" />
                  Selaimesi ei tue videon toistoa.{" "}
                  <a href={`/photos/${video.file}`}>Avaa video</a>.
                </video>
                <div className="gallery-caption">
                  <span>
                    {video.category} · {video.duration}
                  </span>
                  <h3>{video.title}</h3>
                  <p>{video.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="cta">
          <div>
            <h2>Seuraava yhteinen hetki?</h2>
            <p>Tutustu toimintaan ja tule mukaan meidän joukkoomme.</p>
          </div>
          <a className="button light" href="/toiminta">
            Tutustu toimintaan →
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
