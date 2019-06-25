import {PlayListRow} from "../models/PlayListRow";

export const UPDATE_ROW = "UPDATE_ROW"

export interface updateRowAction {
  type: typeof UPDATE_ROW
  payload: PlayListRow
}

export type PlayListRowTypes = updateRowAction