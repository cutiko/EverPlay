import {combineReducers} from "redux";
import playlistRowsReducer from "./playlistRowsReducers";
import playlistReducer from "./playlistReducer";
import songsReducer from "./songsReducer";

export default combineReducers({
  playlistRows: playlistRowsReducer,
  playlists: playlistReducer,
  songs: songsReducer,
})