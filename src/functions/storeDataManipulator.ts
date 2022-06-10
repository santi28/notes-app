import AsyncStorage from '@react-native-async-storage/async-storage'
import uuid from 'react-native-uuid'

interface INote {
  // Note metadata
  id?: number[] | string
  createdAt: number
  updatedAt?: number

  // Note data
  title: string
  content: string
}

const createNewNote = async (noteProps: INote) => {
  noteProps.id = noteProps.id ?? uuid.v4()
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

export { createNewNote }
