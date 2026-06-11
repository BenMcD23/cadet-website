import { useCallback, useEffect } from "react";

function Lightbox({ photos, index, onClose, onNavigate }) {
    const photo = photos[index];

    const prev = useCallback(() => onNavigate((index - 1 + photos.length) % photos.length), [index, photos.length, onNavigate]);
    const next = useCallback(() => onNavigate((index + 1) % photos.length), [index, photos.length, onNavigate]);

    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };
        document.addEventListener("keydown", handleKey);
        // stop the page scrolling behind the overlay
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", handleKey);
            document.body.style.overflow = "";
        };
    }, [onClose, prev, next]);

    if (!photo) return null;

    const buttonClasses = "rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/25";

    return (
        <div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-navy/95 p-4"
            role="dialog"
            aria-modal="true"
            aria-label={photo.alt}
            onClick={onClose}
        >
            <button type="button" aria-label="Close" onClick={onClose} className={`${buttonClasses} absolute right-4 top-4`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>

            <button type="button" aria-label="Previous photo" onClick={(e) => { e.stopPropagation(); prev(); }} className={`${buttonClasses} absolute left-2 sm:left-6`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </button>

            <figure className="max-h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
                <img src={photo.src} alt={photo.alt} className="max-h-[80vh] w-auto rounded-lg object-contain" />
                {photo.caption && (
                    <figcaption className="mt-3 text-center font-semibold text-white">{photo.caption}</figcaption>
                )}
            </figure>

            <button type="button" aria-label="Next photo" onClick={(e) => { e.stopPropagation(); next(); }} className={`${buttonClasses} absolute right-2 sm:right-6`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </button>
        </div>
    );
}

export default Lightbox;
