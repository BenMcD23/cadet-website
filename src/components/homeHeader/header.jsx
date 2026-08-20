import ScrollIntoView from 'react-scroll-into-view';
import { Link } from 'react-router-dom';
import sqn_photo from "../../assets/sqn_photo.webp";

function Header() {
    return (
        <div className="relative h-[75vh] w-full overflow-hidden">
            <img src={sqn_photo} alt="317 Squadron cadets on parade" className="absolute inset-0 h-full w-full object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy/80"></div>

            <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-accent md:text-base">
                    RAF Air Cadets
                </p>
                <h1 className="text-4xl font-extrabold leading-tight text-white md:text-6xl">
                    317 Failsworth &amp;<br/>Newton Heath Squadron
                </h1>
                <p className="mt-4 max-w-xl text-base text-white/90 md:text-lg">
                    Flying, adventure, friendship and skills for life &mdash; for young people aged 12 to 17.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <Link to="/join" className="btn-primary">Join Us</Link>
                    <ScrollIntoView selector="#scroll-into-view">
                        <span className="btn-secondary cursor-pointer">What We Do</span>
                    </ScrollIntoView>
                </div>
            </div>

            <ScrollIntoView selector="#scroll-into-view">
                <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 cursor-pointer">
                    <svg className="size-8 animate-bounce text-white/80" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
            </ScrollIntoView>
        </div>
    );
}

export default Header;
