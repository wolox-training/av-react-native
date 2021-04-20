import React from 'react';
import BooksList from '@screens/BooksList';
import BookDetail from '@screens/BookDetail';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import routes from '@constants/routes';

import styles from './styles';
import { white } from '@constants/colors';
import HeaderBackButton from '@components/HeaderBackButton';

function App() {
  const Stack = createStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={routes.BooksList}
      screenOptions= {{headerStyle: styles.headerStyle, headerTintColor: white,
      headerLeft: () => <HeaderBackButton />}}>
        <Stack.Screen name={routes.BooksList} component={BooksList} />
        <Stack.Screen name={routes.BookDetail} component={BookDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
