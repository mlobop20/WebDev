import { useState, useEffect } from 'react';

export const useHookHttp = (url) => {
    const [datos, setDatos] = useState([]);

    useEffect(() => {
        const getDatos = async () => {
            try {
                const res = await fetch(url);
                const data = await res.json();
                setDatos(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getDatos();
    }, [url]);

    return [datos];
};
