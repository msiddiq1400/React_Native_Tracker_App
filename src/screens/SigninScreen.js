import { Text, Button } from 'react-native'
import React from 'react'

const SigninScreen = ({navigation}) => {
  return (
    <>
      <Text>Signin Screen</Text>
      <Button title='Go to Signup' onPress={() => navigation.navigate('Signup')}/>
    </>
  )
}

export default SigninScreen