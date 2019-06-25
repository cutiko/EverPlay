import {SongState} from "../models/Song";
import {ADD_PLAYLIST, REMOVE_PLAYLIST, SongsTypes} from "../actions/songsAction";
import {songs} from "../seed";

export default function songsReducer(state : SongState = songs, action : SongsTypes) {
  switch (action.type) {
    case ADD_PLAYLIST:
      return changeSongPlaylist(state, action.payload.songId, action.payload.playlistId, true)
    case REMOVE_PLAYLIST:
      return changeSongPlaylist(state, action.payload.songId, action.payload.playlistId, false)
    default:
      return state
  }
}

function changeSongPlaylist(state: SongState, songId: String, playlistId: String, remove : boolean) {
  const copy = {...state}
  const song = copy.get(songId)
  if (song) {
    if (remove) {
      song.playlists.delete(playlistId)
    } else {
      song.playlists.set(playlistId, true)
    }
    return copy
  }
  return state

}