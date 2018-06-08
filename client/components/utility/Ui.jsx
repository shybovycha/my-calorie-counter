import { h } from 'preact';

import { Link } from 'preact-router';

export const Icon = ({ name }) => (
  <i className={name} />
);

export const Button = ({ action, icon, children }) => (
  <div className="button">
    <Link to={action}>
      <Icon name={icon} />
      <span>{children}</span>
    </Link>
  </div>
);
