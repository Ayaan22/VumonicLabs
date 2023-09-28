import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Screens/Login';
import Dashboard from '../Screens/Dashboard';
import Welcome from '../Screens/Welcome';
import Splash from '../Screens/Splash';
import GmailView from '../Screens/GmailView';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Gmail" component={GmailView} />
      <Stack.Screen name="DashBoard" component={Dashboard} />
      
    </Stack.Navigator>
  );
};

export default StackNavigator;
