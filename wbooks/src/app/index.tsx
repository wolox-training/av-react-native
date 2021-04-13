import React from 'react';
import { View } from 'react-native';
import { BOOKS_MOCK } from '@constants/mockBooks';

import BookCard from './screens/BookCard';
import styles from './styles';

function App() {
  return (
    <View style={styles.wrapper}>
      {BOOKS_MOCK.map(book => (
        <BookCard imageUrl={book.imageUrl} title={book.title} author={book.author} />
      ))}
    </View>
  );
}

export default App;
