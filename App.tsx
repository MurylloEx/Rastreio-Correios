import React, { Fragment } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottomAppNavigator } from './src/navigation/tabs';
import { DismissKeyboardView, SafeKeyboardView } from './App.Styles';

export default function App() {
  return (
    <Fragment>
      <SafeKeyboardView>
        <DismissKeyboardView>
          <NavigationContainer>
            <BottomAppNavigator />
          </NavigationContainer>
        </DismissKeyboardView>
      </SafeKeyboardView>
    </Fragment>
  );
}
