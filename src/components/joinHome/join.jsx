import Plane from "../../assets/home_images/plane_join.webp"
import { Link } from "react-router-dom";

function Join() {
    return (
        <section className="relative overflow-hidden">
            <img src={Plane} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover"/>
            <div className="absolute inset-0 bg-navy/80" aria-hidden="true"></div>

            <div className="section-container relative py-20 md:py-28">
                <div className="max-w-2xl">
                    <p className="eyebrow text-accent">Recruiting now</p>
                    <h2 className="mt-3 text-4xl leading-none text-white md:text-5xl">Think you&rsquo;d fit in?</h2>
                    <span className="raf-flash-light mt-4"></span>
                    <p className="mt-5 leading-relaxed text-white/85 md:text-lg">
                        Cadets join at 12 and can stay until they turn 20. Adults can volunteer as uniformed or civilian staff,
                        or support the squadron through the civilian committee. No experience needed for any of it.
                    </p>
                    <Link to="/join" className="btn-primary mt-8">How joining works</Link>
                </div>
            </div>
        </section>
    );
}

export default Join;
