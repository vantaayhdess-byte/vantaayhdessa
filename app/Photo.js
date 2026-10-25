export default function Photo({
  photo,
  sizes = "(max-width: 800px) 88vw, 380px",
  eager = false,
  className,
}) {
  return (
    <img
      className={className}
      src={`/photos/${photo.id}-960.webp`}
      srcSet={[480, 960, 1440]
        .filter(
          (width, index, widths) =>
            index === 0 ||
            Math.min(width, photo.width) >
              Math.min(widths[index - 1], photo.width),
        )
        .map(
          (width) =>
            `/photos/${photo.id}-${width}.webp ${Math.min(width, photo.width)}w`,
        )
        .join(", ")}
      sizes={sizes}
      width={photo.width}
      height={photo.height}
      alt={photo.alt}
      style={photo.fit ? { objectFit: photo.fit } : undefined}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : "auto"}
      decoding="async"
    />
  );
}
