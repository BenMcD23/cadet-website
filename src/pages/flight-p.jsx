import { useContext } from 'react';
import PointsContext from '../context/flightPointsContext';
import PageHeader from "../components/pageHeader/pageHeader";

function FlightP() {
    const { pointsData } = useContext(PointsContext);

    const flights = [
        { name: "A Flight", points: pointsData[0] },
        { name: "B Flight", points: pointsData[1] },
    ];

    return (
        <>
            <PageHeader
                title="Flight Points"
                intro="Throughout the year, the two main flights compete in various sessions to win a trophy at the end.
                    This is the current points tally."
            />

            <div className="section bg-surface">
                <div className="section-container grid gap-6 md:grid-cols-2">
                    {flights.map((flight) => (
                        <div key={flight.name} className="card border-t-4 border-accent p-10 text-center">
                            <h2 className="text-3xl font-extrabold text-navy md:text-4xl">{flight.name}</h2>
                            <p className="mt-4 text-6xl font-extrabold text-accent-dark md:text-7xl">{flight.points}</p>
                            <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-ink/60">points</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default FlightP;
