import React from 'react';
import {View, Text, TextInput} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Component/Home'
import Profile from './Component/Profile';
import Vue1 from './MesBandes/Vue1';
import Vue2 from './MesBandes/Vue2';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



const MyTabs =() => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Vue1} />
      <Tab.Screen name="Settings" component={Vue2} />
    </Tab.Navigator>
  );
}


const MyStack = ({navigation}) => {
  return(
    <Stack.Navigator>
      <Stack.Screen
       name="Home"
       component={Home} />
      <Stack.Screen
       name="Profile"
       component={MyTabs} />
      {/* <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Settings" component={Settings} /> */}
  </Stack.Navigator>
  )
}



const App = () => {
  return (
    <NavigationContainer>
    <MyStack />
  </NavigationContainer>
  );
};

export default App;