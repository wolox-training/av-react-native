import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import BooksList from '@screens/BooksList';
import BookDetail from '@screens/BookDetail';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import routes from '@constants/routes';

import styles from './styles';

function App() {
  const Stack = createStackNavigator();

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.mainWrapper}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={routes.BooksList}>
            <Stack.Screen name={routes.BooksList} component={BooksList} />
            <Stack.Screen name={routes.BookDetail} component={BookDetail} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}

export default App;
