// The joining form's steps: RAFAC 3822A (consent certificate) and 3822H
// (health declaration) as one flow. Each step gets the answers, `set` to change
// one section of them, and the API's option lists, whose labels are the
// wording staff see on SMS too.

import { Checks, Choice, ReadMore, TextField, YesNo } from "./fields";

const GENDERS = [
    { key: "male", label: "Male" },
    { key: "female", label: "Female" },
    { key: "pnts", label: "Prefer not to say" },
    { key: "other", label: "Other" },
];
const PRONOUNS = [
    { key: "he", label: "He/Him" },
    { key: "she", label: "She/Her" },
    { key: "they", label: "They/Them" },
];
const SEVERITIES = [
    { key: "mild", label: "Mild" },
    { key: "moderate", label: "Moderate" },
    { key: "severe", label: "Severe" },
];

const EMPTY_CONDITION = {
    name: "", severity: null, soughtAdvice: null, routine: "", strenuous: "", control: "",
    medication: "", dosage: "", storage: "",
};

function Address({ value, onChange, who }) {
    const field = (key) => ({ value: value[key], onChange: (v) => onChange({ [key]: v }) });
    return (
        <div className="grid gap-4 sm:grid-cols-2">
            <TextField label="House name or number" autoComplete="address-line1" {...field("property")} />
            <TextField label="Street" autoComplete="address-line2" {...field("street")} />
            <TextField label="Area" optional autoComplete="address-line3" {...field("area")} />
            <TextField label="Town" autoComplete="address-level2" {...field("town")} />
            <TextField label="County" optional autoComplete="address-level1" {...field("county")} />
            <TextField label="Country" optional autoComplete="country-name" {...field("country")} />
            <TextField label="Postcode" autoComplete="postal-code" className="sm:col-span-2 sm:max-w-48" {...field("postcode")} />
            <TextField label="Mobile phone" type="tel" autoComplete="tel" hint="At least one phone number." {...field("mobile")} />
            <TextField label="Home phone" type="tel" optional {...field("homePhone")} />
            <TextField label="Email" type="email" autoComplete="email" className="sm:col-span-2" hint={who === "cadet"
                ? "Used to set up their Cadet Portal account, including password resets. Ideally one your child can get into, but it can be yours."
                : undefined} {...field("email")} />
            <TextField label="Second email" type="email" optional className="sm:col-span-2" {...field("email2")} />
        </div>
    );
}

const ADDRESS_KEYS = ["property", "street", "area", "town", "county", "country", "postcode", "homePhone"];

function CopyAddress({ from, onCopy }) {
    return (
        <button type="button" className="btn-outline px-4 py-2 text-sm" onClick={() => onCopy(Object.fromEntries(ADDRESS_KEYS.map((k) => [k, from[k]])))}>
            Same address as the cadet
        </button>
    );
}

export function CadetStep({ data, set, options }) {
    const c = data.cadet;
    const cadet = (patch) => set("cadet", patch);
    const groups = [...new Set(options.ethnicities.map((e) => e.group))];
    return (
        <>
            <p className="text-sm text-ink/80">
                Gender and ethnicity are collected for statistical reporting to the Ministry of Defence, with everything that
                could identify your child removed first.
            </p>
            <TextField label="Child's full name" autoComplete="off" value={c.fullName} onChange={(v) => cadet({ fullName: v })} />
            <div className="grid gap-4 sm:grid-cols-2">
                <TextField label="Date of birth" type="date" value={c.dob ?? ""} onChange={(v) => cadet({ dob: v || null })} max={new Date().toISOString().slice(0, 10)} />
                <TextField label="Religion" optional value={c.religion} onChange={(v) => cadet({ religion: v })} />
            </div>
            <Choice legend="Gender" options={GENDERS} value={c.gender} onChange={(v) => cadet({ gender: v })} columns={2} />
            {c.gender === "other" && <TextField label="Please specify" value={c.genderOther} onChange={(v) => cadet({ genderOther: v })} />}
            <Choice legend="Pronoun" options={PRONOUNS} value={c.pronoun} onChange={(v) => cadet({ pronoun: v })} columns={3} />
            <fieldset>
                <legend className="mb-1.5 text-sm font-semibold text-ink">Ethnicity</legend>
                <div className="space-y-4">
                    {groups.map((g) => (
                        <div key={g}>
                            <p className="mb-1.5 text-xs font-bold uppercase tracking-wide text-ink/60">{g}</p>
                            <div className="grid gap-2 sm:grid-cols-2">
                                {options.ethnicities.filter((e) => e.group === g).map((e) => (
                                    <label key={e.key} className={`flex min-h-11 cursor-pointer items-center gap-3 rounded-md border px-3 py-2 text-sm ${c.ethnicity === e.key ? "border-accent-dark bg-accent/10 font-semibold text-navy" : "border-gray-300 bg-white hover:border-accent-dark"}`}>
                                        <input type="radio" name="ethnicity" className="size-4 accent-[#2B6CB0]" checked={c.ethnicity === e.key} onChange={() => cadet({ ethnicity: e.key })} />
                                        {e.label}
                                    </label>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </fieldset>
            <YesNo
                legend="Is there a Local Authority representative working with your family?"
                hint="For example a Social Worker, Early Help Worker, Family Support Worker or Family Intervention Worker."
                value={c.externalAgency}
                onChange={(v) => cadet({ externalAgency: v })}
            />
        </>
    );
}

export function ContactStep({ data, set }) {
    return (
        <>
            <p className="text-sm text-ink/80">Your child&apos;s address and contact details. These set up their central record and Cadet Portal account.</p>
            <Address who="cadet" value={data.contact} onChange={(patch) => set("contact", patch)} />
        </>
    );
}

export function HistoryStep({ data, set, options }) {
    return (
        <>
            <p className="text-sm text-ink/80">Has your child ever been a member of any of these?</p>
            <div className="grid gap-5 sm:grid-cols-2">
                {options.organisations.map((o) => (
                    <YesNo key={o.key} legend={o.label} value={data.history[o.key]} onChange={(v) => set("history", { [o.key]: v })} />
                ))}
            </div>
            <TextField label="Any other youth organisation" optional value={data.history.other} onChange={(v) => set("history", { other: v })} />
        </>
    );
}

function PersonFields({ value, onChange, cadetAddress }) {
    return (
        <>
            <div className="grid gap-4 sm:grid-cols-[8rem_1fr]">
                <TextField label="Title" autoComplete="honorific-prefix" value={value.title} onChange={(v) => onChange({ title: v })} hint="Mr, Mrs, Ms, Dr…" />
                <TextField label="Full name" autoComplete="name" value={value.fullName} onChange={(v) => onChange({ fullName: v })} />
            </div>
            <TextField label="Relationship to the child" value={value.relationship} onChange={(v) => onChange({ relationship: v })} hint="Mother, father, grandparent, guardian…" />
            <CopyAddress from={cadetAddress} onCopy={onChange} />
            <Address value={value} onChange={onChange} />
        </>
    );
}

export function ParentStep({ data, set }) {
    const extraStarted = Object.values(data.extra).some(Boolean);
    return (
        <>
            <YesNo
                legend="Do you have parental responsibility for the child?"
                hint="As the person with parental responsibility, you're the one giving consent on this form."
                value={data.nok.hasParentalResponsibility}
                onChange={(v) => set("nok", { hasParentalResponsibility: v })}
            />
            <PersonFields value={data.nok} onChange={(patch) => set("nok", patch)} cadetAddress={data.contact} />
            <details className="rounded-md border border-gray-200 p-4" open={extraStarted}>
                <summary className="cursor-pointer font-semibold text-navy">Add another contact (optional)</summary>
                <div className="mt-4 space-y-4">
                    <PersonFields value={data.extra} onChange={(patch) => set("extra", patch)} cadetAddress={data.contact} />
                </div>
            </details>
        </>
    );
}

export function ConsentStep({ data, set, options }) {
    const c = data.consent;
    const label = (key) => options.consents.find((o) => o.key === key)?.label ?? key;
    const ask = (key, extra) => (
        <YesNo legend={`I consent to: ${label(key)}`} value={c[key]} onChange={(v) => set("consent", { [key]: v })} {...extra} />
    );
    return (
        <>
            <ReadMore title="Joining the RAF Air Cadets">
                <p>By signing, you consent to your child joining the RAF Air Cadets and confirm they are at least 12 years old and not below Year 8 at school (or at least 12 and in secondary education in Scotland).</p>
                <p>You&apos;re responsible for any clothing and equipment loaned to them, which remains Government property, and for returning it in good condition (fair wear and tear excepted) when they leave or when asked by an authorised officer.</p>
                <p>You can withdraw your consent, in writing, at any time.</p>
            </ReadMore>

            <section className="space-y-4">
                <h3 className="text-lg">Photos and video</h3>
                <ReadMore title="Read about photos and video">
                    <p>The RAF Air Cadets often photographs and films cadets at events. Images may appear in the press, promotional videos, websites, social media and occasionally on television, to promote and aid recruitment. Home addresses are never released to the media.</p>
                    <p>Images are stored within the Data Protection Act 2018 and UK GDPR. Some online training sessions and meetings are recorded and may be streamed on official RAF Air Cadets channels.</p>
                </ReadMore>
                {ask("photo")}
            </section>

            <section className="space-y-4">
                <h3 className="text-lg">Flying and gliding</h3>
                <ReadMore title="Read about flying">
                    <p>Your child may get passenger or instructional flights in British military registered aircraft, conducted under Military Aviation Authority regulation. They&apos;ll only fly with your consent, and will be thoroughly briefed and given safety equipment first.</p>
                    <p>Cadets may need further medical checks before flying in some aircraft types, and won&apos;t fly if found medically unsuitable.</p>
                    <p>The MOD does all it can to reduce the risks, and your child will be carefully supervised, but flying always involves an element of risk. Accidents are rare, but they can happen and can be fatal.</p>
                </ReadMore>
                {["flyingLight", "flyingSolo", "flyingPassenger", "flyingOther"].map((k) => <div key={k}>{ask(k)}</div>)}
            </section>

            <section className="space-y-4">
                <h3 className="text-lg">Marksmanship</h3>
                <ReadMore title="Read about marksmanship training">
                    <p>Your child may fire air rifles, small-bore rifles, full-bore rifles and shotguns on authorised live firing events, all under the Cadet Safe System of Training.</p>
                    <p>Before firing any weapon they&apos;ll be trained by qualified instructors and must pass a Weapon Handling Test, which they retake regularly. Every adult running the training is trained, current, competent and qualified, and regularly assessed.</p>
                    <p>The MOD reduces the risk as far as reasonably practicable and your child will be carefully supervised, but live firing always involves an element of risk. Accidents are rare, but they can happen and can be fatal.</p>
                </ReadMore>
                {ask("marksmanship")}
            </section>

            <section className="space-y-4">
                <h3 className="text-lg">Events and activities</h3>
                <ReadMore title="Read about lower and higher risk events">
                    <p>Cadets may take part in strenuous activities such as fieldcraft, adventure training and leadership exercises, designed to stretch them under controlled conditions and led by qualified staff.</p>
                    <p><strong>Lower risk</strong> events, covered by this form, include: minor public events in uniform (bag packs, local fairs, church services); other local events away from the unit that have been risk assessed as lower risk; travel to Air Experience Flights and Volunteer Gliding Squadrons; and online meetings and training on accredited MOD platforms.</p>
                    <p><strong>Higher risk</strong> events always need a separate consent form and health declaration from you each time. They include adventure training and Duke of Edinburgh expeditions, fieldcraft, large ceremonial parades on public roads, overnight stays, and anything else senior leadership identifies as higher risk.</p>
                    <p>Details of every event are on Cadet Portal (cadets.bader.mod.uk).</p>
                </ReadMore>
                {ask("strenuous")}
                {ask("lowerRisk", { hint: "If you say no, the squadron will give you a consent form and health declaration for each event away from the unit." })}
                {ask("medicalInform")}
                {ask("accommodation")}
                {c.accommodation && (
                    <Checks
                        legend="Which accommodation do you consent to?"
                        hint="Tick all that you're happy with."
                        options={options.accommodation}
                        value={c.accommodationTypes}
                        onChange={(v) => set("consent", { accommodationTypes: v })}
                    />
                )}
            </section>

            <section className="space-y-4">
                <h3 className="text-lg">Transport</h3>
                <ReadMore title="Read about transport">
                    <p>Cadets may travel to and from events by coach or minibus, or in unit or private vehicles driven by adult volunteers, other cadets&apos; parents, permanent staff or staff cadets over 18. Joining instructions for each event say how cadets will travel. Questions about a particular event go to the Officer Commanding or the event organiser.</p>
                </ReadMore>
                {ask("transport")}
            </section>

            <section className="space-y-4">
                <h3 className="text-lg">Medical treatment</h3>
                <ReadMore title="Read about medical emergencies">
                    <p>If your child has a medical emergency at an event, they may need to go to the nearest suitable hospital. Some health conditions, and the steps that manage them, can limit which activities your child can do. You must tell the Officer Commanding about any change to your child&apos;s medical conditions.</p>
                </ReadMore>
                {ask("medicalTreatment")}
            </section>

            <section className="space-y-4">
                <h3 className="text-lg">Contacting you</h3>
                <p className="text-sm text-ink/80">Your email and phone number are how staff will mainly contact you about your child.</p>
                {ask("shareContact")}
            </section>
        </>
    );
}

function ConditionCard({ index, value, onChange, onRemove }) {
    const field = (key) => ({ value: value[key], onChange: (v) => onChange({ [key]: v }) });
    return (
        <div className="space-y-4 rounded-md border border-gray-200 bg-surface p-4">
            <div className="flex items-center justify-between gap-3">
                <h4 className="font-display text-xl">Condition {index + 1}</h4>
                <button type="button" onClick={onRemove} className="text-sm font-semibold text-maroon underline underline-offset-2">Remove</button>
            </div>
            <TextField label="Name of the condition" {...field("name")} />
            <Choice legend="How severe is it?" options={SEVERITIES} value={value.severity} onChange={(v) => onChange({ severity: v })} columns={3} />
            <YesNo legend="Have you sought advice from a healthcare professional about it?" value={value.soughtAdvice} onChange={(v) => onChange({ soughtAdvice: v })} />
            <TextField multiline label="How does it affect your child during normal routine activities?" optional {...field("routine")} />
            <TextField multiline label="How does it affect them during strenuous activities?" optional {...field("strenuous")} />
            <TextField multiline label="Can they control it without further intervention?" optional {...field("control")} />
            <div className="grid gap-4 sm:grid-cols-3">
                <TextField label="Medication" optional {...field("medication")} />
                <TextField label="Dosage and frequency" optional {...field("dosage")} />
                <TextField label="Storage requirements" optional {...field("storage")} />
            </div>
        </div>
    );
}

export function MedicalStep({ data, set, options }) {
    const m = data.medical;
    const medical = (patch) => set("medical", patch);
    const setAllergy = (key, patch) => medical({ allergies: { ...m.allergies, [key]: { ...m.allergies[key], ...patch } } });
    const toggleAllergy = (key) => {
        const next = { ...m.allergies };
        if (next[key]) delete next[key];
        else next[key] = { autoInjector: false, severity: null };
        medical({ allergies: next });
    };
    const details = (list) => medical({ details: list });
    return (
        <>
            <YesNo
                legend="Does your child have any medical conditions, special educational needs, allergies or special dietary requirements?"
                hint="If yes, the rest of this step is the health declaration (RAFAC Form 3822H)."
                value={m.has}
                onChange={(v) => medical({ has: v })}
            />
            {m.has && (
                <>
                    <Checks
                        legend="Conditions"
                        hint="Tick any that may have a substantial or long-term effect on your child's everyday activities."
                        options={options.conditions}
                        value={m.conditions}
                        onChange={(v) => medical({ conditions: v, details: v.length && !m.details.length ? [{ ...EMPTY_CONDITION }] : m.details })}
                        optional
                    />
                    <YesNo legend="Does your child have an Education, Health and Care Plan?" value={m.ehcPlan} onChange={(v) => medical({ ehcPlan: v })} />
                    {m.ehcPlan && (
                        <YesNo
                            legend="Are you willing to provide a copy of it?"
                            hint="It helps us understand your child's needs and make sure the right support is in place."
                            value={m.ehcCopy}
                            onChange={(v) => medical({ ehcCopy: v })}
                        />
                    )}

                    {(m.conditions.length > 0 || m.details.length > 0) && (
                        <section className="space-y-4">
                            <h3 className="text-lg">About each condition</h3>
                            <p className="text-sm text-ink/80">Tell us how each condition affects your child, so we can look after them properly.</p>
                            {m.details.map((d, i) => (
                                <ConditionCard
                                    key={i}
                                    index={i}
                                    value={d}
                                    onChange={(patch) => details(m.details.map((x, j) => (j === i ? { ...x, ...patch } : x)))}
                                    onRemove={() => details(m.details.filter((_, j) => j !== i))}
                                />
                            ))}
                            {m.details.length < 10 && (
                                <button type="button" className="btn-outline px-4 py-2 text-sm" onClick={() => details([...m.details, { ...EMPTY_CONDITION }])}>
                                    Add {m.details.length ? "another" : "a"} condition
                                </button>
                            )}
                        </section>
                    )}

                    <section className="space-y-3">
                        <h3 className="text-lg">Allergies</h3>
                        <p className="text-sm text-ink/80">Tick any allergies, then say how severe each is and whether an auto-injector (such as an EpiPen) is used.</p>
                        <div className="space-y-2">
                            {options.allergies.map((a) => {
                                const chosen = m.allergies[a.key];
                                return (
                                    <div key={a.key} className={`rounded-md border px-3 py-2 ${chosen ? "border-accent-dark bg-accent/10" : "border-gray-300"}`}>
                                        <label className="flex min-h-9 cursor-pointer items-center gap-3 text-sm">
                                            <input type="checkbox" className="size-4 accent-[#2B6CB0]" checked={!!chosen} onChange={() => toggleAllergy(a.key)} />
                                            <span className={chosen ? "font-semibold text-navy" : ""}>{a.label}</span>
                                        </label>
                                        {chosen && (
                                            <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-2 pl-7 text-sm">
                                                <fieldset className="flex flex-wrap items-center gap-3">
                                                    <legend className="sr-only">{a.label}: severity</legend>
                                                    {SEVERITIES.map((s) => (
                                                        <label key={s.key} className="flex min-h-9 items-center gap-1.5">
                                                            <input type="radio" name={`allergy-${a.key}`} className="size-4 accent-[#2B6CB0]" checked={chosen.severity === s.key} onChange={() => setAllergy(a.key, { severity: s.key })} />
                                                            {s.label}
                                                        </label>
                                                    ))}
                                                </fieldset>
                                                <label className="flex min-h-9 items-center gap-1.5">
                                                    <input type="checkbox" className="size-4 accent-[#2B6CB0]" checked={chosen.autoInjector} onChange={(e) => setAllergy(a.key, { autoInjector: e.target.checked })} />
                                                    Uses an auto-injector
                                                </label>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                        {m.allergies.other && <TextField label="Tell us about the other allergy" value={m.allergyOther} onChange={(v) => medical({ allergyOther: v })} />}
                    </section>

                    <Checks legend="Dietary requirements" options={options.diets} value={m.diet} onChange={(v) => medical({ diet: v })} optional />
                    {m.diet.includes("other") && <TextField label="Tell us about the other dietary requirement" value={m.dietOther} onChange={(v) => medical({ dietOther: v })} />}
                </>
            )}
        </>
    );
}

export function AboutStep({ data, set }) {
    const about = (patch) => set("about", patch);
    return (
        <>
            <TextField label="School" value={data.about.school} onChange={(v) => about({ school: v })} />
            <TextField multiline label="Where did you hear about the squadron?" optional value={data.about.heardFrom} onChange={(v) => about({ heardFrom: v })} />
            <TextField multiline label="Why does your child want to join?" optional value={data.about.reason} onChange={(v) => about({ reason: v })} />
        </>
    );
}

