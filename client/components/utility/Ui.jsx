import React from 'react';

import { Link } from 'react-router-dom';

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
