import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TabNavigator } from './TabNavigation';
import { Pressable } from 'native-base';
import { ProfileScreen } from '../screens';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CustomDrawer } from '../components';
import { colors } from '../config';

const Drawer = createDrawerNavigator();

const MyDrawer = ({ login }) => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer login={login} {...props} />}
      screenOptions={({ navigation }) => ({
        headerTitleAlign: 'center',
        headerTitleStyle: { fontFamily: 'Montserrat-SemiBold' },
        headerShown: true,
        drawerPosition: 'right',
        gestureEnabled: true,
      })}>
      <Drawer.Screen
        name="Home"
        options={{
          headerShown: false,
        }}>
        {navigation => <TabNavigator login={login} navigation={navigation} />}
      </Drawer.Screen>
      <Drawer.Screen
        options={({ navigation }) => ({
          headerShown: true,
          headerLeft: () => (
            <Pressable ml="2" onPress={() => navigation.goBack()}>
              <Ionicons name="ios-chevron-back" size={32} color={colors.text} />
            </Pressable>
          ),
        })}
        name="Profile"
        component={ProfileScreen}
      />
    </Drawer.Navigator>
  );
};
export default React.memo(MyDrawer);
