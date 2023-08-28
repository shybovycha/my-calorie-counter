import React from 'react';

import '../../stylesheets/grid.css';

export const Row = ({ children }) => (
  <div className="row">
    {children}
  </div>
);

export const Col = ({ children }) => (
  <div className="col">
    {children}
  </div>
);
