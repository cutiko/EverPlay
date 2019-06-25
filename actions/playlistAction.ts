import {Song} from "../models/Song";

export const UPDATE_PLAYLIST = "UPDATE_PLAYLIST"

export interface PlaylistPayload {
  song: Song
  listId: String
}

export interface UpdatePlaylistAction {
  type: typeof UPDATE_PLAYLIST
  payload: PlaylistPayload
}

export type PlaylistTypes = UpdatePlaylistAction