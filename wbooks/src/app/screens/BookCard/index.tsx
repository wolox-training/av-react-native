import React from 'react';
import { View, Text, Image } from 'react-native';
import { Book } from '@interfaces/books';

import styles from './styles';
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
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
      </View>
    </View>
  );
}

export default BookCard;
