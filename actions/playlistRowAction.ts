import {SongPayload} from "./payload";

export const UPDATE_PLAYLIST_ROW = "UPDATE_PLAYLIST_ROW"

export interface UpdatePlayListRow {
  type: typeof UPDATE_PLAYLIST_ROW
  payload: SongPayload
}

export type PlayListRowTypes = UpdatePlayListRow