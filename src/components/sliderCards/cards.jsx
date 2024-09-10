import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Title from "../mainTitle/title";
import "./cardStyles.css";

import drill from "../../assets/317_drill.png";


function Card() {
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
        <div id="scroll-into-view" className="card-container title-hover clip-path-sm-r-l md:clip-path-md-r-l lg:clip-path-lg-r-l">
            <Title title="What We Do"></Title>
            <div className='w-3/4 m-auto'>
                <div className="mt-20">
                    <Slider {...settings}>
                        {data.map((d) => (
                            <div key={d.title} className="bg-white h-full text-black rounded-xl">
                                <div className='h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl'>
                                    <img src={d.img} alt="" className="h-full w-full rounded-t-xl"/>
                                </div>

                                <div className="flex flex-col items-center justify-center gap-4 p-4">
                                    <p className="text-xl font-semibold">{d.title}</p>
                                    <p className="text-center">{d.main}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

const data = [
    {
        title: `Aviation`,
        img: drill,
        main: `The Air Cadets provide opportunities to go flying and gliding. Some cadets even get the opportunity to fly solo.`,
    },
    {
        title: `Adventure Training`,
        img: drill,
        main: `There are many Adventure Training camps every year. Cadets have the opportunity to try rock climbing, abseiling, mountain-biking and a variety of water sports.`,
    },
    {
        title: `Marksmanship`,
        img: drill,
        main: `We shoot 3 types of weapon, one of which is the L98A2, a similar weapon to what the Armed Forces use. There are lots of shooting opportunities throughout the year.`,
    },
    {
        title: `Drill`,
        img: drill,
        main: `We take a lot of pride in our drill skills as a Squadron. We compete with other squadrons every year and regularly perform very well.`,
    },
    {
        title: `Camps`,
        img: drill,
        main: `There is a variety of camps each year. Some are just for a weekend, but most are for a full week. This is when cadets get most opportunities to do these exciting activities.`,
    },
    {
        title: `DofE`,
        img: drill,
        main: `As a squadron, we run DofE expeditions every year as we have dedicated members of staff who are qualified to run these expeditions. You can even achieve Gold DofE with the Air Cadets.`,
    },
];

export default Card;
