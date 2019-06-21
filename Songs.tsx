import React from 'react';
import {Text} from 'react-native';
import {NavigationScreenProps} from 'react-navigation';

interface SongsProps extends NavigationScreenProps {}

export default function (props : SongsProps) {

  return <Text style={{flex: 1, backgroundColor: 'green'}}/>;
}