import "./linkCardStyles.css";
import Title from "../mainTitle/title";
import { Link } from "react-router-dom";

import Programmes from "../../assets/home_images/programmes.webp";
import Contact from "../../assets/home_images/contact.webp";
import Facebook from "../../assets/home_images/facebook.webp";

function LinkCards() {
    return (
        <div className="link-card-container title-hover clip-path-sm-l-r md:clip-path-md-l-r lg:clip-path-lg-l-r">
            <Title title="Quick Links"></Title>

            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-4 middle:grid-cols-3 w-3/4 mx-auto content-center text-center mt-10">
                {data.map((d, index) => (
                        <div
                            key={d.title}
                            className={`link-card relative ${index === 2 ? 'md:col-start-2 md:col-end-4 middle:col-start-3' : 'md:col-span-2 middle:col-span-1'}`}
                        >
                        <Link to={d.link}>

                            <img className="link-card-img w-full" src={d.img} alt={d.title} />
                            
                            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-white text-xl font-bold">
                                <h1 className="mb-4 text-4xl font-extrabold leading-none md:text-5xl lg:text-5xl text-white">{d.title}</h1>
                            </div>

                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4">
                                <p className="mb-6 font-normal lg:text-xl text-center text-white">{d.main}</p>
                            </div>
                        </Link>

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
        link: `/contact`
    },
    {
        title: `Programme`,
        img: Programmes,
        main: `See what we're up to this month`,
        link: `/programme`
    },
    {
        title: `Our Facebook`,
        img: Facebook,
        main: `Stay updated with all our latest news and events`,
        link: `https://www.facebook.com/317atc`
    },
];

export default LinkCards;
