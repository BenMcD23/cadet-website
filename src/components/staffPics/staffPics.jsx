import Flt_Lt_Doherty from "../../assets/staff_pics/Flt_Lt_Doherty.PNG";
import CI_Catterall from "../../assets/staff_pics/CI_Catterall.PNG";
import WO_Barker from "../../assets/staff_pics/WO_Barker.PNG";
import FS_Gill from "../../assets/staff_pics/FS_Gill.PNG";
import CI_McDonld from "../../assets/staff_pics/CI_McDonald.png";
import CI_Gill from "../../assets/staff_pics/CI_Gill.png";
import CI_Stone from "../../assets/staff_pics/CI_Stone.png";

import Placeholder from "../../assets/staff_pics/Placeholder.png";

import "./staffPicsStyles.css";

function StaffPics() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-4 gap-1 staff-container pt-4">
                
                <div className="flex items-center justify-center md:col-start-5 md:col-end-9 md:row-start-1 md:row-end-2">

                    <div className="image-text-container text-center">
                        <img src={Flt_Lt_Doherty} className="staff-img" alt="Flt Lt Simon Doherty" />
                        <p className="text-xl font-extrabold leading-none lg:text-2xl text-black">Flt Lt Simon Doherty</p>
                    </div>
                </div>
                <div className="flex items-center justify-center md:col-start-5 md:col-end-9 md:row-start-2 md:row-end-3">
                    <div className="image-text-container text-center">
                        <img src={CI_Catterall} className="staff-img" alt="CI Roy Catterall" />
                        <p className="text-xl font-extrabold leading-none lg:text-2xl text-black">CI Roy Catterall (Wg Cdr Ret'd)</p>
                    </div>
                </div>

                <div className="flex items-center justify-center  md:col-start-3 md:col-end-7 md:row-start-3 md:row-end-4">
                    <div className="image-text-container text-center">
                        <img src={WO_Barker} className="staff-img" alt="WO Jonathon Barker" />
                        <p className="text-xl font-extrabold leading-none lg:text-2xl text-black">WO Jonathon Barker</p>
                    </div>
                </div>

                <div className="flex items-center justify-center md:col-start-7 md:col-end-11 md:row-start-3 md:row-end-4">
                    <div className="image-text-container text-center">
                        <img src={FS_Gill} className="staff-img" alt="FS Joseph Gill" />
                        <p className="text-xl font-extrabold leading-none lg:text-2xl text-black">FS Joseph Gill</p>
                    </div>
                </div>
                <div className="flex items-center justify-center md:col-start-1 md:col-end-5 md:row-start-4 md:row-end-5">
                    <div className="image-text-container text-center">
                        <img src={CI_McDonld} className="staff-img" alt="CI Ben McDonald" />
                        <p className="text-xl font-extrabold leading-none lg:text-2xl text-black">CI Ben McDonald</p>
                    </div>
                </div>

                <div className="flex items-center justify-center md:col-start-5 md:col-end-9 md:row-start-4 md:row-end-5">
                    <div className="image-text-container m-auto">
                        <img src={CI_Gill} className="staff-img"/>
                        <p className="text-xl font-extrabold leading-none lg:text-2xl text-black">CI Jacob Gill</p>
                    </div>
                </div>

                <div className="flex items-center justify-center md:col-start-9 md:col-end-13 md:row-start-4 md:row-end-5">
                    <div className="image-text-container m-auto">
                        <img src={CI_Stone} className="staff-img"/>
                        <p className="text-xl font-extrabold leading-none lg:text-2xl text-black">CI Sophie Stone</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StaffPics;
