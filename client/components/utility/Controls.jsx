import React from 'react';

import { Link } from 'react-router-dom';

import { button as buttonClass } from '../../stylesheets/controls.module.css';

export const Icon = ({ name }) => (
  <i className={name} />
);

export const Button = ({ action, icon, children }) => (
  <Link to={action} className={buttonClass} role="button">
    {icon ? <Icon name={icon} /> : null}
    <span>{children}</span>
  </Link>
);
