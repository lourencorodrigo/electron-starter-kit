import { countrySaga } from './country';

import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([
    ...countrySaga,
  ]);
}
