import { useState } from "react";
import PageHeader from "../components/pageHeader/pageHeader";
import Lightbox from "../components/gallery/lightbox";
import { photos } from "../data/gallery";

function Gallery() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <>
            <PageHeader
                title="Gallery"
                intro="A look at what our cadets get up to — flying, camps, adventure training and more."
            />

            <div className="section bg-surface">
                <div className="section-container">
                    <div className="columns-2 gap-4 md:columns-3 [&>button]:mb-4">
                        {photos.map((photo, i) => (
                            <button
                                key={photo.src}
                                type="button"
                                onClick={() => setOpenIndex(i)}
                                className="group block w-full overflow-hidden rounded-lg shadow-md focus-visible:ring-offset-surface"
                                aria-label={`View photo: ${photo.alt}`}
                            >
                                <img
                                    src={photo.src}
                                    alt={photo.alt}
                                    loading="lazy"
                                    decoding="async"
                                    className="w-full transition duration-300 group-hover:scale-105"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {openIndex !== null && (
                <Lightbox
                    photos={photos}
                    index={openIndex}
                    onClose={() => setOpenIndex(null)}
                    onNavigate={setOpenIndex}
                />
            )}
        </>
    );
}

export default Gallery;
