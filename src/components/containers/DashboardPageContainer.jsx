import { connect } from 'react-redux';

import { getRemainingBalance } from '../../selectors/remainingBalance.js';
import { DashboardPage } from '../app/DashboardPage.jsx';

const mapStateToProps = state => ({
  remainingBalance: getRemainingBalance(state)
});

export const DashboardPageContainer = connect(mapStateToProps)(DashboardPage);
