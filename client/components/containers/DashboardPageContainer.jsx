import { connect } from 'react-redux';

import getRemainingBalance from '../../selectors/remainingBalance';
import DashboardPage from '../app/DashboardPage';

const mapStateToProps = state => ({
  remainingBalance: getRemainingBalance(state),
});

export default connect(mapStateToProps)(DashboardPage);
