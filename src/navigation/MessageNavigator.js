import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
//
import { NAVIGATION } from '@/constants';
import { Message } from '@/screens';

const Stack = createNativeStackNavigator();

export function MessageNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={NAVIGATION.home} component={Message} />
    </Stack.Navigator>
  );
}
