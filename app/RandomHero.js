"use client";

import { useEffect, useRef, useState } from "react";
import Photo from "./Photo";

// One selection per visit. No timer, autoplay or slideshow.
export default function RandomHero({ photos }) {
  const [photo, setPhoto] = useState(null);
  const hasChosen = useRef(false);

  useEffect(() => {
    if (hasChosen.current || photos.length === 0) return;
    hasChosen.current = true;

    let previous = null;
    try {
      previous = sessionStorage.getItem("vantaa-last-banner");
    } catch {
      // Random selection also works when browser storage is unavailable.
    }

    const alternatives = photos.filter((item) => item.id !== previous);
    const choices = alternatives.length ? alternatives : photos;
    const selected = choices[Math.floor(Math.random() * choices.length)];
    setPhoto(selected);

    try {
      sessionStorage.setItem("vantaa-last-banner", selected.id);
    } catch {
      // Storage is optional; no cookies or external services are used.
    }
  }, [photos]);

  return (
    <>
      {photo && (
        <Photo className="hero-background" photo={photo} sizes="100vw" eager />
      )}
      <noscript>
        <Photo
          className="hero-background"
          photo={photos[0]}
          sizes="100vw"
          eager
        />
      </noscript>
    </>
  );
}
