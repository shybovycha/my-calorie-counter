import React from 'react';

import { Page } from './Page.jsx';

export class FormPage extends React.Component {
  render() {
    return (
      <Page>
        {this.props.children}
      </Page>
    );
  }
}
