import React, { createContext, useCallback, useContext, useLayoutEffect, useMemo, useState } from 'react';
import { useLoadingStateContext } from './loadingStateContext';

const initialValue = [];

const ExerciseContext = createContext(initialValue);

export const useExerciseContext = () => useContext(ExerciseContext);

export const ExerciseProvider = ({ children }) => {
    const { componentStartedLoading, componentFinishedLoading } = useLoadingStateContext();

    const [exerciseRecords, setExerciseRecords] = useState(initialValue);

    useLayoutEffect(() => {
        const componentName = 'Exercise';

        componentStartedLoading(componentName);

        fetch('/exercise', { headers: { 'Content-Type': 'application/json' } })
            .then(response => response.json())
            .then(records => setExerciseRecords(records))
            .then(() => componentFinishedLoading(componentName));
    }, []);

    const recordExercise = useCallback(({ name, duration, energy, date }) => {
        const record = { name, duration, energy, date };

        setExerciseRecords([ ...exerciseRecords, record ]);

        fetch('/exercise', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(record) });
    }, [exerciseRecords, setExerciseRecords]);

    const contextValue = useMemo(() => ({
        exerciseRecords,
        recordExercise,
    }), [exerciseRecords, recordExercise]);

    return (
        <ExerciseContext.Provider value={contextValue}>
            {children}
        </ExerciseContext.Provider>
    );
};
