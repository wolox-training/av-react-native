import { StyleSheet } from 'react-native';
import { cerulean, polar } from '@constants/colors';

export default StyleSheet.create({
  wrapper: {
    backgroundColor: polar,
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 10,
    paddingTop: 10
  },
  headerStyle: {
    backgroundColor: cerulean,
    height: 100
  }
});
