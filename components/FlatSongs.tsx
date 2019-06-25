import React from 'react'
import {FlatList} from "react-native";
import {Song, SongState} from "../models/Song";
import ItemSong from './ItemSong'

export default ({songs, listId, callback} : {songs: SongState, listId: String, callback : Function})=> {
  const data = Array.from(songs.values())

  const renderItem = ({item} : {item : Song})=> (
    <ItemSong item={item} listId={listId} callback={callback}/>
  )

  return (
    <FlatList data={data} renderItem={renderItem}/>
  )
}