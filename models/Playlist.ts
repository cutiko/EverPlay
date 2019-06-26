import {Song} from "./Song";

export interface Playlist {
  key: string
  songs: Map<string, Song>
}

export type PlaylistState = Map<string, Playlist>