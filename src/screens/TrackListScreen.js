import { View, Text, Button } from 'react-native'
import React from 'react'

const TrackListScreen = ({navigation}) => {
  return (
    <>
      <Text>TrackListScreen</Text>
      <Button title='Go to Track Detail' onPress={() => navigation.navigate('TrackDetail')}/>
    </>
  )
}

export default TrackListScreen