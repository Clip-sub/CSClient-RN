/**
 * @flow
 */
'use strict';
//import { StyleProvider } from 'native-base';
//import OneSignal from 'react-native-onesignal';
//import getTheme from '../native-base-theme/components';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { registerScreens } from './screens/_index';
import CustomStore from './stores/custom-store';
// import { CustomProvider } from './custom-provider';
const store = CustomStore();

registerScreens(store, Provider);

export const startApp = () => {
  Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'One', // tab label as appears under the icon in iOS (optional)
        screen: 'example.FirstTabScreen', // unique ID registered with Navigation.registerScreen
        icon: require('../img/one.png'), // local image asset for the tab icon unselected state (optional on iOS)
        selectedIcon: require('../img/one_selected.png'), // local image asset for the tab icon selected state (optional, iOS only. On Android, Use `tabBarSelectedButtonColor` instead)
        iconInsets: {
          // add this to change icon position (optional, iOS only).
          top: 6, // optional, default is 0.
          left: 0, // optional, default is 0.
          bottom: -6, // optional, default is 0.
          right: 0, // optional, default is 0.
        },
        title: 'Screen One', // title of the screen as appears in the nav bar (optional)
        titleImage: require('../img/titleImage.png'), // iOS only. navigation bar title image instead of the title text of the pushed screen (optional)
        navigatorStyle: {}, // override the navigator style for the tab screen, see "Styling the navigator" below (optional),
        navigatorButtons: {}, // override the nav buttons for the tab screen, see "Adding buttons to the navigator" below (optional)
      },
      {
        label: 'Two',
        screen: 'example.SecondTabScreen',
        icon: require('../img/two.png'),
        selectedIcon: require('../img/two_selected.png'),
        title: 'Screen Two',
      },
    ],
    tabsStyle: {
      // optional, add this if you want to style the tab bar beyond the defaults
      tabBarButtonColor: '#ffff00', // optional, change the color of the tab icons and text (also unselected). On Android, add this to appStyle
      tabBarSelectedButtonColor: '#ff9900', // optional, change the color of the selected tab icon and text (only selected). On Android, add this to appStyle
      tabBarBackgroundColor: '#551A8B', // optional, change the background color of the tab bar
      initialTabIndex: 1, // optional, the default selected bottom tab. Default: 0. On Android, add this to appStyle
    },
    appStyle: {
      orientation: 'portrait',
      bottomTabBadgeTextColor: 'red',
      bottomTabBadgeBackgroundColor: 'green',
      backButtonImage: require('./pathToImage.png'),
      hideBackButtonTitle: true,
    },
    drawer: {
      left: {
        screen: 'example.FirstSideMenu',
        passProps: {},
      },
      right: {
        screen: 'example.SecondSideMenu', // unique ID registered with Navigation.registerScreen
        passProps: {},
      },
      style: {
        drawerShadow: true,
        contentOverlayColor: 'rgba(0,0,0,0.25)',
        leftDrawerWidth: 50,
        rightDrawerWidth: 50,
        shouldStretchDrawer: true,
      },
      type: 'MMDrawer',
      animationType: 'door',
      disableOpenGesture: false,
    },
    passProps: {},
    animationType: 'slide-down',
  });
};
