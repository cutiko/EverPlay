import {combineReducers} from "redux";
import playlistRowsReducer from "./playlistRowsReducers";
import playlistReducer from "./playlistReducer";

export default combineReducers({
  playlistRows: playlistRowsReducer,
  playlists: playlistReducer
})