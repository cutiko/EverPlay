import {Song} from "./Song";

export interface Playlist {
  key: String
  songs: Map<String, Song>
}

export type PlaylistState = Map<String, Playlist>