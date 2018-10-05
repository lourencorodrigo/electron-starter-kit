import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { Reducers } from '../reducers';
import rootSaga from '../saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  Reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default store;
