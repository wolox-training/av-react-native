import React from 'react';
import { Text, TextProps, TextStyle } from 'react-native';

import styles from './styles';

interface Props {
  text: string;
  style?: TextStyle;
  textProps?: TextProps;
}

function CustomText({ text, style, textProps }: Props) {
  return (
    <Text style={[styles.text, style]} {...textProps}>
      {text}
    </Text>
  );
}

export default CustomText;
