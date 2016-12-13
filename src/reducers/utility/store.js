import { combineReducers, createStore } from 'redux';

import { itemsReducer } from 'reducers/itemsReducer';
import { weightReducer } from 'reducers/weightReducer';
import { settingsReducer } from 'reducers/settingsReducer';

const rootReducer = combineReducers({
  items: itemsReducer,
  weightData: weightReducer,
  settings: settingsReducer
});

export const store = createStore(rootReducer);
