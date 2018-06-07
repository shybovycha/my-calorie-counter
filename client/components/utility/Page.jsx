import React from 'react';

import '../../stylesheets/page.less';

export const Page = ({ children }) => (
  <div className="page">
    {children}
  </div>
);

export const Content = ({ children }) => (
  <div className="content">{children}</div>
);

export const Header = ({ children }) => (
  <div className="header">{children}</div>
);

export const Footer = ({ children }) => (
  <div className="footer">{children}</div>
);
