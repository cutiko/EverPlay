import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import {Provider} from 'react-redux'
import {combineReducers, compose, createStore} from 'redux'


import PlayList from "./PlayList";
import Songs from "./Songs";
import Main from "./Main";


interface Count {
  count : number
}

interface CountState {
  count: Count
}


const COUNT = "COUNT";
export interface IncreaseCountAction {
  type: typeof COUNT
  payload: Count
}


export function countAction(count : Count) : IncreaseCountAction {
  return {
    type: COUNT,
    payload: count
  };
}

const initialCount : Count = {count: 1}
const countInitialState : CountState = {count: initialCount}

function countReducer(state = countInitialState, action : IncreaseCountAction) : CountState {
  switch (action.type) {
    case COUNT:
      return {count: {count: action.payload.count + 1}};
    default:
      return state
  }
}


const rootReducer = combineReducers({count: countReducer});

const store = createStore(rootReducer)


const MainNavigator = createStackNavigator({
  Main: {screen: Main},
  PlayList: {screen: PlayList},
  Songs: {screen: Songs},
})

const Navigation = createAppContainer(MainNavigator);


export default ()=>(<Provider store={store}><Navigation/></Provider>);
