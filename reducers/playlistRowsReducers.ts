import {playlistsRows} from "../seed";
import {PlayListRow, PlaylistRowsState} from "../models/PlayListRow";
import {PlayListRowTypes, UPDATE_PLAYLIST_ROW} from "../actions/playlistRowAction";
import {SongPayload} from "../actions/payload";

export default function playlistRowsReducer(state: PlaylistRowsState = playlistsRows, action: PlayListRowTypes): PlaylistRowsState {
  switch (action.type) {
    case UPDATE_PLAYLIST_ROW:
      return changeCount(state, action.payload)
    default:
      return state
  }
}

function changeCount(state: PlaylistRowsState, {song: {key}, listId}: SongPayload) {
  const copy = new Map<String, PlayListRow>(state)
  const row = copy.get(listId)
  if (row) {
    const safeRow : PlayListRow = row
    if (safeRow.songs.has(key)) {
      safeRow.songs.delete(key)
    } else {
      safeRow.songs.set(key, true)
    }
    return copy
  }
  return state
}