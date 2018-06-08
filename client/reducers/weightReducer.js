import { format } from 'date-fns/format';

import { initialState, ACTION } from '../constants/index';

export default (state = initialState.weightData, action) => {
  switch (action.type) {
  case ACTION.TRACK_WEIGHT:
    return [...state, { createdAt: format(new Date()), weight: action.payload.weight }];

  default:
    return state;
  }
};
