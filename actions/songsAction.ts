export const ADD_PLAYLIST = "ADD_PLAYLIST"
export const REMOVE_PLAYLIST = "REMOVE_PLAYLIST"

export interface addPlaylistAction {
  type: typeof ADD_PLAYLIST,
  payload: String
}

export interface removePlaylistAction {
  type: typeof REMOVE_PLAYLIST
  payload: String
}

export type SongsTypes = addPlaylistAction | removePlaylistAction