// HALKAN KA BEDEL MUNAASABADDA IYO WARKA BOGGA HORE.
// visibility: "hide" = qarsoon; "show" = muuqda.
// Labada qaybood mid kasta si gooni ah ayaa loo shidi karaa.

export const eventAnnouncement = {
  visibility: "hide",
  label: "TULEVA TAPAHTUMA",
  title: "Bisha Ramadaan",
  titleAccent: "oo soo dhawaatay", // Qaybta buluugga ah ee cinwaanka.
  paragraphs: [
    "Munaasabada ciida waxaan idiinku hampiyaynaynaa in bishii ramadaan soo dhawaatay .",
  ],

  // Sawirka dhig public/images, halkan public laguma qoro.
  // Tusaale: "/images/kesajuhla.jpg"
  image: "/images/children-960.webp",
  imageAlt: "Vaihda tähän tapahtumakuvan kuvaus",
  // "contain" = sawirka oo dhan; "cover" = buuxi meesha sawirka.
  imageFit: "contain",

  // Ku qor waqtiga iyo goobta. Ka tag "" haddii aan loo baahnayn.
  when: "maalinta sabtida taariikhda tahay 20.12.2026",
  where: "myyrmainen hall",
  buttonText: "Ota yhteyttä",
  buttonHref: "/yhteystiedot",
};

// MUNAASABADDA LABAAD — madax-bannaan tii kore.
// Nuqul cusub oo aan wali muuqan. Bedel qoraalka iyo sawirka ka hor "show".
export const secondEventAnnouncement = {
  visibility: "hide",
  label: "TULEVA TAPAHTUMA",
  title: "Munaasabadda labaad",
  titleAccent: "Qoraalka buluugga ah",
  paragraphs: [
    "Halkan ku qor faahfaahinta munaasabadda labaad.",
    "Halkan ku qor sida looga qayb qaadanayo.",
  ],
  image: "/images/event-placeholder.svg",
  imageAlt: "Sharaxaad kooban oo sawirka munaasabadda labaad ah",
  imageFit: "contain",
  when: "",
  where: "",
  buttonText: "Ota yhteyttä",
  buttonHref: "/yhteystiedot",
};

export const breakingNews = {
  visibility: "hide",
  label: "AJANKOHTAISTA",
  line1: "Hakunila, Lehtikuusen koulu: pe 21–22, la 18–19, su 19–21",
  line2: "Länsimäen koulu: ke 20.30–22, la 15–18, su 18–19..",

  // Linkigu waa ikhtiyaari. Labadaba buuxi si uu u muuqdo.
  linkText: "",
  linkHref: "",
};

