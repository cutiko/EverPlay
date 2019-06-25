import {StyleSheet} from "react-native";
import {black, lightGray, primary, white} from "./colors";

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
  row: {
    paddingStart: 16,
    paddingEnd: 16,
    paddingTop: 8,
    paddingBottom: 8,
    alignItems: 'flex-start',
    borderWidth: 1,
    borderColor: lightGray
  },
  textColor: {
    color: black,
  }
});