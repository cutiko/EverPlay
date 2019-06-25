import {playlistsRows} from "../seed";
import {PlaylistRowsState} from "../models/PlayListRow";
import {PlayListRowTypes} from "../actions/playlistRowAction";

//TODO switch case for action to update the rows using the update row action
export default function playlistRowsReducer(state : PlaylistRowsState = playlistsRows, action : PlayListRowTypes) : PlaylistRowsState {
  return state
}