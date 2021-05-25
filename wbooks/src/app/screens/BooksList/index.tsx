import React from 'react';
import { FlatList, ListRenderItem, SafeAreaView } from 'react-native';
import { BOOKS_MOCK } from '@constants/mockBooks';
import { Book } from '@interfaces/books';
import BookCard from '@components/BookCard';

import styles from './styles';

function BooksList() {
  const renderItem: ListRenderItem<Book> = ({ item }) => <BookCard book={item} />;
  const keyExtractor = ({ id }: Book) => String(id);

  return (
    <SafeAreaView style={styles.wrapper}>
      <FlatList data={BOOKS_MOCK} renderItem={renderItem} keyExtractor={keyExtractor} />
    </SafeAreaView>
  );
}

export default BooksList;
