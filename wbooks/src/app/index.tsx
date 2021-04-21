import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';

import styles from './styles';
import BooksList from './screens/BooksList';

function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.mainWrapper}>
        <View style={styles.wrapper}>
          <BooksList />
        </View>
      </SafeAreaView>
    </>
  );
}

export default App;
