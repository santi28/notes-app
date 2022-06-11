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
  onDelete: (noteid: string) => void
}

const NotePreview = ({
  id,
  title,
  content,
  createdAt,
  onDelete
}: INotePreviewProps) => {
  const noteContent =
    content !== '' ? <Text style={[styles.noteContent]}>{content}</Text> : null

  return (
    <TouchableOpacity onLongPress={() => onDelete(id)}>
      <View key={id} style={[styles.noteBody]}>
        <View style={[styles.noteHeader]}>
          <Text style={[styles.noteTitle]}>{title}</Text>
          <TouchableOpacity style={{ padding: 10 }}>
            <Trash width={20} height={20} color={theme.colors.red} />
          </TouchableOpacity>
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
    alignItems: 'center',
    marginBottom: 10
  },
  noteTitle: {
    flex: 1,
    fontFamily: theme.fonts.typos.bold,
    fontSize: theme.fonts.sizes.medium,
    color: theme.colors.white,
    marginRight: 10
  },
  noteContent: {
    marginBottom: 10,
    fontFamily: theme.fonts.typos.regular,
    fontSize: theme.fonts.sizes.regular,
    color: theme.colors.white,
    flex: 1
  },
  noteTimestamp: {
    fontFamily: theme.fonts.typos.regular,
    fontSize: theme.fonts.sizes.small,
    color: theme.colors.white,
    opacity: 0.3
  },
  deleteConfirmation: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  deleteConfirmationText: {
    fontFamily: theme.fonts.typos.regular,
    fontSize: theme.fonts.sizes.regular,
    color: theme.colors.white,
    textAlign: 'center'
  }
})

export default NotePreview
