import { React } from 'react';

import { Page } from 'components/utility/Page';
import { Header } from 'components/utility/Header';
import { Content } from 'components/utility/Content';
import { Footer } from 'components/utility/Footer';

import { Button } from 'components/utility/Button';

import { Row } from 'components/utility/Row';
import { Col } from 'components/utility/Col';

export class DashboardPage extends React.Component {
  render() {
    const { remainingBalance } = this.props;

    return (
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
  }
}

DashboardPage.propTypes = {
  remainingBalance: React.PropTypes.number
};
