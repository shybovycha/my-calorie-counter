import React from 'react';

import { createRoot } from 'react-dom/client';

import Application from './components/app/Application';

import './stylesheets/root.css';

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('root')).render(<Application />);
});
