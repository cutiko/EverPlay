import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {aliasesNavigation, EverProps} from "../types/EverProps";
import styles from "../theme/styles";
import {SongState} from "../models/Song";
import {connect} from "react-redux";
import FlatSongs from "../components/FlatSongs";

interface SongsProps extends EverProps {
  songs: SongState
}

class Songs extends Component<SongsProps> {

  static navigationOptions = ({ navigation} : {navigation : aliasesNavigation}) => {
    return {
      title: 'Select Songs',
      headerLeft: null,
      headerRight: (<Text onPress={()=>navigation.goBack()} style={{padding:8}}>Done</Text>)
    }
  }

  render() {
    const {songs, navigation} = this.props
    const key = navigation.getParam("key")
    return (
      <View style={styles.container}>
        <FlatSongs songs={songs} listId={key}/>
      </View>
    )
  }
}


/*const Songs = (props : SongsProps)=> {
  console.warn(props.navigation.state.params.key)
  console.warn(props.navigation.state.params.title)

  return <Text style={{flex: 1, backgroundColor: 'green'}} onPress={()=>props.countAction({count:props.count})}/>;
}*/

/*function mapDispatchToProps(dispatch : any) {
  return bindActionCreators({countAction}, dispatch)
}*/

function mapStateToProps(state : any) {
  return {
    songs: state.songs
  }
}

export default connect(mapStateToProps)(Songs)