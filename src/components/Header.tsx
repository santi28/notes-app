import React from 'react'

import { Text, View, StyleSheet } from 'react-native'
import { theme } from '../theme'

const Header = () => {
  return (
    <View style={[styles.header]}>
      <Text>Native Notes!!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 30,
    paddingVertical: 25
  }
})

export default Header
