import React from 'react'

import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Search, ArrowLeft } from 'react-native-unicons'

import { IHeaderProps, INoteHeaderProps } from './IHeader'
import { theme } from '../../theme'

const homeHeader = () => {
  return (
    <View style={[styles.header]}>
      <Text style={[styles.headerTitle]}>Native Notes</Text>
      <Search width={20} height={20} color="white" />
    </View>
  )
}

const noteHeader = ({ navigation }: INoteHeaderProps) => {
  // Check if navigation object is undefined
  if (!navigation) return null

  return (
    <View style={[styles.header]}>
      <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft width={24} height={24} color="white" />
        </TouchableOpacity>
        <Text style={[styles.headerTitle]}>Native Notes</Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: theme.colors.accent,
          padding: 10,
          borderRadius: 10
        }}>
        <Text>Done</Text>
      </TouchableOpacity>
      {/* <Search width={20} height={20} color="white" /> */}
    </View>
  )
}

const Header = ({ isNote, navigation }: IHeaderProps) => {
  return isNote ? noteHeader({ navigation }) : homeHeader()
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: 25,
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
