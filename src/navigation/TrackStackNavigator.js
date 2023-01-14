import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import TrackListScreen from '../screens/TrackListScreen';
import TrackDetailScreen from '../screens/TrackDetailScreen';

const Stack = createStackNavigator();

const TrackStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='TrackList' component={TrackListScreen} options={{headerShown: false}}/>
      <Stack.Screen name='TrackDetail' component={TrackDetailScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}

export default TrackStackNavigator