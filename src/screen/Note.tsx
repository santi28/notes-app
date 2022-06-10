// React & React Native / expo imports
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Text, TextInput, View, ScrollView } from 'react-native'

// Project routed components
import { NoteHeader } from '../components/Headers'
import getParsedDate from '../functions/getParsedDate'

// Theme data
import { theme } from '../theme'
import { createNewNote } from '../functions/storeDataManipulator'

const Note = () => {
  const navigation = useNavigation()

  // #region States
  const [noteTitle, setNoteTitle] = React.useState('')
  const [noteDate, setNoteDate] = React.useState(getParsedDate())
  const [noteContent, setNoteContent] = React.useState('')

  // Gestiona el cambio de texto en el input, se ejecuta cada vez que se escribe en el titulo
  const handleTitleChange = (text: string) => {
    setNoteTitle(text)
  }

  const handleContentChange = (text: string) => {
    setNoteContent(text)
  }

  const handleSaveNote = async () => {
    // En caso del titulo estar vacio, no se guarda la nota y regresa al titulo
    if (noteTitle === '') return navigation.goBack()

    try {
      await createNewNote({
        title: noteTitle,
        createdAt: noteDate.timestamp,
        content: noteContent
      })

      navigation.goBack()
    } catch (error) {
      console.log(error)
    }

    // console.log({ date: noteDate.timestamp, noteTitle })
  }

  // Actualiza la fecha de la nota cada segundo
  React.useEffect(() => {
    const counterInterval = setInterval(() => {
      setNoteDate(getParsedDate())
    }, 1000)

    return () => clearInterval(counterInterval)
  }, [])

  return (
    <View
      style={{
        flex: 1,
        alignContent: 'center',
        backgroundColor: theme.colors.primary
      }}>
      <NoteHeader saveNoteEvent={handleSaveNote} />
      <ScrollView
        contentContainerStyle={{ flex: 1, flexGrow: 1, height: '100%' }}>
        <View
          style={{
            flex: 1,
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
          <TextInput
            style={{
              flex: 1,
              textAlignVertical: 'top',
              fontFamily: theme.fonts.typos.regular,
              fontSize: theme.fonts.sizes.medium,
              color: theme.colors.white,
              marginTop: 15
            }}
            onChangeText={handleContentChange}
            multiline={true}
            placeholderTextColor={`${theme.colors.white}99`}
            placeholder="Contenido de la nota"
          />
        </View>
      </ScrollView>
    </View>
  )
}

export default Note
