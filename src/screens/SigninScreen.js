import { StyleSheet, View } from 'react-native'
import React, { useContext } from 'react'
import { AuthForm } from '../components/AuthForm'
import TextLink from '../components/TextLink'
import {Context as AuthContext} from '../context/AuthContext';

const SigninScreen = () => {
  const {state, signin} = useContext(AuthContext);

  return (
    <View style={styles.container}>
        <AuthForm
          headerText="Sign in for Tracker"
          errorMessage={state.errorMessage}
          submitButtonText="Sign in"
          onSubmit={signin}
        />
        <TextLink 
          linkText="Dont have an account ? Sign Up"
          routeName="Signup"
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200
  }
})

export default SigninScreen