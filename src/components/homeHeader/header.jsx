import ScrollIntoView from 'react-scroll-into-view';
import sqn_photo from "../../assets/sqn_photo_2024.jpg";
import "./headerStyles.css";

function Header() {
    return (
        <>
            <div className="header-container">
                <img src={sqn_photo} alt="Background Image" className="background-image w-100"/>

                <div className="header-content flex items-center justify-center h-full">
                    <div className="text-container text-center">
                        <h1 className="mb-4 text-4xl font-extrabold leading-none md:text-5xl text-white">
                            317
                        </h1>
                        <h1 className="text-3xl font-extrabold leading-none md:text-4xl text-white">
                            Failsworth & Newton Heath<br/>Squadron
                        </h1>
                    </div>
                </div>

                <ScrollIntoView selector="#scroll-into-view">
                    <div className="scroll-button">


                    <svg className="arrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>


                    </div>
                </ScrollIntoView>
            </div>

        </>
    );
}

export default Header;
