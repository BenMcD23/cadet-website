const images = import.meta.glob(
  "../../assets/nco_pics/*.webp",
  { eager: true }
);

const getImage = (fileName) =>
  images[`../../assets/nco_pics/${fileName}`]?.default;

// Rank is taken from the start of the name, so keep the "FS", "Sgt", "Cpl" prefix.
const ncos = [
    { name: "FS M Beverley", image: "FS Beverley.webp" },
    { name: "FS N Mullery-McCourt", image: "FS Mullery-McCourt.webp" },
    { name: "FS T Wimbury", image: "FS Wimbury.webp" },

    { name: "Sgt C Mack", image: "Sgt Mack.webp" },
    { name: "Sgt E Tyrell", image: "Sgt Tyrell.webp" },
    { name: "Sgt F Malik", image: "Cpl Malik.webp" },
    { name: "Sgt G Davies", image: "Sgt Davies.webp" },
    { name: "Sgt T Tyrell", image: "Cpl Tyrell.webp" },

    { name: "Cpl H Boxall", image: "Cdt Boxall.webp" },
    { name: "Cpl I Shahbaz", image: "Cdt Shahbaz I.webp" },
    { name: "Cpl I Wiggett", image: "Cdt Wiggett.webp" },
    { name: "Cpl O Slack", image: "Cdt Slack.webp" },
    { name: "Cpl R Sawczuk", image: "Cdt Sawczuk.webp" },
    { name: "Cpl S Okon", image: "Cdt Okon.webp" },
    { name: "Cpl T Partington", image: "Cpl Partington.webp" },
];

const ranks = [
    { prefix: "FS", label: "Flight Sergeants" },
    { prefix: "Sgt", label: "Sergeants" },
    { prefix: "Cpl", label: "Corporals" },
];

function NCOPics() {
    return (
        <div className="space-y-12">
            {ranks.map((rank) => {
                const people = ncos.filter((p) => p.name.split(" ")[0] === rank.prefix);
                if (people.length === 0) return null;
                return (
                    <section key={rank.prefix}>
                        <h2 className="text-2xl md:text-3xl">{rank.label}</h2>
                        <span className="raf-flash mt-3"></span>
                        <div className="mt-6 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
                            {people.map((person) => (
                                <div key={person.name} className="card transition-colors hover:border-accent-dark">
                                    <img
                                        src={getImage(person.image)}
                                        alt={person.name}
                                        loading="lazy"
                                        className="aspect-[3/4] w-full object-cover object-top"
                                    />
                                    <p className="p-3 text-center text-sm font-bold text-navy md:text-base">
                                        {person.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                );
            })}
        </div>
    );
}

export default NCOPics;
