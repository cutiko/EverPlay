import * as React from 'react'
import {NavigationScreenProps} from "react-navigation";
import {ActivityIndicator, Image, Text, View} from "react-native";
import styles from "../theme/styles";
import {accent} from "../theme/colors";
import {MAIN_SCREEN} from "../Navigation";

interface SplashProps extends NavigationScreenProps{
}

export default class SplashScreen extends React.Component<SplashProps> {

  static navigationOptions = {header: null}

  componentDidMount(): void {
    const {navigate} = this.props.navigation
    setTimeout(()=>navigate(MAIN_SCREEN), 800)
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