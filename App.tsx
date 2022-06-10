// React & React Native / expo imports
import React from 'react'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'

// Proyecto routed components
import StatusBarHeight from './src/components/StatusBarHeight'
import StackNavigator from './src/Main'

// #region Importing fonts
import {
  useFonts,
  Outfit_700Bold,
  Outfit_400Regular
} from '@expo-google-fonts/outfit'
// #endregion

export default function App() {
  const [fontsLoaded] = useFonts({
    // eslint-disable-next-line camelcase

    Outfit_400Regular,
    // eslint-disable-next-line camelcase
    Outfit_700Bold
  })

  if (!fontsLoaded) {
    return <Text>Loading...</Text>
  }

  return (
    <NavigationContainer>
      <StatusBarHeight />
      <StackNavigator />
      <StatusBar style="inverted" />
    </NavigationContainer>
  )
}
