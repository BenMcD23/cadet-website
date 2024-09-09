import Programme_png from "/programme.png";

function Programme() {
    return (
        <div className="lg:pt-20">
            <a href="/programme.pdf" download="Programme.pdf">
                <img src={Programme_png} className="m-auto max-h-screen max-w-screen object-contain" alt="Programme" />
            </a>
        </div>
    );
}

export default Programme;
