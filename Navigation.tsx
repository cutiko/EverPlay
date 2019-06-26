import {createAppContainer, createStackNavigator, NavigationRouteConfigMap} from "react-navigation";
import SplashScreen from "./containers/SplashScreen";
import MainScreen from "./containers/MainScreen";
import PlaylistScreen from "./containers/PlaylistScreen";
import SongsScreen from "./containers/SongsScreen";

export const SPLASH_SCREEN = "SplashScreen"
export const MAIN_SCREEN = "MainScreen"
export const PLAYLIST_SCREEN = "PlaylistScreen"
export const SONGS_SCREEN = "SongsScreen"

const routeConfigMap : NavigationRouteConfigMap = {}
routeConfigMap[SPLASH_SCREEN] = {screen: SplashScreen}
routeConfigMap[MAIN_SCREEN] = {screen: MainScreen}
routeConfigMap[PLAYLIST_SCREEN] = {screen: PlaylistScreen}
routeConfigMap[SONGS_SCREEN] = {screen: SongsScreen}

const MainNavigator = createStackNavigator(routeConfigMap)

export default createAppContainer(MainNavigator);