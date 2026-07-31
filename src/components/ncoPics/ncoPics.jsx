const images = import.meta.glob(
  "../../assets/nco_pics/*.webp",
  { eager: true }
);

const getImage = (fileName) =>
  images[`../../assets/nco_pics/${fileName}`]?.default;

const ncos = [
    { name: "FS M Beverley", alt: "FS M Beverley", image: "FS Beverley.webp" },
    { name: "FS N Mullery-McCourt", alt: "FS N Mullery-McCourt", image: "FS Mullery-McCourt.webp" },
    { name: "FS T Wimbury", alt: "FS T Wimbury", image: "FS Wimbury.webp" },

    { name: "Sgt C Mack", alt: "Sgt C Mack", image: "Sgt Mack.webp" },
    { name: "Sgt E Tyrell", alt: "Sgt E Tyrell", image: "Sgt Tyrell.webp" },
    { name: "Sgt F Malik", alt: "Sgt F Malik", image: "Cpl Malik.webp" },
    { name: "Sgt G Davies", alt: "Sgt G Davies", image: "Sgt Davies.webp" },
    { name: "Sgt T Tyrell", alt: "Sgt T Tyrell", image: "Cpl Tyrell.webp" },

    { name: "Cpl H Boxall", alt: "Cpl H Boxall", image: "Cdt Boxall.webp" },
    { name: "Cpl I Shahbaz", alt: "Cpl I Shahbaz", image: "Cdt Shahbaz I.webp" },
    { name: "Cpl I Wiggett", alt: "Cpl I Wiggett", image: "Cdt Wiggett.webp" },
    { name: "Cpl O Slack", alt: "Cpl O Slack", image: "Cdt Slack.webp" },
    { name: "Cpl R Sawczuk", alt: "Cpl R Sawczuk", image: "Cdt Sawczuk.webp" },
    { name: "Cpl S Okon", alt: "Cpl S Okon", image: "Cdt Okon.webp" },
    { name: "Cpl T Partington", alt: "Cpl T Partington", image: "Cpl Partington.webp" },
];

function NCOPics() {
    return (
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
            {ncos.map((person) => (
                <div key={person.name} className="card transition hover:-translate-y-1 hover:shadow-xl hover:ring-2 hover:ring-accent">
                    <img
                        src={getImage(person.image)}
                        alt={person.alt}
                        loading="lazy"
                        className="aspect-[3/4] w-full object-cover object-top"
                    />
                    <p className="p-3 text-center text-sm font-bold text-navy md:text-base">
                        {person.name}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default NCOPics;
