import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

export class Icon extends React.Component {
  render() {
    return (
      <i className={this.props.name} />
    );
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired
};

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
