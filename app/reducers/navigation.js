/**
 * @flow
 */
'use strict';
import { NavigationActions } from 'react-navigation';
import AppNavigator from '../navigations/app-navigator';
import HomeDrawerNavigator from '../navigations/drawer-navigator';
import Types from '../actions/types-navigation';

export const nav = (state, action) => {
  switch (action.type) {
  case 'Home':
    return AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'HomeDrawer' }),
        state,
      );
  case 'Authentication':
    return AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Authentication' }),
        state,
      );
  case 'Profile':
    return AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Profile' }),
        state,
      );
  case 'DrawerOpen':
    return HomeDrawerNavigator.getStateForAction(
        NavigationActions.navigate({ routeName: 'DrawerOpen' }),
        state,
      );
  case 'DrawerClose':
    return HomeDrawerNavigator.getStateForAction(
        NavigationActions.navigate({ routeName: 'DrawerClose' }),
        state,
      );
  default:
    return AppNavigator.router.getStateForAction(action, state);
  }
};

export const activeTabIndex = (state = 1, action) => {
  switch (action.type) {
  case Types.SWITCH_HOME_TAB:
    return action.tabIndex;
  default:
    return state;
  }
};
