import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {aliasesNavigation, EverProps} from "../types/EverProps";
import styles from "../theme/styles";
import {Song, SongState} from "../models/Song";
import {connect} from "react-redux";
import FlatSongs from "../components/FlatSongs";
import {bindActionCreators} from "redux";

import {SongPayload} from "../actions/payload";
import {SongAction, UPDATE_PLAYLIST, UPDATE_PLAYLIST_ROW, UPDATE_SONG_PLAYLIST} from "../actions/actions";

interface SongsProps extends EverProps {
  songs: SongState
  updateState: Function
}

class SongsScreen extends Component<SongsProps> {

  static navigationOptions = ({ navigation} : {navigation : aliasesNavigation}) => {
    return {
      title: 'Select Songs',
      headerLeft: null,
      headerRight: (<Text onPress={()=>navigation.goBack()} style={{padding:8}}>Done</Text>)
    }
  }

  callback = (song: Song, listId: string)=>{
    const songPayload : SongPayload = {song, listId}
    const {updateState} = this.props
    updateState(UPDATE_SONG_PLAYLIST, songPayload)
    updateState(UPDATE_PLAYLIST, songPayload)
    updateState(UPDATE_PLAYLIST_ROW, songPayload)
  }

  render() {
    const {songs, navigation} = this.props
    const key = navigation.getParam("key")
    return (
      <View style={styles.container}>
        <FlatSongs songs={songs} listId={key} callback={this.callback}/>
      </View>
    )
  }
}

const updateState = function(type: string, payload: SongPayload) : SongAction {
  return {type, payload}
}

function mapDispatchToProps(dispatch : any) {
  return bindActionCreators({updateState}, dispatch)
}

function mapStateToProps(state : any) {
  return {
    songs: state.songs
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongsScreen)

