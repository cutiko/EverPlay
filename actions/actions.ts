import {SongPayload} from "./payload";

export const UPDATE_SONG_PLAYLIST = "UPDATE_SONG_PLAYLIST_ACTION"
export const UPDATE_PLAYLIST = "UPDATE_PLAYLIST_ACTION"
export const UPDATE_PLAYLIST_ROW = "UPDATE_PLAYLIST_ROW_ACTION"

export interface SongAction {
  type: string
  payload: SongPayload
}
