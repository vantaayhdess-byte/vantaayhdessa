# Sawirrada iyo fiidiyowyada

Faylasha cusub waxaa lagu habeeyay `public/photos`. Sawirrada JPG ee asalka ahaa waa la hayaa. Webku wuxuu isticmaalayaa WebP la yareeyay.

| Faylkii hore         | Magaca cusub          | Kooxda gallery-ga               |
| -------------------- | --------------------- | ------------------------------- |
| garden-003.jpeg      | meeting-01.jpeg       | Kohtaamiset                     |
| garden-004.jpeg      | neighborhood-01.jpeg  | Nuorisotyö                      |
| garden-005.jpeg      | sports-01.jpeg        | Liikunta                        |
| garden-007.jpeg      | outdoors-01.jpeg      | Lapset ja perheet               |
| garden-008.jpeg      | children-01.jpeg      | Lapset ja perheet               |
| garden-009.jpeg      | children-02.jpeg      | Lapset ja perheet               |
| garden-10.jpeg       | children-01-copy.jpeg | Nuqul — gallery-ga laguma celin |
| garden-11.jpeg       | youth-01-poster.jpeg  | Nuorisotyö                      |
| garden-12.jpeg       | outdoors-02.jpeg      | Liikunta                        |
| garden-961.jpeg      | outdoors-03.jpeg      | Nuqul — gallery-ga laguma celin |
| meeting-290.jpeg     | meeting-02.jpeg       | Kohtaamiset                     |
| meeting-520.jpeg     | meeting-03.jpeg       | Kohtaamiset                     |
| youth-259.jpeg       | youth-01.jpeg         | Nuorisotyö                      |
| neighborhood-490.mp4 | meeting-01.mp4        | Kohtaamiset                     |
| sports-850.mp4       | sports-01.mp4         | Liikunta                        |

## Sida loo isticmaalo sawir cusub

Tusaale ahaan `app/page.js` ku dooro sawirka ciyaaraha sidan:

```jsx
<Photo
  photo={photos.find((p) => p.id === "sports-01")}
  sizes="(max-width: 800px) 90vw, 560px"
/>
```

Magacyada la dooran karo waxay ku qoran yihiin `app/photos.json`. `id` waa magaca lagu raadiyo sawirka. `category` waa kooxda uu gallery-gu raaco.

`sports` = liikunta / harrastukset; `outdoors` = bannaanka; `meeting` = kulamada; `children` = carruurta; `youth` iyo `neighborhood` = shaqada dhalinyarada. `garden` waxaa loo reebay sawirkii hore ee beerta.

Fiidiyowyadu waxay ku jiraan qaybta hoose ee Kuvagalleria. Ma ciyaaraan si toos ah; `preload="none"` ayaa ka ilaalinaya inay soo degaan marka bogga la furo. Sawirka poster-ka ah waa sawir la xiriira hawsha, mana aha frame laga soo jaray fiidiyowga.

Dib-u-diyaarinta sawirrada cusub: `node scripts/prepare-new-media.cjs`. Dhammaan sawirrada: `node scripts/prepare-media.cjs`.

Isbeddellada casharkaaga iyo faylasha editor-ka `.idea` lama beddelin.
