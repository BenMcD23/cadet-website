import { useEffect, useState, useRef } from 'react';
import Title from "../components/mainTitle/title";

function FlightP() {
    const [pointsData, setpointsData] = useState([]);

    // as was running twice on mount
    const fetchCalled = useRef(false);

    useEffect(() => {
        if (!fetchCalled.current) {
            fetchCalled.current = true;

            fetch("https://script.google.com/macros/s/AKfycbxqNF8X8f2YEOLRFuctGnLjUeI3ycoTIdvgUwWMlvS20JjxkhnzXBhKAs-goly4BuqTtA/exec", {
                method: 'POST'
            })
            .then(response => response.json())
            .then(data => {
                setpointsData(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        }
    }, []);

    return (
        <>
            <div className="bg-dark-blue-main title-hover text-center pb-3 lg:pt-14">
                <Title title="Flight Points" />
                <p className="text-xl leading-7 tracking-tight lg:text-2xl text-white pb-1 pt-4 px-8">
                    Throughout the year, the two main flights compete in various sessions to win a trophy at the end.<br /><br />
                    This is the current points tally.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 text-center m-auto w-full xl:w-9/12 py-3 px-5">
                <div>
                    <h1 className="text-6xl md:text-8xl font-extrabold">A Flight</h1>
                    <h2 className="text-5xl pt-4 font-bold">{pointsData[0]}</h2>
                </div>
                <div>
                    <h1 className="text-6xl md:text-8xl font-extrabold">B Flight</h1>
                    <h2 className="text-5xl pt-4 font-bold">{pointsData[1]}</h2>
                </div>
            </div>
        </>
    );
}

export default FlightP;
