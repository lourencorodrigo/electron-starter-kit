import { combineReducers } from 'redux';

import { countryReducer } from './country';

export const Reducers = combineReducers({
  countryState: countryReducer
});
