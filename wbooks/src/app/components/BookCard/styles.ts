import { StyleSheet } from 'react-native';
import { white } from '@constants/colors';
import { BOLD_WEIGHT } from '@constants/fonts';

export default StyleSheet.create({
  wrapper: {
    backgroundColor: white,
    borderRadius: 5,
    flexDirection: 'row',
    paddingHorizontal: 30,
    paddingVertical: 15
  },
  image: {
    height: 60,
    width: 40
  },
  textWrapper: {
    flex: 1,
    paddingLeft: 20
  },
  title: {
    fontSize: 17,
    fontWeight: BOLD_WEIGHT
  }
});
