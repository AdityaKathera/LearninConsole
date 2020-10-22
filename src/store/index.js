import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducer.js';
import saga from './saga.js';

const sagaMiddleware = createSagaMiddleware();
const enhancers = [
  applyMiddleware(sagaMiddleware)
];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    shouldHotReload: true
  })
  : compose;

export const store = createStore(
  rootReducer,
  composeEnhancer(...enhancers),
);

sagaMiddleware.run(saga);

