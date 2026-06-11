const images = import.meta.glob(
  "../../assets/nco_pics/*.webp",
  { eager: true }
);

const getImage = (fileName) =>
  images[`../../assets/nco_pics/${fileName}`]?.default;

const ncos = [
    { name: "CWO V Tyrell", alt: "CWO V Tyrell", image: "CWO Tyrell.webp" },
    { name: "FS M Beverley", alt: "FS M Beverley", image: "Sgt Beverley.webp" },
    { name: "FS N Mullery-McCourt", alt: "FS N Mullery-McCourt", image: "Sgt Mullery-McCourt.webp" },
    { name: "FS T Wimbury", alt: "FS T Wimbury", image: "FS Wimbury.webp" },

    { name: "Sgt J Brice", alt: "Sgt J Brice", image: "Cpl Brice.webp" },
    { name: "Sgt G Davies", alt: "Sgt A Davies", image: "Cpl Davies.webp" },
    { name: "Sgt L Drury", alt: "Sgt L Drury", image: "Cpl Drury.webp" },
    { name: "Sgt L Hall", alt: "Sgt L Hall", image: "Sgt Hall.webp" },

    { name: "Cpl A Ahsan", alt: "Cpl A Ahsan", image: "Cdt Ahsan.webp" },
    { name: "Cpl K Evans", alt: "Cpl K Evans", image: "Cpl Evans.webp" },
    { name: "Cpl C Mack", alt: "Cpl C Mack", image: "Cpl Mack.webp" },
    { name: "Cpl F Malik", alt: "Cpl F Malik", image: "Cpl Malik.webp" },
    { name: "Cpl T Partington", alt: "Cpl T Partington", image: "Cdt Partington.webp" },
    { name: "Cpl R Sawczuk", alt: "Cpl R Sawczuk", image: "Cdt Sawczuk.webp" },
    { name: "Cpl E Tyrell", alt: "Cpl E Tyrell", image: "Cpl Tyrell.webp" },
    { name: "Cpl T Tyrell", alt: "Cpl T Tyrell", image: "Cdt Tyrell.webp" },
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
