import * as React from 'react';
import {Text} from 'react-native';
import {NavigationScreenProps} from 'react-navigation';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {countAction} from "./App";

interface SongsProps extends NavigationScreenProps {
  navigation: any
  title: String
  countAction: any
  count: number
}

const Songs: React.FunctionComponent<SongsProps> = (props: SongsProps) => {
  console.log(props)
  //console.warn(props.navigation.state.params.title)

  return <Text style={{flex: 1, backgroundColor: 'green'}} onPress={()=>props.countAction({count:props.count})}/>;
}

function mapDispatchToProps(dispatch : any) {
  return bindActionCreators({countAction}, dispatch)
}

function mapStateToProps(state : any) {
  return {
    count: state.count.count.count
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Songs)