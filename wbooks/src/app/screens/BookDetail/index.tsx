import React from 'react';
import { Image, Text, View } from 'react-native';
import i18next from 'i18next';
import { RouteProp, useRoute } from '@react-navigation/native';
import bookImgPlaceholder from '@assets/img_book_placeholder.png';
import { Book } from '@interfaces/books';
import CustomButton from '@app/components/CustomButton';

import styles from './styles';

import './i18n';

type ParamList = {
  bookDetail: {
    book: Book;
  };
};

type BOOK_DETAIL = 'bookDetail';

function BookDetail() {
  const { book } = useRoute<RouteProp<ParamList, BOOK_DETAIL>>().params;

  return (
    <View style={styles.wrapper}>
      <View style={styles.firstSection}>
        <View style={styles.bookWrapper}>
          <Image
            source={book?.imageUrl ? { uri: book.imageUrl } : bookImgPlaceholder}
            style={styles.bookImg}
          />
          <View style={styles.bookInfoWrapper}>
            <Text style={styles.bookTitle} numberOfLines={1}>
              {book?.title}
            </Text>
            <Text style={styles.bookData}>{book?.author}</Text>
            <Text style={styles.bookData}>{book?.publisher}</Text>
            <Text style={styles.bookData}>{book?.year}</Text>
          </View>
        </View>
        <View style={styles.buttonsWrapper}>
          <CustomButton text={i18next.t('BOOK_DETAIL:ADD_TO_WISHLIST')} />
          <CustomButton text={i18next.t('BOOK_DETAIL:RENT')} style={styles.button} disabled />
        </View>
      </View>
    </View>
  );
}

export default BookDetail;
