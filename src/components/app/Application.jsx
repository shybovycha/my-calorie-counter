import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../../store/configureStore';
import DashboardPageContainer from '../containers/DashboardPageContainer.jsx';

import TrackFoodPage from './TrackFoodPage.jsx';
import TrackWorkoutPage from './TrackWorkoutPage.jsx';
import TrackWeightPage from './TrackWeightPage.jsx';
import HistoryPage from './HistoryPage.jsx';
import ChartsPage from './ChartsPage.jsx';
import SettingsPage from './SettingsPage.jsx';

export default () => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={DashboardPageContainer} />

        <Route path="/track/food" component={TrackFoodPage} />
        <Route path="/track/workout" component={TrackWorkoutPage} />
        <Route path="/track/weight" component={TrackWeightPage} />

        <Route path="/status/history" component={HistoryPage} />
        <Route path="/status/charts" component={ChartsPage} />

        <Route path="/settings" component={SettingsPage} />
      </div>
    </Router>
  </Provider>
);
