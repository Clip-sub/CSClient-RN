/**
 * @flow
 */

'use strict';

import { DrawerNavigator } from 'react-navigation';
import HomeContainer from '../containers/home-container';
import CustomDrawerContent from '../components/custom-drawer-content';

const drawerRouteConfig = {
  Home: { screen: HomeContainer },
};

const drawerNavigatorConfig = {
  drawerPosition: 'left',
  contentComponent: CustomDrawerContent,
};

const HomeDrawerNavigator = DrawerNavigator(
  drawerRouteConfig,
  drawerNavigatorConfig,
);

export default HomeDrawerNavigator;
