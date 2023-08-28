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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={
      <Page>
        <Content>
          <CommonHeader/>

          <Outlet />

          <CommonFooter />
        </Content>
      </Page>
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
)

export default () => (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
