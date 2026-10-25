const fs = require("node:fs/promises");
const path = require("node:path");
const sharp = require(path.join(process.cwd(), "node_modules/sharp"));
const sources = require("./media-sources.json");

async function prepareNewMedia() {
  const root = process.cwd();
  const output = path.join(root, "public/photos");
  const manifestPath = path.join(root, "app/photos.json");
  const photos = JSON.parse(await fs.readFile(manifestPath, "utf8"));
  const fresh = sources.filter(
    (item) => !item.duplicateOf && item.type !== "video",
  );
  let originalBytes = 0;
  let mobileBytes = 0;
  for (const item of fresh) {
    const input = path.join(output, item.file);
    const metadata = await sharp(input).metadata();
    const rotated = metadata.orientation >= 5;
    const width = rotated ? metadata.height : metadata.width;
    const height = rotated ? metadata.width : metadata.height;
    originalBytes += (await fs.stat(input)).size;
    for (const size of [480, 960, 1440]) {
      const result = await sharp(input)
        .rotate()
        .resize({ width: size, withoutEnlargement: true })
        .webp({ quality: item.fit === "contain" ? 85 : 76, effort: 5 })
        .toFile(path.join(output, `${item.id}-${size}.webp`));
      if (size === 480) mobileBytes += result.size;
    }
    const { id, title, category, alt, fit } = item;
    const photo = {
      id,
      title,
      category,
      alt,
      width,
      height,
      ...(fit ? { fit } : {}),
    };
    const oldIndex = photos.findIndex((entry) => entry.id === item.id);
    if (oldIndex === -1) photos.push(photo);
    else photos[oldIndex] = photo;
  }
  await fs.writeFile(manifestPath, JSON.stringify(photos, null, 2) + "\n");
  const videos = sources
    .filter((item) => item.type === "video")
    .map(({ old, ...item }) => item);
  await fs.writeFile(
    path.join(root, "app/videos.json"),
    JSON.stringify(videos, null, 2) + "\n",
  );
  console.log(
    JSON.stringify({
      newPhotos: fresh.length,
      totalPhotos: photos.length,
      videos: videos.length,
      originalBytes,
      mobileBytes,
    }),
  );
}

module.exports = prepareNewMedia;
if (require.main === module)
  prepareNewMedia().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
