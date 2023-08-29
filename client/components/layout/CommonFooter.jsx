import React from 'react';

import { Footer } from '../utility/Page';
import { Button } from '../utility/Controls';
import { Col, Row } from '../utility/Grid';

export default () => (
  <Footer>
    <Row>
      <Col><Button icon="list" action="/">Dashboard</Button></Col>
      <Col><Button icon="list" action="/status/history">History</Button></Col>
      <Col><Button icon="chart" action="/status/charts">Charts</Button></Col>
      <Col><Button icon="cog" action="/settings">Settings</Button></Col>
    </Row>
  </Footer>
);
