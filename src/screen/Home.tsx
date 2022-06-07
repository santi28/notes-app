import React from 'react'
import { Text, View } from 'react-native'
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
    </View>
  )
}

export default Home
