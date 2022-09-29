import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { usersAuth } from '../redux';
import { AuthScreenStack } from './StackNavigation';
import MyDrawer from './DrawerNavigation';

export const RootNavigation = () => {
  const userIsAuth = useSelector(usersAuth);
  console.log('user=>', userIsAuth);

  return (
    <NavigationContainer>
      {!userIsAuth ? (
        <AuthScreenStack />
      ) : (
        <MyDrawer login={userIsAuth.username} />
      )}
    </NavigationContainer>
  );
};
