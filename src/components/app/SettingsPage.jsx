import React from 'react';
import PropTypes from 'prop-types';

import { FormPage } from '../utility/FormPage.jsx';

export class SettingsPage extends React.Component {
  render() {
    const { currentSettings, availableSettings } = this.props;

    return (<div>Hello, settings</div>);
  }
}

SettingsPage.propTypes = {
  currentSettings: PropTypes.object,
  availableSettings: PropTypes.object
};
