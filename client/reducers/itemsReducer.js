import { format } from 'date-fns/format';

import { initialState, ACTION } from '../constants/index';

export default (state = initialState.items, action) => {
  switch (action.type) {
  case ACTION.ADD_WORKOUT:
    return [...state, { createdAt: format(new Date()), type: 'WORKOUT', ...action.payload }];

  case ACTION.ADD_NUTRITION:
    return [...state, { createdAt: format(new Date()), type: 'NUTRITION', ...action.payload }];

  default:
    return state;
  }
};
