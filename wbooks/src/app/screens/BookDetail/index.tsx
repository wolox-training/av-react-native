import React from 'react';
import { Image, Text, View } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import i18next from 'i18next';
import { BOOKS_MOCK } from '@constants/mockBooks';
import bookImgPlaceholder from '@assets/img_book_placeholder.png';
import CustomButton from '@app/components/CustomButton';

import styles from './styles';

type ParamList = {
  bookDetail: {
    bookId: number;
  }
}

function BookDetail() {
  const route = useRoute<RouteProp<ParamList, 'bookDetail'>>();
  const { bookId } = route.params;
  const bookData = BOOKS_MOCK.find(book => book.id === bookId);

  return (
    <View style={styles.wrapper}>
      <View style={styles.firstSection}>
        <View style={styles.bookWrapper}>
          <Image source={bookData?.imageUrl ? { uri: bookData.imageUrl } : bookImgPlaceholder} style={styles.bookImg} />
          <View style={styles.bookInfoWrapper}>
            <Text style={styles.bookTitle}>{bookData?.title}</Text>
            <Text style={styles.bookData}>{bookData?.author}</Text>
            <Text style={styles.bookData}>{bookData?.publisher}</Text>
            <Text style={styles.bookData}>{bookData?.year}</Text>
          </View>
        </View>
        <View style={styles.buttonsWrapper}>
          <CustomButton text={i18next.t('BOOK_DETAIL:ADD_TO_WISHLIST')} />
          <CustomButton text={i18next.t('BOOK_DETAIL:RENT')} style={styles.button} disabled />
        </View>
      </View>
    </View>
  )
}

export default BookDetail;
