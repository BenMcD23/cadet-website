// The recruitment-evening sign-up page (/enrol, no token), which parents open
// by scanning the squadron's QR code on the night. It replaces the sheet they
// used to fill in: they give their child's name and date of birth and their own
// contact details, the child is added to SMS as a recruit, and the link to the
// full joining form is emailed to them (and offered here, to start straight away).
//
// It only takes sign-ups while staff have opened it on SMS, and it closes
// itself at midnight, so the same printed code works every recruitment evening.

import { useCallback, useEffect, useRef, useState } from "react";

import PageHeader from "../components/pageHeader/pageHeader";
import { Choice, TextField } from "../components/enrol/fields";
import { Contact, Message } from "../components/enrol/messages";
import { loadSignup, signUp } from "../components/enrol/api";
import { usePageMeta } from "../hooks/usePageMeta";

// Keys are what the API stores (and accepts), so don't reword them.
const POLO_SIZES = ["XS", "S", "M", "L", "XL"].map((key) => ({ key, label: key }));

const CHILD = { cadetFirstName: "", cadetLastName: "", cadetDob: "", poloSize: "" };
const PARENT = { parentName: "", parentEmail: "", parentMobile: "" };

const today = () => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};

function Header() {
    return <PageHeader eyebrow="Joining 317 Squadron" title="Sign up" />;
}

function EnrolSignup() {
    usePageMeta({ title: "Sign up", description: "Sign your child up to join 317 Squadron RAF Air Cadets." });
    const [state, setState] = useState("loading"); // loading | closed | error | open | done
    const [loadError, setLoadError] = useState(null);
    const [form, setForm] = useState({ ...CHILD, ...PARENT });
    // A field people never see, for bots that fill in every input.
    const [website, setWebsite] = useState("");
    const [sending, setSending] = useState(false);
    const [error, setError] = useState(null);
    const [result, setResult] = useState(null);
    const topRef = useRef(null);

    // Only useful on the night, from the code: keep it out of search results.
    useEffect(() => {
        const robots = document.createElement("meta");
        robots.name = "robots";
        robots.content = "noindex, nofollow";
        document.head.appendChild(robots);
        return () => robots.remove();
    }, []);

    const load = useCallback(async () => {
        setState("loading");
        try {
            const v = await loadSignup();
            setState(v?.open ? "open" : "closed");
        } catch (e) {
            setLoadError(e.message);
            setState("error");
        }
    }, []);

    useEffect(() => {
        load();
    }, [load]);

    const field = (key) => ({ value: form[key], onChange: (v) => setForm((f) => ({ ...f, [key]: v })) });

    async function submit(e) {
        e.preventDefault();
        setError(null);
        // Radios can't be marked required, so say it here rather than let the API refuse.
        if (!form.poloSize) {
            setError("Choose a polo size for your child.");
            return;
        }
        setSending(true);
        try {
            const r = await signUp({ ...form, website });
            setResult(r);
            setState("done");
            topRef.current?.scrollIntoView({ block: "start" });
        } catch (err) {
            // Staff closed it while this was being filled in.
            if (err.status === 409) setState("closed");
            else setError(err.message);
        } finally {
            setSending(false);
        }
    }

    // A brother or sister: the parent's details stay filled in.
    function another() {
        setForm((f) => ({ ...f, ...CHILD }));
        setResult(null);
        setError(null);
        setState("open");
        topRef.current?.scrollIntoView({ block: "start" });
    }

    if (state === "loading") {
        return (
            <>
                <Header />
                <Message title="Loading…"><p>Just a moment.</p></Message>
            </>
        );
    }
    if (state === "error") {
        return (
            <>
                <Header />
                <Message title="We couldn't load the sign-up page">
                    <p>{loadError}</p>
                    <button type="button" className="btn-primary" onClick={load}>Try again</button>
                </Message>
            </>
        );
    }
    if (state === "closed") {
        return (
            <>
                <Header />
                <Message title="Sign-ups aren't open at the moment">
                    <p>
                        This page opens at our recruitment evenings. If you&apos;re here for one, ask a member of
                        staff to open it and try again.
                    </p>
                    <button type="button" className="btn-outline" onClick={load}>Try again</button>
                    <Contact />
                </Message>
            </>
        );
    }
    if (state === "done") {
        return (
            <>
                <Header />
                <div ref={topRef} />
                <Message title={`Thank you, ${result.cadetFirstName} is signed up`}>
                    <p>
                        We&apos;ve emailed the link to {result.cadetFirstName}&apos;s joining form to{" "}
                        <strong className="break-words">{result.email}</strong>. It takes about 20 minutes, saves as
                        you go, and the link works for 14 days. If the email hasn&apos;t arrived, check your junk folder.
                    </p>
                    {result.link && (
                        <p>
                            <a className="btn-primary" href={result.link}>Start the joining form now</a>
                        </p>
                    )}
                    <p>
                        <button type="button" className="btn-outline" onClick={another}>Sign up another child</button>
                    </p>
                    <Contact />
                </Message>
            </>
        );
    }

    return (
        <>
            <Header />
            <div ref={topRef} />
            <div className="section bg-surface">
                <div className="section-container">
                    <form className="card mx-auto max-w-2xl space-y-6 p-6 md:p-8" onSubmit={submit}>
                        <p className="text-ink/85">
                            Fill this in and we&apos;ll email you a link to the joining form, to finish at home.
                        </p>

                        <fieldset className="space-y-4">
                            <legend className="mb-3 text-xl">Your child</legend>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <TextField label="First name" autoComplete="off" required {...field("cadetFirstName")} />
                                <TextField label="Last name" autoComplete="off" required {...field("cadetLastName")} />
                            </div>
                            <TextField label="Date of birth" type="date" required max={today()} {...field("cadetDob")} />
                            <Choice
                                legend="Polo shirt size"
                                hint="Your child gets a squadron polo in their first few weeks. Choose the size they would wear now."
                                options={POLO_SIZES}
                                compact
                                value={form.poloSize}
                                onChange={(poloSize) => setForm((f) => ({ ...f, poloSize }))}
                            />
                        </fieldset>

                        <fieldset className="space-y-4">
                            <legend className="mb-3 text-xl">You</legend>
                            <TextField label="Your full name" autoComplete="name" required {...field("parentName")} />
                            <TextField
                                label="Your email"
                                type="email"
                                autoComplete="email"
                                inputMode="email"
                                hint="The joining form link is sent here."
                                required
                                {...field("parentEmail")}
                            />
                            <TextField label="Your mobile" type="tel" autoComplete="tel" required {...field("parentMobile")} />
                        </fieldset>

                        <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
                            <label>
                                Website
                                <input tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
                            </label>
                        </div>

                        {error && (
                            <p role="alert" className="rounded-md border border-maroon/30 bg-maroon/5 px-4 py-3 text-sm font-semibold text-maroon">
                                {error}
                            </p>
                        )}

                        <button type="submit" className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto" disabled={sending}>
                            {sending ? "Signing up…" : "Sign up"}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default EnrolSignup;
