import * as React from 'react'
import {NavigationScreenProps} from "react-navigation";
import {ActivityIndicator, Image, Text, View} from "react-native";
import styles from "../theme/styles";
import {accent, primary} from "../theme/colors";
import {connect} from "react-redux";
import {PlayListRow} from "../models/PlayListRow";

interface SplashProps extends NavigationScreenProps{
  playlistRows : PlayListRow[]
}

export default class Splash extends React.Component<SplashProps> {

  static navigationOptions = {header: null}

  componentDidMount(): void {
    const {navigate} = this.props.navigation
    setTimeout(()=>navigate("Main"), 3500)
  }

  render() {
    return (
      <View style={[styles.container, styles.splash]}>
        <Text style={styles.titleWhite}>EverPlay</Text>
        <Image source={require('../images/evernote_logo.png')}/>
        <ActivityIndicator
          size="large"
          color={accent.toString()}
        />
      </View>
    );
  }
}