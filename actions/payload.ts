import {Song} from "../models/Song";

export interface SongPayload {
  song: Song
  listId: string
}