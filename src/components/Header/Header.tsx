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
    <View style={[styles.header, { backgroundColor: theme.colors.secondary }]}>
      <TouchableOpacity
        style={{ flexDirection: 'row', alignItems: 'center', opacity: 0.6 }}
        onPress={() => navigation.goBack()}>
        <ArrowLeft width={32} height={32} color="white" />
        <Text style={[styles.noteHeaderTitle]}>Back</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: theme.colors.accent,
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 20
        }}>
        <Text
          style={{
            color: theme.colors.white,
            fontFamily: theme.fonts.typos.bold,
            fontSize: theme.fonts.sizes.medium
          }}>
          Done
        </Text>
      </TouchableOpacity>
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
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerTitle: {
    fontFamily: theme.fonts.typos.bold,
    color: theme.colors.white,
    fontSize: theme.fonts.sizes.large
  },
  noteHeaderTitle: {
    fontFamily: theme.fonts.typos.bold,
    color: theme.colors.white,
    fontSize: theme.fonts.sizes.medium,
    marginLeft: 10
  }
})

export default Header
