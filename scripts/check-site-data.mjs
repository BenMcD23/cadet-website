/*
 * Checks that facts repeated outside src/data/squadron.js still match it, and
 * that every host the code talks to is allowed by the CSP in vercel.json.
 *
 * Both drift silently otherwise: a stale JSON-LD block shows search engines an
 * old phone number, and a host missing from the CSP only breaks in a browser,
 * after the deploy. There is no test suite here, so CI runs this beside lint.
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { squadron } from "../src/data/squadron.js";

const root = new URL("..", import.meta.url).pathname;
const problems = [];
const check = (ok, message) => ok || problems.push(message);

// --- JSON-LD in index.html against squadron.js ---------------------------
const html = readFileSync(join(root, "index.html"), "utf8");
const ld = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
const digits = (s) => s.replace(/\D/g, "").replace(/^44/, "0");

check(ld.name.startsWith(squadron.name), `JSON-LD name "${ld.name}" doesn't start with "${squadron.name}"`);
check(ld.url.replace(/\/$/, "") === squadron.siteUrl, `JSON-LD url ${ld.url} isn't ${squadron.siteUrl}`);
check(ld.email === squadron.email, `JSON-LD email ${ld.email} isn't ${squadron.email}`);
check(digits(ld.telephone) === digits(squadron.phone), `JSON-LD telephone ${ld.telephone} isn't ${squadron.phone}`);
const place = ld.location;
const addr = place.address;
check(place.name === squadron.address.venue, `JSON-LD venue "${place.name}" isn't "${squadron.address.venue}"`);
check(addr.streetAddress === squadron.address.street, `JSON-LD street "${addr.streetAddress}" isn't "${squadron.address.street}"`);
check(addr.addressLocality === squadron.address.town, `JSON-LD town "${addr.addressLocality}" isn't "${squadron.address.town}"`);
check(addr.postalCode === squadron.address.postcode, `JSON-LD postcode "${addr.postalCode}" isn't "${squadron.address.postcode}"`);
const socials = Object.values(squadron.socials).sort();
check(
  JSON.stringify([...ld.sameAs].sort()) === JSON.stringify(socials),
  `JSON-LD sameAs ${JSON.stringify(ld.sameAs)} isn't the socials in squadron.js ${JSON.stringify(socials)}`,
);

// --- Hosts the code fetches or frames, against the CSP -------------------
const vercel = JSON.parse(readFileSync(join(root, "vercel.json"), "utf8"));
const csp = vercel.headers
  .flatMap((h) => h.headers)
  .find((h) => h.key === "Content-Security-Policy")?.value;
check(csp, "vercel.json has no Content-Security-Policy header");
const directive = (name) =>
  (csp ?? "").split(";").map((d) => d.trim().split(/\s+/)).find(([n]) => n === name)?.slice(1) ?? [];

const sources = [];
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path);
    // G-appsScript.js is a reference copy of server-side code, never shipped.
    else if (/\.(jsx?|mjs)$/.test(name) && name !== "G-appsScript.js") sources.push(path);
  }
};
walk(join(root, "src"));

for (const file of sources) {
  const code = readFileSync(file, "utf8");
  const rel = file.slice(root.length);
  for (const [, url] of code.matchAll(/fetch\(\s*["'`](https:\/\/[^/"'`]+)/g)) {
    check(directive("connect-src").includes(url), `${rel} fetches ${url}, which connect-src doesn't allow`);
  }
  for (const [, url] of code.matchAll(/\|\|\s*["'`](https:\/\/[^/"'`]+)/g)) {
    // API base URLs with an env override (`import.meta.env.X || "https://…"`).
    check(directive("connect-src").includes(url), `${rel} defaults to ${url}, which connect-src doesn't allow`);
  }
  for (const [, url] of code.matchAll(/<iframe[\s\S]*?src=["'](https:\/\/[^/"']+)/g)) {
    check(directive("frame-src").includes(url), `${rel} frames ${url}, which frame-src doesn't allow`);
  }
}

if (problems.length) {
  console.error(problems.map((p) => `✗ ${p}`).join("\n"));
  process.exit(1);
}
console.log(`Site data OK: JSON-LD matches squadron.js; ${sources.length} source files checked against the CSP.`);
