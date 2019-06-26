import React from 'react'
import {FlatList} from 'react-native'
import {PlayListRow, PlaylistRowsState} from "../models/PlayListRow";
import PlaylistRowItem from "./ItemPlaylistRow";


export default ({rows, callback}: {rows: PlaylistRowsState, callback: Function}) => {
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