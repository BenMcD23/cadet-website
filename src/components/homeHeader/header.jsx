import { Link } from 'react-router-dom';
import sqn_photo from "../../assets/sqn_photo.webp";

function Header() {
    return (
        <section className="relative isolate overflow-hidden bg-navy text-white">
            <img
                src={sqn_photo}
                alt="317 Squadron cadets and staff on parade outside the squadron building"
                className="absolute inset-0 h-full w-full object-cover object-[center_35%]"
            />
            {/* darken from the left so the text sits on solid navy and the photo stays visible on the right */}
            <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/40 lg:to-navy/20" aria-hidden="true"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent md:hidden" aria-hidden="true"></div>

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
