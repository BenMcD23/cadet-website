/*
 * Squadron news items, shown on the News page and the "Latest News"
 * strip on the home page (top 3 items).
 *
 * To add a news item:
 *   1. Copy one of the blocks below to the TOP of the list (newest first).
 *   2. Give it a unique id and set the date as "YYYY-MM-DD".
 *   3. title and summary are required; body, image and link are optional.
 *      - body: longer text shown when the reader expands the item
 *      - image: import a photo at the top of this file and reference it
 *      - link: an external URL (e.g. a newsletter article or Facebook post)
 */

import camp from "../assets/home_images/camp.webp";
import dofe from "../assets/home_images/dofe.webp";
import drill from "../assets/317_drill.png";

export const newsItems = [
    {
        id: "example-camp",
        date: "2026-06-01",
        title: "Summer camp places announced",
        summary: "Details of this year's summer camp have been released — speak to staff on a parade night to register your interest.",
        body: "This is a placeholder news item. Edit src/data/news.js to replace it with real squadron news.",
        image: camp,
    },
    {
        id: "example-dofe",
        date: "2026-05-15",
        title: "DofE expedition weekend",
        summary: "Our Bronze and Silver DofE cadets completed their qualifying expeditions — well done to everyone who took part.",
        image: dofe,
    },
    {
        id: "example-drill",
        date: "2026-04-20",
        title: "Drill competition success",
        summary: "The squadron drill team put in a strong performance at this year's Wing drill competition.",
        image: drill,
    },
];
