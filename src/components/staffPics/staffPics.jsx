import { staff } from "../../data/people";

const images = import.meta.glob(
  "../../assets/staff_pics/*.webp",
  { eager: true }
);

const getImage = (fileName) =>
  images[`../../assets/staff_pics/${fileName}`]?.default;

function StaffPics() {
    return (
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
            {staff.map((person) => (
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
    );
}

export default StaffPics;
