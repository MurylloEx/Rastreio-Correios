import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import BottomAppNavigator from './src/navigation/Main';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <BottomAppNavigator />
      </NavigationContainer>
    </>
  );
}