import React from 'react';
import { FlatList, ListRenderItem, SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { BOOKS_MOCK } from '@constants/mockBooks';
import { Book } from '@interfaces/books';
import BookDetail from '@screens/BookDetail';
import HeaderBackButton from '@app/components/HeaderBackButton';
import BookCard from '@components/BookCard';
import { white } from '@constants/colors';
import routes from '@constants/routes';

import styles from './styles';

function BooksListStackScreen() {
  const Stack = createStackNavigator();

  const headerStyle = {
    headerStyle: styles.headerStyle,
    headerTintColor: white,
    headerLeft: () => <HeaderBackButton />
  };

  const BooksList = () => {
    const renderItem: ListRenderItem<Book> = ({ item: { id, imageUrl, title, author } }) => (
      <BookCard id={id} imageUrl={imageUrl} title={title} author={author} />
    );
    const keyExtractor = ({ id }: Book) => String(id);

    return (
      <SafeAreaView style={styles.wrapper}>
        <FlatList data={BOOKS_MOCK} renderItem={renderItem} keyExtractor={keyExtractor} />
      </SafeAreaView>
    );
  };

  return (
    <Stack.Navigator initialRouteName={routes.BooksList} screenOptions={headerStyle}>
      <Stack.Screen name={routes.BooksList} component={BooksList} />
      <Stack.Screen name={routes.BookDetail} component={BookDetail} />
    </Stack.Navigator>
  );
}

export default BooksListStackScreen;
