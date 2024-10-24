import "./linkCardStyles.css";
import Title from "../mainTitle/title";
import { useEffect } from 'react';

import Programmes from "../../assets/home_images/programmes.png";
import Contact from "../../assets/home_images/contact.png";
import Facebook from "../../assets/home_images/facebook.png";



function LinkCards() {
    return (
        <>


            <div className="link-card-container title-hover clip-path-sm-l-r md:clip-path-md-l-r lg:clip-path-lg-l-r">
                <Title title="Our Socials"></Title>

                <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-4 middle:grid-cols-3 w-3/4 mx-auto content-center text-center mt-10">
                    
                </div>
            </div>
        </>
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
