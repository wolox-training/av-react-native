import React from 'react';
import { FlatList, ListRenderItem, SafeAreaView } from 'react-native';
import { BOOKS_MOCK } from '@constants/mockBooks';
import { Book } from '@interfaces/books';
import BookCard from '@components/BookCard';

import styles from './styles';

function BooksList() {
  const renderItem: ListRenderItem<Book> = ({ item: { imageUrl, title, author } }) => (
    <BookCard imageUrl={imageUrl} title={title} author={author} />
  );

  const keyExtractor = ({ id }: Book) => String(id);

  return (
    <SafeAreaView style={styles.mainWrapper}>
      <FlatList
        data={BOOKS_MOCK}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.wrapper}
      />
    </SafeAreaView>
  );
}

export default BooksList;
