/*
 * Single source of truth for squadron contact details, shown in the footer,
 * on the Contact page and in the key-facts strip on the home page.
 * The JSON-LD block in index.html repeats some of this for search engines —
 * keep both in step when anything changes.
 */

export const squadron = {
    name: "317 (Failsworth & Newton Heath) Squadron",
    shortName: "317 Squadron",
    parentOrg: "Royal Air Force Air Cadets",
    siteUrl: "https://www.317atc.co.uk",

    address: {
        venue: "Failsworth Army Reserve Centre",
        street: "Oldham Road, Failsworth",
        town: "Manchester",
        postcode: "M35 0BH",
    },
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Failsworth+Army+Reserve+Centre%2C+Oldham+Road%2C+Failsworth%2C+M35+0BH",

    phone: "0161 688 6705",
    phoneHref: "tel:+441616886705",
    email: "adj.317@rafac.mod.gov.uk",

    paradeNights: [
        { day: "Wednesday", time: "19:00 – 21:30" },
        { day: "Friday", time: "19:00 – 21:30" },
    ],

    ages: "12 to 17",
    subs: "£17 a month",

    socials: {
        facebook: "https://www.facebook.com/317atc",
        instagram: "https://www.instagram.com/317_atc/",
        x: "https://x.com/317ATC",
    },
};
