import React, { createContext, useCallback, useContext, useLayoutEffect, useMemo, useState } from 'react';
import { useLoadingStateContext } from './loadingStateContext';

const initialValue = [];

const NutritionContext = createContext(initialValue);

export const useNutritionContext = () => useContext(NutritionContext);

export const NutritionProvider = ({ children }) => {
    const { componentStartedLoading, componentFinishedLoading } = useLoadingStateContext();

    const [nutritionRecords, setNutritionRecords] = useState(initialValue);

    useLayoutEffect(() => {
        const componentName = 'Nutrition';

        componentStartedLoading(componentName);

        fetch('/nutrition', { headers: { 'Content-Type': 'application/json' } })
            .then(response => response.json())
            .then(records => setNutritionRecords(records))
            .then(() => componentFinishedLoading(componentName));
    }, []);

    const addNutrition = useCallback(({ ingridients, amount, name, energy, date }) => {
        const record = { ingridients, amount, name, energy, date };

        setNutritionRecords([ ...nutritionRecords, record ]);

        fetch('/nutrition', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(record) });
    }, [nutritionRecords, setNutritionRecords]);

    const contextValue = useMemo(() => ({
        nutritionRecords,
        addNutrition,
    }), [nutritionRecords, addNutrition]);

    return (
        <NutritionContext.Provider value={contextValue}>
            {children}
        </NutritionContext.Provider>
    );
};
