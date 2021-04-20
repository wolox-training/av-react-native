import { StyleSheet } from 'react-native';
import { mainBackground } from '@constants/colors';

export default StyleSheet.create({
  mainWrapper: {
    backgroundColor: mainBackground,
    flex: 1
  },
  wrapper: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 10,
    paddingTop: 15
  }
});
