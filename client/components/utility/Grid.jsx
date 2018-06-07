import React from 'react';

import '../../stylesheets/grid.less';

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
