import moment from 'moment';

import { initialState, ACTION } from '../constants/index';

export default (state = initialState.items, action) => {
  switch (action.type) {
  case ACTION.ADD_WORKOUT:
    return [...state, { createdAt: moment(), type: 'WORKOUT', ...action.payload }];

  case ACTION.ADD_NUTRITION:
    return [...state, { createdAt: moment(), type: 'NUTRITION', ...action.payload }];

  default:
    return state;
  }
};
