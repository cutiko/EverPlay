import {SongPayload} from "./payload";

export const UPDATE_SONG_PLAYLIST = "UPDATE_SONG_PLAYLIST"

export interface UpdateSongPlaylist {
  type: typeof UPDATE_SONG_PLAYLIST
  payload: SongPayload
}

export type SongsTypes = UpdateSongPlaylist