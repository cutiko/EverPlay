export interface PlayListRow {

  key: String
  name: String
  count: number
  color: String

}

export type PlaylistRowsState = Map<String, PlayListRow>