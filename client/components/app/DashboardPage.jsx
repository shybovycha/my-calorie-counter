import React from 'react';

import { Page } from '../utility/Page';
import { Button } from '../utility/Ui';
import { Row, Col } from '../utility/Grid';

export default () => (
  <Page>
    <Row>
      <Col><Button icon="workout" action="/track/workout">Workout</Button></Col>
      <Col><Button icon="food" action="/track/food">Food</Button></Col>
    </Row>

    <Row>
      <Col><Button icon="scales" action="/track/weight">Weight</Button></Col>
    </Row>
  </Page>
);
