
import { Header, Footer } from "../components";

export const metadata = {
  title: "Uutiset | Vantaa yhdessä ry",
};

export default function UutisetPage() {
  return (
    <>
      <Header />
      <main>
        <section
  className="page-intro"
  style={{
    backgroundImage:
      'linear-gradient(rgba(255, 253, 253, 0.75), rgba(231, 205, 205, 0.58)), url("/images/uutiset.webp")',
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
          <div className="eyebrow">AJANKOHTAISTA</div>
          <h1>Wararka <span>cusub.</span></h1>
          <p>waxaa is badalay garoomada lagu ciyaaro.</p>
        </section>
        <section className="content-section">
          <article>
            <h2>ciyaaraha</h2>
            <p>waxaa is badalay garoomada lagu ciyaaro laga bilaabo maalinta taariikhdu tahay waxayna noqonayaan sidan
                Garoonka Pahkinarinne klo:12:00-18:00.</p>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}

