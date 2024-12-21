import Flt_Lt_Doherty from "../../assets/staff_pics/Flt_Lt_Doherty.webp";
import CI_Catterall from "../../assets/staff_pics/CI_Catterall.webp";
import Fg_Off_Quick from "../../assets/staff_pics/Fg_Off_Quick.webp";
import WO_Barker from "../../assets/staff_pics/WO_Barker.webp";
import FS_Gill from "../../assets/staff_pics/FS_Gill.webp";
import CI_McDonld from "../../assets/staff_pics/CI_McDonald.webp";
import CI_Gill from "../../assets/staff_pics/CI_Gill.webp";
import CI_Stone from "../../assets/staff_pics/CI_Stone.webp";

import Placeholder from "../../assets/staff_pics/Placeholder.webp";

import "./staffPicsStyles.css";

function StaffPics() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-1 staff-container pt-4">
                

                <div className="image-text-container text-center">
                    <img src={Flt_Lt_Doherty} className="staff-img m-auto" alt="Flt Lt Simon Doherty" />
                    <p className="text-xl font-extrabold leading-none lg:text-2xl text-black">Flt Lt Simon Doherty</p>
                </div>

                <div className="image-text-container text-center">
                    <img src={CI_Catterall} className="staff-img m-auto" alt="CI Roy Catterall" />
                    <p className="text-xl font-extrabold leading-none lg:text-2xl text-black">CI Roy Catterall (Wg Cdr Ret'd)</p>
                </div>

                <div className="image-text-container text-center">
                    <img src={Fg_Off_Quick} className="staff-img m-auto" alt="Fg Off Jack Quick" />
                    <p className="text-xl font-extrabold leading-none lg:text-2xl text-black">Fg Off Jack Quick (RAF)</p>
                </div>

                <div className="image-text-container text-center">
                    <img src={WO_Barker} className="staff-img m-auto" alt="WO Jonathon Barker" />
                    <p className="text-xl font-extrabold leading-none lg:text-2xl text-black">WO Jonathon Barker</p>
                </div>

                <div className="image-text-container text-center">
                    <img src={FS_Gill} className="staff-img m-auto" alt="FS Joseph Gill" />
                    <p className="text-xl font-extrabold leading-none lg:text-2xl text-black">FS Joseph Gill</p>
                </div>

                <div className="image-text-container text-center">
                    <img src={CI_McDonld} className="staff-img m-auto" alt="CI Ben McDonald" />
                    <p className="text-xl font-extrabold leading-none lg:text-2xl text-black">CI Ben McDonald</p>
                </div>

                <div className="image-text-container text-center">
                    <img src={CI_Gill} className="staff-img m-auto"/>
                    <p className="text-xl font-extrabold leading-none lg:text-2xl text-black">CI Jacob Gill</p>
                </div>

                <div className="image-text-container text-center">
                    <img src={CI_Stone} className="staff-img m-auto"/>
                    <p className="text-xl font-extrabold leading-none lg:text-2xl text-black">CI Sophie Stone</p>
                </div>
            </div>
        </>
    );
}

export default StaffPics;
