import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import {NavigationScreenProps} from "react-navigation";

interface MainProps extends NavigationScreenProps {
}

export default class Main extends Component<MainProps> {

  static navigationOptions = {
    title: 'PlayLists',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text
          style={styles.instructions}
          onPress={() => navigate('Songs', {title: 'testing'})}
        >
          Main App
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});