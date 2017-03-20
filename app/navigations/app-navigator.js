
import {NavigationActions, addNavigationHelpers, StackNavigator} from "react-navigation";
import HomeContainer from "../containers/home-container";

const routeConfiguration = {
  Home: { screen: HomeContainer },
  /*Profile: { screen: ProfileContainer },
  Content: { screen: ContentContainer },
  About: { screen: AboutContainer }*/
};

const stackNavigatorConfiguration = {
  initialRoute: 'Home'
};

const AppNavigator = StackNavigator(routeConfiguration, stackNavigatorConfiguration);

export default AppNavigator;
