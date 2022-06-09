import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Screens
import Home from './screen/Home'
import Note from './screen/Note'
import Header from './components/Header'

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ header: () => Header({ isNote: false }) }}
      />
      <Stack.Screen
        name="Note"
        component={Note}
        options={({ navigation }) => ({
          animation: 'fade_from_bottom',
          header: () => Header({ isNote: true, navigation })
        })}
      />
    </Stack.Navigator>
  )
}

export default StackNavigator
