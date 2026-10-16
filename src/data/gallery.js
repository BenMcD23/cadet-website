// Photos live in src/assets/gallery/, listed in gallery.json. The SMS site's
// Gallery tool adds and removes them; sections show in the order they first appear.
import list from "./gallery.json";

const files = import.meta.glob("../assets/gallery/*.webp", { eager: true, import: "default" });

export const photos = list
    .map((p) => ({ ...p, img: files[`../assets/gallery/${p.file}`] }))
    .filter((p) => p.img);

export const sections = [...new Set(photos.map((p) => p.cat))];
