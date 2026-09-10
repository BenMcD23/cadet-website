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
src/data/               editable content (FAQ, current newsletter)
src/assets/             images and documents bundled by Vite
vercel.json             SPA rewrite and cache/security headers
```

## External services

- **Contact form** posts to a Google Apps Script that writes to a sheet and emails the adjutant.
  A copy of that script lives in `src/components/contactForm/G-appsScript.js` for reference;
  the deployed version in Google Apps Script is the source of truth.
- **Flight points** are fetched from a second Apps Script once per browser session and cached
  in `sessionStorage`.
- **reCAPTCHA** protects the contact form.
- **Vercel Analytics** is loaded from `src/App.jsx`.

## Deployment

Every push to `master` deploys automatically on Vercel. Dependabot opens weekly grouped
pull requests for minor and patch dependency updates.
