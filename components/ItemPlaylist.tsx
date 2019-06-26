import React from 'react'
import {Text} from "react-native";
import {Song} from "../models/Song";
import {rowStyle as row} from "../theme/row";
import styles from '../theme/styles'

export default ({item}: { item: Song }) => (
  <Text
    style={[
      styles.textColor,
      row.container,
      row.padding
    ]}>
    {item.name}
  </Text>
)