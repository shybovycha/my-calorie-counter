import React from 'react';

import { HashRouter as Router, Route } from 'react-router-dom';

import { Page, Header, Content, Footer } from '../utility/Page.jsx';
import { Col, Row } from '../utility/Grid.jsx';
import { Button } from '../utility/Ui.jsx';

import DashboardPage from './DashboardPage.jsx';
import TrackFoodPage from './TrackFoodPage.jsx';
import TrackWorkoutPage from './TrackWorkoutPage.jsx';
import TrackWeightPage from './TrackWeightPage.jsx';
import HistoryPage from './HistoryPage.jsx';
import ChartsPage from './ChartsPage.jsx';
import SettingsPage from './SettingsPage.jsx';

export default ({ remainingBalance }) => (
  <Router>
    <Page>
      <Header>
        Remaining balance: {remainingBalance} kCal
      </Header>

      <Content>
        <Route exact path="/" component={DashboardPage} />

        <Route path="/track/food" component={TrackFoodPage} />
        <Route path="/track/workout" component={TrackWorkoutPage} />
        <Route path="/track/weight" component={TrackWeightPage} />

        <Route path="/status/history" component={HistoryPage} />
        <Route path="/status/charts" component={ChartsPage} />

        <Route path="/settings" component={SettingsPage} />
      </Content>

      <Footer>
        <Row>
          <Col><Button icon="list" action="/status/history">History</Button></Col>
          <Col><Button icon="chart" action="/status/charts">Charts</Button></Col>
          <Col><Button icon="cog" action="/settings">Settings</Button></Col>
        </Row>
      </Footer>
    </Page>
  </Router>
);
