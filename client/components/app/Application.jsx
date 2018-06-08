import React from 'react';

import { HashRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../../store/configureStore';

import DashboardPage from './DashboardPage.jsx';
import TrackFoodPage from './TrackFoodPage.jsx';
import TrackWorkoutPage from './TrackWorkoutPage.jsx';
import TrackWeightPage from './TrackWeightPage.jsx';
import HistoryPage from './HistoryPage.jsx';
import ChartsPage from './ChartsPage.jsx';
import SettingsPage from './SettingsPage.jsx';

import CommonHeaderContainer from '../containers/CommonHeaderContainer.jsx';
import CommonFooter from '../layout/CommonFooter.jsx';

import { Page, Content } from '../utility/Page.jsx';

import '../../stylesheets/application.less';

export default () => (
  <Provider store={store}>
    <Router>
      <Page>
        <CommonHeaderContainer />

        <Content>
          <Route exact path="/" component={DashboardPage} />

          <Route path="/track/food" component={TrackFoodPage} />
          <Route path="/track/workout" component={TrackWorkoutPage} />
          <Route path="/track/weight" component={TrackWeightPage} />

          <Route path="/status/history" component={HistoryPage} />
          <Route path="/status/charts" component={ChartsPage} />

          <Route path="/settings" component={SettingsPage} />
        </Content>

        <CommonFooter />
      </Page>
    </Router>
  </Provider>
);
