import React from 'react';
import {View, Text, TextInput} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Component/Home'
import Profile from './Component/Profile';
const Stack = createNativeStackNavigator();


const MyStack = ({navigation}) => {
  return(
    <Stack.Navigator>
      <Stack.Screen
       name="Home"
       component={Home} />
      <Stack.Screen
       name="Profile"
       component={Profile} />
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