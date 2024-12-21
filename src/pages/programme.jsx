import "./programmeStyles.css"

import Programme_webp from "../assets/programme/programme.webp";
import Rooms_webp from "../assets/programme/rooms.webp";
import Programme_pdf from "../assets/programme/programme.pdf";


import Title from "../components/mainTitle/title";


function Programme() {
    // get the current date
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, '0'); 
    const year = now.getFullYear().toString().slice(-2);

    return (
        <>
            <div className="bg-dark-blue-main title-hover text-center pb-2 lg:pt-14">
                <Title title="Programme"></Title>
                <div className="flex items-center justify-center">
                    <div className="text-center m-auto text-3xl lg:text-4xl font-semibold">
                        <div>
                            {/* <a href={Programme_pdf} download={`${month}_${year}_Programme.pdf`} target="_blank" rel="noopener noreferrer" className="programme-svg">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-28 m-auto">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                </svg>
                                Download Programme
                            </a> */}

                        <p className="text-xl leading-7 lg:text-2xl text-white pb-1 px-8">Unit Stand Down
                                <br/><br/>We are back on 10/01/2025 
                        </p>
                        </div>
                    </div>
                </div>
                
            </div>

            {/* <img src={Programme_webp} className="m-auto max-h-screen max-w-screen object-contain" alt="Programme" />

            <img src={Rooms_webp} className="m-auto max-h-screen max-w-screen object-contain" alt="Programme" /> */}
        </>
    );
}

export default Programme;
