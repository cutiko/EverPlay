export interface Song {
  key: String
  name: String
  playlists: Map<String, boolean>
}

export type SongState = Map<String, Song>