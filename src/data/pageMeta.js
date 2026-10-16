// Per-route <title> and meta description. Used by the PageMeta component at
// runtime and by the vite build to generate a static HTML file per route, so
// search engines see a unique description for each page.

const SITE = "317 Failsworth Squadron Air Cadets";

export const defaultMeta = {
    title: "317 Failsworth Squadron Royal Air Force Air Cadets",
    description: "Unlock new skills and make lifelong friends at 317 Squadron. From flying to outdoor adventures, start your cadet journey today!",
};

const pageMeta = {
    "/": defaultMeta,
    "/programme": {
        title: `Programme | ${SITE}`,
        description: "This month's parade night programme and room allocations for 317 Failsworth & Newton Heath Squadron.",
    },
    "/adult-staff": {
        title: `Adult Staff | ${SITE}`,
        description: "Meet the volunteer staff and civilian committee members who run 317 Squadron.",
    },
    "/cadet-ncos": {
        title: `Cadet NCOs | ${SITE}`,
        description: "Meet the cadet Non-Commissioned Officers who lead and support cadets at 317 Squadron.",
    },
    "/flight-points": {
        title: `Flight Points | ${SITE}`,
        description: "The current flight points table — see which flight is leading the race for this year's trophy.",
    },
    "/join": {
        title: `Join Us | ${SITE}`,
        description: "How to join 317 Squadron as a cadet aged 12 to 17, a staff volunteer or a committee member.",
    },
    "/parents": {
        title: `Parents | ${SITE}`,
        description: "Information for parents and carers of 317 Squadron cadets, including subs and what to expect.",
    },
    "/contact": {
        title: `Contact Us | ${SITE}`,
        description: "Get in touch with 317 Failsworth & Newton Heath Squadron and find out where we parade.",
    },
    "/newsletter": {
        title: `Newsletter | ${SITE}`,
        description: "Read the latest 317 Squadron newsletter, produced by our cadet media team.",
    },
};

export default pageMeta;
