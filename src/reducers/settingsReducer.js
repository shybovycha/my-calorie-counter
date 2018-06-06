import { initialState, ACTION } from '../constants/index';

export default (state = initialState.settings, action) => {
  switch (action.type) {
  case ACTION.UPDATE_SETTINGS:
    return { ...state, settings: action.payload };

  default:
    return state;
  }
};
