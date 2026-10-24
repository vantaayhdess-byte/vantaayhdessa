'use client';

import {useRef, useState} from 'react';
import Photo from './Photo';

export default function Gallery({photos,strip=false}) {
  const [category,setCategory] = useState('Kaikki');
  const [active,setActive] = useState(null);
  const [canGoBack,setCanGoBack] = useState(false);
  const [canGoForward,setCanGoForward] = useState(true);
  const track = useRef(null);
  const dialog = useRef(null);
  const visible = category==='Kaikki' ? photos : photos.filter(p=>p.category===category);
  const selected = active===null ? null : visible[active];

  function updateScroll() {
    const el=track.current;
    if (!el) return;
    setCanGoBack(el.scrollLeft>4);
    setCanGoForward(el.scrollLeft+el.clientWidth<el.scrollWidth-4);
  }
  function move(direction) {
    const el=track.current;
    if (!el) return;
    el.scrollBy({left:direction*(el.firstElementChild.getBoundingClientRect().width+24),behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
  }
  function open(index) {setActive(index);dialog.current.showModal();}
  function close(){dialog.current.close();}
  function change(direction){setActive(index=>(index+direction+visible.length)%visible.length);}
  return <div className={strip?'gallery gallery-strip':'gallery'}>
    {strip ? <div className="gallery-toolbar"><p>Pyyhkäise kuvia tai käytä nuolia.</p><div className="gallery-arrows"><button type="button" aria-label="Edelliset kuvat" aria-controls="home-photo-track" disabled={!canGoBack} onClick={()=>move(-1)}>←</button><button type="button" aria-label="Seuraavat kuvat" aria-controls="home-photo-track" disabled={!canGoForward} onClick={()=>move(1)}>→</button></div></div> : <div className="gallery-filters" aria-label="Kuvien aiheet">{['Kaikki',...new Set(photos.map(p=>p.category))].map(label=><button type="button" key={label} aria-pressed={category===label} onClick={()=>setCategory(label)}>{label}</button>)}</div>}
    {!strip && <p className="gallery-count" aria-live="polite">{visible.length} kuvaa · Avaa kuva suurempana painamalla.</p>}
    <div ref={track} id={strip?'home-photo-track':undefined} className={strip?'photo-track':'gallery-grid'} onScroll={strip?updateScroll:undefined} tabIndex={strip?0:undefined} role={strip?'region':undefined} aria-label={strip?'Kuusi kuvaa yhdistyksen toiminnasta':undefined} onKeyDown={strip?(event)=>{if(event.key==='ArrowRight'||event.key==='ArrowLeft'){event.preventDefault();move(event.key==='ArrowRight'?1:-1)}}:undefined}>
      {visible.map((photo,index)=><button className="gallery-tile" type="button" key={photo.id} id={strip?undefined:`photo-${photo.id}`} aria-label={`Avaa kuva: ${photo.title}`} onClick={()=>open(index)}><div className="gallery-tile-image"><Photo photo={photo}/><span className="enlarge" aria-hidden="true">↗</span></div><div className="gallery-caption"><span>{photo.category}</span><h3>{photo.title}</h3></div></button>)}
    </div>
    <dialog ref={dialog} className="photo-dialog" aria-labelledby="photo-dialog-title" onClose={()=>setActive(null)} onClick={event=>{if(event.target===dialog.current)close()}} onKeyDown={event=>{if(event.key==='ArrowRight'){event.preventDefault();change(1)}if(event.key==='ArrowLeft'){event.preventDefault();change(-1)}}}>
      <div className="dialog-shell"><button type="button" autoFocus className="dialog-close" onClick={close} aria-label="Sulje kuva">✕</button>{selected && <><div className="dialog-image"><img src={`/photos/${selected.id}-1440.webp`} width={selected.width} height={selected.height} alt={selected.alt}/></div><div className="dialog-caption"><div><h2 id="photo-dialog-title">{selected.title}</h2><p>{selected.category} · {active+1} / {visible.length}</p></div><div className="gallery-arrows"><button type="button" onClick={()=>change(-1)} aria-label="Edellinen kuva">←</button><button type="button" onClick={()=>change(1)} aria-label="Seuraava kuva">→</button></div></div></>}</div>
    </dialog>
  </div>;
}

