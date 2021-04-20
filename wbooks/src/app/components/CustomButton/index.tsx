import React from 'react';
import { Text , TouchableOpacity, ViewStyle} from 'react-native';

import styles from './styles';

interface Props {
  text: string;
  disabled?: boolean;
  style?: ViewStyle;
}

function CustomButton({ text, disabled = false, style }: Props) {
  return (
    <TouchableOpacity style={[styles.base, disabled ? styles.disabled : styles.bordered, style ]} disabled>
      <Text style={[styles.text, disabled? styles.disabledText: styles.coloredText]}>{text}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton;