import React from 'react';
import { View } from 'react-native';
import BooksList from '@screens/BooksList';

import styles from './styles';

function App() {
  return (
    <View style={styles.wrapper}>
      <BooksList />
    </View>
  );
}

export default App;
