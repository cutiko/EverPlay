import {Song} from "../models/Song";

export const ADD_SONG = "ADD_SONG"
export const REMOVE_SONG = "REMOVE_SONG"

export interface AddSongAcion {
  type: typeof ADD_SONG
  payload: Song
}

export interface RemoveSongAction {
  type: typeof REMOVE_SONG
  payload: Song
}

export type PlaylistTypes = AddSongAcion | RemoveSongAction