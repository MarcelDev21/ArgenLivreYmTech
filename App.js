import React from 'react';
import {View, Text, TextInput , Image} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './Component/Home'
import Profile from './Component/Profile';
import Vue1 from './MesBandes/Vue1';
import Vue2 from './MesBandes/Vue2';
import MesLivres from './Component/MesLivres';
import Favoris from './Component/Favoris';
import Payement from './Component/Payement';
import DetailFilm from './Component/DetailFilm';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



const MyTabs =() => {
  return (
    <Tab.Navigator >
      <Tab.Screen
       name="MesLivres"
       component={MesLivres}
       options={{
          headerShown: false,
          tabBarLabel: "MyBook",
          tabBarActiveTintColor: '#e91e63',
          tabBarIcon: () => {
            return <Image
              source={require('./Images/book.png')}
              style={{width: 30, height: 30}}/>
          } }}/>

      <Tab.Screen
       name="Settings"
       component={Vue2}
       options={{ headerShown: false,
        tabBarActiveTintColor: '#e91e63',
        tabBarIcon: () => {
          return <Image
            source={require('./Images/book.png')}
            style={{width: 30, height: 30}}/>
        } }} />

      <Tab.Screen
       name="Favoris"
       component={Favoris}
       options={{ headerShown: false ,
        tabBarActiveTintColor: '#e91e63',
        tabBarIcon: () => {
          return <Image
            source={require('./Images/love.png')}
            style={{width: 30, height: 30}}/>
        }}} />

       <Tab.Screen
       name="Payement"
       component={Payement}
       options={{ headerShown: false,
        tabBarActiveTintColor: '#e91e63',
        tabBarIcon: () => {
          return <Image
            source={require('./Images/shopping.png')}
            style={{width: 30, height: 30}}/>
        } }} />
    </Tab.Navigator>
  );
}


const MyStack = ({navigation}) => {
  return(
    <Stack.Navigator >
      <Stack.Screen
       name="Home"
       component={Home} />
      <Stack.Screen
       name="Profile"
       component={MyTabs} 
       />
       <Stack.Screen
       name="DetailFilm"
       component={DetailFilm} 
       />
      {/* <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Settings" component={Settings} /> */}
  </Stack.Navigator>
  )
}



const App = () => {
  return (
  <NavigationContainer >
    <MyStack />
  </NavigationContainer>
  );
};

export default App;