import Programme_png from "../assets/programme/programme.png";
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
            </div>

            <a href={Programme_pdf} download={`${month}_${year}_Programme.pdf`}>
                <img src={Programme_png} className="m-auto max-h-screen max-w-screen object-contain" alt="Programme" />
            </a>
        </>
    );
}

export default Programme;
