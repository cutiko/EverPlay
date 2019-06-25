import {StyleSheet} from 'react-native';
import {lightGray} from "./colors";

export const rowStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderWidth: 1,
    borderColor: lightGray
  },
  tag: {
    width: 30,
    height: '100%',
    borderWidth: 1,
    borderEndColor: lightGray,
    marginEnd: 8,
  },
  wrapper: {
    flex:1,
    flexDirection: 'row',
    paddingStart: 24,
    paddingEnd: 24,
    paddingTop: 16,
    paddingBottom: 16,
  },
  text: {
    flex:1
  }
})