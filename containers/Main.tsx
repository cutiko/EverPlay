import React, {Component} from "react";
import {View} from "react-native";
import {NavigationScreenProps} from "react-navigation";
import {connect} from "react-redux";
import styles from "../theme/styles";
import {PlaylistRowsState} from "../models/PlayListRow";
import PlayListRows from "../components/FlatPlayListRow";

interface MainProps extends NavigationScreenProps {
  playlistRows: PlaylistRowsState
}

class Main extends Component<MainProps> {

  static navigationOptions = {
    title: 'PlayLists',
    headerLeft: null
  };

  render() {
    const {playlistRows, navigation: {navigate}} = this.props
    return (
      <View style={styles.container}>
        <PlayListRows
          rows={playlistRows}
          callback={(key: String)=>navigate('PlayList', {playlistRow: playlistRows.get(key)})}
        />
      </View>
    );
  }
}

function mapStateToProps(state : any) {
  return {
    playlistRows: state.playlistRows
  }
}

export default connect(mapStateToProps)(Main)