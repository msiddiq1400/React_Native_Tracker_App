import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TrackCreateScreen from '../screens/TrackCreateScreen';
import AccountScreen from '../screens/AccountScreen';
import TrackStackNavigator from './TrackStackNavigator';

const BottomTabs = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name='TrackFlowStack' component={TrackStackNavigator} options={{headerShown: false}}/>
      <BottomTabs.Screen name='TrackCreate' component={TrackCreateScreen} options={{ headerShown: false }}/>
      <BottomTabs.Screen name='AccountScreen' component={AccountScreen} options={{ headerShown: false }}/>
    </BottomTabs.Navigator>
  )
}

export default BottomTabNavigator