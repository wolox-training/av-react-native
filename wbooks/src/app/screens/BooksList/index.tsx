import React from 'react';
import { FlatList, ListRenderItem, View } from 'react-native';
import { BOOKS_MOCK } from '@constants/mockBooks';
import { Book } from '@interfaces/books';

import BookCard from './components/BookCard';
import styles from './styles';

function BooksList() {

  const renderItem: ListRenderItem<Book> = ({ item: { id, imageUrl, title, author } }) => (
    <BookCard id={id} imageUrl={imageUrl} title={title} author={author} />
  );
  const keyExtractor = ({ id }: Book) => String(id);

  return <View style={styles.wrapper}><FlatList data={BOOKS_MOCK} renderItem={renderItem} keyExtractor={keyExtractor} /></View>
}

export default BooksList;
