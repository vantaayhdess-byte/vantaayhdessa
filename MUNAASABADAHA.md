# Munaasabadda iyo breaking news-ka

Labada qaybood waxay ku yaallaan bogga hore, banner-ka weyn ka dib, isbarashada ka hor. Hadda labaduba waa qarsoon yihiin; boos madhan ama sawir soo degaya ma reebayaan.

## Faylka aad beddelayso

Fur `app/announcements.js`.

### 1. Munaasabad leh sawir iyo qoraal

Qaybta `eventAnnouncement` ka beddel:

```js
visibility: "hide", // qarsoon
```

una beddel:

```js
visibility: "show", // muuqda
```

Kadib beddel:

- `title`: cinwaanka munaasabadda.
- `paragraphs`: labada cutub ee qoraalka.
- `image`: meesha sawirkaagu yaal.
- `imageAlt`: sharaxaad kooban oo sawirka ah, Finnish.
- `when`: taariikhda/waqtiga; `""` ka tag haddii aan la hayn.
- `where`: goobta; `""` ka tag haddii aan loo baahnayn.
- `buttonText` iyo `buttonHref`: qoraalka iyo meesha badhanku geeyo. Labadaba `""` ka dhig haddii aan badhan loo baahnayn.

### Sawirka cusub

1. Sawirka ku rid `public/images/`.
2. Magac u bixi, tusaale `kesajuhla.jpg`.
3. Faylka ku qor:

```js
image: "/images/kesajuhla.jpg",
```

`public` URL-ka kuma jiro. Placeholder-ka hadda jira waa `public/images/event-placeholder.svg`.

```js
imageFit: "contain", // sawirka oo dhan: madaxa lagama jarayo
```

Haddii aad rabto inuu meesha buuxiyo, u beddel `"cover"`; geesaha sawirka ayaa markaas go'i kara. Sawir qiyaastii 1200px ballac ah oo la yareeyay ayaa ku habboon.

### 2. Breaking news — laba sadar

Qaybta `breakingNews` ka beddel:

```js
visibility: "show",
line1: "Qor warka koowaad halkan.",
line2: "Qor faahfaahin kooban halkan.",
```

Linkiga `linkText` iyo `linkHref` waa ikhtiyaari. Labada sadar waxay mobilka u kala duubmi karaan si ay u akhris fududaadaan.

### Dib u qari

Qaybta aad doonayso u celi `visibility: "hide"`. Qoraalka iyo sawirku way kaydsanaanayaan, boggase kama muuqanayaan. Munaasabadda iyo breaking news-ka si gooni ah ayaa loo shidi karaa.

## Tijaabi oo daabac

`Ctrl + S` kadib localhost ka eeg adigoo `npm run dev` wada. Beta-gu isma beddelayo ilaa aad commit iyo push samayso.

```powershell
git add app/announcements.js public/images
git commit -m "Update event and news"
git push origin main
```

Amarradaas waxay ku habboon yihiin beddelka mustaqbalka, marka qaybaha markii ugu horreysay GitHub la geliyo. Hadda rakibidda qaybahan cusub waxay sidoo kale u baahan tahay `app/HomeAnnouncements.js`, `app/page.js` iyo `app/globals.css`.

Ilaali calaamadaha xigashada (`"`), hakadyada (`,`) iyo qawsaska. Kaliya beddel qoraalka ku dhex jira xigashada iyo `hide`/`show`.

## Laba munaasabad iyo cinwaan laba midab leh

`app/announcements.js` wuxuu hadda leeyahay:

- `eventAnnouncement`: munaasabaddii koowaad. Qoraalka aad gelisay waa la hayay.
- `secondEventAnnouncement`: munaasabadda labaad, hadda `hide`.
- `breakingNews`: warka kooban, si gooni ah loo qarin karo.

Munaasabad walba waxay leedahay `visibility`, sawir, qoraal iyo link u gaar ah. Midkood ama labadaba `show` ayaad ka dhigi kartaa.

```js
title: "Bisha Ramadaan",          // midabka madow
titleAccent: "oo soo dhawaatay", // midabka buluugga ah, sadar cusub
```

Haddii cinwaanku hal midab noqdo, ku qor `titleAccent: ""`.

Localhost: Ctrl + S ayaa ku filan. Si beta-ga/website-ka la daabacay uu isna isu beddelo, markasta isbeddelka commit iyo push ayuu u baahan yahay — xitaa marka hide loo beddelo show.
