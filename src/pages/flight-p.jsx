import { useEffect, useState } from 'react';
import axios from 'axios';
import Title from "../components/mainTitle/title";

function FlightP() {
    const [pointsData, setpointsData] = useState([]);

    useEffect(() => {
        fetchCSVData();    // Fetch the CSV data when the component mounts
    }, []);

    const fetchCSVData = () => {
        const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQPqhm8v6F0T2M1Q96MMhSQEw5Jat4oU6-fqgY0USCcppYxjcpRgCSYG1vzNFhdbLfPyRZd65gf1ybT/pub?output=csv";

        axios.get(csvUrl)
            .then((response) => {
                const parsedCsvData = parseCSV(response.data);
                setpointsData(parsedCsvData);  // set fetched data
            })
            .catch((error) => {
                console.error('Error fetching CSV data:', error);
            });
    };

    function parseCSV(csvText) {
        const rows = csvText.split(/\r?\n/);  
        
        // Ensure there's at least one data row after headers, if not just null
        let pointsRow = rows[1] ? rows[1].split(',') : ["---", "---"]; 

        return pointsRow;
    }

    return (
        <>
            <div className="bg-dark-blue-main title-hover text-center pb-3 lg:pt-14">
                <Title title="Flight Points"></Title>
                <p className="text-xl leading-7 tracking-tight lg:text-2xl text-white pb-1 pt-4 px-8">
                    Throughout the year, the two main flights compete in various sessions to win a trophy at the end.<br /><br />
                    This is the current points tally.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 text-center m-auto w-full xl:w-9/12 pt-3 px-5">
                <div>
                    <h1 className="text-8xl font-extrabold">A Flight</h1>
                    <h2 className="text-5xl pt-4 font-bold">{pointsData[0]}</h2>
                </div>
                <div>
                    <h1 className="text-8xl font-extrabold">B Flight</h1>
                    <h2 className="text-5xl pt-4 font-bold">{pointsData[1]}</h2>
                </div>
            </div>
        </>
    );
}

export default FlightP;