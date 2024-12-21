import "./joinStyles.css";
import Plane from "../../assets/home_images/plane_join.webp"
import { Link } from "react-router-dom";


function Join() {
    return (
        <div className="join-container">
            <img src={Plane} alt="Background Image" className="join-image w-100"/>

            <div className="text-container">
                <h1 className="mb-4 text-4xl font-extrabold leading-none md:text-5xl lg:text-5xl text-white pb-3">Interested in joining?</h1>

                <Link to="/join"><button className="shift-button">How To Join</button></Link>

            </div>
        </div>
    );
}


export default Join;
