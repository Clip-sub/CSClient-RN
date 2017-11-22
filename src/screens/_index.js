/**
 * @flow
 * Application's root container. Including stack navigation component.
 * For now the navigation-drawer contains the home-container.
 * All other containers are self-contained.
 */

'use strict';
import { Navigation } from 'react-native-navigation';
// Screens:
import HomeContainer from './home-container';

export function registerScreens(store, Provider) {
  Navigation.registerComponent(
    'csclient.Home',
    () => HomeContainer,
    store,
    Provider,
  );
}
