import React, { createContext, useCallback, useContext, useLayoutEffect, useState } from 'react';

import { useLoadingStateContext } from './loadingStateContext';

const initialValue = [];

const MeasurementsContext = createContext(initialValue);

export const useMeasurementsContext = () => useContext(MeasurementsContext);

export const MeasurementsProvider = ({ children }) => {
    const { componentStartedLoading, componentFinishedLoading } = useLoadingStateContext();

    const [measurementRecords, setMeasurementRecords] = useState(initialValue);

    useLayoutEffect(() => {
        const componentName = 'Measurements';

        componentStartedLoading(componentName);

        fetch('/measurements', { headers: { 'Content-Type': 'application/json' } })
            .then(response => response.json())
            .then(records => setMeasurementRecords(records))
            .then(() => componentFinishedLoading(componentName));
    }, []);

    const recordWeight = useCallback(({ weight, date }) => {
        const record = { weight, date };

        setMeasurementRecords([ ...measurementRecords, record ]);

        fetch('/measurements', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(record) });
    }, [measurementRecords, setMeasurementRecords]);

    const contextValue = {
        measurementRecords,
        recordWeight,
    };

    return (
        <MeasurementsContext.Provider value={contextValue}>
            {children}
        </MeasurementsContext.Provider>
    );
};
