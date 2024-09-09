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
                            <div key={d.title} className="bg-white h-fit text-black rounded-xl">
                                <div className='h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl'>
                                    <img src={d.img} alt="" className="h-full w-full rounded-t-xl"/>
                                </div>

                                <div className="flex flex-col items-center justify-center gap-4 p-4">
                                    <p className="text-xl font-semibold">{d.title}</p>
                                    <p className="text-center">{d.main}</p>
                                    <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
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
        main: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
		link: ``
    },
    {
        title: `Adventure Training`,
        img: drill,
        main: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
		link: ``
    },
    {
        title: `Marksmanship`,
        img: drill,
        main: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
		link: ``
    },
	{
        title: `Drill`,
        img: drill,
        main: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
		link: ``
    },
	{
        title: `Camps`,
        img: drill,
        main: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
		link: ``
    },
	{
        title: `DofE`,
        img: drill,
        main: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
		link: ``
    },
];

export default Card;
