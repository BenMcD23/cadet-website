import { ncos, NCO_RANKS } from "../../data/people";

const images = import.meta.glob(
  "../../assets/nco_pics/*.webp",
  { eager: true }
);

const getImage = (fileName) =>
  images[`../../assets/nco_pics/${fileName}`]?.default;

function NCOPics() {
    return (
        <div className="space-y-12">
            {NCO_RANKS.map((rank) => {
                const people = ncos.filter((p) => p.rank === rank.rank);
                if (people.length === 0) return null;
                return (
                    <section key={rank.rank}>
                        <h2 className="text-2xl md:text-3xl">{rank.label}</h2>
                        <span className="raf-flash mt-3"></span>
                        <div className="mt-6 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
                            {people.map((person) => (
                                <div key={`${person.rank} ${person.name}`} className="card transition-colors hover:border-accent-dark">
                                    <img
                                        src={getImage(person.image)}
                                        alt={`${person.rank} ${person.name}`}
                                        loading="lazy"
                                        className="aspect-3/4 w-full object-cover object-top"
                                    />
                                    <p className="p-3 text-center text-sm font-bold text-navy md:text-base">
                                        {person.rank} {person.name}
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
