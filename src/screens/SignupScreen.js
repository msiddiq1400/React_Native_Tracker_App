import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';
import { AuthForm } from '../components/AuthForm';
import TextLink from '../components/TextLink';

const SignupScreen = () => {
  const {state, signup} = useContext(AuthContext);

  return (
    <View style={styles.container}>
        <AuthForm 
          headerText="Sign Up for Tracker"
          errorMessage={state.errorMessage}
          submitButtonText="Sign up"
          onSubmit={signup}
        />
        <TextLink 
          linkText="Already have an account ? Sign in instead"
          routeName="Signin"
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

export default SignupScreen