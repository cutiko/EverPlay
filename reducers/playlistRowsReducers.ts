import {playlistsRows} from "../seed";
import {PlayListRow, PlaylistRowsState} from "../models/PlayListRow";
import {DECREASE_ROW, INCREASE_ROW, PlayListRowTypes} from "../actions/playlistRowAction";

export default function playlistRowsReducer(state : PlaylistRowsState = playlistsRows, action : PlayListRowTypes) : PlaylistRowsState {
  switch (action.type) {
    case DECREASE_ROW:
    return changeCount(state, action.payload, -1)
    case INCREASE_ROW:
      return changeCount(state, action.payload, 1)
    default:
      return state
  }
}

function changeCount(state: PlaylistRowsState, key : String, change : number) {
  const copy : PlaylistRowsState = {...state}
  const row = copy.get(key)
  if (row) {
    const safeRow : PlayListRow = row
    const {count} = safeRow
    safeRow.count = count + change
    copy.set(safeRow.key, safeRow)
    return copy
  }
  return state
}