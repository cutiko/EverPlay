import React from 'react'
import {Picker, Text, View} from "react-native";
import {Song} from "../models/Song";
import {rowStyle as row} from "../theme/playlistRow";
import styles from '../theme/styles'

export default ({item, listId}: { item: Song, listId : String }) => {
  return (
    <View
      style={[
        styles.textColor,
        row.container,
        row.wrapper
      ]}
    >
      <Text>{item.name}</Text>
      <Picker/>
    </View>
  )
}

