import {combineReducers} from "redux";
import playlistRowsReducer from "./playlistRowsReducers";

export default combineReducers({
  playlistRows: playlistRowsReducer,
})