import { StyleSheet, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { AuthForm } from '../components/AuthForm'
import TextLink from '../components/TextLink'
import {Context as AuthContext} from '../context/AuthContext'

const SigninScreen = () => {
  const {state, signin, clearErrorMessage, tryLocalSignin} = useContext(AuthContext);

  useEffect(() => {
    clearErrorMessage();
    tryLocalSignin();
  }, [])

  return (
    <View style={styles.container}>
        <AuthForm
          headerText="Sign In to Your Account"
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