import React from 'react'
import {PlayListRow} from "../models/PlayListRow";
import {Text} from 'react-native'

interface RowProps {
  row: PlayListRow
}

export default ({row: {name, count, color}} : {row: PlayListRow})=> {
  return (
    <Text>{name}</Text>
  )
}