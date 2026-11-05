// Every newsletter issue, newest first. The SMS API commits newsletters.json
// and the PDFs in public/newsletters/ when staff upload or edit an issue
// (app/routers/newsletters.py), so read issues from here rather than the JSON.
import data from "./newsletters.json";

export const newsletters = [...data].sort((a, b) => b.issue - a.issue);

// The highest issue number is the current one, shown on the home page and at /newsletter.
export const currentNewsletter = newsletters[0] ?? null;

export function getNewsletter(id) {
    return newsletters.find((n) => n.id === id) ?? null;
}
