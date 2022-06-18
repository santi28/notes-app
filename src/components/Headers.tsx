import React from 'react'

import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from 'react-native'
import { Search, ArrowLeft, Times } from 'react-native-unicons'

import { theme } from '../theme'
import { useNavigation } from '@react-navigation/native'

const Header = ({ onSearch }: { onSearch: (searchedText: string) => void }) => {
  const [isSearching, setIsSearching] = React.useState(false)

  return (
    <View style={[styles.header]}>
      <View
        style={[
          styles.headerSearchWrapper,
          { display: isSearching ? 'flex' : 'none' }
        ]}>
        <TextInput
          style={[styles.headerSearchInput]}
          placeholder="Buscar por titulo"
          placeholderTextColor={theme.colors.white}
          onChange={(e) => onSearch(e.nativeEvent.text)}
        />
        <TouchableOpacity
          style={[styles.headerButtonWrapper]}
          onPress={() => setIsSearching(false)}>
          <Times width={24} height={24} color="white" />
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles.headerWrapper,
          { display: !isSearching ? 'flex' : 'none' }
        ]}>
        <Text style={[styles.headerTitle]}>Native Notes</Text>
        <TouchableOpacity
          style={[styles.headerButtonWrapper]}
          onPress={() => setIsSearching(true)}>
          <Search width={20} height={20} color="white" />
        </TouchableOpacity>
      </View>
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
    minHeight: 60,
    paddingHorizontal: 25,
    paddingVertical: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerButtonWrapper: {
    padding: 15,
    borderRadius: 15,
    backgroundColor: theme.colors.secondary,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headerSearchWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerSearchInput: {
    flex: 1,
    fontFamily: theme.fonts.typos.regular,
    fontSize: theme.fonts.sizes.medium,
    color: theme.colors.white,
    backgroundColor: theme.colors.secondary,
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 13
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
