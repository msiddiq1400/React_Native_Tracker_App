import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthStackNavigator from './AuthStackNavigator'
import { navigationRef } from './navigationRef'

const MainNavigationObject = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <AuthStackNavigator />
    </NavigationContainer>
  )
}

export default MainNavigationObject