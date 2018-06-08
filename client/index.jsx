import { h, render } from 'preact';

import Application from './components/app/Application.jsx';

document.addEventListener('DOMContentLoaded', () => {
  render(<Application />, document.getElementById('root'));
});
