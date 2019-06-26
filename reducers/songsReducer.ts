import {Song, SongState} from "../models/Song";
import {songs} from "../seed";
import {SongPayload} from "../actions/payload";
import {SongsTypes, UPDATE_SONG_PLAYLIST} from "../actions/actions";

export default function songsReducer(state : SongState = songs, action : SongsTypes) : SongState {
  switch (action.type) {
    case UPDATE_SONG_PLAYLIST:
      return changeSongPlaylist(state, action.payload)
    default:
      return state
  }
}

function changeSongPlaylist(state: SongState, {song: {key}, listId}: SongPayload) : SongState {
  const copy = new Map<String, Song>(state)
  const copiedSong = copy.get(key)
  if (copiedSong) {
    const {playlists} = copiedSong
    if (playlists.has(listId)) {
      playlists.delete(listId)
    } else {
      playlists.set(listId, true)
    }
    return copy
  }
  return state
}