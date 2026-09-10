import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { squadron } from "../data/squadron";

const SITE_NAME = "317 Squadron RAF Air Cadets";
const DEFAULT_DESCRIPTION =
    "317 (Failsworth & Newton Heath) Squadron RAF Air Cadets. Flying, adventure training, shooting, DofE and friends for life for 12 to 17 year olds in Failsworth, Newton Heath and Oldham.";

function setMeta(attr, key, content) {
    let el = document.head.querySelector(`meta[${attr}="${key}"]`);
    if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
    }
    el.setAttribute("content", content);
}

function setCanonical(href) {
    let el = document.head.querySelector('link[rel="canonical"]');
    if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", "canonical");
        document.head.appendChild(el);
    }
    el.setAttribute("href", href);
}

/**
 * Sets the document title, meta description, Open Graph tags and canonical
 * URL for the current page. Call once at the top of each page component.
 *
 *   usePageMeta({ title: "Programme", description: "..." });
 */
export function usePageMeta({ title, description } = {}) {
    const { pathname } = useLocation();

    useEffect(() => {
        const fullTitle = title ? `${title} | ${SITE_NAME}` : `${squadron.name} | RAF Air Cadets`;
        const desc = description || DEFAULT_DESCRIPTION;
        const url = squadron.siteUrl + (pathname === "/" ? "/" : pathname.replace(/\/$/, ""));

        document.title = fullTitle;
        setMeta("name", "description", desc);
        setMeta("property", "og:title", fullTitle);
        setMeta("property", "og:description", desc);
        setMeta("property", "og:url", url);
        setMeta("name", "twitter:title", fullTitle);
        setMeta("name", "twitter:description", desc);
        setCanonical(url);
    }, [title, description, pathname]);
}
