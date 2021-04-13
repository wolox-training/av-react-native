import { StyleSheet } from 'react-native';
import { white } from '@constants/colors';

export default StyleSheet.create({
  wrapper: {
    backgroundColor: white,
    borderRadius: 5,
    flexDirection: 'row',
    marginTop: 17,
    height: 90,
    width: 335
  },
  image: {
    height: 60,
    width: 40,
    marginLeft: 30,
    marginVertical: 15
  },
  textWrapper: {
    flex: 1,
    marginLeft: 20,
    marginTop: 15
  },
  title: {
    fontSize: 17
  },
  author: {
    fontSize: 15,
    marginTop: 3
  }
});
