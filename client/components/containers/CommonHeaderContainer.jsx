import { connect } from 'react-redux';

import getRemainingBalance from '../../selectors/remainingBalance';
import CommonHeader from '../layout/CommonHeader.jsx';

const mapStateToProps = state => ({
  remainingBalance: getRemainingBalance(state),
});

export default connect(mapStateToProps)(CommonHeader);
