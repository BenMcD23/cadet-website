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

function NCOPics() {
    return (
        <>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-1 staff-container pt-4">
            <div className="image-text-container text-center">
                <img src={CWO_Lloyd_Morris} className="staff-img m-auto" alt="CWO G Lloyd Morris" />
                <p className="text-xl font-extrabold leading-none xl:text-2xl text-black">CWO G Lloyd Morris</p>
            </div>

    
            <div className="image-text-container text-center">
                <img src={Sgt_Bardsley} className="staff-img m-auto" alt="Sgt A Bardsley" />
                <p className="text-xl font-extrabold leading-none xl:text-2xl text-black">Sgt A Bardsley</p>
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
                <img src={Sgt_Wimbury} className="staff-img m-auto" alt="Sgt T Wimbury" />
                <p className="text-xl font-extrabold leading-none xl:text-2xl text-black">Sgt T Wimbury</p>
            </div>

            <div className="image-text-container text-center">
                <img src={Sgt_Tyrell} className="staff-img m-auto" alt="Sgt V Tyrell" />
                <p className="text-xl font-extrabold leading-none xl:text-2xl text-black">Sgt V Tyrell</p>
            </div>

            <div className="image-text-container text-center">
                <img src={Cpl_Milligan} className="staff-img m-auto" alt="Cpl B Milligan" />
                <p className="text-xl font-extrabold leading-none xl:text-2xl text-black">Cpl B Milligan</p>
            </div>

            <div className="image-text-container text-center">
                <img src={Cpl_Davies} className="staff-img m-auto" alt="Cpl G Davies" />
                <p className="text-xl font-extrabold leading-none xl:text-2xl text-black">Cpl G Davies</p>
            </div>

            <div className="image-text-container text-center">
                <img src={Cpl_Lear} className="staff-img m-auto" alt="Cpl J Lear" />
                <p className="text-xl font-extrabold leading-none xl:text-2xl text-black">Cpl J Lear</p>
            </div>

            <div className="image-text-container text-center">
                <img src={Cpl_Evans} className="staff-img m-auto" alt="Cpl K Evans" />
                <p className="text-xl font-extrabold leading-none xl:text-2xl text-black">Cpl K Evans</p>
            </div>

            <div className="image-text-container text-center">
                <img src={Cpl_Drury} className="staff-img m-auto" alt="Cpl L Drury" />
                <p className="text-xl font-extrabold leading-none xl:text-2xl text-black">Cpl L Drury</p>
            </div>

            <div className="image-text-container text-center">
                <img src={Cpl_Beverley} className="staff-img m-auto" alt="Cpl M Beverly" />
                <p className="text-xl font-extrabold leading-none xl:text-2xl text-black">Cpl M Beverly</p>
            </div>

            <div className="image-text-container text-center">
                <img src={Cpl_Mullery_McCourt} className="staff-img m-auto" alt="Cpl N Mullery McCourt" />
                <p className="text-xl font-extrabold leading-none xl:text-2xl text-black">Cpl N Mullery McCourt</p>
            </div>
        </div>
    </>
    );
}

export default NCOPics;
