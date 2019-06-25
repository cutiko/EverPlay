export const ADD_PLAYLIST = "ADD_PLAYLIST"
export const REMOVE_PLAYLIST = "REMOVE_PLAYLIST"

export interface SongPayload {
  songId: String
  playlistId: String
}

export interface addPlaylistAction {
  type: typeof ADD_PLAYLIST,
  payload: SongPayload
}

export interface removePlaylistAction {
  type: typeof REMOVE_PLAYLIST
  payload: SongPayload
}

export type SongsTypes = addPlaylistAction | removePlaylistAction