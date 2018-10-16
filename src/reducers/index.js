import { combineReducers } from 'redux';

import { countryReducer } from './country';

export const reducers = combineReducers({
  countryState: countryReducer
});
