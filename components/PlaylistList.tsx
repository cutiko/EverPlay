import React from 'React'
import {FlatList} from "react-native"
import {Playlist} from '../models/Playlist'
import {Song} from "../models/Song";
import SongItem from "./SongItem";

export default ({playlist}: { playlist: Playlist | undefined }) => {

  if (!playlist) return null
  const data = Array.from(playlist.songs.values())

  const renderItem = ({item} : {item: Song}) => (
    <SongItem item={item}/>
  )

  return (
    <FlatList data={data} renderItem={renderItem}/>
  )
}

