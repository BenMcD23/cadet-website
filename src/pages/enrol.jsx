// The online joining form a new recruit's parent fills in at home, from the
// link the squadron sends them (/enrol/<token>). It replaces the paper RAFAC
// 3822A and 3822H: the answers go to 317 SMS, where staff get the filled forms.
//
// Progress is kept in two places. Every change goes to this device's storage
// straight away, so a closed tab or a dropped connection loses nothing; it's
// saved to the squadron's server when the parent moves between steps or presses
// "Save progress", rather than on every keystroke.

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";

import PageHeader from "../components/pageHeader/pageHeader";
import { Icon } from "../components/icons/Icon";
import SignaturePad from "../components/enrol/SignaturePad";
import { TextField } from "../components/enrol/fields";
import { loadForm, saveForm, submitForm } from "../components/enrol/api";
import { AboutStep, CadetStep, ConsentStep, ContactStep, HistoryStep, MedicalStep, ParentStep } from "../components/enrol/steps";
import { squadron } from "../data/squadron";

const STEP_COMPONENTS = {
    cadet: CadetStep,
    contact: ContactStep,
    history: HistoryStep,
    parent: ParentStep,
    consent: ConsentStep,
    medical: MedicalStep,
    about: AboutStep,
};

const storageKey = (token) => `enrol:${token}`;

// Storage can be blocked (private browsing) or full; the form still works,
// it just can't keep an unsaved copy on the device.
function readLocal(token) {
    try {
        return JSON.parse(localStorage.getItem(storageKey(token)));
    } catch {
        return null;
    }
}
function writeLocal(token, data) {
    try {
        localStorage.setItem(storageKey(token), JSON.stringify({ data, at: Date.now() }));
    } catch {
        // See readLocal.
    }
}
function clearLocal(token) {
    try {
        localStorage.removeItem(storageKey(token));
    } catch {
        // See readLocal.
    }
}

function ageOn(dob, day) {
    if (!dob) return null;
    const [y, m, d] = dob.split("-").map(Number);
    return day.getFullYear() - y - (day.getMonth() + 1 < m || (day.getMonth() + 1 === m && day.getDate() < d) ? 1 : 0);
}

function formatDay(iso) {
    return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

function formatTime(iso) {
    return new Date(iso).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
}

function Message({ title, children }) {
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

function Contact() {
    return (
        <p>
            Questions? Email <a className="font-semibold text-navy underline" href={`mailto:${squadron.email}`}>{squadron.email}</a> or{" "}
            <Link className="font-semibold text-navy underline" to="/contact">contact the squadron</Link>.
        </p>
    );
}

function Enrol() {
    const { token } = useParams();
    const [state, setState] = useState("loading"); // loading | bad | error | open | submitted
    const [loadError, setLoadError] = useState(null);
    const [view, setView] = useState(null); // the API's public view
    const [data, setData] = useState(null);
    const [missing, setMissing] = useState({});
    const [dirty, setDirty] = useState(false);
    const [saving, setSaving] = useState(false);
    const [saveError, setSaveError] = useState(null);
    const [restored, setRestored] = useState(false);
    const [stepIndex, setStepIndex] = useState(0);
    const [parentSig, setParentSig] = useState(null);
    const [cadetSig, setCadetSig] = useState(null);
    const [submitError, setSubmitError] = useState(null);
    const [submitting, setSubmitting] = useState(false);
    const topRef = useRef(null);

    // The link is a secret: keep the page out of search engines.
    useEffect(() => {
        document.title = `Joining form | ${squadron.name}`;
        const robots = document.createElement("meta");
        robots.name = "robots";
        robots.content = "noindex, nofollow";
        document.head.appendChild(robots);
        return () => robots.remove();
    }, []);

    const load = useCallback(async () => {
        setState("loading");
        try {
            const v = await loadForm(token);
            setView(v);
            if (v.status === "submitted") {
                clearLocal(token);
                setState("submitted");
                return;
            }
            const local = readLocal(token);
            const serverAt = v.lastSavedAt ? Date.parse(v.lastSavedAt) : 0;
            if (local?.data && local.at > serverAt) {
                setData(local.data);
                setDirty(true);
                setRestored(true);
            } else {
                setData(v.data);
            }
            setMissing(v.missing);
            setState("open");
        } catch (e) {
            if (e.status === 404) setState("bad");
            else {
                setLoadError(e.message);
                setState("error");
            }
        }
    }, [token]);

    useEffect(() => {
        load();
    }, [load]);

    // Warn before leaving with answers the server hasn't got. They're on this
    // device too, but a parent switching to their phone wouldn't see them.
    useEffect(() => {
        if (!dirty) return;
        const warn = (e) => {
            e.preventDefault();
            e.returnValue = "";
        };
        window.addEventListener("beforeunload", warn);
        return () => window.removeEventListener("beforeunload", warn);
    }, [dirty]);

    const set = useCallback(
        (section, patch) => {
            setData((prev) => {
                const next = { ...prev, [section]: { ...prev[section], ...patch } };
                writeLocal(token, next);
                return next;
            });
            setDirty(true);
        },
        [token]
    );

    async function save() {
        if (!dirty) return true;
        setSaving(true);
        setSaveError(null);
        try {
            const v = await saveForm(token, data);
            setMissing(v.missing);
            setView((prev) => ({ ...prev, lastSavedAt: v.lastSavedAt }));
            setDirty(false);
            setRestored(false);
            clearLocal(token);
            return true;
        } catch (e) {
            if (e.status === 404) setState("bad");
            else if (e.status === 409) load();
            else setSaveError(e.message);
            return false;
        } finally {
            setSaving(false);
        }
    }

    // On a phone the step list is a sideways strip: keep the current step in it visible.
    useEffect(() => {
        document.querySelector('nav[aria-label="Form steps"] [aria-current="step"]')?.scrollIntoView({ block: "nearest", inline: "center" });
    }, [stepIndex, state]);

    async function goTo(i) {
        // Move on even if the save failed: the answers are still on this
        // device, and the error stays on screen until a save works.
        await save();
        setStepIndex(i);
        topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    const steps = useMemo(() => view?.options?.steps ?? [], [view]);
    const step = steps[stepIndex];
    const outstanding = useMemo(() => steps.filter((s) => missing[s.key]?.length), [steps, missing]);
    // From 16 the cadet signs the health declaration themselves. A submitted
    // view carries no options; the thank-you screen needs none.
    const cadetOldEnough = useMemo(() => {
        if (!data || !view?.options) return false;
        const age = ageOn(data.cadet.dob, new Date());
        return age !== null && age >= view.options.cadetSignsFromAge;
    }, [data, view]);
    // Only the 3822H has a cadet signature box, so no health declaration, no cadet signature.
    const cadetSigns = cadetOldEnough && !!data?.medical.has;

    async function submit() {
        setSubmitError(null);
        if (!parentSig) return setSubmitError("Please sign in the box above.");
        if (cadetSigns && !cadetSig) return setSubmitError(`${view.cadetFirstName} needs to sign the health declaration too.`);
        setSubmitting(true);
        try {
            const v = await submitForm(token, data, parentSig, cadetSigns ? cadetSig : null);
            clearLocal(token);
            setDirty(false);
            setView(v);
            setState("submitted");
            topRef.current?.scrollIntoView({ block: "start" });
        } catch (e) {
            if (e.missing) {
                setMissing(e.missing);
                setDirty(false);
                clearLocal(token);
            }
            setSubmitError(e.message);
        } finally {
            setSubmitting(false);
        }
    }

    if (state === "loading") {
        return (
            <>
                <PageHeader eyebrow="Joining 317 Squadron" title="Joining form" />
                <Message title="Loading your form…"><p>Just a moment.</p></Message>
            </>
        );
    }
    if (state === "bad") {
        return (
            <>
                <PageHeader eyebrow="Joining 317 Squadron" title="Joining form" />
                <Message title="This link isn't working">
                    <p>It may have expired, or it may have been copied only partly. Links last 14 days, and the squadron can send you a new one. Anything you&apos;ve already filled in is kept.</p>
                    <Contact />
                </Message>
            </>
        );
    }
    if (state === "error") {
        return (
            <>
                <PageHeader eyebrow="Joining 317 Squadron" title="Joining form" />
                <Message title="We couldn't load your form">
                    <p>{loadError}</p>
                    <button type="button" className="btn-primary" onClick={load}>Try again</button>
                </Message>
            </>
        );
    }
    if (state === "submitted") {
        return (
            <>
                <PageHeader eyebrow="Joining 317 Squadron" title="Joining form" />
                <div ref={topRef} />
                <Message title="Thank you, that's everything">
                    <p>
                        {view.cadetFirstName}&apos;s joining forms reached the squadron
                        {view.submittedAt ? ` on ${formatDay(view.submittedAt)}` : ""}. Staff will add them to the Cadet Forces
                        system and set up {view.cadetFirstName}&apos;s Cadet Portal account.
                    </p>
                    <p>If anything changes, especially anything medical, let the squadron know.</p>
                    <Contact />
                </Message>
            </>
        );
    }

    const isSign = stepIndex === steps.length - 1;
    const StepBody = STEP_COMPONENTS[step.key];
    const savedNote = saving
        ? "Saving…"
        : dirty
            ? "Not saved yet"
            : view.lastSavedAt
                ? `Saved at ${formatTime(view.lastSavedAt)}`
                : null;

    return (
        <>
            <PageHeader
                eyebrow="Joining 317 Squadron"
                title={`Joining form for ${view.cadetFirstName}`}
                intro={`This is the consent certificate and health declaration (RAFAC 3822A and 3822H). It takes about 15 minutes, and you don't need to do it in one go: your answers save as you move between steps, and you can come back to this link until ${formatDay(view.expiresAt)}.`}
            />

            <div className="section bg-surface" ref={topRef}>
                <div className="section-container grid grid-cols-1 items-start gap-6 lg:grid-cols-[16rem_1fr]">
                    <nav aria-label="Form steps" className="min-w-0 lg:sticky lg:top-24">
                        <p className="mb-2 text-sm font-semibold text-ink/70 lg:hidden">
                            Step {stepIndex + 1} of {steps.length}
                        </p>
                        <ol className="flex gap-1 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible">
                            {steps.map((s, i) => {
                                const done = s.key !== "sign" && !missing[s.key]?.length;
                                const current = i === stepIndex;
                                return (
                                    <li key={s.key} className="shrink-0">
                                        <button
                                            type="button"
                                            onClick={() => goTo(i)}
                                            aria-current={current ? "step" : undefined}
                                            className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-left text-sm ${
                                                current ? "bg-navy font-semibold text-white" : "text-ink hover:bg-white"
                                            }`}
                                        >
                                            <span
                                                aria-hidden
                                                className={`flex size-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                                                    done ? "bg-accent-dark text-white" : current ? "bg-white text-navy" : "border border-gray-300 text-ink/70"
                                                }`}
                                            >
                                                {done ? <Icon name="check" className="size-3.5" strokeWidth={3} /> : i + 1}
                                            </span>
                                            <span className="whitespace-nowrap lg:whitespace-normal">{s.label}</span>
                                            <span className="sr-only">{done ? "(done)" : ""}</span>
                                        </button>
                                    </li>
                                );
                            })}
                        </ol>
                    </nav>

                    <div className="card min-w-0 space-y-6 p-5 md:p-8">
                        <div>
                            <h2 className="text-3xl">{step.label}</h2>
                            <span className="raf-flash mt-3"></span>
                        </div>

                        {restored && (
                            <p role="status" className="rounded-md border border-accent-dark/40 bg-accent/10 px-4 py-3 text-sm">
                                We&apos;ve brought back answers from this device that hadn&apos;t reached the squadron yet. They&apos;ll be saved when you carry on.
                            </p>
                        )}

                        {!isSign && <StepBody data={data} set={set} options={view.options} />}

                        {!isSign && missing[step.key]?.length > 0 && !dirty && (
                            <div className="rounded-md border border-gray-200 bg-surface px-4 py-3 text-sm">
                                <p className="font-semibold text-navy">Still to answer on this step</p>
                                <ul className="mt-1 list-disc pl-5 text-ink/80">
                                    {missing[step.key].map((m) => <li key={m}>{m}</li>)}
                                </ul>
                            </div>
                        )}

                        {isSign && (
                            <div className="space-y-6">
                                {outstanding.length > 0 && (
                                    <div className="rounded-md border border-maroon/30 bg-maroon/5 px-4 py-3 text-sm">
                                        <p className="font-semibold text-maroon">A few answers are still needed before you can sign</p>
                                        <ul className="mt-2 space-y-2">
                                            {outstanding.map((s) => (
                                                <li key={s.key}>
                                                    <button type="button" className="font-semibold text-navy underline" onClick={() => goTo(steps.indexOf(s))}>
                                                        {s.label}
                                                    </button>
                                                    <span className="text-ink/80">: {missing[s.key].join(", ")}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                <div className="space-y-2 text-sm text-ink/85">
                                    <h3 className="text-lg">Your agreement</h3>
                                    <p>By signing, I confirm that:</p>
                                    <ul className="list-disc space-y-1 pl-5">
                                        <li>I have parental responsibility for {view.cadetFirstName}, and give the consents I&apos;ve chosen on this form.</li>
                                        <li>I agree to {view.cadetFirstName}&apos;s personal data being processed by the RAF Air Cadets, and to their details (and any health declaration) being added to the Cadet Forces Management Information System to create their central record, including a Cadet Portal account. This is held under the Data Protection Act 2018 and UK GDPR, as set out in the RAF Air Cadets Privacy Notice for cadets.</li>
                                        {data.medical.has && (
                                            <li>I understand events can be strenuous and held in conditions (dust, fumes, extremes of temperature, altitude) that may aggravate {view.cadetFirstName}&apos;s condition(s); I have consulted a healthcare professional where in doubt; and I will tell the officer in charge of any change before an event.</li>
                                        )}
                                        <li>I can withdraw consent at any time by writing to the Officer Commanding.</li>
                                    </ul>
                                </div>

                                <div className="grid gap-4 sm:grid-cols-2">
                                    <TextField label="Your forename" autoComplete="given-name" value={data.signer.forename} onChange={(v) => set("signer", { forename: v })} />
                                    <TextField label="Your surname" autoComplete="family-name" value={data.signer.surname} onChange={(v) => set("signer", { surname: v })} />
                                </div>
                                <SignaturePad label="Parent or guardian's signature" onChange={setParentSig} />
                                {cadetOldEnough && !cadetSigns && (
                                    <p className="rounded-md border border-gray-200 bg-surface px-4 py-3 text-sm text-ink/85">
                                        {view.cadetFirstName} is {view.options.cadetSignsFromAge} or over, so they sign the health declaration themselves.{" "}
                                        {data.medical.has === false
                                            ? "You said they have no medical conditions, allergies or dietary needs, so there's no health declaration to sign and only you need to sign."
                                            : "Whether there is one depends on if they have any medical conditions, allergies or dietary needs: "}
                                        {data.medical.has === null && (
                                            <button type="button" className="font-semibold text-navy underline" onClick={() => goTo(steps.findIndex((x) => x.key === "medical"))}>
                                                answer that question
                                            </button>
                                        )}
                                    </p>
                                )}
                                {cadetSigns && (
                                    <div className="space-y-2">
                                        <p className="text-sm text-ink/85">
                                            Because {view.cadetFirstName} is {view.options.cadetSignsFromAge} or over, they sign the health declaration themselves.
                                        </p>
                                        <SignaturePad label={`${view.cadetFirstName}'s signature`} onChange={setCadetSig} />
                                    </div>
                                )}

                                {submitError && <p role="alert" className="rounded-md border border-maroon/30 bg-maroon/5 px-4 py-3 text-sm font-semibold text-maroon">{submitError}</p>}

                                <button type="button" className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto" onClick={submit} disabled={submitting}>
                                    {submitting ? "Sending…" : "Sign and send to the squadron"}
                                </button>
                            </div>
                        )}

                        {saveError && <p role="alert" className="rounded-md border border-maroon/30 bg-maroon/5 px-4 py-3 text-sm font-semibold text-maroon">{saveError}</p>}

                        <div className="flex flex-wrap items-center gap-3 border-t border-gray-200 pt-5">
                            {stepIndex > 0 && (
                                <button type="button" className="btn-outline" onClick={() => goTo(stepIndex - 1)} disabled={saving}>
                                    Back
                                </button>
                            )}
                            <button type="button" className="btn-outline" onClick={save} disabled={saving || !dirty}>
                                Save progress
                            </button>
                            {!isSign && (
                                <button type="button" className="btn-primary" onClick={() => goTo(stepIndex + 1)} disabled={saving}>
                                    Save and continue
                                </button>
                            )}
                            {savedNote && <span role="status" className="text-sm text-ink/70">{savedNote}</span>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Enrol;
