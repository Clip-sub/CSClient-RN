/**
 * @flow
 */
import { NavigationActions } from "react-navigation";
import Types from "./types-navigation";

export function navigate(screenName, props) {
  return NavigationActions.navigate({
    routeName: screenName,
    params: { ...props }
  })
}