import React from 'react'
import {PlayListRow} from "../models/PlayListRow";
import {View, Text} from 'react-native'
import styles from "../theme/styles";

interface RowProps {
  row: PlayListRow
}

export default ({row: {name, count, color}} : {row: PlayListRow})=> {
  return (
    <View style={styles.row}><Text style={styles.textColor}>{name}</Text></View>
  )
}