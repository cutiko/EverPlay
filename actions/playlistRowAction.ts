export const UPDATE_PLAYLIST_ROW = "UPDATE_PLAYLIST_ROW"

export interface PlaylistRowPayload {
  listId: String
  songId: String
}

export interface UpdatePlayListRow {
  type: typeof UPDATE_PLAYLIST_ROW
  payload: PlaylistRowPayload
}

export type PlayListRowTypes = UpdatePlayListRow