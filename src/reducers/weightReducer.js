import moment from 'moment';

import { initialState, ACTION } from '../constants/index';

export default (state = initialState.weightData, action) => {
  switch (action.type) {
  case ACTION.TRACK_WEIGHT:
    return [...state, { createdAt: moment(), weight: action.payload.weight }];

  default:
    return state;
  }
};
