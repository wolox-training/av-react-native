import React from 'react';
import { Image, StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BooksListStackScreen from '@screens/BooksList';
import { NavigationContainer } from '@react-navigation/native';
import routes from '@constants/routes';
import WishList from '@screens/WishList';
import inactiveLibraryIcon from '@assets/ic_library.png';
import activeLibraryIcon from '@assets/ic_library_active.png';
import inactiveWishList from '@assets/ic_wishlist.png';
import activeWishList from '@assets/ic_wishlist_active.png';

function App() {
  const Tab = createBottomTabNavigator();

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={routes.BooksList}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
              let icon = activeLibraryIcon;

              if (route.name === routes.BooksList) {
                icon = focused ? activeLibraryIcon : inactiveLibraryIcon;
              } else if (route.name === routes.WishList) {
                icon = focused ? activeWishList : inactiveWishList;
              }
              return <Image source={icon} resizeMode="contain" />;
            }
          })}>
          <Tab.Screen name={routes.BooksList} component={BooksListStackScreen} />
          <Tab.Screen name={routes.WishList} component={WishList} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
