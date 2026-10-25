# Vantaa yhdessä ry

Next.js App Router website, migrated from the supplied somfin.fi HTML backup. Finnish content, original photography, responsive layouts, and redirects for old page URLs.

Run `npm install` then `npm run dev`. Open http://localhost:3000. Production check: `npm run build`.

All original media is retained under public/legacy-media. Displayed photography is under public/media. Source HTML remains in the original Downloads/somfinn folder.

Before publishing: confirm all contact details, street address, activity times, new domain spelling, and rights to publish photographs. Schedule data is explicitly labelled as historical. The current contact email is retained; no unverified new email address is assumed. Email and telephone links are functional; there is no form backend or automatic email delivery. Domain, DNS, and live hosting have not been changed.

## Photo gallery

The gallery is at /kuvagalleria, with category filters and a native dialog for enlarged photos. The homepage has a six-photo, swipeable scroll-snap strip with keyboard and arrow controls. No slider dependency is used. The homepage strip advances every 4.5 seconds while visible, with dot navigation and pause/resume controls. Automatic movement pauses on hover, manual interaction, open photo dialogs and hidden browser tabs. With reduced-motion preferences it starts paused; visitors can explicitly start it, using instant image changes instead of animated scrolling. Photos are served as responsive static WebP files (480, 960 and up to 1440 pixels), with native lazy loading; large photos load only when opened. Originals remain under public/legacy-media. To regenerate the optimized files and manifest, run: node scripts/prepare-media.cjs (uses the sharp package included with Next.js).
