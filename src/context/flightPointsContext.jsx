import { createContext, useEffect, useState } from 'react';

const PointsContext = createContext();

export const FlightPointsProvider = ({ children }) => {
    // Points are fetched once per browser session, as soon as the site loads,
    // and cached in sessionStorage so the Flight Points page is instant.
    const [pointsData, setPointsData] = useState(() => {
        try {
            const storedData = sessionStorage.getItem('pointsData');
            return storedData ? JSON.parse(storedData) : null;
        } catch {
            return null;
        }
    });
    const [error, setError] = useState(false);

    useEffect(() => {
        if (pointsData) return; // already cached this session

        let cancelled = false;
        fetch("https://script.google.com/macros/s/AKfycbwr9aQt4pzVBiXOjfaAHtb6DbPJTc3s5Oq7Fnhahv8JrlZvtWM85zDeGkeaC_XN6YZbrg/exec", {
                method: 'POST'
            })
        .then(response => {
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            return response.json();
        })
        .then(data => {
            if (cancelled) return;
            setPointsData(data);
            try { sessionStorage.setItem('pointsData', JSON.stringify(data)); } catch { /* storage full or disabled */ }
        })
        .catch(err => {
            console.error('Error fetching flight points:', err);
            if (!cancelled) setError(true);
        });

        return () => { cancelled = true; };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <PointsContext.Provider value={{ pointsData, loading: !pointsData && !error, error }}>
            {children}
        </PointsContext.Provider>
    );
};

export default PointsContext;
