import {Playlist, PlaylistState} from "../models/Playlist";
import {playlists} from "../seed";
import {SongPayload} from "../actions/payload";
import {SongsTypes, UPDATE_PLAYLIST} from "../actions/actions";

export default function playlistReducer(state : PlaylistState = playlists, action : SongsTypes) : PlaylistState {
  switch (action.type) {
    case UPDATE_PLAYLIST:
      return handleChange(state, action.payload)
    default:
      return state
  }
}

function handleChange(state : PlaylistState, {song, listId} : SongPayload) {
  const copy = new Map<String, Playlist>(state)
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