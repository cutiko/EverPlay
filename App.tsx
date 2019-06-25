import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import {Provider} from 'react-redux'
import {createStore} from 'redux'


import Splash from "./containers/Splash";
import PlayList from "./containers/PlayList";
import Songs from "./containers/Songs";
import Main from "./containers/Main";
import combineReducers from "./reducers/combineReducers";

const store = createStore(combineReducers)

const MainNavigator = createStackNavigator({
  Splash: {screen: Splash},
  Main: {screen: Main},
  PlayList: {screen: PlayList},
  Songs: {screen: Songs},
})

const Navigation = createAppContainer(MainNavigator);


export default ()=>(<Provider store={store}><Navigation/></Provider>);
