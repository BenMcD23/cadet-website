import Plane from "../../assets/home_images/plane_join.webp"
import { Link } from "react-router-dom";

function Join() {
    return (
        <div className="relative overflow-hidden">
            <img src={Plane} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover"/>
            <div className="absolute inset-0 bg-navy/75"></div>

            <div className="relative z-10 py-20 text-center md:py-28">
                <h2 className="mb-2 text-3xl font-extrabold text-white md:text-5xl">Interested in joining?</h2>
                <p className="mx-auto mb-8 max-w-xl px-4 text-white/85 md:text-lg">
                    Find out how to become a cadet, a staff volunteer or a committee member.
                </p>
                <Link to="/join" className="btn-primary">How To Join</Link>
            </div>
        </div>
    );
}

export default Join;
