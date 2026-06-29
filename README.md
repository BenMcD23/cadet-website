# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Staff / NCO photos

Photos live in `src/assets/nco_pics/` and `src/assets/staff_pics/` and are
listed in `ncoPics.jsx` / `staffPics.jsx`. Drop a new image (any format) into
the right folder, then run the pipeline to strip its background and convert it
to `.webp`:

```sh
pip install "rembg[cli]" onnxruntime pillow   # once
python3 convert_images.py                     # converts every non-webp, deletes originals
```

`convert_images.py` is gitignored (dev-only). Add the new file's `.webp` name
to the `ncos` / `staff` array in the matching component.

Single-image convert without background removal:

```sh
cwebp -q 85 in.png -o out.webp
```
