const images = import.meta.glob(
  "../../assets/staff_pics/*.webp",
  { eager: true }
);

const getImage = (fileName) =>
  images[`../../assets/staff_pics/${fileName}`]?.default;

const staff = [
    { name: "Flt Lt Simon Doherty", image: "Flt_Lt_Doherty.webp" },
    { name: "CI Roy Catterall (Wg Cdr Ret'd)", image: "CI_Catterall.webp" },
    { name: "Fg Off Jack Quick (RAF)", image: "Fg_Off_Quick.webp" },
    { name: "Fg Off Jonathon Barker", image: "Fg_Off_Barker.webp" },
    { name: "FS Joseph Gill", image: "FS_Gill.webp" },
    { name: "Sgt Calum MacGregor", image: "Sgt_MacGregor.webp" },
    { name: "Sgt Gareth Lloyd Morris", image: "Sgt_Lloyd_Morris.webp" },
    { name: "CI Ben McDonald", image: "CI_McDonald.webp" },
    { name: "CI Graham Boxall", image: "Placeholder.webp" },
    { name: "CI Jacob Gill", image: "CI_Gill.webp" },
    { name: "CI Sophie Stone", image: "CI_Stone.webp" },
];

function StaffPics() {
    return (
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
            {staff.map((person) => (
                <div key={person.name} className="card transition hover:-translate-y-1 hover:shadow-xl hover:ring-2 hover:ring-accent">
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
    );
}

export default StaffPics;
