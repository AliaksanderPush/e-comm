import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Avatar } from '../components';
import { Pressable } from 'native-base';
import { colors } from '../config';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  VerifyCodeScreen,
  NewsDetailsScreen,
  VideoDetailsScreen,
  NewsScreen,
  RestorePassword,
  NewPassword,
  AuthScreen,
} from '../screens';

export const NewsScreenStack = ({ login }) => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="NewsStack"
      screenOptions={({ navigation }) => ({
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: 'Montserrat-SemiBold',
          color: colors.text,
        },

        headerRight: () => (
          <Avatar
            mr="4"
            size={40}
            setDrawer={() => navigation.toggleDrawer()}
            login={login}
          />
        ),
      })}>
      <Stack.Screen
        name="NewsStack"
        options={{ title: 'News' }}
        component={NewsScreen}
      />
      <Stack.Screen
        name="NewsScreen"
        component={NewsDetailsScreen}
        options={({ navigation }) => ({
          title: 'News',
          headerLeft: () => (
            <Pressable onPress={() => navigation.goBack()}>
              <Ionicons name="ios-chevron-back" size={32} color={colors.text} />
            </Pressable>
          ),
        })}
      />
      <Stack.Screen
        options={{ title: 'News' }}
        name="VideoScreen"
        component={VideoDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export const AuthScreenStack = () => {
  const StackAuth = createNativeStackNavigator();
  return (
    <StackAuth.Navigator
      initialRouteName="Auth"
      screenOptions={{
        headerShown: false,
      }}>
      <StackAuth.Screen name="Auth" component={AuthScreen} />
      <StackAuth.Screen name="RestorePassword" component={RestorePassword} />
      <StackAuth.Screen name="VerifyCode" component={VerifyCodeScreen} />
      <StackAuth.Screen name="NewPassword" component={NewPassword} />
    </StackAuth.Navigator>
  );
};
