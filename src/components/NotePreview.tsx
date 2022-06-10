import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Trash } from 'react-native-unicons'
import { parseDate } from '../functions/getParsedDate'
import { theme } from '../theme'

interface INotePreviewProps {
  id: string
  createdAt: number
  title: string
  content: string
  // onDelete: (note: INote) => void
}

const NotePreview = ({ id, title, content, createdAt }: INotePreviewProps) => {
  const noteContent =
    content !== '' ? <Text style={[styles.noteContent]}>{content}</Text> : null

  return (
    <TouchableOpacity>
      <View key={id} style={[styles.noteBody]}>
        <View style={[styles.noteHeader]}>
          <Text style={[styles.noteTitle]}>{title}</Text>
          <Trash width={20} height={20} color={theme.colors.red} />
        </View>
        {noteContent}
        <Text style={[styles.noteTimestamp]}>{parseDate(createdAt)}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  noteBody: {
    padding: 15,
    backgroundColor: theme.colors.secondary,
    borderRadius: 20,
    marginBottom: 10
  },
  noteHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  noteTitle: {
    paddingBottom: 10,
    fontFamily: theme.fonts.typos.bold,
    fontSize: theme.fonts.sizes.medium,
    color: theme.colors.white
  },
  noteContent: {
    paddingBottom: 10,
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

export default NotePreview
