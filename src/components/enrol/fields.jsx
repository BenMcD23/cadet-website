// Form controls for the joining form. Native inputs throughout (radios for
// yes/no, checkboxes for "tick all that apply") so they work with a keyboard,
// a screen reader and a phone's own pickers without any library.

import { useId } from "react";

const inputClasses =
    "block w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-base text-ink shadow-xs focus:border-accent-dark focus:outline-hidden focus:ring-2 focus:ring-accent";

function Label({ htmlFor, children, optional }) {
    return (
        <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-ink">
            {children}
            {optional && <span className="font-normal text-ink/60"> (optional)</span>}
        </label>
    );
}

export function Hint({ id, children }) {
    return children ? <p id={id} className="mb-1.5 text-sm text-ink/70">{children}</p> : null;
}

export function TextField({ label, value, onChange, optional, hint, type = "text", multiline, className = "", ...rest }) {
    const id = useId();
    const Tag = multiline ? "textarea" : "input";
    return (
        <div className={className}>
            <Label htmlFor={id} optional={optional}>{label}</Label>
            <Hint id={`${id}-hint`}>{hint}</Hint>
            <Tag
                id={id}
                className={inputClasses}
                type={multiline ? undefined : type}
                rows={multiline ? 3 : undefined}
                value={value ?? ""}
                aria-describedby={hint ? `${id}-hint` : undefined}
                onChange={(e) => onChange(e.target.value)}
                maxLength={multiline ? 2000 : 200}
                {...rest}
            />
        </div>
    );
}

function Fieldset({ legend, hint, optional, children, className = "" }) {
    const id = useId();
    return (
        <fieldset className={className} aria-describedby={hint ? `${id}-hint` : undefined}>
            <legend className="mb-1.5 text-sm font-semibold text-ink">
                {legend}
                {optional && <span className="font-normal text-ink/60"> (optional)</span>}
            </legend>
            <Hint id={`${id}-hint`}>{hint}</Hint>
            {children}
        </fieldset>
    );
}

const optionClasses = (checked) =>
    `flex min-h-11 cursor-pointer items-center gap-3 rounded-md border px-3 py-2 text-sm transition-colors ${
        checked ? "border-accent-dark bg-accent/10 font-semibold text-navy" : "border-gray-300 bg-white hover:border-accent-dark"
    }`;

/** One choice from a list, as radio buttons. */
export function Choice({ legend, hint, options, value, onChange, columns = 1 }) {
    const name = useId();
    return (
        <Fieldset legend={legend} hint={hint}>
            <div className={`grid gap-2 ${columns === 2 ? "sm:grid-cols-2" : columns === 3 ? "sm:grid-cols-3" : ""}`}>
                {options.map((o) => (
                    <label key={o.key} className={optionClasses(value === o.key)}>
                        <input
                            type="radio"
                            name={name}
                            className="size-4 accent-accent-dark"
                            checked={value === o.key}
                            onChange={() => onChange(o.key)}
                        />
                        {o.label}
                    </label>
                ))}
            </div>
        </Fieldset>
    );
}

/** A yes/no question. "No" is an answer as much as "Yes" is. */
export function YesNo({ legend, hint, value, onChange, className = "" }) {
    const name = useId();
    return (
        <Fieldset legend={legend} hint={hint} className={className}>
            <div className="flex gap-2">
                {[
                    [true, "Yes"],
                    [false, "No"],
                ].map(([v, text]) => (
                    <label key={text} className={`${optionClasses(value === v)} w-24 justify-center`}>
                        <input
                            type="radio"
                            name={name}
                            className="size-4 accent-accent-dark"
                            checked={value === v}
                            onChange={() => onChange(v)}
                        />
                        {text}
                    </label>
                ))}
            </div>
        </Fieldset>
    );
}

/** Tick all that apply. */
export function Checks({ legend, hint, options, value, onChange, columns = 2, optional }) {
    const toggle = (key) => onChange(value.includes(key) ? value.filter((k) => k !== key) : [...value, key]);
    return (
        <Fieldset legend={legend} hint={hint} optional={optional}>
            <div className={`grid gap-2 ${columns === 2 ? "sm:grid-cols-2" : ""}`}>
                {options.map((o) => (
                    <label key={o.key} className={optionClasses(value.includes(o.key))}>
                        <input
                            type="checkbox"
                            className="size-4 accent-accent-dark"
                            checked={value.includes(o.key)}
                            onChange={() => toggle(o.key)}
                        />
                        {o.label}
                    </label>
                ))}
            </div>
        </Fieldset>
    );
}

/** The form's own wording, folded away so the question stays in view. */
export function ReadMore({ title, children }) {
    return (
        <details className="group rounded-md border border-gray-200 bg-surface px-4 py-3 text-sm text-ink/80">
            <summary className="cursor-pointer font-semibold text-navy">{title}</summary>
            <div className="mt-3 space-y-2">{children}</div>
        </details>
    );
}
