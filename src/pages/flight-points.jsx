import { useEffect, useState } from 'react';
import axios from 'axios';
import Title from "../components/mainTitle/title";

function FlightPoints() {
    const [csvData, setCsvData] = useState([]);

    useEffect(() => {
        fetchCSVData();    // Fetch the CSV data when the component mounts
    }, []); // The empty array ensures that this effect runs only once, like componentDidMount

    const fetchCSVData = () => {
        const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQPqhm8v6F0T2M1Q96MMhSQEw5Jat4oU6-fqgY0USCcppYxjcpRgCSYG1vzNFhdbLfPyRZd65gf1ybT/pub?output=csv"; // Replace with your Google Sheets CSV URL

        axios.get(csvUrl)    // Use Axios to fetch the CSV data
            .then((response) => {
                const parsedCsvData = parseCSV(response.data);  // Parse the CSV data into an array of objects
                setCsvData(parsedCsvData);  // Set the fetched data in the component's state
            })
            .catch((error) => {
                console.error('Error fetching CSV data:', error);
            });
    };

    function parseCSV(csvText) {
        const rows = csvText.split(/\r?\n/);  
        
        // Ensure there's at least one data row after headers
        let pointsRow = rows[1] ? rows[1].split(',') : ["---", "---"]; 

        return pointsRow; // Return the parsed row as an array
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
            <div className="grid grid-cols-2 text-center m-auto w-1/2 pt-3">
                <div>
                    <h1 className="text-8xl font-extrabold">A Flight</h1>
                    <h2 className="text-5xl pt-4 font-bold">{csvData[0]}</h2> {/* Use csvData state */}
                </div>
                <div>
                    <h1 className="text-8xl font-extrabold">B Flight</h1>
                    <h2 className="text-5xl pt-4 font-bold">{csvData[1]}</h2> {/* Use csvData state */}
                </div>
            </div>
        </>
    );
}

export default FlightPoints;
