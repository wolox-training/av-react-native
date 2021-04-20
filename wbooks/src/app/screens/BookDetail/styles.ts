import { StyleSheet } from 'react-native';
import { polar, white } from '@constants/colors';

export const BOLD_WEIGHT = '700';

export default StyleSheet.create({
  wrapper: {
    backgroundColor: polar,
    paddingHorizontal: 20,
    paddingTop: 20
  },
  firstSection: {
    backgroundColor: white,
    borderRadius: 5,
    minHeight: 270,
    paddingBottom: 22,
    paddingTop: 12,
    paddingHorizontal: 12,
    width: '100%',
  },
  bookWrapper: {
    flexDirection: 'row'
  },
  bookImg: {
    height: 140,
    width: 100,
  },
  bookInfoWrapper: {
    paddingLeft: 10
  },
  bookTitle: {
    fontSize: 24,
    fontWeight: BOLD_WEIGHT
  },
  bookData: {
    fontSize: 15
  },
  buttonsWrapper: {
    paddingHorizontal: 18,
    paddingTop: 30
  },
  button: {
    marginTop: 10
  }
});
