/**
 * @flow
 */
'use strict';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
//import { StyleProvider } from 'native-base';
import OneSignal from 'react-native-onesignal';
//import getTheme from '../native-base-theme/components';
//import megumi from '../native-base-theme/variables/megumi';
import CustomStore from './stores/custom-store';
import RootContainer from './containers/index';

const store = CustomStore();

export default class CSClient extends Component {
  componentDidMount() {
    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('registered', this.onRegistered);
    OneSignal.addEventListener('ids', this.onIds);
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    // You can also log the error to an error reporting service.
    console.log(error, info);
  }

  onReceived = notification => {
    console.log('Notification received: ', notification);
  };

  onOpened = openResult => {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  };

  onRegistered = notifData => {
    console.log(
      'Device had been registered for push notifications.',
      notifData,
    );
  };

  onIds = device => {
    console.log('Device info: ', device);
  };

  render() {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    );
  }
}
