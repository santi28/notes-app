import React from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'

import { INote } from '../functions/storeDataManipulator'
import { theme } from '../theme'
import NotePreview from './NotePreview'

interface INotesSubWrapperProps {
  notes: INote[]
  margin: 'left' | 'booth' | 'right'
  onDelete: (noteid: string) => void
}

const NotesSubWrapper = ({
  notes,
  margin,
  onDelete
}: INotesSubWrapperProps) => {
  const marginRender = {
    marginRight: margin === 'right' || margin === 'booth' ? 5 : 0,
    marginLeft: margin === 'left' || margin === 'booth' ? 5 : 0
  }

  return (
    <View style={[style.subWrappers, marginRender]}>
      {notes.map((note) => (
        <NotePreview key={note.id} {...note} onDelete={(id) => onDelete(id)} />
      ))}
    </View>
  )
}

const NotesWrapper = ({
  notes,
  onDelete
}: {
  notes: INote[]
  onDelete: (noteid: string) => void
}) => {
  const [splittedWrapper, setSplittedWrapper] = React.useState<{
    left: INote[]
    right: INote[]
  }>({ left: [], right: [] })

  React.useEffect(() => {
    const leftSide = notes.filter(
      (note: INote, index: number) => index % 2 === 0
    )

    const rightSide = notes.filter(
      (note: INote, index: number) => index % 2 === 1
    )

    setSplittedWrapper({ left: leftSide, right: rightSide })
  }, [notes])

  return (
    <ScrollView>
      {notes.length <= 0 ? (
        <Text
          style={{
            flex: 1,
            textAlign: 'center',
            fontFamily: theme.fonts.typos.regular,
            fontSize: theme.fonts.sizes.large,
            color: theme.colors.white
          }}>
          No se encontraron notas!
        </Text>
      ) : (
        <View style={[style.masterWrapper]}>
          <NotesSubWrapper
            notes={splittedWrapper.left}
            margin="right"
            onDelete={(id) => onDelete(id)}
          />
          <NotesSubWrapper
            notes={splittedWrapper.right}
            margin="left"
            onDelete={(id) => onDelete(id)}
          />
        </View>
      )}
    </ScrollView>
  )
}

const style = StyleSheet.create({
  masterWrapper: {
    marginHorizontal: 25,
    flexDirection: 'row'
  },
  subWrappers: {
    flex: 1,
    flexDirection: 'column'
  }
})

export default NotesWrapper
