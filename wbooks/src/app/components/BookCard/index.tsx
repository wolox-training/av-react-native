import React from 'react';
import { View, Image } from 'react-native';
import CustomText from '@components/CustomText';
import { Book } from '@interfaces/books';

import styles, { oneLineText } from './styles';
import bookImgPlaceholder from './assets/img_book_placeholder.png';

interface Props extends Partial<Book> {
  imageUrl: string | null;
  title: string;
  author: string;
}

function BookCard({ imageUrl, title, author }: Props) {
  return (
    <View style={styles.wrapper}>
      <Image source={imageUrl ? { uri: imageUrl } : bookImgPlaceholder} style={styles.image} />
      <View style={styles.textWrapper}>
        <CustomText style={styles.title} text={title} textProps={oneLineText} />
        <CustomText text={author} />
      </View>
    </View>
  );
}

export default BookCard;
