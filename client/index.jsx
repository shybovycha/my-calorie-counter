import React from 'react';
import ReactDOM from 'react-dom';

import Application from './components/app/Application';

import './stylesheets/root.css';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Application />, document.getElementById('root'));
});
