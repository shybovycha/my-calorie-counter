import React, { createContext, useCallback, useContext, useLayoutEffect, useState } from 'react';

import { useLoadingStateContext } from './loadingStateContext';
import { fetchNutritionRecords, storeNutritionRecord } from '../api/nutritionAPI';

const initialValue = [];

const NutritionContext = createContext(initialValue);

export const useNutritionContext = () => useContext(NutritionContext);

export const NutritionProvider = ({ children }) => {
    const { componentStartedLoading, componentFinishedLoading } = useLoadingStateContext();

    const [nutritionRecords, setNutritionRecords] = useState(initialValue);

    useLayoutEffect(() => {
        const componentName = 'Nutrition';

        componentStartedLoading(componentName);

        fetchNutritionRecords()
            .then(records => setNutritionRecords(records))
            .then(() => componentFinishedLoading(componentName));
    }, []);

    const recordNutrition = useCallback(({ ingridients, amount, name, energy, date }) => {
        const record = { ingridients, amount, name, energy, date };

        setNutritionRecords([ ...nutritionRecords, record ]);

        storeNutritionRecord(record);
    }, [nutritionRecords, setNutritionRecords]);

    const contextValue = {
        nutritionRecords,
        recordNutrition,
    };

    return (
        <NutritionContext.Provider value={contextValue}>
            {children}
        </NutritionContext.Provider>
    );
};
