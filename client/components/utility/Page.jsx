import React from 'react';

import {
  page as pageClass,
  content as contentClass,
  header as headerClass,
  footer as footerClass
} from '../../stylesheets/page.module.css';

export const Page = ({ children }) => (
  <div className={pageClass}>
    {children}
  </div>
);

export const Content = ({ children }) => (
  <div className={contentClass}>{children}</div>
);

export const Header = ({ children }) => (
  <div className={headerClass}>{children}</div>
);

export const Footer = ({ children }) => (
  <div className={footerClass}>{children}</div>
);
