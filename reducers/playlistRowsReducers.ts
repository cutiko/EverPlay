import {playlistsRows} from "../seed";
import {PlaylistRowsState} from "../models/PlayListRow";
import {PlayListRowTypes} from "../actions/playlistRowAction";

const initialState = playlistsRows

//TODO switch case for action to update the rows using the update row action
export default function playlistRowsReducer(state = initialState, action : PlayListRowTypes) : PlaylistRowsState {
  return state
}