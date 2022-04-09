import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Dashboard from '../screens/dashboard'
import Profile from '../screens/profile'
import Search from '../screens/search'

const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
      <Tab.Navigator labeled={false} 
      screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#b36b00", //gold
          tabBarInactiveTintColor: '#364444', //gray
          tabBarStyle: [{
              display: "flex",
              backgroundColor: '#011919', //Dark cyan AKA Dark Prismarine™ color
              borderTopColor: '#011919',
          }]
        }}
      >
        <Tab.Screen name="Inicio" component={Dashboard} 
        options={{
            tabBarIcon: ({color}) =>(
                <MaterialCommunityIcons name="home" color={color}
                size={26}/>
            ),
            }}/>
        <Tab.Screen name="Buscar" component={Search} 
        options={{
            tabBarIcon: ({color}) =>(
                <MaterialCommunityIcons name="magnify" color={color}
                size={26}/>
            ),
            }}/>
        <Tab.Screen name="Tu Perfil" component={Profile} 
        options={{
            tabBarIcon: ({color}) =>(
                <MaterialCommunityIcons name="account-circle" color={color}
                size={26}/>
            ),
            }}/>
      </Tab.Navigator>
  );
}