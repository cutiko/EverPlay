import {StyleSheet} from "react-native";
import {black, primary, white} from "./colors";

export default StyleSheet.create({
  splash: {
    backgroundColor: primary,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
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
  textColor: {
    color: black,
  },
});