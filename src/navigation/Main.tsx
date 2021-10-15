import React, { FunctionComponent } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons'; 

import {Home} from '../pages/Home';
import {Package} from '../pages/Package';

const Tab = createBottomTabNavigator();

export interface AppProps { }

const BottomAppNavigator: FunctionComponent<AppProps> = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Início',
          headerTitleAlign: 'center',
          tabBarLabelStyle: {color: "#023F6C"},
          tabBarStyle: {backgroundColor: "#FDDB00" },
          tabBarIcon: ({ size, focused }) => {
            if (focused == true) {
              return (
                <FontAwesome5 name="home" size={size} color="#023F6C" />
              )
            }  else {
              return (
                <FontAwesome5 name="home" size={size} color="#B4B4B4" />  
              )
            }         
          }
        }}
      />
      <Tab.Screen
        name="MyPackages"
        component={Package}
        options={{
          title: 'Minhas encomendas',
          headerTitleAlign: 'center',
          tabBarLabelStyle: {color: "#023F6C"},
          tabBarStyle: {backgroundColor: "#FDDB00" },
          tabBarIcon: ({ size, focused }) => {
            if (focused == true) {
              return (
                <FontAwesome5 name="box" size={size} color="#023F6C" />
              )
            }  else {
              return (
                <FontAwesome5 name="box" size={size} color="#B4B4B4" />  
              )
            }    
          }
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomAppNavigator;