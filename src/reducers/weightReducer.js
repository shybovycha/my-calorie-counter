import { initialState, ACTION } from '../constants/index';

export const weightReducer = function (state = initialState.weightData, action) {
  switch (action.type) {
    case ACTION.TRACK_WEIGHT:
      return [ ...state, { createdAt: moment(), weight: action.payload.weight } ];
  }

  return state;
};
