import React from 'react';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import combineReducers from "./reducers/combineReducers";
import Navigation from "./Navigation";

const store = createStore(combineReducers)

export default ()=>(<Provider store={store}><Navigation/></Provider>);
