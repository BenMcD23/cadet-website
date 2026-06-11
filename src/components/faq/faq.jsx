import { faqs } from "../../data/faq";

function Faq() {
    return (
        <div className="mx-auto max-w-3xl space-y-3">
            {faqs.map((f) => (
                <details key={f.id} className="group rounded-lg border border-gray-200 bg-white shadow-sm open:shadow-md">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-semibold text-navy [&::-webkit-details-marker]:hidden">
                        {f.question}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-4 shrink-0 text-accent-dark transition-transform group-open:rotate-180">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </summary>
                    <p className="px-5 pb-4 leading-relaxed text-ink/80">{f.answer}</p>
                </details>
            ))}
        </div>
    );
}

export default Faq;
