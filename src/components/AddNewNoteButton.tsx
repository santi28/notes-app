import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { FilePlusAlt } from 'react-native-unicons'
import { theme } from '../theme'

const AddNewNoteButton = ({ navigation }) => {
  const navegateToAddNote = () => {
    navigation.push('Note')
  }

  return (
    <TouchableOpacity
      style={[styles.button]}
      onPress={() => navegateToAddNote()}>
      <FilePlusAlt width={32} height={32} color="white" />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: theme.colors.accent,
    padding: 20,
    borderRadius: 40
  }
})

export default AddNewNoteButton
