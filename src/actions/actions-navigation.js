/**
 * @flow
 */
import { NavigationActions } from 'react-navigation';
import Types from './types-navigation';

/**
 * args: { query: string, categoryId: number }
 */
export function switchHomeTab(tabIndex: number) {
  return {
    type: Types.SWITCH_HOME_TAB,
    tabIndex,
  };
}

export function navigate(screenName, params) {
  return NavigationActions.navigate({
    routeName: screenName,
    params,
  });
}

export function reset(routeStack: Array) {
  const newStack = [];
  routeStack.forEach(item =>
    newStack.push(NavigationActions.navigate({ routeName: item })),
  );
  return NavigationActions.reset({
    index: 0,
    actions: newStack,
  });
}

export function goBack(screenKey) {
  return NavigationActions.back(screenKey);
}
