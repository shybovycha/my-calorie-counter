import React from 'react';

import { Footer } from '../utility/Page.jsx';
import { Button } from '../utility/Ui.jsx';
import { Col, Row } from '../utility/Grid.jsx';

export default () => (
  <Footer>
    <Row>
      <Col><Button icon="list" action="/status/history">History</Button></Col>
      <Col><Button icon="chart" action="/status/charts">Charts</Button></Col>
      <Col><Button icon="cog" action="/settings">Settings</Button></Col>
    </Row>
  </Footer>
);
