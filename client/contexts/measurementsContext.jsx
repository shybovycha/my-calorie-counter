import React, { createContext, useCallback, useContext, useLayoutEffect, useState } from 'react';

import { useLoadingStateContext } from './loadingStateContext';
import { fetchMeasurements, storeMeasurement } from '../api/measurementsAPI';

const initialValue = [];

const MeasurementsContext = createContext(initialValue);

export const useMeasurementsContext = () => useContext(MeasurementsContext);

export const MeasurementsProvider = ({ children }) => {
    const { componentStartedLoading, componentFinishedLoading } = useLoadingStateContext();

    const [measurementRecords, setMeasurementRecords] = useState(initialValue);

    useLayoutEffect(() => {
        const componentName = 'Measurements';

        componentStartedLoading(componentName);

        fetchMeasurements()
            .then(records => setMeasurementRecords(records))
            .then(() => componentFinishedLoading(componentName));
    }, []);

    const recordWeight = useCallback(({ weight, date }) => {
        const record = { weight, date };

        setMeasurementRecords([ ...measurementRecords, record ]);

        storeMeasurement(record);
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
