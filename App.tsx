import React, { Fragment } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { BottomAppNavigator } from './src/navigation/tabs';

export default function App() {
  return (
    <Fragment>
      <StatusBar style="auto" />
      <NavigationContainer>
        <BottomAppNavigator />
      </NavigationContainer>
    </Fragment>
  );
}