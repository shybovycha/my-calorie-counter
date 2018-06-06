import React from 'react';
import PropTypes from 'prop-types';

import { StatusPage } from '../utility/StatusPage.jsx';

export class HistoryPage extends React.Component {
  render() {
    const { items } = this.props;

    return (<StatusPage></StatusPage>);
  }
}

HistoryPage.propTypes = {
  items: PropTypes.array
};
