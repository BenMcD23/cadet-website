# 317 Squadron website conventions

Public site for 317 Squadron RAF Air Cadets (<https://www.317atc.co.uk>): React
18, Vite and Tailwind CSS, a static single-page app on Vercel with no backend
of its own. The README covers the layout, where each piece of content lives,
and the external services. The conventions below are what the codebase
follows; match them rather than introducing new patterns.

## Content is data

- Squadron details (address, parade nights, subs, social links) live in
  `src/data/squadron.js` and are mirrored in the JSON-LD block in `index.html`.
  Change both together.
- FAQ, the current newsletter and the like are in `src/data/`. Pages read them;
  don't hardcode the same fact in a component.
- Every page sets its title and description with `usePageMeta` at the top of
  its file in `src/pages/`.
- Resize photos to roughly their display size before adding them to
  `src/assets/`. Large originals slow the site badly on mobile.

## Changed by the SMS, not only by people

The SMS API commits the monthly programme (`public/programme/`,
`src/pages/programme.jsx`), newsletters (`public/newsletters/`,
`src/data/currentNewsletter.json`) and the gallery JSON straight to `master`.
Pull before you branch, and don't change those paths or file formats without
changing `app/routers/programme.py`, `newsletters.py` and `gallery.py` in the
API to match.

The contact form's field names are fixed by the deployed Google Apps Script
(`src/components/contactForm/G-appsScript.js` is a reference copy only).
Renaming a field silently breaks the form.

## Style

- JSX in `.jsx` files, function components, one folder per component in
  `src/components/`.
- Tailwind utilities; colours, fonts and animations come from the Tailwind
  config and the shared classes in `src/App.css`, not literals.
- Match the quoting and semicolon style of the file you edit (it varies).

## Checks

There is no test suite. `npm run lint` (zero warnings allowed) and
`npm run build` are the checks, and CI runs both. Look at what you changed in
`npm run dev` at phone width (390px) and desktop: most visitors are parents on
phones.

## Branches and pull requests

- Branch off `master` and open a pull request into it. Only admins (and the
  SMS's publishing token) can push to `master` directly. Force-pushes and
  deletion are blocked for everyone.
- CI must pass to merge: the `check` job (lint and build). Changes under
  `.github/` also need @BenMcD23's review (`.github/CODEOWNERS`).
- Fill in the pull request template: what changed, why, and how you checked it,
  with phone and desktop screenshots for anything visible.
- Before pushing: `npm run lint && npm run build`.
