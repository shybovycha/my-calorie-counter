import { connect } from 'react-redux';

import { getRemainingBalance } from '../../selectors/remainingBalance.js';
import { DashboardPage } from '../app/DashboardPage.jsx';

export const DashboardPageContainer = connect((state) => {
  return {
    remainingBalance: getRemainingBalance(state)
  };
})(DashboardPage);
