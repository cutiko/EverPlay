import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import PlayList from "./PlayList";
import Songs from "./Songs";
import Main from "./Main";

const MainNavigator = createStackNavigator({
  Main: {screen: Main},
  PlayList: {screen: PlayList},
  Songs: {screen: Songs},
})

export default createAppContainer(MainNavigator);

