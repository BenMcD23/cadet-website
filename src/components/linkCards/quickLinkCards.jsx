import Title from "../mainTitle/title";
import { Link } from "react-router-dom";

import Programmes from "../../assets/home_images/programmes.webp";
import Contact from "../../assets/home_images/contact.webp";
import Store from "../../assets/home_images/store.webp";
import Parade from "../../assets/parade.jpeg";
import Portal from "../../assets/317_logo.png";

function CardContent({ d }) {
    return (
        <>
            <img className="h-52 w-full object-cover transition duration-300 group-hover:scale-105" src={d.img} alt={d.title} loading="lazy" />
            <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-navy/90 via-navy/40 to-navy/10 p-5 text-center">
                <h3 className="text-2xl font-extrabold text-white">{d.title}</h3>
                <p className="mt-1 text-sm text-white/85">{d.main}</p>
            </div>
        </>
    );
}

// full-width on mobile, 2-up at sm, 3-up at lg — gap-6 (1.5rem) baked into the widths
const cardClasses = "card group relative w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]";

function LinkCards() {
    return (
        <div className="section bg-white">
            <div className="section-container">
                <Title title="Quick Links"></Title>

                <div className="mt-8 flex flex-wrap justify-center gap-6">
                    {data.map((d) => (
                        d.external ? (
                            <a key={d.title} href={d.link} target="_blank" rel="noopener noreferrer" className={cardClasses}>
                                <CardContent d={d} />
                            </a>
                        ) : (
                            <Link key={d.title} to={d.link} className={cardClasses}>
                                <CardContent d={d} />
                            </Link>
                        )
                    ))}
                </div>
            </div>
        </div>
    );
}

const data = [
    {
        title: `Contact Us`,
        img: Contact,
        main: `Contact form for any enquiries`,
        link: `/contact`,
        external: false
    },
    {
        title: `Programme`,
        img: Programmes,
        main: `See what we're up to this month`,
        link: `/programme`,
        external: false
    },
    {
        title: `Cadet Portal`,
        img: Portal,
        main: `Log in to the 317 Cadet Portal`,
        link: `https://cadet-portal.317atc.co.uk/`,
        external: true
    },
    {
        title: `Store`,
        img: Store,
        main: `Cadet SumUp store`,
        link: `https://317atc.sumupstore.com/`,
        external: true
    },
    {
        title: `Newsletter`,
        img: Parade,
        main: `Read our latest squadron newsletter`,
        link: `https://newsletter.317atc.co.uk/`,
        external: true
    },
];

export default LinkCards;
