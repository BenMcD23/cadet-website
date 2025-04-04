import FS_Wimbury from "../../assets/nco_pics/FS_Wimbury.webp";
import FS_Tyrell from "../../assets/nco_pics/FS_Tyrell.webp";

import Sgt_Bardsley from "../../assets/nco_pics/Sgt_Bardsley.webp";
import Sgt_Beverley from "../../assets/nco_pics/Sgt_Beverley.webp";
import Sgt_Murray from "../../assets/nco_pics/Sgt_Murray.webp";
import Sgt_Evans from "../../assets/nco_pics/Sgt_Evans.webp";
import Sgt_Hall from "../../assets/nco_pics/Sgt_Hall.webp";
import Sgt_Mullery_McCourt from "../../assets/nco_pics/Sgt_Mullery_McCourt.webp";

import Cpl_Brice from "../../assets/nco_pics/Cpl_Brice.webp";
import Cpl_Davies from "../../assets/nco_pics/Cpl_Davies.webp";
import Cpl_Drury from "../../assets/nco_pics/Cpl_Drury.webp";
import Cpl_Milligan from "../../assets/nco_pics/Cpl_Milligan.webp";
import Cpl_Tyrell from "../../assets/nco_pics/Cpl_Tyrell.webp";
import Cpl_Mack from "../../assets/nco_pics/Cpl_Mack.webp";
import Cpl_Malik from "../../assets/nco_pics/Cpl_Malik.webp";

import "./ncoPicsStyles.css";

function NCOPics() {
    return (
        <div className="staff-container max-w-7xl mx-auto px-4 py-4">
            {/* Grid Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* Card 1 */}
                <div className="image-text-container bg-transparent border border-3 border-gray-300 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                    <div className="aspect-w-3 aspect-h-4 flex items-center justify-center overflow-hidden">
                        <img
                            src={FS_Wimbury}
                            className="w-full h-full max-h-72 w-auto"
                            alt="FS T Wimbury"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <p className="text-xl font-bold text-gray-900">
                            FS T Wimbury
                        </p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="image-text-container bg-transparent border border-3 border-gray-300 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                    <div className="aspect-w-3 aspect-h-4 flex items-center justify-center overflow-hidden">
                        <img
                            src={FS_Tyrell}
                            className="w-full h-full max-h-72 w-auto"
                            alt="FS V Tyrell"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <p className="text-xl font-bold text-gray-900">
                            FS V Tyrell
                        </p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="image-text-container bg-transparent border border-3 border-gray-300 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                    <div className="aspect-w-3 aspect-h-4 flex items-center justify-center overflow-hidden">
                        <img
                            src={Sgt_Bardsley}
                            className="w-full h-full max-h-72 w-auto"
                            alt="Sgt A Bardsley"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <p className="text-xl font-bold text-gray-900">
                            Sgt A Bardsley
                        </p>
                    </div>
                </div>

                {/* Card 5 */}
                <div className="image-text-container bg-transparent border border-3 border-gray-300 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                    <div className="aspect-w-3 aspect-h-4 flex items-center justify-center overflow-hidden">
                        <img
                            src={Sgt_Murray}
                            className="w-full h-full max-h-72 w-auto"
                            alt="Sgt C Murray"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <p className="text-xl font-bold text-gray-900">
                            Sgt C Murray
                        </p>
                    </div>
                </div>

                {/* Card 7 */}
                <div className="image-text-container bg-transparent border border-3 border-gray-300 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                    <div className="aspect-w-3 aspect-h-4 flex items-center justify-center overflow-hidden">
                        <img
                            src={Sgt_Hall}
                            className="w-full h-full max-h-72 w-auto"
                            alt="Sgt L Hall"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <p className="text-xl font-bold text-gray-900">
                            Sgt L Hall
                        </p>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="image-text-container bg-transparent border border-3 border-gray-300 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                    <div className="aspect-w-3 aspect-h-4 flex items-center justify-center overflow-hidden">
                        <img
                            src={Sgt_Beverley}
                            className="w-full h-full max-h-72 w-auto"
                            alt="Sgt M Beverley"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <p className="text-xl font-bold text-gray-900">
                            Sgt M Beverley
                        </p>
                    </div>
                </div>

                {/* Card 8 */}
                <div className="image-text-container bg-transparent border border-3 border-gray-300 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                    <div className="aspect-w-3 aspect-h-4 flex items-center justify-center overflow-hidden">
                        <img
                            src={Sgt_Mullery_McCourt}
                            className="w-full h-full max-h-72 w-auto"
                            alt="Sgt N Mullery McCourt"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <p className="text-xl font-bold text-gray-900">
                            Sgt N Mullery McCourt
                        </p>
                    </div>
                </div>

                {/* Card 6 */}
                <div className="image-text-container bg-transparent border border-3 border-gray-300 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                    <div className="aspect-w-3 aspect-h-4 flex items-center justify-center overflow-hidden">
                        <img
                            src={Sgt_Evans}
                            className="w-full h-full max-h-72 w-auto"
                            alt="Sgt K Evans"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <p className="text-xl font-bold text-gray-900">
                            Sgt K Evans
                        </p>
                    </div>
                </div>


                {/* Card 9 */}
                <div className="image-text-container bg-transparent border border-3 border-gray-300 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                    <div className="aspect-w-3 aspect-h-4 flex items-center justify-center overflow-hidden">
                        <img
                            src={Cpl_Milligan}
                            className="w-full h-full max-h-72 w-auto"
                            alt="Cpl B Milligan"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <p className="text-xl font-bold text-gray-900">
                            Cpl B Milligan
                        </p>
                    </div>
                </div>

                {/* Card 10 */}
                <div className="image-text-container bg-transparent border border-3 border-gray-300 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                    <div className="aspect-w-3 aspect-h-4 flex items-center justify-center overflow-hidden">
                        <img
                            src={Cpl_Mack}
                            className="w-full h-full max-h-72 w-auto"
                            alt="Cpl C Mack"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <p className="text-xl font-bold text-gray-900">
                            Cpl C Mack
                        </p>
                    </div>
                </div>



                {/* Card 10 */}
                <div className="image-text-container bg-transparent border border-3 border-gray-300 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                    <div className="aspect-w-3 aspect-h-4 flex items-center justify-center overflow-hidden">
                        <img
                            src={Cpl_Tyrell}
                            className="w-full h-full max-h-72 w-auto"
                            alt="Cpl E Tyrell"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <p className="text-xl font-bold text-gray-900">
                            Cpl E Tyrell
                        </p>
                    </div>
                </div>

                {/* Card 10 */}
                <div className="image-text-container bg-transparent border border-3 border-gray-300 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                    <div className="aspect-w-3 aspect-h-4 flex items-center justify-center overflow-hidden">
                        <img
                            src={Cpl_Malik}
                            className="w-full h-full max-h-72 w-auto"
                            alt="Cpl F Malik"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <p className="text-xl font-bold text-gray-900">
                            Cpl F Malik
                        </p>
                    </div>
                </div>

                {/* Card 10 */}
                <div className="image-text-container bg-transparent border border-3 border-gray-300 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                    <div className="aspect-w-3 aspect-h-4 flex items-center justify-center overflow-hidden">
                        <img
                            src={Cpl_Davies}
                            className="w-full h-full max-h-72 w-auto"
                            alt="Cpl G Davies"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <p className="text-xl font-bold text-gray-900">
                            Cpl G Davies
                        </p>
                    </div>
                </div>

                {/* Card 10 */}
                <div className="image-text-container bg-transparent border border-3 border-gray-300 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                    <div className="aspect-w-3 aspect-h-4 flex items-center justify-center overflow-hidden">
                        <img
                            src={Cpl_Brice}
                            className="w-full h-full max-h-72 w-auto"
                            alt="Cpl J Brice"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <p className="text-xl font-bold text-gray-900">
                            Cpl J Brice
                        </p>
                    </div>
                </div>

                {/* Card 10 */}
                <div className="image-text-container bg-transparent border border-3 border-gray-300 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                    <div className="aspect-w-3 aspect-h-4 flex items-center justify-center overflow-hidden">
                        <img
                            src={Cpl_Drury}
                            className="w-full h-full max-h-72 w-auto"
                            alt="Cpl L Drury"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <p className="text-xl font-bold text-gray-900">
                            Cpl L Drury
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}


export default NCOPics;
