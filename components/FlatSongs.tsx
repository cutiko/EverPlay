import React from 'react'
import {FlatList} from "react-native";
import {Song, SongState} from "../models/Song";
import ItemSong from './ItemSong'

export default ({songs, listId} : {songs: SongState, listId: String})=> {
  const data = Array.from(songs.values())

  const renderItem = ({item} : {item : Song})=> (
    <ItemSong item={item} listId={listId}/>
  )

  return (
    <FlatList data={data} renderItem={renderItem}/>
  )
}