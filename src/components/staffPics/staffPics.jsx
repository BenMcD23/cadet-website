import { staff } from "../../data/people";

const images = import.meta.glob(
  "../../assets/staff_pics/*.webp",
  { eager: true }
);

// A 300px copy as well as the 600px upload (vite-imagetools): two photos side
// by side on a phone don't need the full size.
const srcsets = import.meta.glob(
  "../../assets/staff_pics/*.webp",
  { eager: true, import: "default", query: { w: "300;600", format: "webp", as: "srcset" } }
);

const getImage = (fileName) =>
  images[`../../assets/staff_pics/${fileName}`]?.default;

const getSrcset = (fileName) => srcsets[`../../assets/staff_pics/${fileName}`];

function StaffPics() {
    return (
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
            {staff.map((person) => (
                <div key={`${person.rank} ${person.name}`} className="card transition-colors hover:border-accent-dark">
                    <img
                        src={getImage(person.image)}
                        srcSet={getSrcset(person.image)}
                        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
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
