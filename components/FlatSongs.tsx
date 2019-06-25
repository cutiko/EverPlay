import React from 'react'
import {FlatList} from "react-native";
import {Song, SongState} from "../models/Song";
import SongItem from "./ItemPlaylist";

export default ({songs, listId} : {songs: SongState, listId: String})=> {
  const data = Array.from(songs.values())

  const renderItem = ({item} : {item : Song})=> (
    <SongItem item={item}/>
  )

  return (
    <FlatList data={data} renderItem={renderItem}/>
  )
}