import React from 'react';
import { Link } from 'react-router';

import { Icon } from './Icon';

export class Button extends React.Component {
  render() {
    return (
      <div className="button">
        <Link to={this.props.action}>
          <Icon name={this.props.icon} />
          <span>{this.props.children}</span>
        </Link>
      </div>
    );
  }
}
