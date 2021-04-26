import React from 'react';
import { StatusBar } from 'react-native';

import BooksList from './screens/BooksList';

function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <BooksList />
    </>
  );
}

export default App;
