"use client";

import { useEffect, useRef, useState } from "react";
import Photo from "./Photo";

const AUTOPLAY_DELAY = 4500;

// Stop positions match the visible cards: three on desktop, one on mobile.
function scrollStops(element) {
  if (!element?.firstElementChild) return [0];
  const maximum = Math.max(0, element.scrollWidth - element.clientWidth);
  const first = element.firstElementChild.offsetLeft;
  return [...element.children]
    .map((child) => Math.min(maximum, child.offsetLeft - first))
    .filter(
      (position, index, all) => index === 0 || position - all[index - 1] > 4,
    );
}
function nearestStop(element, stops) {
  return stops.reduce(
    (best, position, index) =>
      Math.abs(position - element.scrollLeft) <
      Math.abs(stops[best] - element.scrollLeft)
        ? index
        : best,
    0,
  );
}

export default function Gallery({ photos, strip = false }) {
  const [category, setCategory] = useState("Kaikki");
  const [active, setActive] = useState(null);
  const [positions, setPositions] = useState([0]);
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [inView, setInView] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const track = useRef(null);
  const dialog = useRef(null);
  const visible =
    category === "Kaikki"
      ? photos
      : photos.filter((p) => p.category === category);
  const selected = active === null ? null : visible[active];
  const playing =
    strip &&
    !paused &&
    !hovering &&
    inView &&
    pageVisible &&
    active === null &&
    positions.length > 1;

  useEffect(() => {
    if (!strip || !track.current) return;
    const element = track.current;
    const measure = () => {
      const stops = scrollStops(element);
      setPositions(stops);
      setCurrent(nearestStop(element, stops));
    };
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => {
      setReducedMotion(motion.matches);
      if (motion.matches) setPaused(true);
    };
    const updateVisibility = () => setPageVisible(!document.hidden);
    const resize = new ResizeObserver(measure);
    const intersection = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 },
    );
    resize.observe(element);
    intersection.observe(element);
    motion.addEventListener("change", updateMotion);
    document.addEventListener("visibilitychange", updateVisibility);
    measure();
    updateMotion();
    updateVisibility();
    return () => {
      resize.disconnect();
      intersection.disconnect();
      motion.removeEventListener("change", updateMotion);
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, [strip, photos.length]);

  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => {
      const element = track.current;
      if (!element) return;
      const stops = scrollStops(element);
      const next = (nearestStop(element, stops) + 1) % stops.length;
      element.scrollTo({
        left: stops[next],
        behavior: reducedMotion ? "instant" : "smooth",
      });
    }, AUTOPLAY_DELAY);
    return () => window.clearInterval(timer);
  }, [playing, reducedMotion]);

  function updateScroll() {
    const element = track.current;
    if (element) setCurrent(nearestStop(element, scrollStops(element)));
  }
  function goTo(index) {
    setPaused(true);
    track.current?.scrollTo({
      left: positions[index],
      behavior: reducedMotion ? "instant" : "smooth",
    });
  }
  function move(direction) {
    const element = track.current;
    if (!element) return;
    const stops = scrollStops(element);
    goTo(
      (nearestStop(element, stops) + direction + stops.length) % stops.length,
    );
  }
  function open(index) {
    setActive(index);
    dialog.current.showModal();
  }
  function close() {
    dialog.current.close();
  }
  function change(direction) {
    setActive((index) => (index + direction + visible.length) % visible.length);
  }
  return (
    <div
      className={strip ? "gallery gallery-strip" : "gallery"}
      data-autoplay={strip ? String(playing) : undefined}
      onPointerEnter={
        strip
          ? (event) => {
              if (event.pointerType === "mouse") setHovering(true);
            }
          : undefined
      }
      onPointerLeave={strip ? () => setHovering(false) : undefined}
      onFocusCapture={
        strip
          ? (event) => {
              if (
                !event.target.closest(".carousel-pause") &&
                !event.currentTarget.contains(event.relatedTarget)
              )
                setPaused(true);
            }
          : undefined
      }
    >
      {strip ? (
        <div className="gallery-toolbar">
          <p>Kuvat vaihtuvat automaattisesti. Voit myös pyyhkäistä.</p>
          <div className="gallery-arrows">
            <button
              type="button"
              className="carousel-pause"
              aria-label={
                paused
                  ? "Käynnistä automaattinen vaihto"
                  : "Pysäytä automaattinen vaihto"
              }
              onClick={() => {
                setPaused((value) => !value);
                setHovering(false);
              }}
            >
              {paused ? "▶ Jatka" : "Ⅱ Tauko"}
            </button>
            <button
              type="button"
              aria-label="Edelliset kuvat"
              aria-controls="home-photo-track"
              onClick={() => move(-1)}
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Seuraavat kuvat"
              aria-controls="home-photo-track"
              onClick={() => move(1)}
            >
              →
            </button>
          </div>
        </div>
      ) : (
        <div className="gallery-filters" aria-label="Kuvien aiheet">
          {["Kaikki", ...new Set(photos.map((p) => p.category))].map(
            (label) => (
              <button
                type="button"
                key={label}
                aria-pressed={category === label}
                onClick={() => setCategory(label)}
              >
                {label}
              </button>
            ),
          )}
        </div>
      )}
      {!strip && (
        <p className="gallery-count" aria-live="polite">
          {visible.length} kuvaa · Avaa kuva suurempana painamalla.
        </p>
      )}
      <div
        ref={track}
        id={strip ? "home-photo-track" : undefined}
        className={strip ? "photo-track" : "gallery-grid"}
        onScroll={strip ? updateScroll : undefined}
        onPointerDown={strip ? () => setPaused(true) : undefined}
        tabIndex={strip ? 0 : undefined}
        role={strip ? "region" : undefined}
        aria-label={strip ? "Kuusi kuvaa yhdistyksen toiminnasta" : undefined}
        onKeyDown={
          strip
            ? (event) => {
                if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
                  event.preventDefault();
                  move(event.key === "ArrowRight" ? 1 : -1);
                }
              }
            : undefined
        }
      >
        {visible.map((photo, index) => (
          <button
            className="gallery-tile"
            type="button"
            key={photo.id}
            id={strip ? undefined : `photo-${photo.id}`}
            aria-label={`Avaa kuva: ${photo.title}`}
            onClick={() => open(index)}
          >
            <div className="gallery-tile-image">
              <Photo photo={photo} />
              <span className="enlarge" aria-hidden="true">
                ↗
              </span>
            </div>
            <div className="gallery-caption">
              <span>{photo.category}</span>
              <h3>{photo.title}</h3>
            </div>
          </button>
        ))}
      </div>
      {strip && positions.length > 1 && (
        <div
          className="carousel-dots"
          role="group"
          aria-label="Valitse kuvaryhmä"
        >
          {positions.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={"Siirry kuvaryhmään " + (index + 1)}
              aria-controls="home-photo-track"
              aria-current={current === index ? "true" : undefined}
              onClick={() => goTo(index)}
            >
              <span aria-hidden="true" />
            </button>
          ))}
        </div>
      )}
      <dialog
        ref={dialog}
        className="photo-dialog"
        aria-labelledby="photo-dialog-title"
        onClose={() => setActive(null)}
        onClick={(event) => {
          if (event.target === dialog.current) close();
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.preventDefault();
            change(1);
          }
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            change(-1);
          }
        }}
      >
        <div className="dialog-shell">
          <button
            type="button"
            autoFocus
            className="dialog-close"
            onClick={close}
            aria-label="Sulje kuva"
          >
            ✕
          </button>
          {selected && (
            <>
              <div className="dialog-image">
                <img
                  src={`/photos/${selected.id}-1440.webp`}
                  width={selected.width}
                  height={selected.height}
                  alt={selected.alt}
                />
              </div>
              <div className="dialog-caption">
                <div>
                  <h2 id="photo-dialog-title">{selected.title}</h2>
                  <p>
                    {selected.category} · {active + 1} / {visible.length}
                  </p>
                </div>
                <div className="gallery-arrows">
                  <button
                    type="button"
                    onClick={() => change(-1)}
                    aria-label="Edellinen kuva"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={() => change(1)}
                    aria-label="Seuraava kuva"
                  >
                    →
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </dialog>
    </div>
  );
}
