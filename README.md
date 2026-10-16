# 317 (Failsworth & Newton Heath) Squadron website

Public website for 317 Squadron RAF Air Cadets, live at <https://www.317atc.co.uk>.

Built with React 18, Vite and Tailwind CSS. It is a static single-page app deployed on Vercel;
there is no backend of our own. The contact form and the flight-points tally talk to two small
Google Apps Script web apps.

## Running locally

Requires Node 22.

```bash
npm install
npm run dev       # dev server with hot reload
npm run build     # production build into dist/
npm run preview   # serve the production build locally
npm run lint      # ESLint
```

## Common updates

| What | Where |
|---|---|
| Monthly programme | Replace `public/programme/<MM>_<YY>_programme.pdf`, update the link in `src/pages/programme.jsx`, and replace `src/assets/programme/programme.webp` and `rooms.webp` |
| Newsletter | Drop the PDF in `public/newsletters/` and update `src/data/currentNewsletter.json` |
| Adult staff photos and names | `src/components/staffPics/staffPics.jsx` plus `src/assets/staff_pics/` |
| Cadet NCO photos and names | `src/components/ncoPics/ncoPics.jsx` plus `src/assets/nco_pics/` |
| FAQ on the Join page | `src/data/faq.js` |
| Address, phone, email, parade nights, subs, social links | `src/data/squadron.js` (also mirrored in the JSON-LD block in `index.html`) |
| Page titles and descriptions for search engines | The `usePageMeta` call at the top of each file in `src/pages/` |
| Nav links and footer links | `src/components/navbar/Navbar.jsx`, `src/components/footer/footer.jsx` |
| Colours, fonts, animations | `tailwind.config.js` and the shared classes in `src/App.css` |

Photos should be resized to roughly the size they are displayed at before being added.
Large originals slow the site down noticeably on mobile.

## Project layout

```
index.html              app shell
public/                 files served as-is (PDFs, sitemap, icon)
src/main.jsx            entry point, router and context providers
src/App.jsx             routes
src/pages/              one file per route
src/components/         reusable pieces, one folder each
src/context/            flight points fetch and session cache
src/data/               editable content (FAQ, current newsletter, squadron details)
src/hooks/              usePageMeta (per-page title, description, canonical, Open Graph)
src/assets/             images and documents bundled by Vite
vercel.json             SPA rewrite and cache/security headers
```

## External services

- **Contact form** posts to a Google Apps Script that writes to a sheet and emails the adjutant.
  A copy of that script lives in `src/components/contactForm/G-appsScript.js` for reference;
  the deployed version in Google Apps Script is the source of truth.
- **Flight points** are fetched from a second Apps Script once per browser session and cached
  in `sessionStorage`.
- **Spam protection** on the contact form is a hidden honeypot field checked by the Apps Script (no captcha).
- **Vercel Analytics** is loaded from `src/App.jsx`.

## Deployment

Every push to `master` deploys automatically on Vercel. Dependabot opens weekly grouped
pull requests for minor and patch dependency updates.

## Known tech debt

### Newsletter booklet (`src/components/newsletter/PdfBooklet.jsx`)

The page-flip viewer works, but it was written quickly and has a few loose ends worth
fixing next time someone is in there:

- **Animation frame never cancelled.** `flipAnimRef` stores the `requestAnimationFrame`
  id but nothing calls `cancelAnimationFrame` on unmount, so navigating away mid-flip
  can call `setState` on an unmounted component.
- **Render race.** `renderPage` is async and fires on every page change with no
  cancellation. Flipping quickly can finish an older render after a newer one and draw
  the wrong page onto the canvas. Fix: track a render token or call `renderTask.cancel()`
  from pdf.js before starting a new render on the same canvas.
- **PDF document never released.** The `getDocument` loading task is not destroyed when
  the component unmounts or `pdfPath` changes, so the worker keeps the document in memory.
- **Keyboard handler closes over a stale `toggleFullscreen`.** The `keydown` effect lists
  `goNext`, `goPrev` and `isFullscreen` as dependencies but calls `toggleFullscreen`,
  which is recreated every render. It works today only because that function reads
  nothing that changes. The `f` shortcut is also global to the page.
- **Click-to-flip zones are plain `div`s.** The two edge overlays that flip pages on click
  are not buttons, so they are invisible to keyboard and screen-reader users. The arrow
  buttons underneath cover the same actions, so this is a polish item rather than a bug.
- **Leftover "✅ FIX n" comments** are from a debugging session and should be rewritten
  as plain explanations or removed.
- **Legacy pdf.js build.** The component deliberately imports `pdfjs-dist/legacy/build`
  because the default build only supports the newest Firefox and Chrome. Keep it that way
  when upgrading pdf.js; check the supported-browser list in the pdf.js FAQ each time.
- **Bundle size.** The pdf.js worker is about 1.3 MB and the main pdf.js chunk about
  0.5 MB. They are only loaded on the newsletter page, but there is no loading indicator
  for the download itself, only for the PDF parse.
