import React from 'react'
import {Image, Text, View} from "react-native";
import {Song} from "../models/Song";
import {rowStyle as row} from "../theme/row";
import styles from '../theme/styles'

export type callback = (song : Song, listId: string) => void

export default ({item, listId, callback}: { item: Song, listId: string, callback : callback }) => {
  const display = (item.playlists.has(listId)) ? 'flex' : 'none'
  return (
    <View
      style={[
        row.container,
      ]}
    >
      <Text style={[row.text, styles.textColor, row.padding]} onPress={()=>callback(item, listId)}>{item.name}</Text>
      <Image source={require('../images/ic_check_white_circle_primary_16.png')} style={[row.check, {display:display}]}/>
    </View>
  )
}

