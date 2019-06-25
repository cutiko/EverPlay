import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {aliasesNavigation, EverProps} from "../types/EverProps";
import {PlayListRow} from "../models/PlayListRow";
import styles from "../theme/styles";
import {white} from "../theme/colors";
import {Playlist, PlaylistState} from "../models/Playlist";
import {connect} from "react-redux";
import {playlists} from "../seed";
import PlaylistList from "../components/FlatPlaylist";

interface PlayListProps extends EverProps{
  playlists: PlaylistState
}

class PlayList extends Component<PlayListProps> {

  static navigationOptions = ({ navigation } : {navigation : aliasesNavigation}) => {
    const {name} : PlayListRow = navigation.getParam("playlistRow");
    return {
      title: name,
      headerRight: (<Text>HERE</Text>)
    }
  }

  render() {
    const {key, color} = this.props.navigation.getParam("playlistRow");
    return handleState(key, color, playlists)
  }
}

function handleState(key: String, color: String, playlists: PlaylistState) {
  if (key) {
    const safeColor = color || white
    const playlist : Playlist | undefined = playlists.get(key)
    if (playlists) {
      return (
        <View style={[styles.container, {backgroundColor: safeColor.toString()}]}>
          <PlaylistList playlist={playlist}/>
        </View>
      )
    }
  }
  return (
    <View style={[styles.container, {alignItems: 'center'}]}>
      <Text>No playlist available</Text>
    </View>
  )
}

function mapStateToProps(state : any) {
  return {
    playlists: state.playlists
  }
}

export default connect(mapStateToProps)(PlayList);