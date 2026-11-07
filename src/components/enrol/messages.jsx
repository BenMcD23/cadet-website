// The framed message the joining form and the sign-up page show for every
// state that isn't the form itself (loading, closed, a bad link, thank you),
// so they read as one thing.

import { Link } from "react-router-dom";

import { squadron } from "../../data/squadron";

export function Message({ title, children }) {
    return (
        <div className="section bg-surface">
            <div className="section-container">
                <div className="card mx-auto max-w-2xl space-y-3 p-6 md:p-8">
                    <h2 className="text-2xl">{title}</h2>
                    <span className="raf-flash"></span>
                    <div className="space-y-3 text-ink/85">{children}</div>
                </div>
            </div>
        </div>
    );
}

export function Contact() {
    return (
        <p>
            Questions? Email <a className="font-semibold text-navy underline" href={`mailto:${squadron.enrolEmail}`}>{squadron.enrolEmail}</a> or{" "}
            <Link className="font-semibold text-navy underline" to="/contact">contact the squadron</Link>.
        </p>
    );
}
