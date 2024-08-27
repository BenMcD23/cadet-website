import "./joinStyles.css";
import Title from "../mainTitle/title";
import parade from "../../assets/plane.jpeg"


function Join() {
    return (
        <div className="join-container">
            <img src={parade} alt="Background Image" className="join-image w-100"/>

            <div className="text-container">
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-5xl text-white pb-3">Interested in joining?</h1>

                <button className="shift-button">How To Join</button>

            </div>
        </div>
    );
}


export default Join;
