/**
 * @flow
 */
'use strict';
//import { StyleProvider } from 'native-base';
//import OneSignal from 'react-native-onesignal';
//import getTheme from '../native-base-theme/components';
import { DeviceEventEmitter } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { registerScreens } from './screens/_index';
import { configureStore } from './stores/custom-store';
// import { CustomProvider } from './custom-provider';
const { store } = configureStore();

registerScreens(store, Provider);

export const startApp = () => {
  Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'Home',
        screen: 'csclient.Test',
        //icon: require('../img/one.png'), // local image asset for the tab icon unselected state (optional on iOS)
        //selectedIcon: require('../img/one_selected.png'), // local image asset for the tab icon selected state (optional, iOS only. On Android, Use `tabBarSelectedButtonColor` instead)
        iconInsets: {
          // add this to change icon position (optional, iOS only).
          top: 6, // optional, default is 0.
          left: 0, // optional, default is 0.
          bottom: -6, // optional, default is 0.
          right: 0, // optional, default is 0.
        },
        title: 'Screen One', // title of the screen as appears in the nav bar (optional)
        //titleImage: require('../img/titleImage.png'), // iOS only. navigation bar title image instead of the title text of the pushed screen (optional)
        navigatorStyle: {}, // override the navigator style for the tab screen, see "Styling the navigator" below (optional),
        navigatorButtons: {}, // override the nav buttons for the tab screen, see "Adding buttons to the navigator" below (optional)
      },
      {
        label: 'Categories',
        screen: 'csclient.Test',
        //icon: require('../img/two.png'),
        //selectedIcon: require('../img/two_selected.png'),
        title: 'Screen Two',
      },
      {
        label: 'Comments',
        screen: 'csclient.Test',
        //icon: require('../img/two.png'),
        //selectedIcon: require('../img/two_selected.png'),
        title: 'Screen Two',
      },
      {
        label: 'Profile',
        screen: 'csclient.Test',
        //icon: require('../img/two.png'),
        //selectedIcon: require('../img/two_selected.png'),
        title: 'Screen Two',
      },
    ],
    tabsStyle: {
      // optional, add this if you want to style the tab bar beyond the defaults
      tabBarButtonColor: '#ffff00', // optional, change the color of the tab icons and text (also unselected). On Android, add this to appStyle
      tabBarSelectedButtonColor: '#ff9900', // optional, change the color of the selected tab icon and text (only selected). On Android, add this to appStyle
      tabBarBackgroundColor: '#551A8B', // optional, change the background color of the tab bar
      initialTabIndex: 0, // optional, the default selected bottom tab. Default: 0. On Android, add this to appStyle
    },
    appStyle: {
      orientation: 'portrait',
      bottomTabBadgeTextColor: 'red',
      bottomTabBadgeBackgroundColor: 'green',
      //backButtonImage: require('./pathToImage.png'),
      hideBackButtonTitle: true,
    },
    passProps: {},
    animationType: 'slide-down',
  });
};

DeviceEventEmitter.once('PERSIST', () => {
  startApp();
});
