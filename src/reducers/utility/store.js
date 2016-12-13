import { combineReducers, createStore } from 'redux';

import { itemsReducer } from '../itemsReducer';
import { weightReducer } from '../weightReducer';
import { settingsReducer } from '../settingsReducer';

const rootReducer = combineReducers({
  items: itemsReducer,
  weightData: weightReducer,
  settings: settingsReducer
});

export const store = createStore(rootReducer);
