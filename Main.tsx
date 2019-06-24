import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import {NavigationScreenProps} from "react-navigation";
import {connect} from "react-redux";

interface MainProps extends NavigationScreenProps {
  count: number
}

class Main extends Component<MainProps> {

  static navigationOptions = {
    title: 'PlayLists',
  };

  render() {
    const {navigate} = this.props.navigation;
    console.log(this.props)
    const {count} = this.props
    console.log(count)
    return (
      <View style={styles.container}>
        <Text
          style={styles.instructions}
          onPress={() => navigate('Songs', {title: 'testing'})}
        >
          {count}
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

function mapStateToProps(state : any) {
  return {
    count: state.count.count.count
  }
}

export default connect(mapStateToProps)(Main)