import {playlistsRows} from "../seed";
import {PlayListRow, PlaylistRowsState} from "../models/PlayListRow";
import {PlaylistRowPayload, PlayListRowTypes, UPDATE_PLAYLIST_ROW} from "../actions/playlistRowAction";

export default function playlistRowsReducer(state: PlaylistRowsState = playlistsRows, action: PlayListRowTypes): PlaylistRowsState {
  switch (action.type) {
    case UPDATE_PLAYLIST_ROW:
      return changeCount(state, action.payload)
    default:
      return state
  }
}

function changeCount(state: PlaylistRowsState, {listId, songId}: PlaylistRowPayload) {
  const copy = new Map<String, PlayListRow>(state)
  const row = copy.get(listId)
  if (row) {
    const safeRow : PlayListRow = row
    if (safeRow.songs.has(songId)) {
      safeRow.songs.delete(songId)
    } else {
      safeRow.songs.set(songId, true)
    }
    return copy
  }
  return state
}