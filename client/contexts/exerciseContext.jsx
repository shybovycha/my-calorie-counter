import React, { createContext, useCallback, useContext, useLayoutEffect, useMemo, useState } from 'react';

const initialValue = [];

const ExerciseContext = createContext(initialValue);

export const useExerciseContext = () => useContext(ExerciseContext);

export const ExerciseProvider = ({ children }) => {
    const [exerciseRecords, setExerciseRecords] = useState(initialValue);

    useLayoutEffect(() => {
        fetch('/exercise', { headers: { 'Content-Type': 'application/json' } })
            .then(response => response.json())
            .then(records => setExerciseRecords(records));
    }, []);

    const addExercise = useCallback(({ exercise, duration, energy, date }) => {
        const record = { exercise, duration, energy, date };

        setExerciseRecords([ ...exerciseRecords, record ]);

        fetch('/exercise', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(record) });
    }, [exerciseRecords, setExerciseRecords]);

    const contextValue = useMemo(() => ({
        exerciseRecords,
        addExercise,
    }), [exerciseRecords, addExercise]);

    return (
        <ExerciseContext.Provider value={contextValue}>
            {children}
        </ExerciseContext.Provider>
    );
};
