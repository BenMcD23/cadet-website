import rafac from "../../assets/rafac.png"
import sqn_photo from "../../assets/sqn_photo.JPG"
import "./headerStyles.css"

function Header() {
    return (
        <>
        <div className="background-container">
            <img src={sqn_photo} alt="Background Image" className="background-image w-100"/>
            <div className="overlay-image-container">
                <img src={rafac} alt="Logo" className="overlay-image"/>
            </div>
            <div className="text-container">
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-5xl text-white">317 Newton Heath & <br/>Failsworth Squadron</h1>
            </div>
        </div>

        </>
    );
}

export default Header;