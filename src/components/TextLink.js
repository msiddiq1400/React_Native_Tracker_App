import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import * as RootNavigation from '../navigation/navigationRef';

import Spacer from './Spacer'

const TextLink = ({linkText, routeName}) => {
  return (
    <View>
        <TouchableOpacity onPress={() => RootNavigation.navigate(routeName)}>
        <Spacer>
            <Text style={styles.link}>{linkText}</Text>
        </Spacer>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    link: {
        color: 'blue',
        fontSize: 20
    }
})

export default TextLink