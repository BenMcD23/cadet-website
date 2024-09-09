import Programme_png from "/programme.png";
import Title from "../components/mainTitle/title";


function Programme() {
    return (
        <>
        <div className="bg-dark-blue-main title-hover text-center pb-3 lg:pt-14">
            <Title title="Programme"></Title>
        </div>

        <a href="/programme.pdf" download="Programme.pdf">
            <img src={Programme_png} className="m-auto max-h-screen max-w-screen object-contain" alt="Programme" />
        </a>

        </>
    );
}

export default Programme;
