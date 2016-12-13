import { initialState, ACTION } from './utility/constants';

export const settingsReducer = function (state = initialState.settings, action) {
  switch (action.type) {
    case ACTION.UPDATE_SETTINGS:
      return { ...state, settings: action.payload };
  }

  return state;
};
