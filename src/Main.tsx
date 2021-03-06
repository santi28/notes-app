import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Screens
import Home from './screen/Home'
import Note from './screen/Note'

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="Note"
        component={Note}
        options={({ navigation }) => ({
          animation: 'fade_from_bottom',
          header: () => null
        })}
      />
    </Stack.Navigator>
  )
}

export default StackNavigator
