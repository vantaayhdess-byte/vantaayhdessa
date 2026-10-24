import {Header,Footer} from '../components';
import Gallery from '../Gallery';
import photos from '../photos.json';

export const metadata={title:'Kuvagalleria | Vantaa yhdessä ry',description:'Kuvia yhteisistä hetkistä, lasten ja nuorten toiminnasta, liikunnasta ja kohtaamisista.'};
export default function GalleryPage(){return <><Header/><main><section className="page-intro gallery-intro"><div className="eyebrow">MEIDÄN YHTEISET HETKEMME</div><h1>Elämää <span>yhdessä.</span></h1><p>Kurkista mukaan yhdistyksemme arkeen. Yhteisiä retkiä, leikkiä, liikuntaa ja kohtaamisia — pieniä hetkiä, joista yhteisö rakentuu.</p></section><section className="section gallery-page" aria-label="Kuvagalleria"><Gallery photos={photos}/></section><section className="cta"><div><h2>Seuraava yhteinen hetki?</h2><p>Tutustu toimintaan ja tule mukaan meidän joukkoomme.</p></div><a className="button light" href="/toiminta">Tutustu toimintaan →</a></section></main><Footer/></>}
