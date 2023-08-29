import React, { createContext, useContext, useMemo } from 'react';

import { useExerciseContext } from './exerciseContext';
import { useNutritionContext } from './nutritionContext';
import { useMeasurementsContext } from './measurementsContext';
import { useGeneralInformationContext } from './generalInformationContext';

import { getDailyCalorieBalance } from './dailyBalanceCalculator';

const DailyBalanceContext = createContext({});

export const useDailyBalanceContext = () => useContext(DailyBalanceContext);

export const DailyBalanceProvider = ({ children }) => {
    const { exerciseRecords } = useExerciseContext();
    const { nutritionRecords } = useNutritionContext();
    const { measurementRecords } = useMeasurementsContext();
    const { generalInformation } = useGeneralInformationContext();

    const dailyBalance = useMemo(() => {
        const { dateOfBirth, gender, height, exerciseLevel } = generalInformation;

        return getDailyCalorieBalance({
            dateOfBirth,
            gender,
            height,
            exerciseLevel,
            weightRecords: measurementRecords.map(({ weight }) => weight),
        });
    }, [generalInformation, measurementRecords]);

    const currentBalance = useMemo(() => {
        const nutrition = nutritionRecords.map(({ energy }) => energy);
        const exercise = exerciseRecords.map(({ energy }) => -1 * energy);

        return [...nutrition, ...exercise].reduce((acc, elt) => acc - elt, dailyBalance);
    }, [dailyBalance, nutritionRecords, exerciseRecords]);

    const contextValue = useMemo(() => ({
        currentBalance,
        dailyBalance,
    }), [dailyBalance, currentBalance]);

    return (
        <DailyBalanceContext.Provider value={contextValue}>
            {children}
        </DailyBalanceContext.Provider>
    );
};
