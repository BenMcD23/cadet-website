import FS_Wimbury from "../../assets/nco_pics/FS_Wimbury.webp";
import FS_Tyrell from "../../assets/nco_pics/FS_Tyrell.webp";

import Sgt_Bardsley from "../../assets/nco_pics/Sgt_Bardsley.webp";
import Sgt_Murray from "../../assets/nco_pics/Sgt_Murray.webp";
import Sgt_Evans from "../../assets/nco_pics/Sgt_Evans.webp";
import Sgt_Hall from "../../assets/nco_pics/Sgt_Hall.webp";
import Sgt_Mullery_McCourt from "../../assets/nco_pics/Sgt_Mullery_McCourt.webp";

import Cpl_Beverley from "../../assets/nco_pics/Cpl_Beverley.webp";
import Cpl_Brice from "../../assets/nco_pics/Cpl_Brice.webp";
import Cpl_Davies from "../../assets/nco_pics/Cpl_Davies.webp";
import Cpl_Drury from "../../assets/nco_pics/Cpl_Drury.webp";
import Cpl_Milligan from "../../assets/nco_pics/Cpl_Milligan.webp";
import Cpl_Tyrell from "../../assets/nco_pics/Cpl_Tyrell.webp";

import "./ncoPicsStyles.css";

function NCOPics() {
    return (
        <>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-1 staff-container pt-4">

            <div className="image-text-container text-center">
                <img src={FS_Wimbury} className="staff-img m-auto" alt="FS T Wimbury" />
                <p className="text-xl font-extrabold leading-none xl:text-2xl text-black">FS T Wimbury</p>
            </div>

            <div className="image-text-container text-center">
                <img src={FS_Tyrell} className="staff-img m-auto" alt="FS V Tyrell" />
                <p className="text-xl font-extrabold leading-none xl:text-2xl text-black">FS V Tyrell</p>
            </div>
    
            <div className="image-text-container text-center">
                <img src={Sgt_Bardsley} className="staff-img m-auto" alt="Sgt A Bardsley" />
                <p className="text-xl font-extrabold leading-none xl:text-2xl text-black">Sgt A Bardsley</p>
            </div>

            <div className="image-text-container text-center">
                <img src={Cpl_Beverley} className="staff-img m-auto" alt="Cpl M Beverely" />
                <p className="text-xl font-extrabold leading-none xl:text-2xl text-black">Sgt M Beverly</p>
            </div>

            <div className="image-text-container text-center">
                <img src={Sgt_Murray} className="staff-img m-auto" alt="Sgt C Murray" />
                <p className="text-xl font-extrabold leading-none xl:text-2xl text-black">Sgt C Murray</p>
            </div>

            <div className="image-text-container text-center">
                <img src={Sgt_Evans} className="staff-img m-auto" alt="Sgt K Evans" />
                <p className="text-xl font-extrabold leading-none xl:text-2xl text-black">Sgt K Evans</p>
            </div>

            <div className="image-text-container text-center">
                <img src={Sgt_Hall} className="staff-img m-auto" alt="Sgt L Hall" />
                <p className="text-xl font-extrabold leading-none xl:text-2xl text-black">Sgt L Hall</p>
            </div>

            <div className="image-text-container text-center">
                <img src={Sgt_Mullery_McCourt} className="staff-img m-auto" alt="Sgt N Mullery McCourt" />
                <p className="text-xl font-extrabold leading-none xl:text-2xl text-black">Sgt N Mullery McCourt</p>
            </div>

            <div className="image-text-container text-center">
                <img src={Cpl_Milligan} className="staff-img m-auto" alt="Cpl B Milligan" />
                <p className="text-xl font-extrabold leading-none xl:text-2xl text-black">Cpl B Milligan</p>
            </div>

            <div className="image-text-container text-center">
                <img src={Cpl_Tyrell} className="staff-img m-auto" alt="Cpl E Tyrell" />
                <p className="text-xl font-extrabold leading-none xl:text-2xl text-black">Cpl E Tyrell</p>
            </div>

            <div className="image-text-container text-center">
                <img src={Cpl_Davies} className="staff-img m-auto" alt="Cpl G Davies" />
                <p className="text-xl font-extrabold leading-none xl:text-2xl text-black">Cpl G Davies</p>
            </div>

            <div className="image-text-container text-center">
                <img src={Cpl_Brice} className="staff-img m-auto" alt="Cpl J Brice" />
                <p className="text-xl font-extrabold leading-none xl:text-2xl text-black">Cpl J Brice</p>
            </div>

            <div className="image-text-container text-center">
                <img src={Cpl_Drury} className="staff-img m-auto" alt="Cpl L Drury" />
                <p className="text-xl font-extrabold leading-none xl:text-2xl text-black">Cpl L Drury</p>
            </div>


        </div>
    </>
    );
}

export default NCOPics;
