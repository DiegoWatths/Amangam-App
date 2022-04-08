import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Dashboard from '../screens/dashboard'
import Profile from '../screens/profile'
import Search from '../screens/search'

const Tab = createBottomTabNavigator();

export default function TabNav() {
  return (
      <Tab.Navigator labeled={false} barStyle={{backgroundColor: 'black'}}
      activeColor="white" screenOptions={{headerShown: false}}>
        <Tab.Screen name="Inicio" component={Dashboard} 
        options={{
            tabBarIcon: ({color, size}) =>(
                <MaterialCommunityIcons name="home" color={color}
                size={26}/>
            ),
            }}/>
        <Tab.Screen name="Buscar" component={Search} 
        options={{
            tabBarIcon: ({color, size}) =>(
                <MaterialCommunityIcons name="magnify" color={color}
                size={26}/>
            ),
            }}/>
        <Tab.Screen name="Tu Perfil" component={Profile} 
        options={{
            tabBarIcon: ({color, size}) =>(
                <MaterialCommunityIcons name="account-circle" color={color}
                size={26}/>
            ),
            }}/>
      </Tab.Navigator>
  );
}