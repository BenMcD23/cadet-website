import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/pageHeader/pageHeader";
import { photos, sections } from "../data/gallery";
import { usePageMeta } from "../hooks/usePageMeta";

const categories = ["All", ...sections];

function Gallery() {
    usePageMeta({
        title: "Photo gallery",
        description: "Photos of 317 Squadron cadets on parade, in the band, on camps, DofE expeditions and more.",
    });
    const [cat, setCat] = useState("All");
    const [open, setOpen] = useState(null);
    const dialog = useRef(null);

    const shown = photos.filter((p) => cat === "All" || p.cat === cat);
    const show = (i) => { setOpen(i); dialog.current?.showModal(); };
    const step = (d) => setOpen((i) => (i + d + shown.length) % shown.length);
    const current = shown[open];

    return (
        <>
            <PageHeader
                eyebrow="Squadron life"
                title="Photo gallery"
                intro="Parades, the band, camps, expeditions and everything in between."
            />

            <section className="section bg-surface">
                <div className="section-container">
                    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter photos">
                        {categories.map((c) => (
                            <button
                                key={c}
                                type="button"
                                aria-pressed={cat === c}
                                onClick={() => setCat(c)}
                                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                                    cat === c ? "bg-accent-dark text-white" : "bg-white text-navy ring-1 ring-navy/15 hover:ring-accent"
                                }`}
                            >
                                {c}
                            </button>
                        ))}
                    </div>

                    {/* CSS columns keep portrait and landscape photos at their own shapes */}
                    <div className="mt-8 columns-2 gap-3 md:columns-3 lg:columns-4">
                        {shown.map((p, i) => (
                            <button key={p.img} type="button" onClick={() => show(i)} className="mb-3 block w-full overflow-hidden rounded-lg focus-visible:outline-2 focus-visible:outline-accent">
                                <img src={p.img} alt={p.alt} width={p.w} height={p.h} loading="lazy" className="h-auto w-full transition-transform duration-300 hover:scale-105" />
                            </button>
                        ))}
                    </div>

                    <p className="mt-10 text-center text-ink/80">
                        Want to be in the next one? <Link to="/join" className="font-bold text-accent-dark underline">Join us</Link>.
                    </p>
                </div>
            </section>

            <dialog
                ref={dialog}
                onClose={() => setOpen(null)}
                onClick={(e) => e.target === dialog.current && dialog.current.close()}
                className="m-auto max-h-[92vh] w-[min(96vw,1100px)] rounded-lg bg-navy p-0 text-white backdrop:bg-black/80"
            >
                {current && (
                    <figure>
                        <img src={current.img} alt={current.alt} className="mx-auto max-h-[78vh] w-auto max-w-full" />
                        <figcaption className="flex items-center justify-between gap-3 p-3 text-sm">
                            <span>{current.alt}</span>
                            <span className="flex shrink-0 gap-2">
                                <button type="button" onClick={() => step(-1)} aria-label="Previous photo" className="rounded-sm bg-white/10 px-3 py-1 hover:bg-white/20">←</button>
                                <button type="button" onClick={() => step(1)} aria-label="Next photo" className="rounded-sm bg-white/10 px-3 py-1 hover:bg-white/20">→</button>
                                <button type="button" onClick={() => dialog.current.close()} className="rounded-sm bg-accent-dark px-3 py-1 font-semibold">Close</button>
                            </span>
                        </figcaption>
                    </figure>
                )}
            </dialog>
        </>
    );
}

export default Gallery;
