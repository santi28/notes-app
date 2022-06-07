import React from 'react'
import { Text, View } from 'react-native'
import NotePreview from '../components/NotePreview'
import { theme } from '../theme'

const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        alignContent: 'center',
        backgroundColor: theme.colors.primary
      }}>
      <Text>Notes List</Text>
      <NotePreview title="Hello">Hola Mundo, como estan todos!!</NotePreview>
    </View>
  )
}

export default Home
