import Flt_Lt_Doherty from "../../assets/staff_pics/Flt_Lt_Doherty.webp";
import CI_Catterall from "../../assets/staff_pics/CI_Catterall.webp";
import Fg_Off_Quick from "../../assets/staff_pics/Fg_Off_Quick.webp";
import WO_Barker from "../../assets/staff_pics/WO_Barker.webp";
import FS_Gill from "../../assets/staff_pics/FS_Gill.webp";
import Sgt_Lloyd_Morris from "../../assets/staff_pics/Sgt_Lloyd_Morris.webp";
import Sgt_MacGregor from "../../assets/staff_pics/Sgt_MacGregor.webp";
import CI_McDonld from "../../assets/staff_pics/CI_McDonald.webp";
import CI_Gill from "../../assets/staff_pics/CI_Gill.webp";
import CI_Stone from "../../assets/staff_pics/CI_Stone.webp";

import Placeholder from "../../assets/staff_pics/Placeholder.webp";

import "./staffPicsStyles.css";

function StaffPics() {
    return (
        <div className="staff-container max-w-7xl mx-auto px-4 py-4">
            {/* Grid Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* Card 1 */}
                <div className="image-text-container bg-transparent border border-3 border-gray-300 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                    <div className="aspect-w-3 aspect-h-4 flex items-center justify-center overflow-hidden">
                        <img
                            src={Flt_Lt_Doherty}
                            className="w-full h-full max-h-72 w-auto"
                            alt="Flt Lt Simon Doherty"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <p className="text-xl font-bold text-gray-900">
                            Flt Lt Simon Doherty
                        </p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="image-text-container bg-transparent border border-3 border-gray-300 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                    <div className="aspect-w-3 aspect-h-4 flex items-center justify-center overflow-hidden">
                        <img
                            src={CI_Catterall}
                            className="w-full h-full max-h-72 w-auto"
                            alt="CI Roy Catterall"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <p className="text-xl font-bold text-gray-900">
                            CI Roy Catterall (Wg Cdr Ret'd)
                        </p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="image-text-container bg-transparent border border-3 border-gray-300 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                    <div className="aspect-w-3 aspect-h-4 flex items-center justify-center overflow-hidden">
                        <img
                            src={Fg_Off_Quick}
                            className="w-full h-full max-h-72 w-auto"
                            alt="Fg Off Jack Quick"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <p className="text-xl font-bold text-gray-900">
                            Fg Off Jack Quick (RAF)
                        </p>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="image-text-container bg-transparent border border-3 border-gray-300 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                    <div className="aspect-w-3 aspect-h-4 flex items-center justify-center overflow-hidden">
                        <img
                            src={WO_Barker}
                            className="w-full h-full max-h-72 w-auto"
                            alt="WO Jonathon Barker"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <p className="text-xl font-bold text-gray-900">
                            WO Jonathon Barker
                        </p>
                    </div>
                </div>

                {/* Card 5 */}
                <div className="image-text-container bg-transparent border border-3 border-gray-300 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                    <div className="aspect-w-3 aspect-h-4 flex items-center justify-center overflow-hidden">
                        <img
                            src={FS_Gill}
                            className="w-full h-full max-h-72 w-auto"
                            alt="FS Joseph Gill"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <p className="text-xl font-bold text-gray-900">
                            FS Joseph Gill
                        </p>
                    </div>
                </div>

                {/* Card 6 */}
                <div className="image-text-container bg-transparent border border-3 border-gray-300 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                    <div className="aspect-w-3 aspect-h-4 flex items-center justify-center overflow-hidden">
                        <img
                            src={Sgt_MacGregor}
                            className="w-full h-full max-h-72 w-auto"
                            alt="Sgt Callum MacGregor"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <p className="text-xl font-bold text-gray-900">
                            Sgt Callum MacGregor
                        </p>
                    </div>
                </div>

                {/* Card 7 */}
                <div className="image-text-container bg-transparent border border-3 border-gray-300 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                    <div className="aspect-w-3 aspect-h-4 flex items-center justify-center overflow-hidden">
                        <img
                            src={Sgt_Lloyd_Morris}
                            className="w-full h-full max-h-72 w-auto"
                            alt="A Sgt Gareth Lloyd Morris"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <p className="text-xl font-bold text-gray-900">
                            A Sgt G Lloyd Morris
                        </p>
                    </div>
                </div>

                {/* Card 8 */}
                <div className="image-text-container bg-transparent border border-3 border-gray-300 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                    <div className="aspect-w-3 aspect-h-4 flex items-center justify-center overflow-hidden">
                        <img
                            src={CI_McDonld}
                            className="w-full h-full max-h-72 w-auto"
                            alt="CI Ben McDonald"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <p className="text-xl font-bold text-gray-900">
                            CI Ben McDonald
                        </p>
                    </div>
                </div>

                {/* Card 9 */}
                <div className="image-text-container bg-transparent border border-3 border-gray-300 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                    <div className="aspect-w-3 aspect-h-4 flex items-center justify-center overflow-hidden">
                        <img
                            src={CI_Gill}
                            className="w-full h-full max-h-72 w-auto"
                            alt="CI Jacob Gill"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <p className="text-xl font-bold text-gray-900">
                            CI Jacob Gill
                        </p>
                    </div>
                </div>

                {/* Card 10 */}
                <div className="image-text-container bg-transparent border border-3 border-gray-300 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                    <div className="aspect-w-3 aspect-h-4 flex items-center justify-center overflow-hidden">
                        <img
                            src={CI_Stone}
                            className="w-full h-full max-h-72 w-auto"
                            alt="CI Sophie Stone"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <p className="text-xl font-bold text-gray-900">
                            CI Sophie Stone
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StaffPics;