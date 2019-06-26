import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {aliasesNavigation, EverProps} from "../types/EverProps";
import styles from "../theme/styles";
import {Song, SongState} from "../models/Song";
import {connect} from "react-redux";
import FlatSongs from "../components/FlatSongs";
import {bindActionCreators} from "redux";

import {UPDATE_SONG_PLAYLIST, UpdateSongPlaylist} from "../actions/songsAction";
import {UPDATE_PLAYLIST, UpdatePlaylistAction} from '../actions/playlistAction'
import {UPDATE_PLAYLIST_ROW, UpdatePlayListRow} from "../actions/playlistRowAction";
import {SongPayload} from "../actions/payload";

interface SongsProps extends EverProps {
  songs: SongState
  updateSongPlaylist: Function
  updatePlaylistAction: Function
  updatePlayListRow: Function
}

class SongsScreen extends Component<SongsProps> {

  static navigationOptions = ({ navigation} : {navigation : aliasesNavigation}) => {
    return {
      title: 'Select Songs',
      headerLeft: null,
      headerRight: (<Text onPress={()=>navigation.goBack()} style={{padding:8}}>Done</Text>)
    }
  }

  callback = (song : Song, listId : string)=> {
    const songPayload : SongPayload = {song, listId}
    this.props.updateSongPlaylist(songPayload)
    this.props.updatePlaylistAction(songPayload)
    this.props.updatePlayListRow(songPayload)
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


function updateSongPlaylist(payload: SongPayload) : UpdateSongPlaylist {
  return {
    type: UPDATE_SONG_PLAYLIST,
    payload
  }
}

function updatePlaylistAction(payload: SongPayload) : UpdatePlaylistAction {
  return {
    type: UPDATE_PLAYLIST,
    payload
  }
}

function updatePlayListRow(payload : SongPayload): UpdatePlayListRow {
  return {
    type: UPDATE_PLAYLIST_ROW,
    payload
  }
}

function mapDispatchToProps(dispatch : any) {
  return bindActionCreators({
    updateSongPlaylist,
    updatePlaylistAction,
    updatePlayListRow
  }, dispatch)
}

function mapStateToProps(state : any) {
  return {
    songs: state.songs
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongsScreen)