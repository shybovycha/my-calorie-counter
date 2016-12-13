import { React } from 'react';

export class Header extends React.Component {
  render() {
    return (
      <div className="header">{this.props.children}</div>
    );
  }
}
