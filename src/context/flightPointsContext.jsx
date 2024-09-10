import React, { createContext, useEffect, useState } from 'react';

const PointsContext = createContext();

export const FlightPointsProvider = ({ children }) => {
    const [pointsData, setPointsData] = useState(() => {
        // Try to load data from localStorage initially
        const storedData = sessionStorage.getItem('pointsData');
        return storedData ? JSON.parse(storedData) : [];
    });

    useEffect(() => {
        // check if data is already in local storage, if not, fetch it
        if (!sessionStorage.getItem('pointsData')) {
            fetch("https://script.google.com/macros/s/AKfycbyrzezJIa_vvlhbXWu8v1NDOHXD9w8DcAv_37OOvslkUYHRploStFdOSJOTzbDLHndjpQ/exec", {
                method: 'POST'
            })
            .then(response => response.json())
            .then(data => {
                setPointsData(data);
                sessionStorage.setItem('pointsData', JSON.stringify(data)); // cache
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        }
    }, []);

    return (
        <PointsContext.Provider value={{ pointsData }}>
            {children}
        </PointsContext.Provider>
    );
};

export default PointsContext;
