/**
 * @flow
 */
'use strict';
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {thunk} from 'redux-thunk';
import * as reducers from './reducers';
import Home from './components/home';

const grandReducer = combineReducers(reducers);
const store = configStore();
const createStoreWithMiddleWare = applyMiddleware(thunk)(createStore);

export default class CSClient extends Component {
  render() {
    return (
      <Provider store={store}>

      </Provider>
    );
  }
}
