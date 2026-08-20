import Title from "../mainTitle/title";

import Plane from "../../assets/home_images/plane.webp";
import Kyacking from "../../assets/home_images/kyacking.webp";
import Shooting from "../../assets/home_images/shooting.webp";
import arms_drill from "../../assets/home_images/arms_drill.webp";
import camp from "../../assets/home_images/camp.webp";
import dofe from "../../assets/home_images/dofe.webp";

function Card() {
    return (
        <div id="scroll-into-view" className="section bg-surface">
            <div className="section-container">
                <Title title="What We Do"></Title>

                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {data.map((d) => (
                        <div key={d.title} className="card hover:-translate-y-1 hover:shadow-xl">
                            <img src={d.img} alt={d.title} loading="lazy" className="h-48 w-full object-cover"/>
                            <div className="p-5">
                                <h3 className="mb-2 text-xl font-bold text-navy">{d.title}</h3>
                                <p className="text-sm leading-relaxed text-ink/80">{d.main}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

const data = [
    {
        title: `Aviation`,
        img: Plane,
        main: `The Air Cadets provide opportunities to go flying and gliding. Some cadets even get the opportunity to fly solo.`,
    },
    {
        title: `Adventure Training`,
        img: Kyacking,
        main: `There are many Adventure Training camps every year. Cadets have the opportunity to try rock climbing, abseiling, mountain-biking and a variety of water sports.`,
    },
    {
        title: `Marksmanship`,
        img: Shooting,
        main: `We shoot 3 types of weapon, one of which is the L98A2, a similar weapon to what the Armed Forces use. There are lots of shooting opportunities throughout the year.`,
    },
    {
        title: `Drill`,
        img: arms_drill,
        main: `We take a lot of pride in our drill skills as a Squadron. We compete with other squadrons every year and regularly perform very well.`,
    },
    {
        title: `Camps`,
        img: camp,
        main: `There is a variety of camps each year. Some are just for a weekend, but most are for a full week. This is when cadets get most opportunities to do these exciting activities.`,
    },
    {
        title: `DofE`,
        img: dofe,
        main: `As a squadron, we run DofE expeditions every year as we have dedicated members of staff who are qualified to run these expeditions. You can even achieve Gold DofE with the Air Cadets.`,
    },
];

export default Card;
