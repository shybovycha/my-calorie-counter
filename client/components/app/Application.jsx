import React from 'react';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from 'react-router-dom';

import DashboardPage from './DashboardPage';
import TrackFoodPage from './TrackFoodPage';
import TrackWorkoutPage from './TrackWorkoutPage';
import TrackWeightPage from './TrackWeightPage';
import HistoryPage from './HistoryPage';
import ChartsPage from './ChartsPage';
import SettingsPage from './SettingsPage';

import CommonFooter from '../layout/CommonFooter';
import CommonHeader from '../layout/CommonHeader';

import { Page, Content } from '../utility/Page';

import { DailyBalanceProvider } from '../../contexts/dailyBalanceContext';
import { GeneralInformationProvider } from '../../contexts/generalInformationContext';
import { MeasurementsProvider } from '../../contexts/measurementsContext';
import { ExerciseProvider } from '../../contexts/exerciseContext';
import { NutritionProvider } from '../../contexts/nutritionContext';

const Providers = ({ children }) => (
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
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={
      <Providers>
        <Page>
          <CommonHeader/>

          <Content>
            <Outlet />
          </Content>

          <CommonFooter />
        </Page>
      </Providers>
    }>
      <Route exact path="/" element={<DashboardPage />} />

      <Route path="/track/food" element={<TrackFoodPage />} />
      <Route path="/track/workout" element={<TrackWorkoutPage />} />
      <Route path="/track/weight" element={<TrackWeightPage />} />

      <Route path="/status/history" element={<HistoryPage />} />
      <Route path="/status/charts" element={<ChartsPage />} />

      <Route path="/settings" element={<SettingsPage />} />
    </Route>
  )
);

export default () => (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
