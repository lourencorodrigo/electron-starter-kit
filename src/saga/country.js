import { countryService } from '../services';
import { LIST_COUNTRY, ASYNC_LIST_COUNTRY } from '../actions/types';

import { takeLatest, put, call } from 'redux-saga/effects';

function* asyncListCountry() {
  try {
    const response = yield call(countryService.list);
    yield put({ type: LIST_COUNTRY, data: response });
  } catch (err) {
    // error
  }
}

export const countrySaga = [
  takeLatest(ASYNC_LIST_COUNTRY, asyncListCountry),
];
