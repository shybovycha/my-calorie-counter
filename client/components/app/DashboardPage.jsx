import { h } from 'preact';

import { Page } from '../utility/Page.jsx';
import { Button } from '../utility/Ui.jsx';
import { Row, Col } from '../utility/Grid.jsx';

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
