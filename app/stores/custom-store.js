/**
 * @flow
 */

'use strict';

import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { autoRehydrate, persistStore } from 'redux-persist';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

export default function CustomStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(sagaMiddleware), autoRehydrate()),
  );
  sagaMiddleware.run(rootSaga);
  persistStore(
    store,
    {
      blacklist: [
        'nav',
        'posts',
        'categories',
        'post',
        'form',
        'home',
        'settings',
      ],
      storage: AsyncStorage,
    },
    () => console.log('Persist completed'),
  );
  return store;
}
