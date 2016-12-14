import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, hashHistory } from 'react-router';
import { Provider } from 'react-redux';

import { store } from './store/configureStore';
import { DashboardPageContainer } from './components/containers/DashboardPageContainer';

import { TrackFoodPage } from './components/app/TrackFoodPage';
import { TrackWorkoutPage } from './components/app/TrackWorkoutPage';
import { TrackWeightPage } from './components/app/TrackWeightPage';
import { HistoryPage } from './components/app/HistoryPage';
import { ChartsPage } from './components/app/ChartsPage';
import { SettingsPage } from './components/app/SettingsPage';

(function (handler) {
  if (document.readyState != 'loading')
    handler(); else
      document.addEventListener('DOMContentLoaded', handler);
})(function () {
  window.store = store;

  ReactDOM.render((
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={DashboardPageContainer} />

        <Route path="track">
          <Route path="food" component={TrackFoodPage} />
          <Route path="workout" component={TrackWorkoutPage} />
          <Route path="weight" component={TrackWeightPage} />
        </Route>

        <Route path="status">
          <Route path="history" component={HistoryPage} />
          <Route path="charts" component={ChartsPage} />
        </Route>

        <Route path="settings" component={SettingsPage} />
      </Router>
    </Provider>
  ), document.getElementById('root'));
});