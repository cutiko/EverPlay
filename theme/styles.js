import {StyleSheet} from "react-native";
import {primary, white} from "./colors";

export default StyleSheet.create({
  splash: {
    backgroundColor: primary
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: white,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  titleWhite: {
    textAlign: 'center',
    color: white,
    fontSize: 21
  },
});