import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {aliasesNavigation, EverProps} from "../types/EverProps";
import styles from "../theme/styles";
import {Song, SongState} from "../models/Song";
import {connect} from "react-redux";
import FlatSongs from "../components/FlatSongs";
import {bindActionCreators} from "redux";
import {SongPayload, UPDATE_SONG_PLAYLIST, UpdateSongPlaylist} from "../actions/songsAction";
import {PlaylistPayload, UPDATE_PLAYLIST, UpdatePlaylistAction} from '../actions/playlistAction'

interface SongsProps extends EverProps {
  songs: SongState
  updateSongPlaylist: Function
  updatePlaylistAction: Function

}

class Songs extends Component<SongsProps> {

  static navigationOptions = ({ navigation} : {navigation : aliasesNavigation}) => {
    return {
      title: 'Select Songs',
      headerLeft: null,
      headerRight: (<Text onPress={()=>navigation.goBack()} style={{padding:8}}>Done</Text>)
    }
  }

  callback = (song : Song, listId : String)=> {
    const songPayload : SongPayload = {
      songId: song.key,
      playlistId: listId
    }
    this.props.updateSongPlaylist(songPayload)
    const playlistPayload : PlaylistPayload = {
      song,
      listId
    }
    this.props.updatePlaylistAction(playlistPayload)
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

function updatePlaylistAction(payload: PlaylistPayload) : UpdatePlaylistAction {
  return {
    type: UPDATE_PLAYLIST,
    payload
  }
}

function mapDispatchToProps(dispatch : any) {
  return bindActionCreators({
    updateSongPlaylist,
    updatePlaylistAction,
  }, dispatch)
}

function mapStateToProps(state : any) {
  return {
    songs: state.songs
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Songs)