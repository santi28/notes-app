import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native'
import AddNewNoteButton from '../components/AddNewNoteButton'
import { Header } from '../components/Headers'
import NotesWrapper from '../components/NotesWrapper'
import {
  deleteNoteById,
  getAllNotes,
  INote
} from '../functions/storeDataManipulator'
import { theme } from '../theme'

const DeleteDialog = ({
  onCancel,
  onDelete
}: {
  onCancel: () => void
  onDelete: () => void
}) => {
  return (
    <View style={style.deleteOverlay}>
      <View style={style.deleteDialog}>
        <Text style={style.deleteDialogText}>
          ¿Estás seguro de que quieres eliminar esta nota?
        </Text>
        <View style={style.deleteDialogButtons}>
          <TouchableOpacity
            style={[
              style.deleteButton,
              { marginRight: 10, backgroundColor: theme.colors.primary }
            ]}
            onPress={() => onCancel()}>
            <Text style={style.deleteButtonText}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              style.deleteButton,
              { marginLeft: 10, backgroundColor: theme.colors.accent }
            ]}
            onPress={() => onDelete()}>
            <Text style={style.deleteButtonText}>Eliminar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  deleteOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 1
  },
  deleteDialog: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,

    backgroundColor: theme.colors.secondary,
    padding: 20,
    borderRadius: 20
  },
  deleteDialogText: {
    fontSize: theme.fonts.sizes.regular,
    color: theme.colors.white,
    textAlign: 'center'
  },
  deleteDialogButtons: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  deleteButton: {
    flex: 1,
    padding: 10,
    borderRadius: 10
  },
  deleteButtonText: {
    textAlign: 'center',
    fontSize: theme.fonts.sizes.regular,
    fontFamily: theme.fonts.typos.regular,
    color: theme.colors.white
  }
})

const Home = () => {
  const navigation = useNavigation()
  const [loading, setLoading] = React.useState<boolean>(true)
  const [notes, setNotes] = React.useState<INote[]>([])
  const [filteredNotes, setFilteredNotes] = React.useState<INote[]>([])

  const [deleteDialogVisible, setDeleteDialogVisible] =
    React.useState<boolean>(false)
  const [deleteNoteId, setDeleteNoteId] = React.useState<string>()

  const deleteNote = (id: string) => {
    setDeleteNoteId(id)
    setDeleteDialogVisible(true)
  }

  const deleteNoteAction = () => {
    // Update the notes array
    if (deleteNoteId !== undefined) {
      deleteNoteById(deleteNoteId)
        .then(() => {
          const newNotes = notes.filter((note) => note.id !== deleteNoteId)
          setNotes(newNotes)
          setFilteredNotes(newNotes)
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => setDeleteDialogVisible(false))
    }

    return setDeleteDialogVisible(false)
  }

  const handleSearch = (search: string) => {
    const filteredNotes = notes.filter((note) => {
      if (search === '') return note
      else return note.title.toLowerCase().includes(search.toLowerCase())
    })
    setFilteredNotes(filteredNotes)
  }

  useEffect(() => {
    getAllNotes()
      .then((notes: INote[]) => {
        setNotes(notes)
        setFilteredNotes(notes)
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
          setFilteredNotes(notes)
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
      <Header
        searchValue={'searchQuery'}
        onSearch={(query) => handleSearch(query)}
      />
      {loading ? (
        <Text>Cargando notas...</Text>
      ) : (
        <NotesWrapper notes={filteredNotes} onDelete={(id) => deleteNote(id)} />
      )}
      <AddNewNoteButton navigation={navigation} />
      {deleteDialogVisible && (
        <DeleteDialog
          onCancel={() => setDeleteDialogVisible(false)}
          onDelete={() => deleteNoteAction()}
        />
      )}
    </View>
  )
}

export default Home
