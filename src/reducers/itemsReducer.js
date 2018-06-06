import moment from 'moment';

import { initialState, ACTION } from '../constants/index';

export const itemsReducer = (state = initialState.items, action) => {
  switch (action.type) {
    case ACTION.ADD_WORKOUT:
      return [ ...state, { createdAt: moment(), type: 'WORKOUT', ...action.payload } ];
    break;

    case ACTION.ADD_NUTRITION:
      return [ ...state, { createdAt: moment(), type: 'NUTRITION', ...action.payload } ];
    break;
  }

  return state;
};
