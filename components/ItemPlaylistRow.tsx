import React from 'react'
import {PlayListRow} from "../models/PlayListRow";
import {Text, View} from 'react-native'
import styles from "../theme/styles";
import {white} from "../theme/colors";
import {rowStyle as row} from '../theme/playlistRow'

export default ({row: {name, songs, color, key}, callback}: { row: PlayListRow, callback: any }) => {
  const safeColor = color || white
  return (
    <View style={row.container}>
      <View style={[{backgroundColor: safeColor.toString()}, row.tag]}/>
      <View style={row.wrapper}>
        <Text style={[styles.textColor, row.text]} onPress={()=>callback(key)}>{name}</Text>
        <Text>{songs.size}</Text>
      </View>
    </View>
  )
}