import React from 'react'
import {Image, Text, View} from "react-native";
import {Song} from "../models/Song";
import {rowStyle as row} from "../theme/playlistRow";
import styles from '../theme/styles'

export default ({item, listId}: { item: Song, listId: String }) => {
  const display = (item.playlists.has(listId)) ? 'flex' : 'none'
  return (
    <View
      style={[
        styles.textColor,
        row.container,
        row.wrapper
      ]}
    >
      <Text style={row.text}>{item.name}</Text>
      <Image source={require('../images/ic_done_black_18.png')} style={{display:display}}/>
    </View>
  )
}

