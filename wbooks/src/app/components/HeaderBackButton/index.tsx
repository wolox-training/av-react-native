import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import backIcon from '@assets/ic_back.png';

import styles from './styles';

function HeaderBackButton() {
  const navigation = useNavigation();
  const canGoBack = navigation.canGoBack();

  const handleOnClick = () => navigation.goBack();

  return canGoBack ? (
    <TouchableOpacity onPress={handleOnClick} style={styles.wrapper}>
      <Image source={backIcon} style={styles.button} />
    </TouchableOpacity>
  ) : (
    <View />
  );
}

export default HeaderBackButton;
