export interface Song {
  key: string
  name: string
  playlists: Map<String, boolean>
}

export type SongState = Map<string, Song>