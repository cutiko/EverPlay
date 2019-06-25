import React, {Component} from "react";
import {Text, View} from "react-native";
import {NavigationScreenProps} from "react-navigation";
import {connect} from "react-redux";
import styles from "./theme/styles";

interface MainProps extends NavigationScreenProps {
  count: number
}

export default class Main extends Component<MainProps> {

  static navigationOptions = {
    title: 'PlayLists',
  };

  render() {
    const {navigate} = this.props.navigation;
    /*console.log(this.props)
    const {count} = this.props
    console.log(count)*/
    return (
      <View style={styles.container}>
        <Text
          onPress={() => navigate('Songs', {title: 'testing'})}
        >
          "Add the lists"
        </Text>
      </View>
    );
  }
}

function mapStateToProps(state : any) {
  return {
    count: state.count.count.count
  }
}

//export default connect(mapStateToProps)(Main)