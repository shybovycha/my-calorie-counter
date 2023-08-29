import React from 'react';

import { Button } from '../utility/Controls';
import { Row, Col } from '../utility/Grid';

export default () => (
  <>
    <Row>
      <Col><Button icon="workout" action="/track/workout">Workout</Button></Col>
      <Col><Button icon="food" action="/track/food">Food</Button></Col>
    </Row>

    <Row>
      <Col><Button icon="scales" action="/track/weight">Weight</Button></Col>
    </Row>
  </>
);
