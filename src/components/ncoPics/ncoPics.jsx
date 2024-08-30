import CWO_Lloyd_Morris from "../../assets/nco_pics/CWO_Lloyd_Morris.PNG";
import Sgt_Bardsley from "../../assets/nco_pics/Sgt_Bardsley.PNG";
import Sgt_Murray from "../../assets/nco_pics/Sgt_Murray.PNG";
import Sgt_Evans from "../../assets/nco_pics/Sgt_Evans.PNG";
import Sgt_Hall from "../../assets/nco_pics/Sgt_Hall.PNG";
import Sgt_Wimbury from "../../assets/nco_pics/Sgt_Wimbury.PNG";
import Sgt_Tyrell from "../../assets/nco_pics/Sgt_Tyrell.PNG";
import Cpl_Milligan from "../../assets/nco_pics/Cpl_Milligan.PNG";
import Cpl_Davies from "../../assets/nco_pics/Cpl_Davies.PNG";
import Cpl_Lear from "../../assets/nco_pics/Cpl_Lear.PNG";
import Cpl_Evans from "../../assets/nco_pics/Cpl_Evans.PNG";
import Cpl_Drury from "../../assets/nco_pics/Cpl_Drury.PNG";
import Cpl_Beverley from "../../assets/nco_pics/Cpl_Beverley.PNG";
import Cpl_Mullery_McCourt from "../../assets/nco_pics/Cpl_Mullery_McCourt.PNG";

import "./ncoPicsStyles.css";

import Title from "../mainTitle/title";


function NCOPics() {
    return (
        <>

        <div className="grid grid-cols-1 xl:grid-cols-14 grid-rows-3 gap-1 staff-container pt-4">
            {/* Top Row (1 person) */}
            <div className="flex items-center justify-center xl:col-start-7 xl:col-end-9 xl:row-start-1 xl:row-end-2">
                <div className="image-text-container text-center">
                    <img src={CWO_Lloyd_Morris} className="staff-img" alt="Flt Lt Simon Doherty" />
                    <p className="text-xl font-extrabold leading-none tracking-tight xl:text-2xl text-black">CWO G Lloyd Morris</p>
                </div>
            </div>

            {/* Second Row (6 people) */}
            <div className="flex items-center justify-center xl:col-start-2 xl:col-end-4 xl:row-start-2 xl:row-end-3">
                <div className="image-text-container text-center">
                    <img src={Sgt_Bardsley} className="staff-img" alt="CI Roy Catterall" />
                    <p className="text-xl font-extrabold leading-none tracking-tight xl:text-2xl text-black">Sgt A Bardsley</p>
                </div>
            </div>

            <div className="flex items-center justify-center xl:col-start-4 xl:col-end-6 xl:row-start-2 xl:row-end-3">
                <div className="image-text-container text-center">
                    <img src={Sgt_Murray} className="staff-img" alt="WO Jonathon Barker" />
                    <p className="text-xl font-extrabold leading-none tracking-tight xl:text-2xl text-black">Sgt C Murray</p>
                </div>
            </div>

            <div className="flex items-center justify-center xl:col-start-6 xl:col-end-8 xl:row-start-2 xl:row-end-3">
                <div className="image-text-container text-center">
                    <img src={Sgt_Evans} className="staff-img" alt="FS Joseph Gill" />
                    <p className="text-xl font-extrabold leading-none tracking-tight xl:text-2xl text-black">Sgt K Evans</p>
                </div>
            </div>

            <div className="flex items-center justify-center xl:col-start-8 xl:col-end-10 xl:row-start-2 xl:row-end-3">
                <div className="image-text-container text-center">
                    <img src={Sgt_Hall} className="staff-img" alt="CI Ben McDonald" />
                    <p className="text-xl font-extrabold leading-none tracking-tight xl:text-2xl text-black">Sgt L Hall</p>
                </div>
            </div>

            <div className="flex items-center justify-center xl:col-start-10 xl:col-end-12 xl:row-start-2 xl:row-end-3">
                <div className="image-text-container text-center">
                    <img src={Sgt_Wimbury} className="staff-img" alt="CI Jacob Gill" />
                    <p className="text-xl font-extrabold leading-none tracking-tight xl:text-2xl text-black">Sgt T Wimbury</p>
                </div>
            </div>

            <div className="flex items-center justify-center xl:col-start-12 xl:col-end-[14] xl:row-start-2 xl:row-end-3">
                <div className="image-text-container text-center">
                    <img src={Sgt_Tyrell} className="staff-img" alt="CI Sophie Stone" />
                    <p className="text-xl font-extrabold leading-none tracking-tight xl:text-2xl text-black">Sgt V Tyrell</p>
                </div>
            </div>

            {/* Third Row (7 people) */}
            <div className="flex items-center justify-center xl:col-start-1 xl:col-end-3 xl:row-start-3 xl:row-end-4">
                <div className="image-text-container text-center">
                    <img src={Cpl_Milligan} className="staff-img" alt="CI Roy Catterall" />
                    <p className="text-xl font-extrabold leading-none tracking-tight xl:text-2xl text-black">Cpl B Milligan</p>
                </div>
            </div>

            <div className="flex items-center justify-center xl:col-start-3 xl:col-end-5 xl:row-start-3 xl:row-end-4">
                <div className="image-text-container text-center">
                    <img src={Cpl_Davies} className="staff-img" alt="WO Jonathon Barker" />
                    <p className="text-xl font-extrabold leading-none tracking-tight xl:text-2xl text-black">Cpl G Davies</p>
                </div>
            </div>

            <div className="flex items-center justify-center xl:col-start-5 xl:col-end-7 xl:row-start-3 xl:row-end-4">
                <div className="image-text-container text-center">
                    <img src={Cpl_Lear} className="staff-img" alt="FS Joseph Gill" />
                    <p className="text-xl font-extrabold leading-none tracking-tight xl:text-2xl text-black">Cpl J Lear</p>
                </div>
            </div>

            <div className="flex items-center justify-center xl:col-start-7 xl:col-end-9 xl:row-start-3 xl:row-end-4">
                <div className="image-text-container text-center">
                    <img src={Cpl_Evans} className="staff-img" alt="CI Ben McDonald" />
                    <p className="text-xl font-extrabold leading-none tracking-tight xl:text-2xl text-black">Cpl K Evans</p>
                </div>
            </div>

            <div className="flex items-center justify-center xl:col-start-9 xl:col-end-11 xl:row-start-3 xl:row-end-4">
                <div className="image-text-container text-center">
                    <img src={Cpl_Drury} className="staff-img" alt="CI Jacob Gill" />
                    <p className="text-xl font-extrabold leading-none tracking-tight xl:text-2xl text-black">Cpl L Drury</p>
                </div>
            </div>

            <div className="flex items-center justify-center xl:col-start-11 xl:col-end-13 xl:row-start-3 xl:row-end-4">
                <div className="image-text-container text-center">
                    <img src={Cpl_Beverley} className="staff-img" alt="CI Sophie Stone" />
                    <p className="text-xl font-extrabold leading-none tracking-tight xl:text-2xl text-black">Cpl M Beverly</p>
                </div>
            </div>

            <div className="flex items-center justify-center xl:col-start-13 xl:col-end-[15] xl:row-start-3 xl:row-end-4">
                <div className="image-text-container text-center">
                    <img src={Cpl_Mullery_McCourt} className="staff-img" alt="CI Roy Catterall" />
                    <p className="text-xl font-extrabold leading-none tracking-tight xl:text-2xl text-black">Cpl N Mullery McCourt</p>
                </div>
            </div>
        </div>
    </>
    );
}

export default NCOPics;
