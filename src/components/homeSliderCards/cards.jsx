import Title from "../mainTitle/title";

import Plane from "../../assets/home_images/plane.webp";
import Kyacking from "../../assets/home_images/kyacking.webp";
import Shooting from "../../assets/home_images/shooting.webp";
import arms_drill from "../../assets/home_images/arms_drill.webp";
import camp from "../../assets/home_images/camp.webp";
import dofe from "../../assets/home_images/dofe.webp";

function Card() {
    return (
        <section id="what-we-do" className="section scroll-mt-16 bg-surface">
            <div className="section-container">
                <Title
                    eyebrow="Activities"
                    title="What we do"
                    lead="Parade nights mix classroom training, sport and drill. Weekends and school holidays are where the bigger opportunities happen."
                />

                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {data.map((d) => (
                        <article key={d.title} className="card">
                            <img src={d.img} alt={d.alt} loading="lazy" className="h-48 w-full object-cover"/>
                            <div className="p-5">
                                <h3 className="text-2xl">{d.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-ink/80">{d.main}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

const data = [
    {
        title: `Flying`,
        img: Plane,
        alt: "A cadet in the cockpit of a light aircraft on an air experience flight",
        main: `Air experience flights and gliding with the RAF. Cadets who keep at it can work towards flying solo.`,
    },
    {
        title: `Adventure training`,
        img: Kyacking,
        alt: "Cadets kayaking in orange and red boats",
        main: `Rock climbing, abseiling, mountain biking, hill walking and water sports on camps throughout the year.`,
    },
    {
        title: `Shooting`,
        img: Shooting,
        alt: "A cadet aiming a rifle on a range",
        main: `Cadets train on three weapons, including the L98A2, the cadet version of the rifle the armed forces use. Range days run all year.`,
    },
    {
        title: `Drill`,
        img: arms_drill,
        alt: "Cadets performing rifle drill",
        main: `We take pride in our drill and compete against other squadrons every year, regularly placing well.`,
    },
    {
        title: `Camps`,
        img: camp,
        alt: "Cadets on parade watching a formation flypast",
        main: `Weekend and week-long camps on RAF stations and elsewhere, where most of the bigger activities happen.`,
    },
    {
        title: `Duke of Edinburgh's Award`,
        img: dofe,
        alt: "Cadets with rucksacks walking through moorland on a DofE expedition",
        main: `We run our own Bronze, Silver and Gold expeditions with qualified staff, so cadets can go all the way to Gold.`,
    },
];

export default Card;
