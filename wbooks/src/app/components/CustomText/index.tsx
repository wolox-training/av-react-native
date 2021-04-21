import React from 'react';
import { Text, TextStyle } from 'react-native';

import styles from './styles';

interface Props {
  text: string;
  style?: TextStyle;
}

function CustomText({ text, style }: Props) {
  return <Text style={[styles.text, style]}>{text}</Text>;
}

export default CustomText;
