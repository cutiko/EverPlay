import React from 'react'
import {Text} from 'react-native'

export default ({callback} : {callback: Function}) => (
  <Text style={{
    fontSize: 21,
    padding: 8,
    fontWeight: 'bold'
  }}
        onPress={()=>callback()}
  >
    +
  </Text>
)