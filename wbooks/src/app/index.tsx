import React from 'react';
import { StatusBar } from 'react-native';
import BooksList from '@screens/BooksList';
import BookDetail from '@screens/BookDetail';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import routes from '@constants/routes';
import { white } from '@constants/colors';
import HeaderBackButton from '@components/HeaderBackButton';

import styles from './styles';

function App() {
  const Stack = createStackNavigator();

  const headerStyle = {
    headerStyle: styles.headerStyle,
    headerTintColor: white,
    headerLeft: () => <HeaderBackButton />
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName={routes.BooksList} screenOptions={headerStyle}>
          <Stack.Screen name={routes.BooksList} component={BooksList} />
          <Stack.Screen name={routes.BookDetail} component={BookDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
