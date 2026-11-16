import { Link } from 'react-router-dom';
import sqn_photo from "../../assets/sqn_photo.webp";
// Copies made at build time (vite-imagetools) so nobody downloads the 2400px
// original unless their screen needs it. On a phone the header is taller than
// it is wide and only the middle of the photo shows, so phones get a 2:3 crop of
// that middle at full sharpness instead of the whole wide photo.
import sqn_photo_srcset from "../../assets/sqn_photo.webp?w=800;1200;1600;2400&format=webp&as=srcset";
import sqn_photo_phone from "../../assets/sqn_photo.webp?w=540;800;1060&aspect=2:3&fit=cover&position=center&format=webp&as=srcset";

function Header() {
    return (
        <section className="relative isolate overflow-hidden bg-navy text-white">
            <picture>
                <source media="(max-width: 767px)" srcSet={sqn_photo_phone} sizes="100vw" />
                <img
                    src={sqn_photo}
                    srcSet={sqn_photo_srcset}
                    sizes="100vw"
                    // The first thing anyone sees: fetch it ahead of everything else.
                    fetchPriority="high"
                    alt="The whole of 317 Squadron, cadets and staff, posed together under the squadron gazebo"
                    className="absolute inset-0 h-full w-full object-cover object-[center_45%]"
                />
            </picture>
            {/* light flat tint so the white text stays readable over the photo */}
            <div className="absolute inset-0 bg-navy/50" aria-hidden="true"></div>
            <div className="absolute inset-0 bg-linear-to-t from-navy/70 via-transparent to-transparent md:hidden" aria-hidden="true"></div>

            <div className="section-container relative py-20 md:py-28 lg:py-36">
                <div className="max-w-2xl">
                    <p className="eyebrow text-accent">Royal Air Force Air Cadets</p>
                    <h1 className="mt-3 text-5xl leading-[0.95] text-white sm:text-6xl md:text-7xl">
                        317 Failsworth &amp;<br className="hidden sm:block" /> Newton Heath Squadron
                    </h1>
                    <span className="raf-flash-light mt-5"></span>
                    <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90 md:text-xl">
                        Flying, adventure training, shooting, DofE and friends for life.
                        For young people aged 12 to 17 in Failsworth, Newton Heath, Oldham and north Manchester.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <Link to="/join" className="btn-primary">Join us</Link>
                        <a href="#what-we-do" className="btn-secondary">What we do</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Header;
