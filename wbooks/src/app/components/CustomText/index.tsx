import React from 'react';
import { Text, TextStyle } from 'react-native';

import styles from './styles';

interface Props {
  text: string;
  style?: TextStyle;
  lineNumber?: number;
}

function CustomText({ text, style, lineNumber = 1 }: Props) {
  return (
    <Text style={[styles.text, style]} numberOfLines={lineNumber}>
      {text}
    </Text>
  );
}

export default CustomText;
