import React, {Component} from "react";
import {Text, View} from "react-native";
import {NavigationScreenProps} from "react-navigation";
import {connect} from "react-redux";
import styles from "./styles";

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

function mapStateToProps(state : any) {
  return {
    count: state.count.count.count
  }
}

export default connect(mapStateToProps)(Main)