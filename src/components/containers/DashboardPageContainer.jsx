import { connect } from 'react-redux';
import { getRemainingBalance } from 'reducers/selectors/remainingBalance';
import { DashboardPage } from 'components/app/DashboardPage';

export const DashboardPageContainer = connect((state) => {
  return {
    remainingBalance: getRemainingBalance(state)
  };
})(DashboardPage);
