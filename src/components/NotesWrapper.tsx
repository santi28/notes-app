import React from 'react'
import { View, StyleSheet } from 'react-native'

import { INote } from '../functions/storeDataManipulator'
import NotePreview from './NotePreview'

interface INotesSubWrapperProps {
  notes: INote[]
  margin: 'left' | 'booth' | 'right'
}

const NotesSubWrapper = ({ notes, margin }: INotesSubWrapperProps) => {
  const marginRender = {
    marginRight: margin === 'right' || margin === 'booth' ? 5 : 0,
    marginLeft: margin === 'left' || margin === 'booth' ? 5 : 0
  }

  return (
    <View style={[style.subWrappers, marginRender]}>
      {notes.map((note) => (
        <NotePreview key={note.id} {...note} />
      ))}
    </View>
  )
}

const NotesWrapper = ({ notes }: { notes: INote[] }) => {
  const [splittedWrapper, setSplittedWrapper] = React.useState<{
    left: INote[]
    right: INote[]
  }>({ left: [], right: [] })

  React.useEffect(() => {
    console.log(`NotesWrapper: ${notes.length}`)

    const leftSide = notes.filter(
      (note: INote, index: number) => index % 2 === 0
    )

    const rightSide = notes.filter(
      (note: INote, index: number) => index % 2 === 1
    )

    console.log(leftSide)
    console.log(rightSide)

    setSplittedWrapper({ left: leftSide, right: rightSide })
  }, [])

  return (
    <View style={[style.masterWrapper]}>
      <NotesSubWrapper notes={splittedWrapper.left} margin="right" />
      <NotesSubWrapper notes={splittedWrapper.right} margin="left" />
    </View>
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
