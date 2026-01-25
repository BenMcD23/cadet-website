const images = import.meta.glob(
  "../../assets/nco_pics/*.webp",
  { eager: true }
);

const getImage = (fileName) =>
  images[`../../assets/nco_pics/${fileName}`]?.default;

import "./ncoPicsStyles.css";

function NCOPics() {

    const ncos = [
        { name: "CWO V Tyrell", alt: "CWO V Tyrell", image: "CWO Tyrell.webp" },
        { name: "FS M Beverley", alt: "FS M Beverley", image: "Sgt Beverley.webp" },
        { name: "FS N Mullery-McCourt", alt: "FS N Mullery-McCourt", image: "Sgt Mullery-McCourt.webp" },
        { name: "FS T Wimbury", alt: "FS T Wimbury", image: "FS Wimbury.webp" },

        { name: "Sgt J Brice", alt: "Sgt J Brice", image: "Cpl Brice.webp" },
        { name: "Sgt G Davies", alt: "Sgt A Davies", image: "Cpl Davies.webp" },
        { name: "Sgt L Drury", alt: "Sgt L Drury", image: "Cpl Drury.webp" },
        { name: "Sgt L Hall", alt: "Sgt L Hall", image: "Sgt Hall.webp" },

        { name: "Cpl A Ahsan", alt: "Cpl A Ahsan", image: "Cdt Ahsan.webp" },
        { name: "Cpl K Evans", alt: "Cpl K Evans", image: "Cpl Evans.webp" },
        { name: "Cpl C Mack", alt: "Cpl C Mack", image: "Cpl Mack.webp" },
        { name: "Cpl F Malik", alt: "Cpl F Malik", image: "Cpl Malik.webp" },
        { name: "Cpl T Partington", alt: "Cpl T Partington", image: "Cdt Partington.webp" },
        { name: "Cpl R Sawczuk", alt: "Cpl R Sawczuk", image: "Cdt Sawczuk.webp" },
        { name: "Cpl E Tyrell", alt: "Cpl E Tyrell", image: "Cpl Tyrell.webp" },
        { name: "Cpl T Tyrell", alt: "Cpl T Tyrell", image: "Cdt Tyrell.webp" },
        ];

    return (
        <div className="staff-container max-w-7xl mx-auto px-4 py-4">
            {/* Grid Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {ncos.map((person) => (
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





{/* 
                <div className="image-text-container bg-transparent border border-3 border-gray-300 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                    <div className="aspect-w-3 aspect-h-4 flex items-center justify-center overflow-hidden">
                        <img
                            src={FS_Tyrell}
                            className="w-full h-full max-h-72 w-auto"
                            alt="CWO V Tyrell"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <p className="text-xl font-bold text-gray-900">
                            FS V Tyrell
                        </p>
                    </div>
                </div>


                <div className="image-text-container bg-transparent border border-3 border-gray-300 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                    <div className="aspect-w-3 aspect-h-4 flex items-center justify-center overflow-hidden">
                        <img
                            src={FS_Wimbury}
                            className="w-full h-full max-h-72 w-auto"
                            alt="FS M Beverley"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <p className="text-xl font-bold text-gray-900">
                            FS M Beverley
                        </p>
                    </div>
                </div>

                <div className="image-text-container bg-transparent border border-3 border-gray-300 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                    <div className="aspect-w-3 aspect-h-4 flex items-center justify-center overflow-hidden">
                        <img
                            src={FS_Wimbury}
                            className="w-full h-full max-h-72 w-auto"
                            alt="FS N Mullery-McCourt"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <p className="text-xl font-bold text-gray-900">
                            FS N Mullery-McCourt
                        </p>
                    </div>
                </div>

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

                <div className="image-text-container bg-transparent border border-3 border-gray-300 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                    <div className="aspect-w-3 aspect-h-4 flex items-center justify-center overflow-hidden">
                        <img
                            src={FS_Wimbury}
                            className="w-full h-full max-h-72 w-auto"
                            alt="Sgt J Brice"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <p className="text-xl font-bold text-gray-900">
                            Sgt J Brice
                        </p>
                    </div>
                </div>

                <div className="image-text-container bg-transparent border border-3 border-gray-300 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                    <div className="aspect-w-3 aspect-h-4 flex items-center justify-center overflow-hidden">
                        <img
                            src={FS_Wimbury}
                            className="w-full h-full max-h-72 w-auto"
                            alt="Sgt A Davies"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <p className="text-xl font-bold text-gray-900">
                            Sgt A Davies
                        </p>
                    </div>
                </div>
               
                <div className="image-text-container bg-transparent border border-3 border-gray-300 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                    <div className="aspect-w-3 aspect-h-4 flex items-center justify-center overflow-hidden">
                        <img
                            src={FS_Wimbury}
                            className="w-full h-full max-h-72 w-auto"
                            alt="Sgt L Drury"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <p className="text-xl font-bold text-gray-900">
                            Sgt L Drury
                        </p>
                    </div>
                </div>

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

                <div className="image-text-container bg-transparent border border-3 border-gray-300 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                    <div className="aspect-w-3 aspect-h-4 flex items-center justify-center overflow-hidden">
                        <img
                            src={Sgt_Hall}
                            className="w-full h-full max-h-72 w-auto"
                            alt="Cpl A Ahsan"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <p className="text-xl font-bold text-gray-900">
                            Cpl A Ahsan
                        </p>
                    </div>
                </div>

                <div className="image-text-container bg-transparent border border-3 border-gray-300 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                    <div className="aspect-w-3 aspect-h-4 flex items-center justify-center overflow-hidden">
                        <img
                            src={Sgt_Hall}
                            className="w-full h-full max-h-72 w-auto"
                            alt="Cpl K Evans"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <p className="text-xl font-bold text-gray-900">
                            Cpl K Evans
                        </p>
                    </div>
                </div>

                <div className="image-text-container bg-transparent border border-3 border-gray-300 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                    <div className="aspect-w-3 aspect-h-4 flex items-center justify-center overflow-hidden">
                        <img
                            src={Sgt_Hall}
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

                <div className="image-text-container bg-transparent border border-3 border-gray-300 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                    <div className="aspect-w-3 aspect-h-4 flex items-center justify-center overflow-hidden">
                        <img
                            src={Sgt_Hall}
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

                <div className="image-text-container bg-transparent border border-3 border-gray-300 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                    <div className="aspect-w-3 aspect-h-4 flex items-center justify-center overflow-hidden">
                        <img
                            src={Sgt_Hall}
                            className="w-full h-full max-h-72 w-auto"
                            alt="Cpl T Partington"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <p className="text-xl font-bold text-gray-900">
                            Cpl T Partington
                        </p>
                    </div>
                </div>

                <div className="image-text-container bg-transparent border border-3 border-gray-300 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                    <div className="aspect-w-3 aspect-h-4 flex items-center justify-center overflow-hidden">
                        <img
                            src={Sgt_Hall}
                            className="w-full h-full max-h-72 w-auto"
                            alt="Cpl R Sawczuk"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <p className="text-xl font-bold text-gray-900">
                            Cpl R Sawczuk
                        </p>
                    </div>
                </div>

                <div className="image-text-container bg-transparent border border-3 border-gray-300 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                    <div className="aspect-w-3 aspect-h-4 flex items-center justify-center overflow-hidden">
                        <img
                            src={Sgt_Hall}
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

                <div className="image-text-container bg-transparent border border-3 border-gray-300 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                    <div className="aspect-w-3 aspect-h-4 flex items-center justify-center overflow-hidden">
                        <img
                            src={Sgt_Hall}
                            className="w-full h-full max-h-72 w-auto"
                            alt="Cpl T Tyrell"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <p className="text-xl font-bold text-gray-900">
                            Cpl T Tyrell
                        </p>
                    </div>
                </div> */}
            </div>
        </div>
    );
}


export default NCOPics;
