import Title from "../mainTitle/title";

const FB_PAGE = "https://www.facebook.com/317atc";
const IG_PAGE = "https://www.instagram.com/317_atc/";

// Facebook Page Plugin (timeline) — a plain iframe, no SDK/account needed.
const fbSrc =
    "https://www.facebook.com/plugins/page.php?" +
    new URLSearchParams({
        href: FB_PAGE,
        tabs: "timeline",
        width: "500",
        height: "600",
        small_header: "false",
        adapt_container_width: "true",
        hide_cover: "false",
        show_facepile: "true",
    }).toString();

function Socials() {
    return (
        <div className="section bg-white">
            <div className="section-container">
                <Title title="Follow Us"></Title>

                <div className="mx-auto mt-8 grid max-w-4xl items-stretch gap-6 md:grid-cols-2">
                    {/* Facebook — live timeline embed */}
                    <div className="card overflow-hidden">
                        <iframe
                            title="317 Squadron on Facebook"
                            src={fbSrc}
                            className="h-[600px] w-full"
                            style={{ border: "none" }}
                            scrolling="no"
                            frameBorder="0"
                            allowFullScreen
                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        />
                    </div>

                    {/* Instagram — branded follow card (live profile feeds aren't embeddable for free) */}
                    <a
                        href={IG_PAGE}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card group flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] p-8 text-center text-white transition hover:-translate-y-1 hover:shadow-xl"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-16 drop-shadow">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                        <div>
                            <p className="text-2xl font-extrabold">@317_atc</p>
                            <p className="mt-1 text-white/90">See our latest photos on Instagram</p>
                        </div>
                        <span className="mt-2 rounded-lg bg-white/20 px-5 py-2.5 font-bold backdrop-blur transition group-hover:bg-white/30">
                            Follow us on Instagram
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Socials;
