import {SongState} from "../models/Song";
import {ADD_PLAYLIST, REMOVE_PLAYLIST, SongsTypes} from "../actions/songsAction";
import {songs} from "../seed";

export default function songsReducer(state : SongState = songs, action : SongsTypes) {
  switch (action.type) {
    case ADD_PLAYLIST:
      return state
    case REMOVE_PLAYLIST:
      return state
    default:
      return state
  }
}