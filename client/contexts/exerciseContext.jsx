import React, { createContext, useCallback, useContext, useLayoutEffect, useState } from 'react';

import { useLoadingStateContext } from './loadingStateContext';
import { fetchExerciseRecords, storeExerciseRecord } from '../api/exerciseAPI';

const initialValue = [];

const ExerciseContext = createContext(initialValue);

export const useExerciseContext = () => useContext(ExerciseContext);

export const ExerciseProvider = ({ children }) => {
    const { componentStartedLoading, componentFinishedLoading } = useLoadingStateContext();

    const [exerciseRecords, setExerciseRecords] = useState(initialValue);

    useLayoutEffect(() => {
        const componentName = 'Exercise';

        componentStartedLoading(componentName);

        fetchExerciseRecords()
            .then(records => setExerciseRecords(records))
            .then(() => componentFinishedLoading(componentName));
    }, []);

    const recordExercise = useCallback(({ name, duration, energy, date }) => {
        const record = { name, duration, energy, date };

        setExerciseRecords([ ...exerciseRecords, record ]);

        storeExerciseRecord(record);
    }, [exerciseRecords, setExerciseRecords]);

    const contextValue = {
        exerciseRecords,
        recordExercise,
    };

    return (
        <ExerciseContext.Provider value={contextValue}>
            {children}
        </ExerciseContext.Provider>
    );
};
