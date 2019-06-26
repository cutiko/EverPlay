import {SongPayload} from "./payload";

export const UPDATE_PLAYLIST = "UPDATE_PLAYLIST"

export interface UpdatePlaylistAction {
  type: typeof UPDATE_PLAYLIST
  payload: SongPayload
}

export type PlaylistTypes = UpdatePlaylistAction