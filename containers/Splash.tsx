import * as React from 'react'
import {NavigationScreenProps} from "react-navigation";
import {ActivityIndicator, Text, View} from "react-native";
import styles from "../styles";

interface SplashProps extends NavigationScreenProps{

}

const Splash : React.FunctionComponent<SplashProps> = (props : SplashProps)=> {
  console.log(props)
  return (
    <View style={styles.container}>
      <ActivityIndicator/>
    </View>
  );
}

export default Splash