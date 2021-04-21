import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { BOOKS_MOCK } from '@constants/mockBooks';
import BookCard from '@components/BookCard';

import styles from './styles';

function App() {
  const book = BOOKS_MOCK[0];

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.mainWrapper}>
        <View style={styles.wrapper}>
          <BookCard imageUrl={book.imageUrl} title={book.title} author={book.author} />
        </View>
      </SafeAreaView>
    </>
  );
}

export default App;
