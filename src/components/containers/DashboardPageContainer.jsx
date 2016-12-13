import { connect } from 'react-redux';

import { getRemainingBalance } from '../../selectors/remainingBalance';
import { DashboardPage } from '../app/DashboardPage';

export const DashboardPageContainer = connect((state) => {
  return {
    remainingBalance: getRemainingBalance(state)
  };
})(DashboardPage);
