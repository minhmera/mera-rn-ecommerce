import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TabBarIcon } from '@/components';
import { NAVIGATION } from '@/constants';
import { HomeNavigator } from '@/navigation/HomeNavigator';
import { ProfileNavigator } from '@/navigation/ProfileNavigator';
import { MessageNavigator } from '@/navigation/MessageNavigator';
import { UserContext } from '@/context/UserContext';

const Tab = createBottomTabNavigator();

export function AppNavigator() {
  const { colors } = useTheme();

  return (
    <UserContext.Provider value={'mera'}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: colors.activeTab,
          tabBarInactiveTintColor: colors.inactiveTab,
          tabBarIcon: ({ color }) => <TabBarIcon color={color} routeName={route.name} />,
          // tabBarIcon: ({ focused, color, size }) => {
          //   let iconName;
          //
          //   if (route.name === 'Home') {
          //     iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
          //   } else if (route.name === 'Settings') {
          //     iconName = focused ? 'ios-list-box' : 'ios-list';
          //   }
          //
          //   // You can return any component that you like here!
          //   return <Ionicons name={iconName} size={size} color={color} />;
          // },
        })}
      >
        <Tab.Screen name={NAVIGATION.home} component={HomeNavigator} />
        <Tab.Screen name={NAVIGATION.message} component={MessageNavigator} />
        <Tab.Screen name={NAVIGATION.profile} component={ProfileNavigator} />
      </Tab.Navigator>
    </UserContext.Provider>
  );
}
