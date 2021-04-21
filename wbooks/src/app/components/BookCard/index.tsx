import React from 'react';
import { View, Image } from 'react-native';
import CustomText from '@components/CustomText';

import styles from './styles';
import bookImgPlaceholder from './assets/img_book_placeholder.png';

interface Props {
  imageUrl: string | null;
  title: string;
  author: string;
}

function Book({ imageUrl, title, author }: Props) {
  return (
    <View style={styles.wrapper}>
      <Image source={imageUrl ? { uri: imageUrl } : bookImgPlaceholder} style={styles.image} />
      <View style={styles.textWrapper}>
        <CustomText style={styles.title} text={title} />
        <CustomText text={author} />
      </View>
    </View>
  );
}

export default Book;
