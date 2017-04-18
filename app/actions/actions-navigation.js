/**
 * @flow
 */
import { NavigationActions } from "react-navigation";

export function navigate(screenName, props) {
  return NavigationActions.navigate({
    routeName: screenName,
    params: { ...props }
  });
}

export function goBack() {
  return NavigationActions.goBack();
}