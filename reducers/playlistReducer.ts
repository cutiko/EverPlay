import {PlaylistState} from "../models/Playlist";
import {playlists} from "../seed";
import {PlaylistTypes} from "../actions/playlistAction";

export default function playlistReducer(state : PlaylistState = playlists, action : PlaylistTypes) {
  switch (action.type) {
    case "ADD_SONG":
      return state
    case "REMOVE_SONG":
      return state
    default:
      return state
  }
}