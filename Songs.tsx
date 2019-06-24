import * as React from 'react';
import {Text} from 'react-native';
import {NavigationScreenProps} from 'react-navigation';

interface SongsProps extends NavigationScreenProps {
  navigation : any
  title: String
}

const Songs : React.FunctionComponent<SongsProps> = (props : SongsProps)=> {
    console.warn(props.navigation.state.params.title)

  return <Text style={{flex: 1, backgroundColor: 'green'}}/>;
}

export default Songs;