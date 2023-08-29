import React from 'react';

import { DailyBalanceProvider } from '../../contexts/dailyBalanceContext';
import { GeneralInformationProvider } from '../../contexts/generalInformationContext';
import { MeasurementsProvider } from '../../contexts/measurementsContext';
import { ExerciseProvider } from '../../contexts/exerciseContext';
import { NutritionProvider } from '../../contexts/nutritionContext';
import { LoadingStateProvider } from '../../contexts/loadingStateContext';

export const Providers = ({ children }) => (
  <LoadingStateProvider>
    <GeneralInformationProvider>
      <MeasurementsProvider>
        <ExerciseProvider>
            <NutritionProvider>
              <DailyBalanceProvider>
                {children}
              </DailyBalanceProvider>
            </NutritionProvider>
        </ExerciseProvider>
      </MeasurementsProvider>
    </GeneralInformationProvider>
  </LoadingStateProvider>
);
