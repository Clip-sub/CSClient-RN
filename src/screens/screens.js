/**
 * @flow
 * Application's root container. Including stack navigation component.
 * For now the navigation-drawer contains the home-container.
 * All other containers are self-contained.
 */

'use strict';
import { Navigation } from 'react-native-navigation';
// Stack Screens:
//import { Home } from './home';
import { Test } from './tab-based/test';
// Tab Screens:
import { PostList } from './tab-based/post-list';
import { Profile } from './stack-based/profile';

export function registerScreens(store, Provider) {
  // Stack-based screens:
  // Tab-based screens:
  Navigation.registerComponent(
    'screens.PostList',
    () => PostList,
    store,
    Provider,
  );

  Navigation.registerComponent(
    'screens.Profile',
    () => Profile,
    store,
    Provider,
  );
}
