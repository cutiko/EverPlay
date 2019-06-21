import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator, createAppContainer, NavigationScreenProps} from 'react-navigation';
import PlayList from "./PlayList";
import Songs from "./Songs";

interface MainProps extends NavigationScreenProps {}
class Main extends Component<MainProps> {

  static navigationOptions = {
    title: 'PlayLists',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text
          style={styles.instructions}
          onPress={()=> navigate('Songs', {title:'testing'})}
        >
          Main App
        </Text>
      </View>
    );
  }
}

const MainNavigator = createStackNavigator({
  Main: {screen: Main},
  PlayList: {screen: PlayList},
  Songs: {screen: Songs},
})

export default createAppContainer(MainNavigator);

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