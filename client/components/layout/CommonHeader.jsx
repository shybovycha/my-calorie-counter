import React from 'react';

import { Header } from '../utility/Page';

import { useDailyBalanceContext } from '../../contexts/dailyBalanceContext';

export default () => {
  const { dailyBalance, currentBalance } = useDailyBalanceContext();

  return (
    <Header>
      Calorie balance: {currentBalance} / {dailyBalance} kCal
    </Header>
  );
};
