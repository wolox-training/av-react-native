import { StyleSheet } from 'react-native';
import { cerulean, silver, white } from '@constants/colors';

export default StyleSheet.create({
  base: {
    borderRadius: 100,
    height: 45,
    justifyContent: 'center',
    width: '100%'
  },
  bordered: {
    borderWidth: 1,
    borderColor: cerulean
  },
  disabled: {
    backgroundColor: silver,
    color: white
  },
  text: {
    fontSize: 15,
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  coloredText: {
    color: cerulean
  },
  disabledText: {
    color: white
  }
});
