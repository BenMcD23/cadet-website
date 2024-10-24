import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import Title from "../components/mainTitle/title";
import ContactForm from "../components/contactForm/contactForm";

import "./joinStyles.css"

function Join() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 3, // Default to show 3 slides
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024, // Medium screens and below
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 700, // Small screens
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <>
        
            <div className="text-white bg-dark-blue-main title-hover text-center pb-3 lg:pt-14 mb-2">
                <Title title="Joining Information"></Title>
                <div className="join-card-container">

                    <div className='w-3/4 m-auto'>
                        <div className="mt-2">
                            <Slider {...settings}>
                                {data.map((d) => (
                                    <div key={d.title} className="bg-white h-full text-black rounded-xl">
                                        <div className="flex flex-col items-center justify-center p-3">
                                            <p className="text-xl font-bold underline">{d.title}</p>
                                            <p className="text-center font-semibold">
                                                {d.main.split('\n').map((line, index) => (
                                                    <span key={index}>
                                                        {line}
                                                        <br />
                                                    </span>
                                                ))}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold underline">To Join</h3>
                <p className="text-xl leading-7 lg:text-2xl pb-2 pt-2 px-8">
                    Fill out this contact form with your information and we will get back to you with more details.
                </p>                
            </div>

            <ContactForm></ContactForm>
        </>
    );
}

const data = [
    {
        title: `Joining as a Cadet`,
        main: `Cadets must be aged 12 and in year 8 or above to join.\n\n
        The latest you can join the Air Cadets is the day before your 17th birthday.`,
    },
    {
        title: `Joining as a Staff Volunteer`,
        main: `Adults 20 years old or more can join as adult volunteer staff members.\n\n
        You must have also have lived in the UK for a minimum of 3 years and commit to at least 12 hours a month.`,
    },
    {
        title: `Joining as a Committee member`,
        main: `Every squadron has a Civilian Committee which has responsibilities to look after the funding of the squadron, deal with welfare issues and help the promotion of the squadron to the public.\n\n
        The committee is made up of volunteers, who on average give a few hours a month.`,
    },
];

export default Join;