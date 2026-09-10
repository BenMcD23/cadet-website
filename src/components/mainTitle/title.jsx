/*
 * Section heading. Left-aligned with the RAF three-colour flash underneath.
 *
 *   <Title eyebrow="Activities" title="What we do" lead="One or two sentences of context." />
 *
 * `light` flips the colours for use on a navy background; `center` centres it.
 */
function Title({ title, eyebrow, lead, light = false, center = false }) {
    return (
        <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
            {eyebrow && <p className={`eyebrow mb-2 ${light ? "text-accent" : ""}`}>{eyebrow}</p>}
            <h2 className={`text-3xl leading-none md:text-4xl ${light ? "text-white" : "text-navy"}`}>
                {title}
            </h2>
            <span className={`${light ? "raf-flash-light" : "raf-flash"} mt-4 ${center ? "mx-auto" : ""}`}></span>
            {lead && <p className={`mt-4 leading-relaxed ${light ? "text-white/85" : "text-ink/75"}`}>{lead}</p>}
        </div>
    )
}

export default Title;
