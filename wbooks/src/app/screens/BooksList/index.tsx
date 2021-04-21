import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { BOOKS_MOCK } from '@constants/mockBooks';
import { Book } from '@interfaces/books';
import BookCard from '@components/BookCard';

function BooksList() {
  const renderItem: ListRenderItem<Book> = ({ item: { imageUrl, title, author } }) => (
    <BookCard imageUrl={imageUrl} title={title} author={author} />
  );

  const keyExtractor = ({ id }: Book) => String(id);

  return <FlatList data={BOOKS_MOCK} renderItem={renderItem} keyExtractor={keyExtractor} />;
}

export default BooksList;
