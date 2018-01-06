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
import { I18n } from 'csclient-common';
import { registerScreens } from './screens/screens';
import { configureStore } from './stores/custom-store';
// import { CustomProvider } from './custom-provider';
const { store } = configureStore();

registerScreens(store, Provider);

export const startApp = () => {
  Navigation.startTabBasedApp({
    tabs: [
      {
        label: I18n.t('home.posts'),
        screen: 'screens.PostList',
        icon: require('./assets/tab/ic_home.png'),
        selectedIcon: require('./assets/tab/ic_home.png'),
        // tabBarSelectedButtonColor
        title: 'Clip-sub', // title of the screen as appears in the nav bar (optional)
        subtitle: 'The Leading sickos fansubs',
        //titleImage: require('../img/titleImage.png'), // iOS only. navigation bar title image instead of the title text of the pushed screen (optional)
      },
      {
        label: 'Categories',
        screen: 'screens.PostList',
        icon: require('./assets/tab/ic_list.png'),
        selectedIcon: require('./assets/tab/ic_list.png'),
        title: 'Screen Two',
      },
    ],
    tabsStyle: {
      // optional, add this if you want to style the tab bar beyond the defaults
      //tabBarButtonColor: '#ffff00', // optional, change the color of the tab icons and text (also unselected). On Android, add this to appStyle
      //tabBarSelectedButtonColor: '#ff9900', // optional, change the color of the selected tab icon and text (only selected). On Android, add this to appStyle
      //tabBarBackgroundColor: '#551A8B', // optional, change the background color of the tab bar
      initialTabIndex: 0, // optional, the default selected bottom tab. Default: 0. On Android, add this to appStyle
      tabBarTranslucent: true,
      tabBarBlur: true,
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
