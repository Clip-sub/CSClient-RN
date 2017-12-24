/**
 * @flow
 */

'use strict';

import { createStore, applyMiddleware, compose } from 'redux';
import { DeviceEventEmitter } from 'react-native';
import createSagaMiddleware from 'redux-saga';
import { persistCombineReducers, persistStore } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import { rootReducer } from '../reducers/root';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

// redux-persist v5 configuration:
// Persistor configuration, default is AsyncStorage;
const persistConfig = {
  key: 'root',
  storage,
};
const reducers = persistCombineReducers(persistConfig, rootReducer);

export function configureStore(initialState) {
  const store = createStore(
    reducers,
    initialState,
    compose(applyMiddleware(sagaMiddleware)),
  );
  sagaMiddleware.run(rootSaga);

  const persistor = persistStore(store, {}, () =>
    DeviceEventEmitter.emit('PERSIST'),
  );

  return { persistor, store };
}
