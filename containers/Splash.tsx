import * as React from 'react'
import {NavigationScreenComponent, NavigationScreenProps} from "react-navigation";
import {ActivityIndicator, Image, Text, View} from "react-native";
import styles from "../theme/styles";
import {accent, primary} from "../theme/colors";

interface SplashProps extends NavigationScreenProps{

}

const Splash : NavigationScreenComponent<SplashProps> = (props : SplashProps)=> {

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

Splash.navigationOptions = {
  headerStyle: {
    backgroundColor: primary,
  }
}

export default Splash