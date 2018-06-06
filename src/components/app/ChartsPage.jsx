import React from 'react';
import PropTypes from 'prop-types';

import { StatusPage } from '../utility/StatusPage.jsx';

export class ChartsPage extends React.Component {
  render() {
    const { items } = this.props;

    return (<StatusPage></StatusPage>);
  }
}

ChartsPage.propTypes = {
  items: PropTypes.array
};
