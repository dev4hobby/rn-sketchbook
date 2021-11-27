import React from 'react';
import { LogBox } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';

export default function App() {
  LogBox.ignoreLogs(['Remote debugger']);
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <StackNavigator />
    </NavigationContainer>
  );
}
