// Calls to the squadron API for the joining form. The token in the link is the
// only credential, so there's no sign-in: every call just carries it in the path.

const API_BASE = (import.meta.env.VITE_API_BASE || "https://smsapi.317atc.co.uk").replace(/\/$/, "");

const OFFLINE =
    "We couldn't reach the squadron's server. Your answers are kept on this device — check your connection and try again.";

/** FastAPI's detail as one sentence: a string for our own errors, a list of
 *  field problems when the schema refuses something. */
function message(detail, fallback) {
    if (typeof detail === "string") return detail;
    if (detail?.message) return detail.message;
    if (Array.isArray(detail)) {
        const fields = detail.map((d) => d?.loc?.slice(2).join(" › ")).filter(Boolean);
        if (fields.length) return `Some answers aren't in a form we can accept (${fields.join(", ")}). Check them and try again.`;
    }
    return fallback;
}

async function call(method, path, body) {
    let res;
    try {
        res = await fetch(`${API_BASE}/recruit-form/${path}`, {
            method,
            headers: body ? { "Content-Type": "application/json" } : undefined,
            body: body ? JSON.stringify(body) : undefined,
        });
    } catch {
        throw Object.assign(new Error(OFFLINE), { offline: true });
    }
    const data = await res.json().catch(() => null);
    if (!res.ok) {
        const fallback = res.status >= 500 ? "Something went wrong on our side. Try again in a minute." : "That didn't work.";
        throw Object.assign(new Error(message(data?.detail, fallback)), {
            status: res.status,
            missing: data?.detail?.missing,
        });
    }
    return data;
}

const enc = encodeURIComponent;

export const loadForm = (token) => call("GET", enc(token));
export const saveForm = (token, data) => call("PUT", enc(token), { data });
export const submitForm = (token, data, parentSignature, cadetSignature) =>
    call("POST", `${enc(token)}/submit`, { data, parentSignature, cadetSignature });
