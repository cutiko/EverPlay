export const UPDATE_SONG_PLAYLIST = "UPDATE_SONG_PLAYLIST"

export interface SongPayload {
  songId: String
  playlistId: String
}

export interface UpdateSongPlaylist {
  type: typeof UPDATE_SONG_PLAYLIST
  payload: SongPayload
}

export type SongsTypes = UpdateSongPlaylist