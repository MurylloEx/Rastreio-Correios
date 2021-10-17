import React, { FunctionComponent } from 'react';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackAppNavigator } from '../navigation/stack';

import { Home } from '../pages/home';
import { Package } from '../pages/package';

const Tab = createBottomTabNavigator();

export type AppProps = { }

export const BottomAppNavigator: FunctionComponent<AppProps> = () => {
  return (
    <Tab.Navigator 
    screenOptions={({ route }) => ({
      tabBarButton: [
        "Tracking"
      ].includes(route.name)
        ? () => {
            return null;
          }
        : undefined,
    })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          title: 'Início',
          headerTitleAlign: 'center',
          tabBarLabelStyle: {
            color: "#023F6C"
          },
          tabBarStyle: {
            backgroundColor: "#FDDB00" 
          },
          tabBarIcon: ({ size, focused }) => (
            <FontAwesome5 
              name="home" 
              size={size} 
              color={focused ? "#023F6C" : "#B4B4B4"} 
            />
          )
        }}
      />
      <Tab.Screen
        name="MyPackages"
        component={Package}
        options={{
          headerShown: false,
          title: 'Minhas encomendas',
          headerTitleAlign: 'center',
          tabBarLabelStyle: {
            color: "#023F6C"
          },
          tabBarStyle: {
            backgroundColor: "#FDDB00" 
          },
          tabBarIcon: ({ size, focused }) => (
            <FontAwesome5 
              name="box" 
              size={size} 
              color={focused ? "#023F6C" : "#B4B4B4"} 
            />
          )
        }}
      />
      <Tab.Screen
        name="Tracking"
        component={StackAppNavigator}
        options={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#FDDB00" 
          },
        }}
        
      />
    </Tab.Navigator>
  );
}
