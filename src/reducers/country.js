import { LIST_COUNTRY } from '../actions/types';

export const countryReducer = (state = [], action) => {

  switch (action.type) {
    case LIST_COUNTRY:
      return action.data;
    default:
      return state;
  }

};
