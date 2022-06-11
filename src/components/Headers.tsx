import React from 'react'

import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Search, ArrowLeft } from 'react-native-unicons'

import { theme } from '../theme'
import { useNavigation } from '@react-navigation/native'

const Header = () => {
  return (
    <View style={[styles.header]}>
      <Text style={[styles.headerTitle]}>Native Notes</Text>
      <Search width={20} height={20} color="white" />
    </View>
  )
}

const NoteHeader = ({ saveNoteEvent }: { saveNoteEvent: () => void }) => {
  // Check if navigation object is undefined

  const navigation = useNavigation()

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
        }}
        onPress={() => saveNoteEvent()}>
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

export { Header, NoteHeader }
