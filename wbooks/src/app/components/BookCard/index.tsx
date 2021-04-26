import React from 'react';
import { View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Book } from '@interfaces/books';
import { useNavigation } from '@react-navigation/native';
import routes from '@constants/routes';
import bookImgPlaceholder from '@assets/img_book_placeholder.png';
import CustomText from '@components/CustomText';

import styles, { oneLineText } from './styles';

interface Props extends Partial<Book> {
  id: number;
  imageUrl: string | null;
  title: string;
  author: string;
}

function BookCard({ id, imageUrl, title, author }: Props) {
  const navigation = useNavigation();

  const onBookClicked = () => navigation.navigate(routes.BookDetail, { bookId: id });

  return (
    <TouchableOpacity onPress={onBookClicked}>
      <View style={styles.wrapper}>
        <Image source={imageUrl ? { uri: imageUrl } : bookImgPlaceholder} style={styles.image} />
        <View style={styles.textWrapper}>
          <CustomText text={title} style={styles.title} textProps={oneLineText} />
          <CustomText text={author} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default BookCard;
