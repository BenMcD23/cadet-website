const images = import.meta.glob(
  "../../assets/staff_pics/*.webp",
  { eager: true }
);

const getImage = (fileName) =>
  images[`../../assets/staff_pics/${fileName}`]?.default;

import "./staffPicsStyles.css";

function StaffPics() {

    const staff = [
        { name: "Flt Lt Simon Doherty", alt: "Flt Lt Simon Doherty", image: "Flt_Lt_Doherty.webp" },
        { name: "CI Roy Catterall (Wg Cdr Ret'd)", alt: "CI Roy Catterall", image: "CI_Catterall.webp" },
        { name: "Fg Off Jack Quick (RAF)", alt: "Fg Off Jack Quick", image: "Fg_Off_Quick.webp" },
        { name: "Fg Off Jonathon Barker", alt: "Fg Off Jonathon Barker", image: "Fg_Off_Barker.webp" },
        { name: "FS Joseph Gill", alt: "FS Joseph Gill", image: "FS_Gill.webp" },
        { name: "Sgt Callum MacGregor", alt: "Sgt Callum MacGregor", image: "Sgt_MacGregor.webp" },
        { name: "Sgt Gareth Lloyd Morris", alt: "A Sgt Gareth Lloyd Morris", image: "Sgt_Lloyd_Morris.webp" },
        { name: "CI Ben McDonald", alt: "CI Ben McDonald", image: "CI_McDonald.webp" },
        { name: "CI Graham Boxall", alt: "CI Graham Boxall", image: "Placeholder.webp" },
        { name: "CI Jacob Gill", alt: "CI Jacob Gill", image: "CI_Gill.webp" },
        { name: "CI Sophie Stone", alt: "CI Sophie Stone", image: "CI_Stone.webp" },

        ];

    return (
        <div className="staff-container max-w-7xl mx-auto px-4 py-4">
            {/* Grid Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {staff.map((person) => (
                    <div
                    key={person.name}
                    className="image-text-container bg-transparent border border-3 border-gray-300 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
                    >
                    <div className="aspect-w-3 aspect-h-4 flex items-center justify-center overflow-hidden">
                        <img
                        src={getImage(person.image)}
                        className="w-full h-full max-h-72 w-auto"
                        alt={person.alt}
                        />
                    </div>
                    <div className="p-4 text-center">
                        <p className="text-xl font-bold text-gray-900">
                        {person.name}
                        </p>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default StaffPics;
