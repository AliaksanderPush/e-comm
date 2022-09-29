import React from 'react';
import { StatisticsScreen, SellingScreen, MainScreen } from '../screens';
import InventoryScreen from '../screens/InventoryScreen/InventoryScreen';
import { NewsScreenStack } from './StackNavigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../config';
import {
  TabBarTitle,
  InventoryIcon,
  NewsIcon,
  HomeIcon,
  SellingsIcon,
  StatisticsIcon,
  Avatar,
} from '../components';

const ButtomStack = createBottomTabNavigator();

export const TabNavigator = ({ login }) => {
  return (
    <ButtomStack.Navigator
      screenOptions={({ navigation }) => ({
        headerTitleAlign: 'center',
        headerShown: true,
        headerStyle: {
          backgroundColor: colors.white,
        },
        headerTitleStyle: {
          fontFamily: 'Montserrat-SemiBold',
          color: colors.text,
        },
        tabBarStyle: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: 65,
        },
        tabBarActiveTintColor: colors.menu,
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: 'Montserrat-SemiBold',
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
      <ButtomStack.Screen
        name="Main"
        component={MainScreen}
        options={{
          tabBarIcon: ({ color }) => <HomeIcon size={26} color={color} />,
          tabBarLabel: ({ color }) => <TabBarTitle color={color} text="Main" />,
        }}
      />
      <ButtomStack.Screen
        name="Inventory"
        component={InventoryScreen}
        options={{
          tabBarIcon: ({ color }) => <InventoryIcon size={26} color={color} />,
          tabBarLabel: ({ color }) => (
            <TabBarTitle color={color} text="Inventory" />
          ),
        }}
      />
      <ButtomStack.Screen
        name="Selling"
        component={SellingScreen}
        options={{
          tabBarIcon: ({ color }) => <SellingsIcon size={26} color={color} />,
          tabBarLabel: ({ color }) => (
            <TabBarTitle color={color} text="Selling" />
          ),
        }}
      />

      <ButtomStack.Screen
        name="Statistics"
        component={StatisticsScreen}
        options={{
          tabBarIcon: ({ color }) => <StatisticsIcon size={26} color={color} />,
          tabBarLabel: ({ color }) => (
            <TabBarTitle color={color} text="Statistics" />
          ),
        }}
      />

      <ButtomStack.Screen
        name="News"
        options={{
          tabBarIcon: ({ color }) => <NewsIcon size={26} color={color} />,
          tabBarLabel: ({ color }) => <TabBarTitle color={color} text="News" />,
          headerShown: false,
        }}>
        {() => <NewsScreenStack login={login} />}
      </ButtomStack.Screen>
    </ButtomStack.Navigator>
  );
};
