// React & React Native / expo imports
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Text, TextInput, View, ScrollView } from 'react-native'

// Project routed components
import { NoteHeader } from '../components/Headers'
import getParsedDate from '../functions/getParsedDate'

// Theme data
import { theme } from '../theme'

const Note = () => {
  const navigation = useNavigation()

  // #region States
  const [noteTitle, setNoteTitle] = React.useState('')
  const [noteDate, setNoteDate] = React.useState(getParsedDate())
  // const [noteContent, setNoteContent] = React.useState('')

  // Gestiona el cambio de texto en el input, se ejecuta cada vez que se escribe en el titulo
  const handleTitleChange = (text: string) => {
    setNoteTitle(text)
  }

  const handleSaveNote = () => {
    // En caso del titulo estar vacio, no se guarda la nota y regresa al titulo
    if (noteTitle === '') return navigation.goBack()
    console.log({ date: noteDate.timestamp, noteTitle })
  }

  // Actualiza la fecha de la nota cada segundo
  React.useEffect(() => {
    setInterval(() => {
      setNoteDate(getParsedDate())
    }, 1000)
  }, [])

  return (
    <View
      style={{
        flex: 1,
        alignContent: 'center',
        backgroundColor: theme.colors.primary
      }}>
      <NoteHeader saveNoteEvent={handleSaveNote} />
      <ScrollView>
        <View
          style={{
            margin: 25
          }}>
          <TextInput
            style={{
              fontFamily: theme.fonts.typos.bold,
              fontSize: theme.fonts.sizes.large + 15,
              color: theme.colors.white,
              marginBottom: 15
            }}
            multiline={true}
            placeholderTextColor={`${theme.colors.white}99`}
            onChangeText={handleTitleChange}
            placeholder="Titulo de la nota"
          />
          <Text
            style={{
              color: `${theme.colors.white}4D`,
              fontFamily: theme.fonts.typos.regular,
              fontSize: theme.fonts.sizes.medium
            }}>
            {noteDate.formated}
          </Text>
          <Text
            style={{
              color: `${theme.colors.white}`,
              fontFamily: theme.fonts.typos.regular
            }}>
            {noteTitle}
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default Note
