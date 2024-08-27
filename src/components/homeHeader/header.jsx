import rafac from "../../assets/rafac.png"
import sqn_photo from "../../assets/sqn_photo.JPG"
import "./headerStyles.css"

function Header() {
    return (
        <>
        <div className="header-container">
            <img src={sqn_photo} alt="Background Image" className="background-image w-100"/>

            <div className="header-content grid grid-rows-4 gap-8 md:grid-cols-1 lg:grid-cols-8">
                <div className="overlay-image-container lg:col-start-2 lg:col-span-2 pt-4">
                    <img src={rafac} alt="Logo" className="overlay-image"/>
                </div>
                <div className="text-container">
                    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-5xl text-white">
                        317 Newton Heath & <br/>Failsworth Squadron
                    </h1>
                </div>
            </div>
        </div>
        </>
    );
}

export default Header;
