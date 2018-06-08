import { h } from 'preact';

import { HashRouter as Router } from 'preact-router';
import { createHashHistory } from 'history/createHashHistory';

import { Provider } from 'preact-redux';

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

export default () => (
  <Provider store={store}>
    <Router history={createHashHistory()}>
      <Page>
        <CommonHeaderContainer />

        <Content>
          <DashboardPage path="/" />

          <TrackFoodPage path="/track/food" />
          <TrackWorkoutPage path="/track/workout" />
          <TrackWeightPage path="/track/weight" />

          <HistoryPage path="/status/history" />
          <ChartsPage path="/status/charts" />

          <SettingsPage path="/settings" />
        </Content>

        <CommonFooter />
      </Page>
    </Router>
  </Provider>
);
