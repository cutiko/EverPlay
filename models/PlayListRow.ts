export interface PlayListRow {

  key: String
  name: String
  songs: Map<String, boolean>
  color: String

}

export type PlaylistRowsState = Map<String, PlayListRow>