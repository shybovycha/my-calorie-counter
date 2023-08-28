import React from 'react';

import { Header } from '../utility/Page';

export default ({ remainingBalance }) => (
  <Header>
    Remaining balance: {remainingBalance} kCal
  </Header>
);
