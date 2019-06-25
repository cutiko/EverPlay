import {Playlist, PlaylistState} from "../models/Playlist";
import {playlists} from "../seed";
import {PlaylistPayload, PlaylistTypes, UPDATE_PLAYLIST} from "../actions/playlistAction";

export default function playlistReducer(state : PlaylistState = playlists, action : PlaylistTypes) {
  switch (action.type) {
    case UPDATE_PLAYLIST:
      return handleChange(state, action.payload)
    default:
      return state
  }
}

function handleChange(state : PlaylistState, payload : PlaylistPayload) {
  const copy = new Map<String, Playlist>(state)
  const {song, listId} = payload
  const playlist = copy.get(listId)
  if (playlist) {
    const safeList : Playlist = playlist
    const {key} = song
    if (safeList.songs.has(key)) {
      safeList.songs.delete(key)
    } else {
      safeList.songs.set(key, song)
    }
    return copy
  }
  return state

}