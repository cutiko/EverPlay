import React, {Component} from 'react';
import {View} from 'react-native';
import {aliasesNavigation, EverProps} from "./types/EverProps";
import {PlayListRow} from "./models/PlayListRow";
import styles from "./theme/styles";
import {white} from "./theme/colors";

class PlayList extends Component<EverProps> {

  static navigationOptions = ({ navigation } : {navigation : aliasesNavigation}) => {
    const {name} : PlayListRow = navigation.getParam("playlistRow");
    return {
      title: name
    }
  }

  render() {
    const {key, name, count, color} = this.props.navigation.getParam("playlistRow");
    const safeColor = color || white
    return (
      <View style={[styles.container, {backgroundColor: safeColor.toString()}]}>

      </View>
    )
  }
}

export default PlayList;