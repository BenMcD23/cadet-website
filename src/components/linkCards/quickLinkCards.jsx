import "./linkCardStyles.css";
import Title from "../mainTitle/title";
import { Link } from "react-router-dom";

import Programmes from "../../assets/home_images/programmes.webp";
import Contact from "../../assets/home_images/contact.webp";
import Uniform from "../../assets/home_images/uniform.png";
import Store from "../../assets/home_images/store.webp";

function LinkCards() {
    return (
        <div className="link-card-container title-hover clip-path-sm-l-r md:clip-path-md-l-r lg:clip-path-lg-l-r">
            <Title title="Quick Links"></Title>

            <div className="flex flex-wrap justify-center gap-8 w-3/4 mx-auto content-center text-center mt-10">
                {data.map((d) => (
                    <div
                        key={d.title}
                        className="link-card relative w-full sm:w-5/12 xl:w-2/6"
                    >
                        {d.external ? (
                            <a href={d.link} target="_blank" rel="noopener noreferrer">
                                <img className="link-card-img w-full h-full object-cover" src={d.img} alt={d.title} />
                                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-white text-xl font-bold whitespace-nowrap">
                                    <h1 className="mb-4 text-3xl font-extrabold leading-none md:text-3xl lg:text-4xl text-white">{d.title}</h1>
                                </div>
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4">
                                    <p className="mb-6 font-normal lg:text-xl text-center text-white">{d.main}</p>
                                </div>
                            </a>
                        ) : (
                            <Link to={d.link}>
                                <img className="link-card-img w-full h-full object-cover" src={d.img} alt={d.title} />
                                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-white text-xl font-bold whitespace-nowrap">
                                    <h1 className="mb-4 text-3xl font-extrabold leading-none md:text-3xl lg:text-4xl text-white">{d.title}</h1>
                                </div>
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4">
                                    <p className="mb-6 font-normal lg:text-xl text-center text-white">{d.main}</p>
                                </div>
                            </Link>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

const data = [
    {
        title: `Contact Us`,
        img: Contact,
        main: `Contact form for any enqiures`,
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
        title: `Uniform Order Form`,
        img: Uniform,
        main: `Form for Cadets to order uniform`,
        link: `https://docs.google.com/forms/d/e/1FAIpQLSccWyk4xnre_JKbQdTg0w9SO2AaexoQ2R31hFdjV7zceIwxpw/viewform?usp=dialog`,
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
        img: `https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&auto=format&fit=crop`,
        main: `Read our latest squadron newsletter`,
        link: `https://newsletter.317atc.co.uk/`,
        external: true
    },
];

export default LinkCards;