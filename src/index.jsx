import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './store/configureStore.js';
import { DashboardPageContainer } from './components/containers/DashboardPageContainer.jsx';

import { TrackFoodPage } from './components/app/TrackFoodPage.jsx';
import { TrackWorkoutPage } from './components/app/TrackWorkoutPage.jsx';
import { TrackWeightPage } from './components/app/TrackWeightPage.jsx';
import { HistoryPage } from './components/app/HistoryPage.jsx';
import { ChartsPage } from './components/app/ChartsPage.jsx';
import { SettingsPage } from './components/app/SettingsPage.jsx';

(function (handler) {
  if (document.readyState != 'loading')
    handler(); else
      document.addEventListener('DOMContentLoaded', handler);
})(function () {
  window.store = store;

  ReactDOM.render((
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
  ), document.getElementById('root'));
});