import React from 'react'
import {FlatList} from 'react-native'
import {PlayListRow, PlaylistRowsState} from "../models/PlayListRow";
import PlaylistRowItem from "./PlaylistRowItem";


export default ({rows, callback}: {rows: PlaylistRowsState, callback: any}) => {
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