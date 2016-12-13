import { React } from 'react';

import { FormPage } from 'components/utility/FormPage';

export class SettingsPage extends React.Component {
  render() {
    const { currentSettings, availableSettings } = this.props;

    return (<FormPage></FormPage>);
  }
}

SettingsPage.propTypes = {
  currentSettings: React.PropTypes.object.isRequired,
  availableSettings: React.PropTypes.object.isRequired
};
