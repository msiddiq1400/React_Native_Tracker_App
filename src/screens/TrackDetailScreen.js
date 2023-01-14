import { View, Text, Button } from 'react-native'
import React from 'react'

const TrackDetailScreen = ({navigation}) => {
  return (
    <View>
      <Text>TrackDetailScreen</Text>
      <Button title='Go to Track List' onPress={() => navigation.navigate('TrackList')}/>
    </View>
  )
}

export default TrackDetailScreen