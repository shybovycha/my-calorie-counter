import React from 'react';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from 'react-router-dom';

import DashboardPage from '../pages/DashboardPage';
import TrackFoodPage from '../pages/TrackFoodPage';
import TrackWorkoutPage from '../pages/TrackWorkoutPage';
import TrackWeightPage from '../pages/TrackWeightPage';
import HistoryPage from '../pages/HistoryPage';
import ChartsPage from '../pages/ChartsPage';
import SettingsPage from '../pages/SettingsPage';

import CommonFooter from '../layout/CommonFooter';
import CommonHeader from '../layout/CommonHeader';

import { Page, Content } from '../utility/Page';
import { Providers } from './Providers';

import { useLoadingStateContext } from '../../contexts/loadingStateContext';

import { spinner as spinnerClass } from '../../stylesheets/page.module.css';

const Spinner = () => (
  <div className={spinnerClass}>
    Loading...
  </div>
);

const Layout = () => {
  const { isLoading } = useLoadingStateContext();

  if (isLoading) {
    return (
      <Page>
        <Content>
          <Spinner />
        </Content>
    </Page>
    );
  }

  return (
    <Page>
      <CommonHeader/>

      <Content>
        <Outlet />
      </Content>

      <CommonFooter />
    </Page>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={
      <Providers>
        <Layout />
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
