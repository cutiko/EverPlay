import {SongPayload} from "./payload";

export const UPDATE_SONG_PLAYLIST = "UPDATE_SONG_PLAYLIST_ACTION"

export interface UpdateSongPlaylistAction {
  type: typeof UPDATE_SONG_PLAYLIST
  payload: SongPayload
}

export const UPDATE_PLAYLIST = "UPDATE_PLAYLIST_ACTION"

export interface UpdatePlaylistAction {
  type: typeof UPDATE_PLAYLIST
  payload: SongPayload
}

export const UPDATE_PLAYLIST_ROW = "UPDATE_PLAYLIST_ROW_ACTION"

export interface UpdatePlayListRowAction {
  type: typeof UPDATE_PLAYLIST_ROW
  payload: SongPayload
}

export type SongsTypes = UpdateSongPlaylistAction | UpdatePlaylistAction | UpdatePlayListRowAction
