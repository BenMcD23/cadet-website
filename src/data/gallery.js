/*
 * Photos shown on the Gallery page.
 *
 * To add a photo:
 *   1. Put the image file in src/assets/ (webp preferred, keep files under ~500KB).
 *   2. Import it at the top of this file.
 *   3. Add an entry to the list: src (the import), alt (short description,
 *      required for accessibility) and an optional caption.
 */

import sqnPhoto from "../assets/sqn_photo.webp";
import parade from "../assets/parade.jpeg";
import drill from "../assets/317_drill.png";
import plane from "../assets/home_images/plane.webp";
import kayaking from "../assets/home_images/kyacking.webp";
import shooting from "../assets/home_images/shooting.webp";
import armsDrill from "../assets/home_images/arms_drill.webp";
import camp from "../assets/home_images/camp.webp";
import dofe from "../assets/home_images/dofe.webp";

export const photos = [
    { src: sqnPhoto, alt: "317 Squadron group photo", caption: "The Squadron" },
    { src: plane, alt: "Cadet flying experience", caption: "Flying" },
    { src: kayaking, alt: "Cadets kayaking on adventure training", caption: "Adventure Training" },
    { src: shooting, alt: "Cadets on the shooting range", caption: "Marksmanship" },
    { src: armsDrill, alt: "Cadets performing arms drill", caption: "Drill" },
    { src: camp, alt: "Cadets on camp", caption: "Camps" },
    { src: dofe, alt: "Cadets on a DofE expedition", caption: "DofE" },
    { src: drill, alt: "317 Squadron drill team", caption: "Drill competition" },
    { src: parade, alt: "Cadets on parade", caption: "On parade" },
];
