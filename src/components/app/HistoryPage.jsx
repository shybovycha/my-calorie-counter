import React from 'react';

import { StatusPage } from '../utility/StatusPage';

export class HistoryPage extends React.Component {
  render() {
    const { items } = this.props;

    return (<StatusPage></StatusPage>);
  }
}

HistoryPage.propTypes = {
  items: React.PropTypes.array
};
