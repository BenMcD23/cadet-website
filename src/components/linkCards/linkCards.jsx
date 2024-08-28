import "./linkCardStyles.css";
import Title from "../mainTitle/title";

function LinkCards() {
    return (
        <div className="link-card-container title-hover">
            <Title title="Quick Links"></Title>

            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-4 middle:grid-cols-3 w-3/4 mx-auto content-center text-center mt-20">
                {data.map((d, index) => (
                    <div
                        key={d.title}
                        className={`link-card relative ${index === 2 ? 'md:col-start-2 md:col-end-4 middle:col-start-3' : 'md:col-span-2 middle:col-span-1'}`}
                    >
                        <img className="link-card-img w-full" src={d.img} alt={d.title} />
                        
                        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-white text-xl font-bold">
                            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-5xl dark:text-white">{d.title}</h1>
                        </div>

                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4">
                            <p className="mb-6 font-normal lg:text-xl text-center dark:text-white">{d.main}</p>
                        </div>

                        <a href={d.link} className="link-card-link absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white">
                            Learn More
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

const data = [
    {
        title: `Programme`,
        img: `src/assets/317_drill.png`,
        main: `See what we're up to this month`,
        link: ``
    },
    {
        title: `Meet the Staff`,
        img: `src/assets/317_drill.png`,
        main: `Our dedicated volunteers who help run the squadron every night and organise exciting events and training`,
        link: ``
    },
    {
        title: `Our Cadet NCO's`,
        img: `src/assets/317_drill.png`,
        main: `Our cadet NCO team run sessions each night and are responsible for the organisation of every parade night.`,
        link: ``
    },
];

export default LinkCards;
