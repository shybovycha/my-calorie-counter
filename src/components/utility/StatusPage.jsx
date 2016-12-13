import { React } from 'react';

import { Page } from 'components/utility/Page';

export class StatusPage extends React.Component {
  render() {
    return (
      <Page>
        {this.props.children}
      </Page>
    );
  }
}
