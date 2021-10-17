import React, { FunctionComponent } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Tracking } from '../pages/tracking';

const Stack = createStackNavigator();

export type StackAppNavigatorProps = {}
 
export const StackAppNavigator: FunctionComponent<StackAppNavigatorProps> = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Tracking"
        component={Tracking} 
        options={({route}) => ({
          headerShown: true,
          title: "NX400732899BR",
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: "#023F6C"
          },
          headerStyle: {
            backgroundColor: "#FDDB00" 
          },
          cardStyle: {
            backgroundColor: "#F3F5F8" 
          }
        })}
      />
    </Stack.Navigator>
  );
}