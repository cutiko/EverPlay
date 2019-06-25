import React from 'react'
import {FlatList} from 'react-native'
import {PlayListRow, PlaylistRowsState} from "../models/PlayListRow";
import PlaylistRowItem from "./PlaylistRowItem";

interface RowsProps {
  rows : PlaylistRowsState
}

export default ({rows}: RowsProps) => {
  const data : PlayListRow[] = Array.from(rows.values())

  const renderItem = ({item}: {item : PlayListRow})=> <PlaylistRowItem row={item}/>

  return (
    <FlatList data={data} renderItem={renderItem}/>
  )
}