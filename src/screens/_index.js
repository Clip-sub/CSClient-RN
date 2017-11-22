/**
 * @flow
 * Application's root container. Including stack navigation component.
 * For now the navigation-drawer contains the home-container.
 * All other containers are self-contained.
 */

'use strict';
import { Navigation } from 'react-native-navigation';
// import { CustomProvider } from './custom-provider';
// Stack Screens:
import { Home } from './home';
import ContentContainer from './content-container';
// Tab Screens:

export function registerScreens(store, Provider) {
  // Stack-based screens:
  Navigation.registerComponent('csclient.Home', () => Home, store, Provider);
  Navigation.registerComponent(
    'csclient.Content',
    () => ContentContainer,
    store,
    Provider,
  );
  // Tab-based screens:
}
