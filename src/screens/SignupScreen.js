import { View, Text, Button } from 'react-native'
import React from 'react'

const SignupScreen = ({navigation}) => {
  return (
    <>
      <Text>Signup Screen</Text>
      <Button title='Go to Signin' onPress={() => navigation.navigate('Signin')}/>
      <Button title='Go to Main Flow' onPress={() => navigation.navigate('BottomTabNavigator')}/>
    </>
  )
}

export default SignupScreen