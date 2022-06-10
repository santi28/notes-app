import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import AddNewNoteButton from '../components/AddNewNoteButton'
import { Header } from '../components/Headers'
import NotesWrapper from '../components/NotesWrapper'
import { getAllNotes, INote } from '../functions/storeDataManipulator'
import { theme } from '../theme'

const Home = () => {
  const navigation = useNavigation()
  const [notes, setNotes] = React.useState<INote[]>([])
  const [loading, setLoading] = React.useState<boolean>(true)

  useEffect(() => {
    getAllNotes()
      .then((notes: INote[]) => {
        setNotes(notes)
        return notes
      })
      .then((notes) => (notes.length > 0 ? setLoading(false) : null))
      .catch((e) => console.error(e))

    return setLoading(true)
  }, [])

  useEffect(() => {
    navigation.addListener('focus', () => {
      getAllNotes()
        .then((notes: INote[]) => {
          setNotes(notes)
          return notes
        })
        .then((notes) => (notes.length > 0 ? setLoading(false) : null))
        .catch((e) => console.error(e))
    })

    return setLoading(true)
  }, [navigation])

  return (
    <View
      style={{
        flex: 1,
        alignContent: 'center',
        backgroundColor: theme.colors.primary
      }}>
      <Header />
      {loading ? (
        <Text>Cargando notas...</Text>
      ) : (
        <NotesWrapper notes={notes} />
      )}
      <AddNewNoteButton navigation={navigation} />
    </View>
  )
}

export default Home
