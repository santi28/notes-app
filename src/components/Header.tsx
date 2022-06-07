import React from 'react'

import { Text, View, StyleSheet } from 'react-native'
import { Search } from 'react-native-unicons'

import { theme } from '../theme'

const Header = () => {
  return (
    <View style={[styles.header]}>
      <Text style={[styles.headerTitle]}>Native Notes</Text>
      <Search width={20} height={20} color="white" />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 30,
    paddingVertical: 25,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerTitle: {
    fontFamily: theme.fonts.typos.bold,
    color: theme.colors.white,
    fontSize: theme.fonts.sizes.large
  }
})

export default Header
