import React from 'react'
import {FlatList} from 'react-native'
import {PlayListRow, PlaylistRowsState} from "../models/PlayListRow";
import PlaylistRowItem, {callback} from "./ItemPlaylistRow";


export default ({rows, callback}: {rows: PlaylistRowsState, callback: callback}) => {
  const data: PlayListRow[] = Array.from(rows.values())

  const renderItem = ({item}: { item: PlayListRow }) => (
    <PlaylistRowItem
      row={item}
      callback={callback}
    />
  )

  return (
    <FlatList data={data} renderItem={renderItem}/>
  )
}