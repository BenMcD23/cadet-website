import rafac from "../assets/rafac.png"
import sqn_photo from "../assets/sqn_photo.JPG"
import "./styles.css"

function Home() {
    return (
        <>
        <div className="background-container">
            <img src={sqn_photo} alt="Background Image" className="background-image"/>
            <div className="overlay-image-container">
                <img src={rafac} alt="Logo" className="overlay-image"/>
            </div>
            <div className="text-container">
                <h1 className="test">317 Newton Heath & <br/>Failsworth Squadron</h1>
                <button>Join Us</button>
            </div>
        </div>

        </>
    );
}

export default Home;