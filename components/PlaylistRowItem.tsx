import React from 'react'
import {PlayListRow} from "../models/PlayListRow";
import {Text, View} from 'react-native'
import styles from "../theme/styles";
import {white} from "../theme/colors";
import row from '../theme/row'

export default ({row: {name, count, color}}: { row: PlayListRow }) => {
  const safeColor = color || white
  return (
    <View style={row.container}>
      <View style={[{backgroundColor: safeColor.toString()}, row.tag]}/>
      <View style={row.wrapper}>
        <Text style={[styles.textColor, row.text]}>{name}</Text>
        <Text>{count}</Text>
      </View>
    </View>
  )
}