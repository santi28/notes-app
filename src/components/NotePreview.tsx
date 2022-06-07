import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Trash } from 'react-native-unicons'

import PropTypes from 'prop-types'
import { theme } from '../theme'

const NotePreview = ({ key, title, children }) => {
  return (
    <View key={key} style={[styles.noteBody]}>
      <View style={[styles.noteHeader]}>
        <Text style={[styles.noteTitle]}>{title}</Text>
        <Trash width={24} height={24} color={theme.colors.red} />
      </View>
      <Text style={[styles.noteContent]}>{children}</Text>
      <Text style={[styles.noteTimestamp]} key={`${key}-timestamp`}>
        16 Jun 2020
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  noteBody: {
    padding: 15,
    backgroundColor: theme.colors.secondary,
    borderRadius: 20
  },
  noteHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  noteTitle: {
    fontFamily: theme.fonts.typos.bold,
    fontSize: theme.fonts.sizes.medium,
    color: theme.colors.white
  },
  noteContent: {
    paddingVertical: 10,
    fontFamily: theme.fonts.typos.regular,
    fontSize: theme.fonts.sizes.regular,
    color: theme.colors.white
  },
  noteTimestamp: {
    fontFamily: theme.fonts.typos.regular,
    fontSize: theme.fonts.sizes.small,
    color: theme.colors.white,
    opacity: 0.3
  }
})

NotePreview.propTypes = {
  key: PropTypes.string,
  title: PropTypes.string
}

export default NotePreview
