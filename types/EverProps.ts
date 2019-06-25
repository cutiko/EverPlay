import {NavigationParams, NavigationScreenProp, NavigationState} from "react-navigation";

export type aliasesNavigation = NavigationScreenProp<NavigationState, NavigationParams>;

export interface EverProps{
  navigation: aliasesNavigation
}