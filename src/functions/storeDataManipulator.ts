import AsyncStorage from '@react-native-async-storage/async-storage'
import uuid from 'react-native-uuid'

interface INoteParam {
  // Note metadata
  id?: string
  createdAt: number
  updatedAt?: number

  // Note data
  title: string
  content: string
}

interface INote {
  // Note metadata
  id: string
  createdAt: number
  updatedAt: number

  // Note data
  title: string
  content: string
}

const createNewNote = async (noteProps: INoteParam) => {
  noteProps.id = noteProps.id?.toString() ?? uuid.v4().toString()
  noteProps.updatedAt = noteProps.updatedAt ?? noteProps.createdAt

  if (typeof noteProps.id !== 'string')
    return Promise.reject(new Error('Note id is required'))

  try {
    const jsonNote = JSON.stringify(noteProps)
    await AsyncStorage.setItem(noteProps.id, jsonNote)
    return Promise.resolve(noteProps)
  } catch (error) {
    return Promise.reject(error)
  }
}

const getAllNotes = async (): Promise<INote[]> => {
  try {
    const notes: INote[] = []
    const keys = await AsyncStorage.getAllKeys()
    for (const key of keys) {
      const jsonNote = await AsyncStorage.getItem(key)
      if (jsonNote === undefined || !jsonNote) continue
      const note: INote = await JSON.parse(jsonNote)

      // Get limit beetween 120 and 150
      const randomLimit = Math.floor(Math.random() * (200 - 100 + 1)) + 120

      // En caso de que el contenido de la nota supere el limite de caracteres lo corta
      if (note.content.length > randomLimit)
        note.content = note.content.slice(0, randomLimit) + '...'

      notes.push(note)
    }

    // Ordena las notas por fecha de actualización
    notes.sort((a, b) => b.updatedAt - a.updatedAt)

    return Promise.resolve(notes)
  } catch (error) {
    return Promise.reject(error)
  }
}

export { createNewNote, getAllNotes, INote }
