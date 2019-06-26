export interface PlayListRow {

  key: string
  name: string
  songs: Map<string, boolean>
  color: string

}

export type PlaylistRowsState = Map<string, PlayListRow>