# HAGAHA KOOBAN EE WEBKA VANTAA YHDESSÄ

Mashruuca: C:\Users\qoran\Documents\allapps\vantaayhdessa
Visual Studio Code ku fur folderkan oo dhan. Faylkan ku hay agtaada markaad wax beddelayso.
Ctrl + F = qoraal ka raadi faylka; Ctrl + Shift + F = ka raadi mashruuca oo dhan.
Ctrl + S = kaydi. Alt + Shift + F = hagaaji safafka koodhka gudaha VS Code.

## 1. Fayl kasta muxuu qabtaa?

Waddooyinka hoose waxay ka bilaabmaan folderka mashruuca.

| Fayl / folder | Waxa uu qabto |
| --- | --- |
| app/page.js | BOGGA HORE: qoraallada iyo qaybaha ugu waaweyn. |
| app/components.js | Header, logo, menu, footer iyo xogta saddexda kaadh ee adeegyada. |
| app/globals.css | Midabbada, cabbirka qoraalka, kala fogaanshaha iyo qaabka mobile/desktop. |
| app/layout.js | Qaabka guud ee bogagga, luqadda iyo cinwaanka guud ee browser-ka. |
| app/[slug]/page.js | Afarta bog ee Meistä, Toiminta, Toimintakalenteri iyo Yhteystiedot. [slug] waa magaca folderka sida uu yahay. |
| app/kuvagalleria/page.js | Bogga sawirrada iyo fiidiyowyada. |
| app/announcements.js | Labada munaasabad iyo breaking news: qoraal, sawir iyo hide/show. |
| app/HomeAnnouncements.js | Qaabka loo soo bandhigo munaasabadaha; xogtooda ku beddel announcements.js. |
| app/photos.json | Liiska sawirrada: id, cinwaan, category, sharaxaad iyo cabbir. |
| app/videos.json | Liiska fiidiyowyada iyo faahfaahintooda. |
| app/Photo.js | Sida sawirku ugu soo baxo cabbir ku habboon shaashadda. |
| app/RandomHero.js | Doorashada sawirka random-ka ah ee banner-ka. |
| app/Gallery.js | Gallery-ga, sawirka la weyneeyo iyo carousel-ka dhaqaaqaya. |
| public/photos | Sawirrada gallery-ga iyo banner-ka, cabbirrada WebP, logo iyo fiidiyowyo. |
| public/images | Sawirrada aad si fudud ugu darto munaasabad ama bog cusub. |
| public/media, public/legacy-media | Agab iyo sawirro laga soo qaaday webkii hore; ha tirtirin adigoon hubin isticmaalka. |
| scripts | Qalabka diyaarinta iyo yaraynta sawirrada. |
| package.json | Barnaamijyada mashruucu isticmaalo iyo amarada dev/build/start. |
| package-lock.json | Noocyada saxda ah ee barnaamijyada la rakibay; gacanta ha ku beddelin. |
| next.config.mjs | Dejinta Next.js iyo gudbinta cinwaannadii hore. |
| .gitignore | Waxa aan GitHub la gelin, sida node_modules iyo .next. |
| README.md | Warbixin guud oo mashruuca ah. |
| SAWIRRADA.md | Hagaha sawirrada iyo magacyadooda. |
| MUNAASABADAHA.md | Hagaha munaasabadaha iyo hide/show. |
| AGENTS.md | Tilmaamo loogu talagalay qalabka caawiya koodhka. |
| node_modules | Barnaamijyada la rakibay; wax ha ka beddelin. |
| .next | Faylal Next.js si otomaatig ah u sameeyo; wax ha ka beddelin. |
| .git | Taariikhda Git; gacanta ha ku beddelin. |
| .idea | Dejinta Android Studio; ma aha qaybta muuqata ee webka. |
| preview.log, preview-error.log | Diiwaanno tijaabo; ma aha qoraalka webka. |

## 2. Bogga hore: app/page.js

Qaybaha waxay faylka ugu kala horreeyaan sidan. Ctrl + F ku raadi erayga ku jira qawska:

1. Madaxa iyo menu-ga: <Header /> — waxa ku jira waxaa laga beddelaa components.js.
2. Banner-ka weyn: className="hero" — cinwaanka, sharaxaadda iyo badhamada.
   Liiska sawirradiisa: photos={["community", "outdoors", "garden", "meeting-02"]...}
   Magacyadan waa id-yada ku jira photos.json.
3. Munaasabadaha iyo warka: <HomeAnnouncements /> — xogta ku beddel announcements.js.
4. Soo dhawaynta: className="welcome section" — Monia taustoja iyo sawirka garden.
5. Saddexda kaadh: className="services-section" — qoraalka iyo image id-ga ka beddel services gudaha components.js.
6. Sawirrada dhaqaaqaya: className="section home-gallery" — lixda id waxay ka hooseeyaan <Gallery.
7. Qiyamka ururka: className="values".
8. Soo koobidda jadwalka: className="section calendar-preview".
9. Qaybta xiriirka: className="cta".
10. Cagta bogga: <Footer /> — waxa ku jira waxaa laga beddelaa components.js.

Cinwaan laba midab leh: qoraalka ku jira <span>...</span> ayaa qaabkan ku noqda buluug.
Munaasabadaha: title = madow; titleAccent = buluug; visibility: "show" = muuqda, "hide" = qarsoon.

## 3. Bogagga menu-ga hadda jira

| Magaca menu-ga | Cinwaanka bogga | Meesha laga beddelo |
| --- | --- | --- |
| Etusivu | / | app/page.js |
| Meistä | /tietoa-meista | app/[slug]/page.js: "tietoa-meista" |
| Toiminta | /toiminta | app/[slug]/page.js: toiminta |
| Toimintakalenteri | /toimintakalenteri | app/[slug]/page.js: toimintakalenteri |
| Kuvagalleria | /kuvagalleria | app/kuvagalleria/page.js |
| Yhteystiedot | /yhteystiedot | app/[slug]/page.js: yhteystiedot |

Gudaha app/[slug]/page.js:
tag = qoraalka yar ee kore; title = cinwaanka weyn; intro = hordhac.
sections = qaybo, mid kastaa leh ["Cinwaan", "Qoraal"].
Xogta shaqaalaha ka raadi Henkilökunta ama Mohamed Omar isla faylkaas.

## 4. Samaynta bog cusub iyo ku xiridda menu-ga

Tusaale: bog cusub oo la yiraahdo Uutiset (Wararka).

TALLAABADA A — gudaha app ku samee folder uutiset.
Gudihiisa ku samee fayl page.js. Waddadu waxay noqonaysaa app/uutiset/page.js.
Ku qor koodhkan oo dhan:

```jsx
import { Header, Footer } from "../components";

export const metadata = {
  title: "Uutiset | Vantaa yhdessä ry",
};

export default function UutisetPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-intro">
          <div className="eyebrow">AJANKOHTAISTA</div>
          <h1>Wararka <span>cusub.</span></h1>
          <p>Halkan ku qor hordhaca bogga.</p>
        </section>
        <section className="content-section">
          <article>
            <h2>Cinwaanka warka</h2>
            <p>Halkan ku qor faahfaahinta warka.</p>
          </article>
        </section>
      </main>
      <Footer />
    </>
  );
}
```

Folderka uutiset wuxuu si toos ah u abuuraa cinwaanka /uutiset.
Magaca folderka ka dhig xarfo yaryar, meelaha bannaan ku beddel -.
Ha siin bog cusub magac hore u jira sida toiminta.

TALLAABADA B — fur app/components.js. Kore ka hel function Links().
Ka hor linkiga Yhteystiedot ku dar:

```jsx
<a href="/uutiset">Uutiset</a>
```

href waa cinwaanka bogga; qoraalka u dhexeeya > iyo </a> waa magaca menu-ga.
Hal mar oo aad Links ku darto wuxuu ka muuqanayaa menu-ga desktop iyo mobile labadaba.
Tijaabi http://localhost:3000/uutiset iyo menu-ga mobile-ka.

## 5. Sawir cusub oo bogga lagu darayo

Sawirka tusaale ahaan xaflad.jpg ku rid public/images.
Gudaha <article> ee bogga cusub ku dar:

```jsx
<img
  src="/images/xaflad.jpg"
  alt="Sharaxaad kooban oo sawirka ah"
  loading="lazy"
  style={{ width: "100%", height: "auto" }}
/>
```

src laguma qoro public. Magaca iyo dhammaadka .jpg/.png/.webp waa inay faylka la mid noqdaan.
Sawir weyn marka hore yaree si boggu u fududaado; gallery-ga diyaarsan wuxuu isticmaalaa cabbirro kala duwan.

## 6. Tijaabi, dabadeed daabac

Terminal-ka ka fur isla folderka mashruuca:

```bash
npm run dev
```

Fur http://localhost:3000. Ctrl + S ku kaydi beddelka.
Hubi desktop, mobile iyo linkiyada. Waxyaabaha localhost kuma muuqdaan webka rasmiga ah ilaa aad push samayso.

Markaad diyaar tahay, tusaalahan wuxuu Git ku daraa KALIYA bogga iyo menu-ga aad beddeshay:

```bash
git status
git add app/uutiset/page.js app/components.js
git commit -m "Ku dar bogga Uutiset"
git push origin main
```

Haddii aad sawir ku dartay, git add ku dar waddadiisa public/images/xaflad.jpg.
Faylasha kale ee aad beddeshayna ku dar magacyadooda. git status ka hubi waxa commit-ka galaya.
Vercel ayaa push-ka kadib bilaabaya deployment; sug inuu Ready noqdo, kadib hubi webka rasmiga ah.

TALO: Hal beddel mar samee, kaydi, localhost ku hubi, kadib kan xiga u gudub.
