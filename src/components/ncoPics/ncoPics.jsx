import { ncos } from "../../data/people";
import "./ncoPicsStyles.css";

function NCOPics() {
    return (
        <div className="staff-container max-w-7xl mx-auto px-4 py-4">
            {/* Grid Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {ncos.map((person) => {
                    const fullName = `${person.rank} ${person.name}`;
                    return (
                        <div
                        key={person.id}
                        className="image-text-container bg-transparent border border-3 border-gray-300 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
                        >
                        <div className="aspect-w-3 aspect-h-4 flex items-center justify-center overflow-hidden">
                            <img
                            src={person.image}
                            className="w-full h-full max-h-72 w-auto"
                            alt={fullName}
                            />
                        </div>
                        <div className="p-4 text-center">
                            <p className="text-xl font-bold text-gray-900">
                            {fullName}
                            </p>
                        </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default NCOPics;
