// Photos live in src/assets/gallery/, listed in gallery.json. The SMS site's
// Gallery tool adds and removes them; sections show in the order they first appear.
import list from "./gallery.json";

const files = import.meta.glob("../assets/gallery/*.webp", { eager: true, import: "default" });

// The grid shows photos 2-4 across, so it uses 400, 600 and 800px copies made at
// build time (vite-imagetools); the full-size file is only for the lightbox.
const thumbs = import.meta.glob("../assets/gallery/*.webp", {
    eager: true,
    import: "default",
    query: { w: "400;600;800", format: "webp", as: "srcset" },
});

export const photos = list
    .map((p) => ({
        ...p,
        img: files[`../assets/gallery/${p.file}`],
        thumb: thumbs[`../assets/gallery/${p.file}`],
    }))
    .filter((p) => p.img);

export const sections = [...new Set(photos.map((p) => p.cat))];
