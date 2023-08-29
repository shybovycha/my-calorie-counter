import React from 'react';

import {
  row as rowClass,
  col as colClass
} from '../../stylesheets/grid.module.css';

export const Row = ({ children }) => (
  <div className={rowClass}>
    {children}
  </div>
);

export const Col = ({ children }) => (
  <div className={colClass}>
    {children}
  </div>
);
