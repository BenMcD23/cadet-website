import Flt_Lt_Doherty from "../../assets/staff_pics/Flt_Lt_Doherty.webp";
import CI_Catterall from "../../assets/staff_pics/CI_Catterall.webp";
import Fg_Off_Quick from "../../assets/staff_pics/Fg_Off_Quick.webp";
import WO_Barker from "../../assets/staff_pics/WO_Barker.webp";
import FS_Gill from "../../assets/staff_pics/FS_Gill.webp";
import Sgt_Lloyd_Morris from "../../assets/staff_pics/Sgt_Lloyd_Morris.webp";
import Sgt_MacGregor from "../../assets/staff_pics/Sgt_MacGregor.webp";
import CI_McDonald from "../../assets/staff_pics/CI_McDonald.webp";
import CI_Gill from "../../assets/staff_pics/CI_Gill.webp";
import CI_Stone from "../../assets/staff_pics/CI_Stone.webp";

const staff = [
    { img: Flt_Lt_Doherty, name: "Flt Lt Simon Doherty" },
    { img: CI_Catterall, name: "CI Roy Catterall (Wg Cdr Ret'd)" },
    { img: Fg_Off_Quick, name: "Fg Off Jack Quick (RAF)" },
    { img: WO_Barker, name: "WO Jonathon Barker" },
    { img: FS_Gill, name: "FS Joseph Gill" },
    { img: Sgt_MacGregor, name: "Sgt Callum MacGregor" },
    { img: Sgt_Lloyd_Morris, name: "A Sgt G Lloyd Morris" },
    { img: CI_McDonald, name: "CI Ben McDonald" },
    { img: CI_Gill, name: "CI Jacob Gill" },
    { img: CI_Stone, name: "CI Sophie Stone" },
];

function StaffPics() {
    return (
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
            {staff.map((person) => (
                <div key={person.name} className="card transition hover:-translate-y-1 hover:shadow-xl hover:ring-2 hover:ring-accent">
                    <img
                        src={person.img}
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
