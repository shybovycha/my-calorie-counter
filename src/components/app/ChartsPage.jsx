import React from 'react';

import { StatusPage } from '../utility/StatusPage';

export class ChartsPage extends React.Component {
  render() {
    const { items } = this.props;

    return (<StatusPage></StatusPage>);
  }
}

ChartsPage.propTypes = {
  items: React.PropTypes.array.isRequired
};
