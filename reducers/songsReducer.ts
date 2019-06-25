import {Song, SongState} from "../models/Song";
import {SongsTypes, UPDATE_SONG_PLAYLIST} from "../actions/songsAction";
import {songs} from "../seed";

export default function songsReducer(state : SongState = songs, action : SongsTypes) {
  switch (action.type) {
    case UPDATE_SONG_PLAYLIST:
      return changeSongPlaylist(state, action.payload.songId, action.payload.playlistId)
    default:
      return state
  }
}

function changeSongPlaylist(state: SongState, songId: String, playlistId: String) {
  const copy = new Map<String, Song>(state)
  const song = copy.get(songId)
  if (song) {
    if (song.playlists.has(playlistId)) {
      console.warn('remove')
      song.playlists.delete(playlistId)
    } else {
      console.warn('add')
      song.playlists.set(playlistId, true)
    }
    return copy
  }
  return state

}