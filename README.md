# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Staff / NCO photos

Staff and NCO people are defined in `src/data/people.json` (two arrays,
`staff` and `ncos`). Each entry is `{ id, rank, name, image }`, where `image`
is a public path under `public/people/`. The photo grids (`staffPics.jsx` /
`ncoPics.jsx`) render from this data, sorted by rank then alphabetically by
first name (NCOs use an initial) — see `src/data/people.js` for the rank
order.

You normally don't edit these by hand: the **Staff Photos** tool in the
317 SMS site lets staff upload a photo (with in-browser background removal and
cropping), pick a rank, and it commits the new `.webp` plus the updated
`people.json` straight to this repo — Vercel then redeploys automatically.

To add someone manually instead: drop a `.webp` into `public/people/staff/`
or `public/people/nco/`, then add an entry to `src/data/people.json`. People
without a photo can point `image` at `/people/placeholder.webp`.

Single-image convert to `.webp`:

```sh
cwebp -q 85 in.png -o out.webp
```
