const fs = require("node:fs/promises");
const path = require("node:path");
const sharp = require(path.join(process.cwd(), "node_modules/sharp"));
const items = [
  [
    "community",
    "1.jpeg",
    "Yhteisellä retkellä",
    "Lapset ja perheet",
    "Lapset ja aikuiset viettävät aikaa yhdessä metsäisellä retkipaikalla.",
  ],
  [
    "children",
    "8.jpeg",
    "Yhdessä vapaa-ajalla",
    "Lapset ja perheet",
    "Lapset pelaavat yhdessä olohuoneessa.",
  ],
  [
    "sports",
    "Nimetön7.png",
    "Liikkumisen iloa",
    "Liikunta",
    "Lapset istuvat värikkäillä liikuntavälineillä liikuntasalissa.",
  ],
  [
    "support",
    "M.jpeg",
    "Kohtaamisia arjessa",
    "Kohtaamiset",
    "Kaksi osallistujaa istuu yhteisen pöydän ääressä.",
  ],
  [
    "youth",
    "Jalkautuva.jpg",
    "Läsnä nuorten arjessa",
    "Nuorisotyö",
    "Nuorisotyöntekijät ulkona auringonlaskun aikaan.",
  ],
  [
    "outdoors",
    "66.jpg",
    "Yhteinen kesäpäivä",
    "Lapset ja perheet",
    "Ryhmä kokoontuu ulkona puiden ja leikkipaikan lähellä.",
  ],
  [
    "garden",
    "44.jpg",
    "Hetki yhdessä",
    "Kohtaamiset",
    "Osallistujat kokoontuvat pöydän ääreen kesäisessä pihapiirissä.",
  ],
  [
    "meeting",
    "10.jpeg",
    "Yhteistä tekemistä",
    "Kohtaamiset",
    "Osallistujat kokoontuvat yhteiseen tilaan pöytien ympärille.",
  ],
  [
    "food",
    "11.jpeg",
    "Yhteisen pöydän äärellä",
    "Kohtaamiset",
    "Yhteistä ruokailua varten katettu pitkä pöytä.",
  ],
  [
    "play",
    "Nimetö.png",
    "Leikkiä ja liikuntaa",
    "Liikunta",
    "Lapset ja ohjaajat liikuntasalissa leikkivälineiden keskellä.",
  ],
  [
    "neighborhood",
    "6.jpeg",
    "Mukana kaupungilla",
    "Nuorisotyö",
    "Nuorisotyöntekijät kävelevät yhdessä kaupungilla.",
  ],
  [
    "friends",
    "2.jpeg",
    "Tilaa jokaiselle",
    "Lapset ja perheet",
    "Lapset istuvat vierekkäin ulkona yhteisellä retkellä.",
  ],
];
(async () => {
  const output = path.join(process.cwd(), "public/photos");
  await fs.mkdir(output, { recursive: true });
  const manifest = [];
  let originalBytes = 0,
    generatedBytes = 0;
  for (const [id, file, title, category, alt] of items) {
    const input = path.join(process.cwd(), "public/legacy-media", file);
    const metadata = await sharp(input).metadata();
    originalBytes += (await fs.stat(input)).size;
    // Resize only: retain the photograph's full composition and strip EXIF metadata.
    for (const width of [480, 960, 1440]) {
      const result = await sharp(input)
        .rotate()
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: 76, effort: 5 })
        .toFile(path.join(output, `${id}-${width}.webp`));
      generatedBytes += result.size;
    }
    manifest.push({
      id,
      title,
      category,
      alt,
      width: metadata.width,
      height: metadata.height,
    });
  }
  await sharp(path.join(process.cwd(), "public/legacy-media/Vantaa logo.jpg"))
    .resize(160, 160, { fit: "inside" })
    .webp({ quality: 85 })
    .toFile(path.join(output, "logo.webp"));
  await fs.writeFile(
    path.join(process.cwd(), "app/photos.json"),
    JSON.stringify(manifest, null, 2) + "\n",
  );
  console.log(
    JSON.stringify({ photos: manifest.length, originalBytes, generatedBytes }),
  );
  await require("./prepare-new-media.cjs")();
})();
