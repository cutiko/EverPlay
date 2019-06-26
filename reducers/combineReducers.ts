import {combineReducers} from "redux";
import playlistRowsReducer from "./playlistRowsReducers";
import playlistReducer from "./playlistReducer";
import songsReducer from "./songsReducer";

const rootReducer = combineReducers({
  playlistRows: playlistRowsReducer,
  playlists: playlistReducer,
  songs: songsReducer,
})

export default rootReducer

export type AppState = ReturnType<typeof rootReducer>