import React, { createContext, useCallback, useContext, useLayoutEffect, useMemo, useState } from 'react';

const initialValue = [];

const MeasurementsContext = createContext(initialValue);

export const useMeasurementsContext = () => useContext(MeasurementsContext);

export const MeasurementsProvider = ({ children }) => {
    const [measurementRecords, setMeasurementRecords] = useState(initialValue);

    useLayoutEffect(() => {
        fetch('/measurements', { headers: { 'Content-Type': 'application/json' } })
            .then(response => response.json())
            .then(records => setMeasurementRecords(records));
    }, []);

    const addMeasurement = useCallback(({ weight, date }) => {
        const record = { weight, date };

        setMeasurementRecords([ ...measurementRecords, record ]);

        fetch('/measurements', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(record) });
    }, [measurementRecords, setMeasurementRecords]);

    const contextValue = useMemo(() => ({
        measurementRecords,
        addMeasurement,
    }), [measurementRecords, addMeasurement]);

    return (
        <MeasurementsContext.Provider value={contextValue}>
            {children}
        </MeasurementsContext.Provider>
    );
};
