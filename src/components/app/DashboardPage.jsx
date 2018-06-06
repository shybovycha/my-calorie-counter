import React from 'react';

import { Page, Header, Content, Footer } from '../utility/Page.jsx';
import { Button } from '../utility/Ui.jsx';
import { Row, Col } from '../utility/Grid.jsx';

export const DashboardPage = ({ remainingBalance }) => (
  <Page>
    <Header>
      Remaining balance: {remainingBalance} kCal
    </Header>

    <Content>
      <Row>
        <Col><Button icon="workout" action="/track/workout">Workout</Button></Col>
        <Col><Button icon="food" action="/track/food">Food</Button></Col>
      </Row>

      <Row>
        <Col><Button icon="scales" action="/track/weight">Weight</Button></Col>
      </Row>
    </Content>

    <Footer>
      <Row>
        <Col><Button icon="list" action="/status/history">History</Button></Col>
        <Col><Button icon="chart" action="/status/charts">Charts</Button></Col>
        <Col><Button icon="cog" action="/settings">Settings</Button></Col>
      </Row>
    </Footer>
  </Page>
);