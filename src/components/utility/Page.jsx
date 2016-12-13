import React from 'react';

export class Page extends React.Component {
  render() {
    return (
      <div className="page">
        {this.props.children}
      </div>
    );
  }
}

export class Content extends React.Component {
  render() {
    return (
      <div className="content">{this.props.children}</div>
    );
  }
}

export class Header extends React.Component {
  render() {
    return (
      <div className="header">{this.props.children}</div>
    );
  }
}

export class Footer extends React.Component {
  render() {
    return (
      <div className="footer">{this.props.children}</div>
    );
  }
}
