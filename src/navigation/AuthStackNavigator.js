import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Signin' component={SigninScreen} options={{headerShown: false}}/>
      <Stack.Screen name='Signup' component={SignupScreen} options={{headerShown: false}}/>
      <Stack.Screen name='BottomTabNavigator' component={BottomTabNavigator} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}

export default AuthStackNavigator