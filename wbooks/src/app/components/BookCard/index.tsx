import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Book } from '@interfaces/books';
import routes from '@constants/routes';
import bookImgPlaceholder from '@assets/img_book_placeholder.png';
import CustomText from '@components/CustomText';

import styles, { oneLineText } from './styles';

interface Props extends Partial<Book> {
  book: Book;
}

function BookCard({ book }: Props) {
  const { imageUrl, title, author } = book;
  const navigation = useNavigation();

  const onBookClicked = () => navigation.navigate(routes.BookDetail, { book });

  return (
    <TouchableOpacity onPress={onBookClicked} style={styles.wrapper}>
      <Image source={imageUrl ? { uri: imageUrl } : bookImgPlaceholder} style={styles.image} />
      <View style={styles.textWrapper}>
        <CustomText text={title} style={styles.title} textProps={oneLineText} />
        <CustomText text={author} />
      </View>
    </TouchableOpacity>
  );
}

export default BookCard;
