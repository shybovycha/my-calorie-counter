import React from 'react';

export class Icon extends React.Component {
  render() {
    return (
      <i className={this.props.name} />
    );
  }
}

Icon.propTypes = {
  name: React.PropTypes.string.isRequired
};