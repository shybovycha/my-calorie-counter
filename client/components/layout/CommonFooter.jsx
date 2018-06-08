import React from 'react';

import { Footer } from '../utility/Page.jsx';
import { Button } from '../utility/Ui.jsx';
import { Col } from '../utility/Grid.jsx';

export default () => (
  <Footer>
    <Col><Button icon="home" action="/">Home</Button></Col>
    <Col><Button icon="list" action="/status/history">History</Button></Col>
    <Col><Button icon="chart" action="/status/charts">Charts</Button></Col>
    <Col><Button icon="cog" action="/settings">Settings</Button></Col>
  </Footer>
);
