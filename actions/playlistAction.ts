import {Song} from "../models/Song";

export const ADD_SONG = "ADD_SONG"
export const REMOVE_SONG = "REMOVE_SONG"

export interface addSongAcion {
  type: typeof ADD_SONG
  payload: Song
}

export interface removeSongAction {
  type: typeof REMOVE_SONG
  payload: String
}

export type PlaylistTypes = addSongAcion | removeSongAction