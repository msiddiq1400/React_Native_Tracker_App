import React from 'react'
import { Input, Text, Button } from '@rneui/themed';
import { StyleSheet } from 'react-native';
import Spacer from '../components/Spacer';

const SignupScreen = ({navigation}) => {
  return (
    <>
        <Spacer><Text h3>Sign Up for Tracker</Text></Spacer>
        <Input label="Email" />
        <Input label="Password" />
        <Spacer><Button title="Sign Up"/></Spacer>

      {/* <Button title='Go to Signin' onPress={() => navigation.navigate('Signin')}/>
      <Button title='Go to Main Flow' onPress={() => navigation.navigate('BottomTabNavigator')}/> */}
    </>
  )
}

const styles = StyleSheet.create({

})

export default SignupScreen